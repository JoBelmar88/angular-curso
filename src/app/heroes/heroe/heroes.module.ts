import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe.component';
import { ListadoComponent } from '../listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    /* Cuales son las cosas que contiene el módulo */
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    /* Cosas visibles fuera del módulo */
    exports: [
        ListadoComponent
    ],
    /* aquí van todos los módulos  */
    imports: [
        /*  */
        CommonModule
    ]
})

export class HeroesModule {

}