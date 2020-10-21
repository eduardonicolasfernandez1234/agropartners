import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-productos",
  templateUrl: "./productos.page.html",
  styleUrls: ["./productos.page.scss"]
})
export class ProductosPage implements OnInit {

  constructor(private router: Router) {
    
  }

  ngOnInit() {}

  backHome() {
    this.router.navigate(["home"]);
  }

  llamarLista(event, val){
    console.log("Funcion: " + val);
    if(val == "semilla"){
      this.router.navigate(['detalles', {'key': 'semilla'}]);
    }else if(val == "herbicida"){
      this.router.navigate(['detalles', {'key': 'herbicida'}]);
    }else if(val == "fungicida"){
      this.router.navigate(['detalles', {'key': 'fungicida'}]);
    }else if(val == "insecticida"){
      this.router.navigate(['detalles', {'key': 'insecticida'}]);
    }else if(val == "fertilizante"){
      this.router.navigate(['detalles', {'key': 'fertilizante'}]);
    }else if(val == "coadyugante"){
      this.router.navigate(['detalles', {'key': 'coadyugante'}]);
    }else if(val == "tratamiento"){
      this.router.navigate(['detalles', {'key': 'tratamiento'}]);
    }
  }

  
}
