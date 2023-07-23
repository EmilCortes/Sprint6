import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  stories: { story: string, img: string }[] = [];
  welcomePage: boolean = true;
  actualPage: string = '';

  start() {
    this.welcomePage = false;
    this.actualPage = this.stories[0].img;
  }

  constructor() {

    this.stories = [
      {
        story: "Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial",
        img: "./assets/img/1.jpg"
      },
      {
        story: "Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puertas.",
        img: "./assets/img/2.jpg"
      },
      {
        story: "El héroe decidió atravesar la puerta que le llevaba a casa",
        img: "./assets/img/3.jpg"
      },
      {
        story: "Mientras tanto, otras heroes no tuvieron tanta suerte en su elección...",
        img: "./assets/img/4.jpg"
      }
    ]
  }
}
