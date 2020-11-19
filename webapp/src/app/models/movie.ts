import { Person } from "./person";

export interface Movie {
    id: number;
    title: string;
    description: string;
    people: Person[];
}
