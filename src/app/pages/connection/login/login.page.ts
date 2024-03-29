import { AuthenticationService } from 'src/app/core/auth/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.credentials = this.fb.group({
      username: ['', [Validators.required, /*Validators.email*/]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.login(this.credentials.value).subscribe(
      async (res) => {
        await loading.dismiss();
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Login failed',
          message: 'Wrong username or password!',
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }


  // Easy access for form fields
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get username() {
    return this.credentials.get('username');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get password() {
    return this.credentials.get('password');
  }

  signup(){
    this.router.navigateByUrl('/signup');
  }
}
