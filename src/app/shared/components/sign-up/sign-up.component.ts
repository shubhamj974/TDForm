import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @ViewChild('signUp') signUp!: NgForm;
  public gender = [
    {
      gen: 'Male',
      id: '123',
    },
    {
      gen: 'Female',
      id: '456',
    },
  ];

  public userInfo = {
    userName: 'shubham',
    userEmail: 'ssjagdale974@gmail.com',
    secrateQue: 'favoritePlayer',
    anwser: 'Rohit Sharma',
    UserGender: 'Male',
  };

  inputData: any = {
    userEmail: '',
  };
  constructor() {}

  ngOnInit(): void {}

  onSignUp() {
    if (this.signUp.valid) {
      console.log(this.signUp.value);
      this.signUp.reset();
    }
  }

  onEditForm() {
    this.signUp.form.setValue(this.userInfo);
    // this.signUp.form.patchValue(this.userInfo);
  }
}
