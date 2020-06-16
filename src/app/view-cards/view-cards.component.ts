import { Component, OnInit } from '@angular/core';
import { cards } from '../cards.model';
import { getLocaleDateTimeFormat } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-cards',
  templateUrl: './view-cards.component.html',
  styleUrls: ['./view-cards.component.css']
})
export class ViewCardsComponent implements OnInit {

  cards: cards = null;
  createCardClicked: boolean = false;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {
    this.cards = {
      companyName: "Amazon",
      cardNumber: 6462343423233323,
      currentDate: new Date(),
      cardAmount: 4000,
    }
  }

createCard() {
  this.createCardClicked = true;
  console.log("create card event");
  // this.router.navigate(['viewCards','']);
  this.router.navigate(['createNewCard'],{relativeTo:this.route});
}

}
