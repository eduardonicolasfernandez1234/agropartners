import { Component, ViewChildren, Input, Output, EventEmitter } from "@angular/core";
import { IonSlides, Platform, IonicModule, NavController } from "@ionic/angular";

import { Geolocation } from "@ionic-native/geolocation/ngx";
import { HttpClient } from "@angular/common/http";

import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";

import { timer } from 'rxjs'; // only need to import from rxjs



@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  @ViewChildren("slideWithNav") slideWithNav: IonSlides;

  API_KEY: string = "773fdf72a4d4b2c92491474d8df94500";

  slider: any;
  //Variables Date
  date: Date = new Date();
  dia: any;
  mes: any;
  año: any;
  fecha: any;

  @Input() segundos: number = 100;
  intervalId: any;
  @Output() complete: EventEmitter<any> = new EventEmitter();


  //Variables Temperatura Actual
  tempActual: any;
  actual: any;
  ciudad: any;
  pais: any;
  tempMin: any;
  tempMax: any;
  clima: any;
  descripcion: any;
  presion: any; //Hectopascal hpa
  humedad: any;
  viento: any;

  dias: Array<string> = [];

  //Variables Pronostoco
  forecast: any;
  forecastList: Array<ForecastWeather> = [];

  subscribe: any;

  //Transicion
  flag = true;

  slideForm = {
    initialSlide: 0,
    slidesPerView: 4
  };

  slideView = {
    initialSlide: 0,
    slidesPerView: 3.5
  };

  constructor(
    public httpClient: HttpClient,
    public geolocation: Geolocation,
    public platform: Platform,
    private router: Router,
    private route: ActivatedRoute,
    private navContr: NavController
  ) {
    this.intervalId = setInterval(() => this.tick(), 1000);

    this.platform.ready().then(() => {
      this.getCurrentLocation();
    });

    this.cargarDatos();
    //this.temperaturaActual();
    /*timer(5000).subscribe( ()=>{
      
      this.router.navigate(["home"]);
      var obj = document.getElementById("fondo");
      obj.style.background = "white";
      obj.style.width = "100%";
      obj.style.height = "100%";
      obj.style.zIndex = "999";
      
      /*this.subscribe = this.platform.backButton.subscribeWithPriority(666666, ()=>{
        if(this.constructor.name == "HomePage"){
          if(window.confirm("Desea salir")){
            navigator["app"].exitApp();
         }
        }
      });*/
      
    /*});*/
  }

  private tick(): void{
    if(--this.segundos < 1){
      clearInterval(this.intervalId);
      this.complete.emit(this.demo());
    }
  }

  demo(){
    this.router.navigate(["home"]);
      var obj = document.getElementById("fondo");
      obj.style.background = "white";
      obj.style.width = "100%";
      obj.style.height = "100%";
      obj.style.zIndex = "999";
  }

  getCurrentLocation() {
    this.geolocation.getCurrentPosition().then(position => {
      var latitud = position.coords.latitude;
      var longitud = position.coords.longitude;
      this.getCurrentTemperature(latitud, longitud);
      this.getCurrentForecast(latitud, longitud);
    });
  }

  getCurrentTemperature(latitud, longitud) {
    this.obtenerFecha();
    var url =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      latitud +
      "&lon=" +
      longitud +
      "&appid=" +
      this.API_KEY +
      "&units=metric";
    this.httpClient.get(url).subscribe(
      temperaturedata => {
        this.tempActual = <any>temperaturedata;
        this.actual = this.tempActual.main.temp.toString().substring(0, 2);
        this.ciudad = this.tempActual.name;
        this.pais = this.tempActual.sys.country;
        this.tempMin = this.tempActual.main.temp_min.toString().substring(0, 2);
        this.tempMax = this.tempActual.main.temp_max.toString().substring(0, 2);

        var aux = +this.tempMin -3;
        this.tempMin = aux;
        aux = +this.tempMax + 2;
        this.tempMax = aux;

        this.clima = this.tempActual.weather[0].main;
        this.descripcion = this.tempActual.weather[0].description;
        this.presion = this.tempActual.main.pressure; //Hectopascal hpa
        this.humedad = this.tempActual.main.humidity;
        this.viento = this.tempActual.wind.speed;
        if (this.clima.startsWith("Snow")) {
          if (this.descripcion.startsWith("few clouds")) {
            this.descripcion = "Pocas nubes";
          } else if (this.descripcion.startsWith("scattered clouds")) {
            this.descripcion = "Parcialmente nublado";
          } else {
            this.descripcion = "Nublado";
          }
          this.clima = "snow";
        } else if (this.clima.startsWith("Clouds")) {
          if (this.descripcion.startsWith("few clouds") || this.descripcion.startsWith("broken clouds")) {
            this.descripcion = "Parcialmente nublado";
            this.clima = "partly-sunny";
          } else if (this.descripcion.startsWith("scattered clouds")) {
            this.descripcion = "Parcialmente nublado";
            this.clima = "partly-sunny";
          } else {
            this.descripcion = "Nublado";
            this.clima = "cloudy";
          }
        } else if (this.clima.startsWith("Rain")) {
          if (this.descripcion.startsWith("moderate rain")) {
            this.descripcion = "Lluvia moderada";
          } else if (this.descripcion.startsWith("light rain")) {
            this.descripcion = "Lluvia";
          } else {
            this.descripcion = "Nublado";
          }
          this.clima = "rainy";
        } else {
          if (this.clima.startsWith("sky is clear")) {
            this.descripcion = "Soleado";
            this.clima = "sunny";
          }else{
            this.descripcion = "Parcialmente soleado";
            this.clima = "partly-sunny";
          }
        }
      },
      error => {
        console.log("Error: " + error);
      }
    );
  }

  getCurrentForecast(latitud, longitud) {
    var url =
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      latitud +
      "&lon=" +
      longitud +
      "&appid=" +
      this.API_KEY +
      "&units=metric";
    this.httpClient.get(url).subscribe(
      forecast => {
        this.forecast = <any>forecast;
        var tempMin = "";
        for (let i of this.forecast.list) {
          if (!i.dt_txt.startsWith(this.fecha) && i.dt_txt.endsWith("03:00:00")) {
            tempMin = i.main.temp_min.toString().substring(0, 2);
          }
          if (!i.dt_txt.startsWith(this.fecha) && i.dt_txt.endsWith("12:00:00")) {
            var main = i.weather[0].main;
            var desc = i.weather[0].description;
            if (main.startsWith("Snow")) {
              if (desc.startsWith("few clouds")) {
                desc = "Pocas nubes";
              } else if (desc.startsWith("scattered clouds")) {
                desc = "Parcialmente nublado";
              } else {
                desc = "Nublado";
              }
              main = "snow";
            } else if (main.startsWith("Clouds")) {
              if (desc.startsWith("few clouds") || desc.startsWith("broken clouds")) {
                desc = "Parcialmente nublado";
                main = "partly-sunny";
              } else if (desc.startsWith("scattered clouds")) {
                desc = "Parcialmente nublado";
                main = "partly-sunny";
              } else {
                desc = "Nublado";
                main = "cloudy";
              }
            } else if (main.startsWith("Rain")) {
              if (desc.startsWith("moderate rain")) {
                desc = "Lluvia moderada";
              } else if (desc.startsWith("light rain")) {
                desc = "Lluvia";
              } else {
                desc = "Nublado";
              }
              main = "rainy";
            } else {
              if (desc.startsWith("sky is clear")) {
                desc = "Soleado";
                main = "sunny";
              }else{
                desc = "Parcialmente soleado";
                main = "partly-sunny";
              }
            }
            let temp = i.main.temp;
            var tempMax = i.main.temp_max.toString().substring(0, 2);
            let press = i.main.pressure;
            let hum = i.main.humidity;
            let speed = i.wind.speed;
            var dia = "";
            this.date = new Date(i.dt_txt);
            if (this.date.getDay() == 0) {
              dia = "Domingo";
            } else if (this.date.getDay() == 1) {
              dia = "Lunes";
            } else if (this.date.getDay() == 2) {
              dia = "Martes";
            } else if (this.date.getDay() == 3) {
              dia = "Miercoles";
            } else if (this.date.getDay() == 4) {
              dia = "Jueves";
            } else if (this.date.getDay() == 5) {
              dia = "Viernes";
            } else if (this.date.getDay() == 6) {
              dia = "Sabado";
            }

            if(tempMin >= tempMax){
              let aux = tempMin;
              tempMin = tempMax;
              tempMax = aux;
            }
            var num1 = +tempMin - 3;
            tempMin = num1.toString();
            num1 = +tempMax + 3;
            tempMax = num1.toString();
            
            


            let aux = new ForecastWeather(
              main,
              desc,
              temp,
              tempMin,
              tempMax,
              press,
              hum,
              speed,
              dia
            );
            //console.log(i);
            if (this.forecastList.length < 3) {
              this.forecastList.push(aux);
            }
          }
        }
      },
      error => {
        console.log("Error: " + error);
      }
    );
  }

  obtenerFecha() {
    //Encontrar la fecha
    this.año = this.date.getFullYear();
    this.mes = this.date.getMonth() + 1;
    this.dia = this.date.getDate();

    if (this.mes < 10) {
      this.mes = "0" + this.mes;
    }
    if (this.dia < 10) {
      this.dia = "0" + this.dia;
    }

    this.fecha = this.año + "-" + this.mes + "-" + this.dia;
    console.log(this.fecha);
    this.date.getDay;
  }

  cargarDatos() {
    this.slider = {
      isBeginningSlide: false,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1,
          nombre: "Sucursales",
          icon: "compass",
          page: "sucursales"
        },
        {
          id: 2,
          nombre: "Productos",
          icon: "leaf",
          page: "productos"
        },
        {
          id: 4,
          nombre: "Servicios",
          icon: "hammer",
          page: "servicios"
        },
        {
          id: 5,
          nombre: "¿Quienes somos?",
          icon: "people",
          page: "info"
        }
      ]
    };
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

  //Call methods to check if slide is first or last to enable disbale navigation
  /*checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then(istrue => {
      object.isBeginningSlide = istrue;
      
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then(istrue => {
      object.isEndSlide = istrue;
    });
  }*/

  callPage(event, val) {
    //console.log(val);
    this.router.navigate([val]);
  }

  iniciarPronostico() {
    var food = document.getElementById("pie");
    var mid = document.getElementById("medio");
    var mid1 = document.getElementById("medio1");
    var init = document.getElementById("init");
    if (this.flag) {
      init.style.backgroundColor = "rgba(36, 35, 35, 0.4)";
      food.style.display = "none";
      mid.style.height = "85%";
      mid1.style.opacity = "1";
      mid1.style.pointerEvents = "auto";
      //mid1.style.animationDelay = "1s";
      mid1.style.animation = "moveLeft 0.4s linear";
      this.flag = false;
    } else {
      init.style.backgroundColor = "transparent";
      mid.style.height = "60%";
      mid1.style.pointerEvents = "none";
      mid1.style.animation = "moveRight 0.4s linear";
      //mid1.style.opacity = "0";
      setTimeout(function() {
        mid1.style.opacity = "0";
        food.style.display = "block";
      }, 200);
      this.flag = true;
    }
  }
}

class ForecastWeather {
  main: string;
  description: string;
  temp: string;
  temp_min: string;
  temp_max: string;
  pressure: string;
  humidity: string;
  speed: string;
  dia: string;

  constructor(
    main: string,
    des: string,
    temp: string,
    tempMin: string,
    tempMax: string,
    press: string,
    hum: string,
    speed: string,
    dia: string
  ) {
    this.main = main;
    this.description = des;
    this.temp = temp;
    this.temp_min = tempMin;
    this.temp_max = tempMax;
    this.pressure = press;
    this.humidity = hum;
    this.speed = speed;
    this.dia = dia;
  }
}
