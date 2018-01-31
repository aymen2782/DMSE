import { Component, OnInit } from '@angular/core';
import {Personne} from "../Model/Personne";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes : Personne [];
  personne : Personne;
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne('Sellaouti','Aymen','Enseignant','as.jpg'),
      new Personne('Sellaouti2','Aymen2','Enseignant2','as.jpg'),
    ]
  }

  getPersonne(event){
    console.log('getPersonne',event);
    this.personne = event.selectedItem;
    console.log('in cv personne apres click : ',this.personne);
  }
}
