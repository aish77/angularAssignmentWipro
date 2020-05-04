import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
    state('normal', style(
      {
        'background-color': '#337ab7',
        transform: 'translateX(8px)'
      }
    )),
    state('highlighted', style(
      {
        'background-color': 'rgba(230, 47, 47, 0.651)',
        transform: 'translateX(280px)'
      }
    )),
    transition('normal <=> highlighted', animate(800)),
    // transition('highlighted => normal', animate(800))
  ]),
  trigger('wildState', [
    state('normal', style(
      {
        'background-color': 'red',
        transform: 'translateX(0)'
      }
    )),
    state('highlighted', style(
      {
        'background-color': 'blue',
        transform: 'translateX(100px)'
      }
    )), 
    transition('normal <=> highlighted', animate(800)),
    // transition('highlighted => normal', animate(800))
  ]),
  trigger('alphabet', [
    state('in', style(
      {
        opacity: 1,
        transform: 'translateX(0)'
      }
    )),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-100px)'
      }),
      animate(1000)
    ]),
    transition('* => void', [
      animate(1000, style({
        opacity: 0,
        transform: 'translateX(100px)'
      }))
    ])
    // transition('highlighted => normal', animate(800))
  ])
  ]
})
export class AppComponent {
  state = 'normal';
  title = 'my-assignment-app';
  show: boolean = true;
  lists:string[] = [];
  alphabetAnimate: boolean = true; 

  onAnimateIn() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    setTimeout(() => {
      this.lists.push('A');},1000);
      setTimeout(() => {
        this.lists.push('B');},1500);
        setTimeout(() => {
          this.lists.push('C');},2000);
    console.log('Pushed to Array');
  }

  onAnimateOut() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    setTimeout(() => {
      this.lists.pop();},1000);
      setTimeout(() => {
        this.lists.pop();},1500);
        setTimeout(() => {
          this.lists.pop();},2000);
    console.log('Poped out from Array');
  }
}
