import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private loadingCtrl : LoadingController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required]),
      phone : new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required]),
    });
  }

  async submitForm(){
    const loading = await this.loadingCtrl.create({
      message:'Loading ...',
    });

    loading.present();

    this.authService.register(this.form.value).pipe(
      take(1)
    ).subscribe((user) => {
      console.log(user);
      localStorage.setItem('name', user.name);
      localStorage.setItem('email', user.email);
      localStorage.setItem('phone', user.phone);
      loading.dismiss();
      
      this.navCtrl.navigateRoot('/tabs/pages/home')
    });



  }

}
