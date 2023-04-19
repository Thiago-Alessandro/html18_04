import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'novoProjeto';

  appBotaoClick(): void{
    console.log("appBotaoClick")
  }

  appBotaoMouseOver():void{
    console.log("appBotaoMouseOver")
  }

}

