import { Component, OnInit, Output, EventEmitter   } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  newQuote = new Quote ('', '', '', new Date()); // new quote property to be changed by the inputs
  @Output() addQuote = new EventEmitter<Quote>(); // new event emitter object of type quote

  submitQuote() { // function that calls in the emit method and passes in the new property
    this.addQuote.emit(this.newQuote);
  }

 

  constructor() { }

  ngOnInit(): void {
  }

}
