import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public inputVal: string;

  constructor(public navCtrl: NavController) {

  }

  buttonClick() {
    alert(this.inputVal);
  }

}
