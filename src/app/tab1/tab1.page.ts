import { Component, OnInit } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

  ngOnInit(){
    let numero;
    numero=10+6;
    
    numero+=5;

    console.log(numero);
  }
}
