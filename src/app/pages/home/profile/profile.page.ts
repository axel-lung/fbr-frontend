import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private alertController: AlertController, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Êtes-vous sûr de vouloir vous déconnecter ?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Non',
          cssClass: 'alert-button-cancel'
        },
        {
          text: 'Oui',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.auth.logout();
          }
        },
      ],
    });

    await alert.present();
  }

}
