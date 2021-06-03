import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, MenuController, ModalController, NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AdComponent } from 'src/app/components/ad/ad.component';
import { Category } from 'src/app/interfaces/category';
import { Insert } from 'src/app/interfaces/insert';
import { Page } from 'src/app/interfaces/page';
import { AdsService } from 'src/app/services/ads/ads.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { PageService } from 'src/app/services/page/page.service';
import { environment } from 'src/environments/environment';
import  { trans as ar }  from  '../../../assets/translation/ar.json';
import  { trans as en }  from  '../../../assets/translation/en.json';

// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public trans : any;
  public lang : any;

  selectedSegment : string = "profile";

  form: FormGroup;
  formInsert: FormGroup;

  imagefile : File = null;
  pictureFileVar : any;

  theuuid : any = localStorage.getItem('uuid');
  thename : any = localStorage.getItem('name');
  theemail : any = localStorage.getItem('email');
  thephone : any = localStorage.getItem('phone');

  inserts$:Observable<Insert[]>;
  categories$:Observable<Category[]>;
  pages$:Observable<Page[]>;

  constructor(
    // private camera: Camera,
    // private transfer: FileTransfer,
    public loadingController: LoadingController,
    private menu: MenuController,
    private authService: AuthService,
    private categoryService:CategoriesService,
    private loadingCtrl : LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private pageService:PageService,
    private http : HttpClient
    ){
      if(localStorage.getItem('lang') == 'en'){
        this.trans = en;
        this.lang = true;
      }else{
        this.trans = ar;
        this.lang = false;
      }
  }

  async ngOnInit() {
    let email = localStorage.getItem('email');
    if(!email){
      this.navCtrl.navigateRoot('/login');
    }

    this.form = new FormGroup({
      name : new FormControl(this.thename, [Validators.required]),
      email : new FormControl(this.theemail, [Validators.required]),
      phone : new FormControl(this.thephone, [Validators.required]),
      password : new FormControl(null, [Validators.required]),
    });

    this.formInsert = new FormGroup({
      category : new FormControl(null, [Validators.required]),
      title : new FormControl(null, [Validators.required]),
      details : new FormControl(null, [Validators.required]),
      cover: new FormControl('', [Validators.required]),
      picture: new FormControl('', [Validators.required]),
      coverSource: new FormControl('', []),
      pictureSource: new FormControl('', []),
    });

    console.log(this.theuuid);

    this.inserts$ = this.authService.userAds(this.theuuid).pipe(
      tap((inserts) => {
        console.log(inserts);
        return inserts;
      })
    );

    this.categories$ = this.categoryService.getCategories().pipe(
      tap((categories) => {
        console.log(categories);
        return categories;
      })
    );

    this.pages$ = this.pageService.getAll().pipe(
      tap((pages) => {
        console.log(pages);
        return pages;
      })
    );

  }

  changeLang() {
    if(localStorage.getItem('lang') == 'ar'){
      localStorage.setItem('lang', 'en');
      window.location.reload();
      this.lang = true;
    }else{
      localStorage.setItem('lang', 'ar');
      window.location.reload();
      this.lang = false;
    }
  }
  
  segmentChange(event){
    this.selectedSegment = event.target.value;
  }

  openMenu() {
    this.menu.enable(true, 'profileMenu');
    this.menu.open('profileMenu');
  }

  changeCoverInput(event){
    const coverFile = event.target.files[0];
    this.formInsert.patchValue({
      coverSource: coverFile
    });
  }

  changePictureInput(event){
    this.pictureFileVar = event.target.files;
    const pictureFile = event.target.files;
    this.formInsert.patchValue({
      pictureSource: pictureFile
    });
  }

  onUpload(){
    const formData = new FormData();
    formData.append('cover', this.formInsert.get('coverSource').value);
    formData.append('pictures_count', this.pictureFileVar.length);
    for (let i = 0; i < this.pictureFileVar.length ; i++) {
      formData.append('picture_' + i, this.pictureFileVar[i])
    }
    
    // formData.append('picture', this.formInsert.get('pictureSource').value);
    
    // console.log(formData.get('cover'));
    // console.log(formData.get('picture'));
   
    this.http.post(environment.appURL + 'upload/image', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }


  async submitFormInsert(){
    
    const loading = await this.loadingCtrl.create({
      message:'Loading ...',
    });

    const toastError = await this.toastCtrl.create({
      header: 'Insert Faild',  
      message : 'Try again later!',
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

    const toastSuccess = await this.toastCtrl.create({
      header: 'Insert Success',  
      message : 'Your ad created susccfully wait for approval!',
      position : 'top',
      duration : 5000,
      color : 'success',
      buttons : [
        {
          icon : 'close',
          role: 'cancel'
        }
      ]

    });

    loading.present();

    const formData = new FormData();
    formData.append('category', this.formInsert.get('category').value);
    formData.append('title', this.formInsert.get('title').value);
    formData.append('details', this.formInsert.get('details').value);
    formData.append('cover', this.formInsert.get('coverSource').value);
    formData.append('pictures_count', this.pictureFileVar.length);
    for (let i = 0; i < this.pictureFileVar.length ; i++) {
      formData.append('picture_' + i, this.pictureFileVar[i])
    }
    

    this.http.post(environment.appURL + 'user/' + this.theuuid + '/add-new-ads', formData).pipe(
      take(1)
    ).subscribe((insert) => {
        console.log(insert);

        if(insert == 1){
          loading.dismiss();
          toastSuccess.present();

          this.formInsert.patchValue({category: ''});
          this.formInsert.patchValue({title: ''});
          this.formInsert.patchValue({details: ''});
          this.formInsert.patchValue({cover: ''});
          this.formInsert.patchValue({picture: ''});
          this.formInsert.patchValue({coverSource: ''});
          this.formInsert.patchValue({pictureSource: ''});

          this.selectedSegment = 'my-insert';
        }else{
          loading.dismiss();
  
          toastError.present();
        }
        
      })

    // this.authService.insertAd(this.formInsert.value, this.theuuid).pipe(
    //   take(1)
    // ).subscribe((insert) => {
    //   console.log(insert);

    //   if(insert.status == 1){
    //     loading.dismiss();
    //     toastSuccess.present();
    //     this.selectedSegment = 'my-insert';
    //   }else{
    //     loading.dismiss();

    //     toastError.present();
    //   }
    // });

  }

  async submitForm(){
    const loading = await this.loadingCtrl.create({
      message:'Loading ...',
    });

    const toastError = await this.toastCtrl.create({
      header: 'Update Faild',  
      message : 'Your profile can\'t be updated',
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

    const toastSuccess = await this.toastCtrl.create({
      header: 'Update Success',  
      message : 'Your Profile has been updated successfully',
      position : 'top',
      duration : 5000,
      color : 'success',
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
        toastSuccess.present();
        this.navCtrl.navigateRoot('/tabs/pages/profile')
      }else{
        loading.dismiss();

        toastError.present();
      }
    });

  }

  logout(){
    localStorage.clear();
    this.navCtrl.navigateRoot('/welcome');
  }

  async openDetailsModal(insert : Insert){
    const modal = await this.modalCtrl.create({
      component: AdComponent,
      componentProps: {insert}
    });

    modal.present();
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
