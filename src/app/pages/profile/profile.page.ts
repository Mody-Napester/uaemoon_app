import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, MenuController, NavController, ToastController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  selectedSegment : string = "profile";
  image:any=''
  imageData:any=''

  form: FormGroup;

  theuuid : any = localStorage.getItem('uuid');
  thename : any = localStorage.getItem('name');
  theemail : any = localStorage.getItem('email');
  thephone : any = localStorage.getItem('phone');

  constructor(
    // private camera: Camera,
    // private transfer: FileTransfer,
    public loadingController: LoadingController,
    private menu: MenuController,
    private authService: AuthService,
    private loadingCtrl : LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    ){

  }

  ngOnInit() {
    this.form = new FormGroup({
      name : new FormControl(this.thename, [Validators.required]),
      email : new FormControl(this.theemail, [Validators.required]),
      phone : new FormControl(this.thephone, [Validators.required]),
      password : new FormControl(null, [Validators.required]),
    });

    console.log(this.theuuid);
  }


  segmentChange(event){
    console.log(event.target.value);
    this.selectedSegment = event.target.value;
  }

  openMenu() {
    this.menu.enable(true, 'profileMenu');
    this.menu.open('profileMenu');
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

    this.authService.updateUser(this.form.value, this.theuuid).pipe(
      take(1)
    ).subscribe((user) => {
      console.log(user);

      if(user.status == 1){
        console.log(user);
        localStorage.setItem('uuid', user.uuid);
        localStorage.setItem('name', user.name);
        localStorage.setItem('email', user.email);
        localStorage.setItem('phone', user.phone);
        loading.dismiss();
        
        this.navCtrl.navigateRoot('/profile')
      }else{
        loading.dismiss();

        toast.present();
      }
    });

  }

  logout(){
    localStorage.clear();
    this.navCtrl.navigateRoot('/welcome');
  }

//   openCam(){

//     const options: CameraOptions = {
//       quality: 100,
//       destinationType: this.camera.DestinationType.FILE_URI,
//       encodingType: this.camera.EncodingType.JPEG,
//       mediaType: this.camera.MediaType.PICTURE
//     }
    
//     this.camera.getPicture(options).then((imageData) => {
//      // imageData is either a base64 encoded string or a file URI
//      // If it's base64 (DATA_URL):
//      //alert(imageData)
//      this.imageData=imageData
//      this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
//     }, (err) => {
//      // Handle error
//      alert("error "+JSON.stringify(err))
//     });

//   }


//   async upload()
//   {
//     const loading = await this.loadingController.create({
//       message: 'Uploading...',
//       });
//     await loading.present();

//     const fileTransfer: FileTransferObject = this.transfer.create();

//     let options1: FileUploadOptions = {
//        fileKey: 'file',
//        fileName: 'name.jpg',
//        headers: {}
    
//     }

// fileTransfer.upload(this.imageData, 'http://192.168.0.102/io3/upload.php', options1)
//  .then((data) => {
//    // success
//    loading.dismiss()
//    alert("success");
//  }, (err) => {
//    // error
//    alert("error"+JSON.stringify(err));
//  });
//   }

  

}
