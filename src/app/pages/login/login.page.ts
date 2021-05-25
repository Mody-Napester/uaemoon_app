import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private loadingCtrl : LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email : new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required]),
    });
  }

  async submitForm(){
    const loading = await this.loadingCtrl.create({
      message:'Loading ...',
    });

    const toast = await this.toastCtrl.create({
      header: 'Login Faild',  
      message : 'Email or/and password not correct!',
      position : 'top',
      duration : 5000,
      color : 'danger',
      buttons : [
        {
          icon : 'close',
          role: 'cancel'
        }
      ]

    });

    loading.present();

    this.authService.login(this.form.value).pipe(
      take(1)
    ).subscribe((user) => {
      if(user.status == 1){
        console.log(user);
        localStorage.setItem('uuid', user.uuid);
        localStorage.setItem('name', user.name);
        localStorage.setItem('email', user.email);
        localStorage.setItem('phone', user.phone);
        loading.dismiss();
        
        this.navCtrl.navigateRoot('/tabs/pages/home')
      }else{
        loading.dismiss();

        toast.present();
      }
      
    });

  }

}
