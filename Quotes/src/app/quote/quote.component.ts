import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

quotes: Quote[] = [
  new Quote(1, 'Love','love is wicked','Jane Graciella',new Date(2020,6,17)),
  new Quote(2, 'Inspirarion','There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.','Nelson Mandela',new Date(2020,6,17)),
  new Quote(3, 'Motivation','Never destroy a  pot that gives you water because you might need it one day','Evans Oyoo',new Date(2020,6,17))
]





  constructor() { }

  ngOnInit(): void {
  }

}
