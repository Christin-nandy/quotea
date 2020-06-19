export class Quote {

  upvote:number;
  downvote:number;
  showDescription:boolean;
  static toBeTruthy: any;
   constructor(
    public id: number,public name: string,public quote: string,public author: string,public postDate: Date,
    
   )
   {
      this.showDescription=false;
      this.upvote=0;
      this.downvote=0;

   }

}