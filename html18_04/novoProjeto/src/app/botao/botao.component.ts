import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-botao',
    templateUrl:'./botao.component.html'
})

export class botaoComponent{

    @Output()
    clickBotao = new EventEmitter();
    @Output()
    botaoMouseOver = new EventEmitter();
    @Output()
    conteudo:string

    

    botaoClick():void{
        console.log("opa")
        this.clickBotao.emit()
    }

    mouseOver():void{
        console.group("mouseOver")
        this.botaoMouseOver.emit()
    }
}