import { Component, OnInit, ViewChildren } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

import { NavController, IonSlides } from "@ionic/angular";

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  @ViewChildren("slideWithNav") slideWithNav: IonSlides;

  lista: any;
  prueba: String;

  slideForm = {
    initialSlide: 1,
    slidesPerView: 1,
    loop: true
  };

  slideForm2 = {
    initialSlide: 1,
    slidesPerView: 3,
    loop: true
  };

  constructor(private route: ActivatedRoute,private router: Router, private navContr: NavController) {
    this.lista = route.snapshot.paramMap.get('key');
    this.lista = JSON.parse(this.lista);
    console.log(this.lista);
    this.prueba = "Primer texto\nSegundo texto despues del salto";
    
   }

  ngOnInit() {
  }

  backList(){
    this.navContr.back();
  }


  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    //this.checkIfNavDisabled(object, slideView);
    //slideView.update();
    //this.changeRef.detectChanges();
  }

  ionSlideDrag(object, slideView) {
    /*var div = document
      .getElementById("3")
      .style.setProperty("color", "primary");
    console.log("movimiento");*/
  }

}
