import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class dbzService {
    private _personajes: Personaje[] = [
        {
            name: 'Pikoro',
            power: 700
        },
        {
            name: 'Goku',
            power: 1700
        },
    ];
    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    constructor() { }

    addNewPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}