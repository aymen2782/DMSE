import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.css']
})
export class LampeComponent implements OnInit {

  myClass : object;
  allumee : boolean;
  eteinte : boolean;
  constructor() {
    this.allumee = true;
    this.eteinte = false;
    this.myClass = {
      white: this.allumee,
      black: this.eteinte,
    };
  }

  ngOnInit() {
  }

  bouton(){
    this.eteinte = !this.eteinte;
    this.allumee = !this.allumee;
    console.log(this.eteinte);
    console.log(this.allumee);
  }
}
