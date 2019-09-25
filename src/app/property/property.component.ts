import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

exibeMsg : boolean = true;

exibir(){
  this.exibeMsg = !this.exibeMsg;
}

  constructor() { }

  ngOnInit() {
  }

}
