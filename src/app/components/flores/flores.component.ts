import { Component, OnInit } from '@angular/core';
import { Flower, FlowerServiceService } from 'src/app/services/flower-service.service';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css']
})
export class FloresComponent implements OnInit {

  flores: Flower[];

  constructor(private flowerService: FlowerServiceService) { }

  ngOnInit(): void {
    this.getAllFlowers();
  }

  getAllFlowers(){
    this.flowerService.getAll().subscribe((res) =>{
      this.flores = res.map((flor) => {
        return {
          ...flor.payload.doc.data() as {},
          id: flor.payload.doc.id
        } as Flower;
      }
      );
    });
  }

}
