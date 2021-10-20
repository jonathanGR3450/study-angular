import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    public name: string = 'Ironman';
    public age: number = 45;

    showNameAge(): string {
        return `${this.name} - ${this.age}`;
    }
    get nameUperCase(): string {
        return this.name.toLocaleUpperCase();
    }

    changeName(): void {
        this.name = 'Spiderman';
    }

    changeAge(): void {
        this.age = 32;
    }
}