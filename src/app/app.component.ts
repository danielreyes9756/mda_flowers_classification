import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare function setup():any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }
  async prueba(){
    this.router.navigate(['camara']);
    await this.delay(500);
    setup();
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
  }
}
