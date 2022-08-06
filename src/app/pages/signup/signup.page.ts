import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Role } from 'src/app/models/role';
import { RoleUser } from 'src/app/models/role_user';
import { User } from 'src/app/models/user';
import { RoleUserService } from 'src/app/services/roleuser.service';
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
    private userService: UserService,
    private roleUserService: RoleUserService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      checkTerms: [false, [Validators.required]],
      check18: [false, [Validators.required]],
    });
  }

  async saveUser() {
    const username = this.userForm.get('username')!.value;
    const password = this.userForm.get('password')!.value;
    const email = this.userForm.get('email')!.value;
    const birthday = this.userForm.get('birthday')!.value;
    let roles = new Array<Role>();
    roles.push(new Role(1, "ROLE_USER"));
    this.userService
      .save(new User(null, username, password, email, birthday, roles))
      .subscribe(
        async (data) => {
          this.router.navigateByUrl('/login', { replaceUrl: true });
        },
        async(data) => {
          const alert = this.alertController.create({
            header: 'Sign up failed',
            message: "An error has occured",
            buttons: ['OK'],
          });
          (await alert).present();
        }
      );

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
  get birthday() {
    return this.userForm.get('birthday');
  }
  get checkTerms(){
    return this.userForm.get('checkTerms');
  }
  get check18(){
    return this.userForm.get('check18');
  }
}
