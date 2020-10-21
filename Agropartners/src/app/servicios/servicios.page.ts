import { Component, OnInit, ViewChildren } from '@angular/core';
import { IonSlide } from '@ionic/angular';

import { CallNumber } from '@ionic-native/call-number/ngx';

//-------- imports necesarios ------------
// $ ionic cordova plugin add call-number
// $ npm install @ionic-native/call-number
//----------------------------------------

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {
  @ViewChildren('slideWithNav') slideWithNav: IonSlide;
  sliderOne: any;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    autoplay:true
  };

  contactosNorte: any;
  contactosEste: any;

  constructor(

    private callNumber: CallNumber
    
    ) {
    this.sliderOne = {
      isBeginningSlide: false,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1,
          image: '../../assets/img/1.svg'
        },
        {
          id: 2,
          image: '../../assets/img/1.jpg'
        },
        {
          id: 3,
          image: '../../assets/img/2.jpg'
        },
        {
          id: 4,
          image: '../../assets/img/3.jpg'
        },
        {
          id: 5,
          image: '../../assets/img/4.jpg'
        }
      ]
    };

    this.contactosEste = [
      {
        nombre: "RODRIGO FERNANDEZ NUNEZ",
        zona: "ZONA ESTE",
        telefono: "71624569",
        email: "rfernandez@agropartners.com.bo"
      },
      {
        nombre: "JUAN PABLO MONTERO BARBERY",
        zona: "ZONA ESTE",
        telefono: "67706542",
        email: "jmontero@agropartners.com.bo"
      },
      {
        nombre: "NELSON PARRA",
        zona: "ZONA NORTE",
        telefono: "71019732",
        email: "nparra@agropartners.com.bo"
      },
      {
        nombre: "PITTER CRUZ RIVERA",
        zona: "ZONA ESTE",
        telefono: "72121874",
        email: "pcruz@agropartners.com.bo"
      },
      {
        nombre: "CARLOS JAVIER MELGAR DAVALOS",
        zona: "ZONA ESTE",
        telefono: "76300932",
        email: "cmelgar@agropartners.com.bo"
      },
      {
        nombre: "RUDIART DEMIQUEL",
        zona: "ZONA ESTE",
        telefono: "67700139",
        email: "rdemiquel@agropartners.com.bo"
      }
    ];

    this.contactosNorte = [
      {
        nombre: 'RODRIGO AGUIRRE ANTELO',
        zona: 'ZONA NORTE',
        telefono: '72137755',
        email: 'raguirre@agropartners.com.bo'
      },
      {
        nombre: 'JULIO CESAR CLAVIJO IBAÑEZ',
        zona: 'ZONA NORTE',
        telefono: '71320537',
        email: 'jclavijo@agropartners.com.bo'
      },
      {
        nombre: 'JULIO CESAR CLAVIJO IBAÑEZ',
        zona: 'ZONA NORTE',
        telefono: '71320537',
        email: 'jclavijo@agropartners.com.bo'
      },
      {
        nombre: 'JORGE ROJO',
        zona: 'ZONA NORTE',
        telefono: '75500377',
        email: 'jrojo@agropartners.com.bo'
      },
      {
        nombre: 'ADALBERTO ROJO',
        zona: 'ZONA NORTE',
        telefono: '67700138',
        email: 'arojo@agropartners.com.bo'
      },
      {
        nombre: 'ANDRES AGUILERA',
        zona: 'ZONA NORTE',
        telefono: 'jaguilera@agropartners.com.bo',
        email: '75600311'
      }
    ];
  }

  ngOnInit(){}

  
  callNow(event, number) {
    console.log(number);
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
