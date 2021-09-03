import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() login: any;
  error:boolean = false;
  LikeCountFirst = 0;
  LikeCountSecond = 0
  LikeCountThird = 0
  DislikeCountFirst = 0;
  DislikeCountSecond = 0;
  DislikeCountThird = 0;
  constructor() { }
  authentication = {
    email : 'adi@growvation.com',
    password : 'growvation1@'
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
		if (!form.valid) {
			return;
		}
		const email = form.value.email;
		const password = form.value.password;
    if (email == this.authentication.email && password == this.authentication.password) {
      this.error = false;
      this.login = true;
    }
    else {
      this.error = true;
    }
		form.reset();
	}
  onLogout() {
    this.login = false;
  }
  onLikeFirst() {
    this.LikeCountFirst += 1;
  }
  onLikeSecond() {
    this.LikeCountSecond += 1;
  }
  onLikeThird() {
    this.LikeCountThird += 1;
  }
  onDisLikeFirst() {
    this.DislikeCountFirst += 1;
  }
  onDisLikeSecond() {
    this.DislikeCountSecond += 1;
  }
  onDisLikeThird() {
    this.DislikeCountThird += 1;
  }
}
