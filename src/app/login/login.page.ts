import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { LoginService } from '../login.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = "";
  password: string = "";
  welcome: string = "morning";
  loading: any;
  showBottom: boolean = true;
  isIOS: boolean = false;

  constructor(public toastController: ToastController,
    private router: Router,
    public loadingController: LoadingController,
    private keyboard: Keyboard,
    public service: LoginService,
    public platform: Platform) { }

  ngOnInit() {
    this.service.loginName = "";
    this.service.islogin = false;
    let container = document.getElementById("login-container");
    fromEvent(container, 'keydown')
      .subscribe((event: KeyboardEvent) => {
        if (event.keyCode == 13) {
          this.login();
        }
      });
    this.getCurrentTime();
    // window.addEventListener('keyboardDidHide', () => {
    //   console.log(123)
    //   this.showBottom = true;
    // });
    // window.addEventListener('keyboardDidShow', (event) => {
    //   console.log(321)
    //   this.showBottom = false;
    // });

    this.platform.ready().then(() => {
      this.isIOS = this.platform.is("ios")
    });
  }

  getCurrentTime() {
    let currentTime = new Date();
    let hour = currentTime.getHours();
    if (hour > 12 && hour < 18) {
      this.welcome = "afternoon";
    }
    if (hour > 18 && hour < 24) {
      this.welcome = "evening";
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Loading',
      duration: 6000
    });
    await this.loading.present();
    console.log('Loading dismissed!');
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }

  login() {
    this.keyboard.show();
    if (this.username.indexOf('blue') > -1 && this.password != '') {
      this.presentLoading();
      setTimeout(() => {
        this.loading.dismiss();
        this.service.login(this.username);
        this.router.navigate(['/tabs/tab1/blue']);
        localStorage.setItem("type", "blue");
      }, 2000);

    } else if (this.username.indexOf('gold') > -1 && this.password != '') {
      this.presentLoading();
      setTimeout(() => {
        this.loading.dismiss();
        this.service.login(this.username);
        this.router.navigate(['/tabs/tab1/gold']);
        localStorage.setItem("type", "gold");
      }, 2000);
    } else {
      // this.presentToast('Username or password invalid', 'danger');
    }
  }
}
