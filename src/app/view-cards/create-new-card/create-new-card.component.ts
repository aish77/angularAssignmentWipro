import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new-card',
  templateUrl: './create-new-card.component.html',
  styleUrls: ['./create-new-card.component.css']
})
export class CreateNewCardComponent implements OnInit {
  form = new FormGroup({
    cardName: new FormControl('', Validators.required),
    selectAccount: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
   });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    alert(JSON.stringify(this.form.value));
  }

  onCreateCard(){
    alert(JSON.stringify(this.form.value));
  }

}
