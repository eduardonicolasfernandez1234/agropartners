import { Component, OnInit, ViewChildren } from '@angular/core';
import { IonSlide } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  @ViewChildren('slideWithNav') slideWithNav: IonSlide;
  sliderOne: any;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    autoplay:true
  };
  constructor() { 
    this.sliderOne = {
    isBeginningSlide: false,
    isEndSlide: false,
    slidesItems: [
      {
        id: 1,
        image: '../../assets/img/quienes_somos.jpg'
      },
      {
        id: 2,
        image: '../../assets/img/quienes_somos1.jpg'
      },
      {
        id: 3,
        image: '../../assets/img/quienes_somos2.jpg'
      },
      {
        id: 4,
        image: '../../assets/img/quienes_somos3.jpg'
      },
      {
        id: 5,
        image: '../../assets/img/quienes_somos4.jpg'
      }
    ]
  };
}
  ngOnInit() {}
}

