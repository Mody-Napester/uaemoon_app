import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';

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

  constructor(
    // private camera: Camera,
    // private transfer: FileTransfer,
    public loadingController: LoadingController,
    private menu: MenuController
    ){

  }

  ngOnInit() {
  }

  segmentChange(event){
    console.log(event.target.value);
    this.selectedSegment = event.target.value;
  }

  openMenu() {
    this.menu.enable(true, 'profileMenu');
    this.menu.open('profileMenu');
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
