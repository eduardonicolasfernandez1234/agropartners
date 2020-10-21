import { IonSlide } from '@ionic/angular';
import { Component, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage implements OnInit {
  
  @ViewChildren('slideWithNav') slideWithNav: IonSlide;
  sliderOne: any;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true
  };
  
  constructor() { 
    this.sliderOne = {
      isBeginningSlide: true,
      isEndSlide: true
    };
  }

  ngOnInit() {
  }

  
    //Move to Next slide
    slideNext(object, slideView) {
      slideView.slideNext(500).then(() => {
        slideView.slideNext(500).then(() => {
        this.checkIfNavDisabled(object, slideView);
      });
    });
    }
  
    //Move to previous slide
    slidePrev(object, slideView) {
      slideView.slidePrev(500).then(() => {
        this.checkIfNavDisabled(object, slideView);
      });;
    }
  
    //Method called when slide is changed by drag or navigation
    SlideDidChange(object, slideView) {
      this.checkIfNavDisabled(object, slideView);
    }
  
    //Call methods to check if slide is first or last to enable disbale navigation  
    checkIfNavDisabled(object, slideView) {
      this.checkisBeginning(object, slideView);
      this.checkisEnd(object, slideView);
    }
  
    checkisBeginning(object, slideView) {
      slideView.isBeginning().then((istrue) => {
        object.isBeginningSlide = istrue;
      });
    }
    checkisEnd(object, slideView) {
      slideView.isEnd().then((istrue) => {
        object.isEndSlide = istrue;
      });
    }

  }