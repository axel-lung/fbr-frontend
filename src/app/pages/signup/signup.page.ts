import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  userForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  saveUser() {
    console.log('test');
    const username = this.userForm.get('username')!.value;
    const password = this.userForm.get('password')!.value;
    const email = this.userForm.get('email')!.value;
    const birthday = this.userForm.get('birthday')!.value;

    console.log(birthday);


    this.userService
      .save(new User(null, username, password, email, birthday, null))
      .subscribe();
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  get password() {
    return this.userForm.get('password');
  }
  get email() {
    return this.userForm.get('email');
  }
  get username() {
    return this.userForm.get('username');
  }
}
