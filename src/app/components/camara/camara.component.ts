import { Component, OnInit } from '@angular/core';
import { CameraService } from 'src/app/services/camera.service';
declare function setup(): any;

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.css']
})
export class CamaraComponent implements OnInit {
  
  constructor(private cameraservice: CameraService) { }

  ngOnInit(): void {
    this.cameraservice.showCamera();
  }

}
