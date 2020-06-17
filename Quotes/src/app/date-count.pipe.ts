import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {

    let today:Date = new Date(); // gets the date and time currently
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference = Math.abs(value-todayWithNoTime) // this returns the value in milliseconds
    const secondsInADay = 86400; // (60*60*24)

    var dateDifferenceSeconds=dateDifference*0.001; // conversion to seconds

    var dateCounter = dateDifferenceSeconds/secondsInADay; // get the difference in days

    if (dateCounter >=0){
      return dateCounter;
    }else{
      return 0;
    }
  }
}