import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  //newQuote = new Quote("", "", "", new Date());//format as defined by class property

 
  constructor() { }

  ngOnInit(): void {
  }

}
