import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import  { trans as ar }  from  '../../../assets/translation/ar.json';
import  { trans as en }  from  '../../../assets/translation/en.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public trans : any;

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private loadingCtrl : LoadingController,
    private navCtrl: NavController
  ) {
    if(localStorage.getItem('lang') == 'en'){
      this.trans = en;
    }else{
      this.trans = ar;
    }
  }

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
      localStorage.setItem('uuid', user.uuid);
      localStorage.setItem('name', user.name);
      localStorage.setItem('email', user.email);
      localStorage.setItem('phone', user.phone);
      loading.dismiss();
      
      this.navCtrl.navigateRoot('/tabs/pages/home')
    });



  }

}
