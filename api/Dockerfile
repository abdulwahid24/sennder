FROM python:3.8

WORKDIR /api
COPY . /api

RUN pip install pipenv==2018.11.26
RUN pipenv install --system --deploy

EXPOSE 80

CMD [ "uvicorn", "api:app", "--reload", "--host", "0.0.0.0",  "--port", "80" ]
