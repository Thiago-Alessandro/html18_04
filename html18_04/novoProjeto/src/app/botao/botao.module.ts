import { NgModule } from '@angular/core';
import { botaoComponent } from './botao.component';
import {CommonModule} from "@angular/common"


@NgModule({

    declarations:[
        botaoComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        botaoComponent
    ]

})


export class botaoModule{}