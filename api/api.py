import requests
import requests_cache

from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from settings import ENDPOINT
from logger import logRoundtrip, make_throttle_hook


app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:8080",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


session = requests_cache.CachedSession(
    'ghibliapi_cache', backend='sqlite', expire_after=60)
session.hooks['response'].append(logRoundtrip)
session.hooks['response'].append(make_throttle_hook(0.1))


def load_people(fields):
    response = session.get(
        '{endpoint}/people/?fields={fields}&limit=250'.format(endpoint=ENDPOINT, fields=fields)).json()
    return response


@app.get("/people")
def people():
    try:
        people = load_people(fields='id,name')
        return people
    except Exception as e:
        return {'error': str(e)}


@app.get("/movies")
def movies():
    try:
        movies = session.get(
            '{endpoint}/films?fields=id,title,description&limit=250'.format(endpoint=ENDPOINT)).json()
        people = load_people(fields='id,name,films')
        for movie in movies:
            movie['people'] = []
            for person in people:
                if 'films' not in person:
                    continue
                if any(movie['id'] in film for film in person['films']):
                    person.pop('films')
                    movie['people'].append(person)
        return movies
    except Exception as e:
        return {'error': str(e)}
