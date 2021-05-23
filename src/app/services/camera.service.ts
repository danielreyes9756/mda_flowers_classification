import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  camera: boolean;

  constructor(){
    this.camera = false;
  }

  showCamera(){
    this.camera = true;
  }

  hideCamera(){
    this.camera = false;
  }

}
