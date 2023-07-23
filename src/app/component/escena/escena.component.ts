import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})

export class EscenaComponent {

  @Input() stories: { story: string, img: string }[] = []
  @Input() actualPage:string = '';

  counter:number = 0;

  next() {
    if (this.counter >= this.stories.length -1){
      this.counter = 0;
    } else {
      this.counter++;
    }
    this.actualPage = this.stories[this.counter].img
  }

  prev() {
    if(this.counter <= 0){
      this.counter = this.stories.length -1;
    } else {
      this.counter--;
    }
    this.actualPage = this.stories[this.counter].img
  }

}
