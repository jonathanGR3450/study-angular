import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    // las declaraciones son los componentes del moodulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // los imports son los modulos que voy a usar
    imports: [
        CommonModule
    ],
    // los exports son los componentes que voy a mostrar
    exports: [
        ListadoComponent,
    ]
})
export class HeroesModule {

}