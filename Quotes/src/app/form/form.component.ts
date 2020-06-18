import { Component, OnInit, Output, EventEmitter   } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  newQuote = new Quote("", "", "", newDate());//format as defined by class property

  @Output() addQuote = new EventEmitter<Quote>();//event emitter to listen and send out new quotes on quote parent component

  submitQuote() {
    this.addQuote.emit(this.newQuote);//this triggers addition of the new quote
  }

 

  constructor() { }

  ngOnInit(): void {
  }

}
