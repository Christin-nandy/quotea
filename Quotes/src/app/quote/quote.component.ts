import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

quotes: Quote[] = [
  new Quote(1, 'Life','Many of life’s failures are people who did not realize how close they were to success when they gave up.','Thomas A. Edison',new Date(2020,6,17)),
  new Quote(2, 'Inspirarion','There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.','Nelson Mandela',new Date(2020,6,17)),
  new Quote(3, 'Motivation','Never destroy a  pot that gives you water because you might need it one day.','Evans Oyoo',new Date(2020,6,17))
  
];
toggleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }   
deleteQuote(isComplete: any, index: number){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}

upvote(i) {
  this.quotes[i].upvote ++;
  }
  downvote(i) {
  this.quotes[i].downvote ++;
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
