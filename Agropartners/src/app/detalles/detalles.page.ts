import { Component, OnInit, ViewChildren } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";

import { IonSlides, Platform } from "@ionic/angular";

@Component({
  selector: "app-detalles",
  templateUrl: "./detalles.page.html",
  styleUrls: ["./detalles.page.scss"]
})
export class DetallesPage implements OnInit {
  @ViewChildren("slideWithNav") slideWithNav: IonSlides;

  listaActual: any;
  titulo: any;

  herbicida: any;
  fungicida: any;
  insecticida: any;
  semilla: any;
  tratamientoSemilla: any;
  coadyugante: any;
  fertilizante: any;

  slideForm = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true
  };

  constructor(private route: ActivatedRoute,private router: Router) {
    this.cargarDatos();
  }

  /*añadirEstilo(){
    var obj = document.getElementById("cardTexto");
    obj.style.webkitLineClamp = "2";
  }*/ 

  backHome() {
    this.router.navigate(["productos"]);
  }

  callItem(event, item) {
    //console.log(item);
    var obj = JSON.stringify(item);
    this.router.navigate(["item", {'key': obj}]);
  }

  ngOnInit() {
    this.titulo = this.route.snapshot.paramMap.get("key");
    if (this.titulo == "semilla") {
      this.listaActual = this.semilla;
      this.titulo = "Semilla";
    } else if (this.titulo == "herbicida") {
      this.listaActual = this.herbicida;
      this.titulo = "Herbicida";
    } else if (this.titulo == "fungicida") {
      this.listaActual = this.fungicida;
      this.titulo = "Fungicida";
    } else if (this.titulo == "insecticida") {
      this.listaActual = this.insecticida;
      this.titulo = "Insecticida";
    } else if (this.titulo == "fertilizante") {
      this.listaActual = this.fertilizante;
      this.titulo = "Fertilizante";
    } else if (this.titulo == "coadyugante") {
      this.listaActual = this.coadyugante;
      this.titulo = "Coadyugante";
    } else if (this.titulo == "tratamiento") {
      this.listaActual = this.tratamientoSemilla;
      this.titulo = "Tratamiento de Semilla";
    }
    console.log(this.listaActual);
  }

  cargarDatos() {
    this.fungicida = [
      {
        id: 1,
        primero: "APROACH POWER",
        segundo: "Cultivos registrados:\nSoya, Maíz y Trigo.",
        tercero: "Enfermedades Controladas:\nSoya - Roya asiática (Phakopsora pachyrhizi). Maíz — Tizón foliar por Helmintosporiosis (Helminthosporium maydis). Trigo — Bruzone o Piricularia (Pyricularia grisea).",
        cuarto: "Principales beneficios:\n1- Excelente eficacia en el control de roya Asiática.\n2- Rápida acción, con control inmediato.\n3- Pycoxistrobin es la mejor estrobirulina para el control de roya de la soya.\n4- No hay indicios de resistencia para los activos.\n5- Asegura una correcta dosificación del aceite.\n6- Ventana de aplicación flexible (Vegetativo/reproductivo).\n7- Excelente operatividad. No requiere agregado adicional de adyuvante.\n8- No causa fitotoxicidad en el cultivo.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nPicoxystrobin 90 g/L + Cyproconazole 40 g/L EC, sistémico acropetal.",
        sexto: "Dosis:\nSoya: 0.6 — 1.0 Lt/ha. Maíz: 1.2 — 1.5 Lt/ha. Trigo: 1.0 —1.2 Lt/ha.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/1.jpg"
        },{
          img: "../../assets/images/herbicida/2.jpg"
        },{
          img: "../../assets/images/herbicida/3.jpg"
        },{
          img: "../../assets/images/herbicida/4.jpg"
        }]
      },
      {
        id: 2,
        primero: "CARBEZIM",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Enfermedades Controladas:\nTizón o mancha purpura de la hoja (Cercospora kikuchi).",
        cuarto: " Principales beneficios:\n1- Control sobre mancha anillada (Corynespora cassiicola) y E.F.C.\n2- Buen Costo-beneficio.",
        quinto: " Ingrediente activo, Concentración y Formulación:\nCarbendazim 500 g/L SC, sistémico.",
        sexto: "Dosis:\n0.85 —1.0 Lt/ha.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 3,
        primero: "CONCERT",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: " Principales beneficios:\n1- Fungicidas con novedosa composición de ingredientes activos Pyraclostrobin + Difenoconazole.\n2- Producto diseñado para obtener mejo-res controles sobre el complejo de enfer-medades como Roya en la soya, mancha anillada y E.F.C.\n3- Única mezcla de estos ingredientes activos en el mercado.\n4- Adecuado para implementar un progra-ma de manejo para enfermedades en el cultivo de soya.",
        cuarto: " Ingrediente activo, Concentración y Formulación:\nPyraclostrobin 150 g/L + Difenoconazole 150 g/L SC, sistémico.",
        quinto: "Dosis:\n800m1/ha.",
        sexto: "Experiencia en campo:\nSe observa efectos fisiológicos positivos en los cultivos. Adicionar aceite mineral CROP OIL a razón de 0,25% v/v. Se puede adicionar MANCOPARTS para obtener mayor residualídad.",
        septimo: "",       
        lista: [{
          img: "../../assets/images/herbicida/9.jpg"
        },{
          img: "../../assets/images/herbicida/10.jpg"
        },{
          img: "../../assets/images/herbicida/11.jpg"
        },{
          img: "../../assets/images/herbicida/12.jpg"
        }]
      },
      {
        id: 4,
        primero: "GERMINEX",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Enfermedades Controladas:\nPhomopsis sp.; Fusarium sp.",
        cuarto: " Principales beneficios:\n1- Plantas protegidas de patógenos del suelo y las transmitidas por semilla.\n2- Permite el establecimiento de un cultivo sano desde su siembra.\n3- Permite obtener un stand de plantas uniformes.\n4- Buen Costo-beneficio.\n5- Presentación comercial en Packs, Nod Soya Pack y Acqua Pack Max.",
        quinto: " Ingrediente activo, Concentración y Formulación:\nCarboxin 200 g/L + Thiram 200 g/L FS, sistémico y de contacto.",
        sexto: "Dosis:\n200m1 x 100kg de semillas. ",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/13.jpg"
        },{
          img: "../../assets/images/herbicida/14.jpg"
        },{
          img: "../../assets/images/herbicida/15.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        }]
      },
      {
        id: 5,
        primero: "INNOVA",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Enfermedades Controladas:\nRoya de la Soya (Phakospora pachyrhizi).",
        cuarto: " Principales beneficios:\n1- Indicado para el control de roya Asiática.\n2- Alta tasa de penetración en el tejido foliar: Rápida acción.\n3- Versatilidad de uso en diferentes cultivos.",
        quinto: " Ingrediente activo, Concentración y Formulación:\nTebuconazole 430 g/L SC, sistémico.",
        sexto: "Dosis:\n0.2 — 0.4 Lt/ha.",
        septimo: "Experiencia en campo:\nDosis desde 500 - 750 ml/ha.",
        lista: [{
          img: "../../assets/images/herbicida/17.jpg"
        },{
          img: "../../assets/images/herbicida/18.jpg"
        },{
          img: "../../assets/images/herbicida/19.jpg"
        },{
          img: "../../assets/images/herbicida/20.jpg"
        }]
      },
      {
        id: 6,
        primero: "MANCOPARTS",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Enfermedades Controladas:\nRoya asiática (Phakopsora pachyrhizi).",
        cuarto: " Principales beneficios:\n1- MANCOPARTS es un fungicida protector a base de Mancozeb.\n2- Fundamental dentro de una estrategia de control efectivo para roya de la soya.\n3- Control sobre enfermedades de fin de ciclo.\n4- Reduce el 80% de la fitotoxicidad de algunos fungicidas sistémicos.\n5- Efecto verde sobre el cultivo por su composición de Zinc y Magnesio.\n6- Excelente relación Costo-Beneficio, en comparación a los del mercado.",
        quinto: " Ingrediente activo, Concentración y Formulación:\nMancozeb 800 g./Kg WP, protector.",
        sexto: "Dosis:\n2.0 — 3.0 Kg/ha.",
        septimo: "Experiencia en campo:\nDosis de 1,5 kg/ha en mezcla con Sensor 1m1/1Lt de agua.",
        lista: [{
          img: "../../assets/images/herbicida/21.jpg"
        },{
          img: "../../assets/images/herbicida/22.jpg"
        },{
          img: "../../assets/images/herbicida/23.jpg"
        },{
          img: "../../assets/images/herbicida/24.jpg"
        }]
      },
      {
        id: 7,
        primero: "PIRYZOL 750WP",
        segundo: "Cultivos registrados:\nArroz.",
        tercero: "Enfermedades Controladas:\nPiricularia o Bruzone (Pyricularia grisea).",
        cuarto: " Principales beneficios:\n1- Control eficiente de la principal enfermedad del cultivo de arroz, bruzone.\n2- Versatilidad de uso en mezclas con Concert (Lanzamiento de AgroPartners) para el control de enfermedades en general.\n3- Excelente relación Costo-Beneficio, en comparación a los del mercado.",
        quinto: " Ingrediente activo, Concentración y Formulación:\nTricyclazole 750 g/Kg WP, sistémico.",
        sexto: "Dosis:\n250 — 300 g/ha.",
        septimo: "Experiencia en campo:\nAdicionar aceite mineral CROP OIL a razón de 0,25% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/26.jpg"
        },{
          img: "../../assets/images/herbicida/27.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      },
      {
        id: 8,
        primero: "SELECTIVE PLUS",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Enfermedades Controladas:\nRoya de la soya (Phakopsora pachyrhizi).",
        cuarto: " Principales beneficios:\n1- Control preventivo y curativo para Roya de la soya.\n2- Alternativa para un control curativo bajo una moderada presión de Roya.\n3- Residualidad extendida en mezcla con Mancoparts.",
        quinto: " Ingrediente activo, Concentración y Formulación:\nFlutriafol 250 g/L SC, sistémico.",
        sexto: "Dosis:\n250 - 300 ml/ha.",
        septimo: "Experiencia en campo:\nDosis de 0,5 - 1,0 Lt/ha. Adicionar aceite mineral CROP OIL a razon de 0,25% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/29.jpg"
        },{
          img: "../../assets/images/herbicida/30.jpg"
        },{
          img: "../../assets/images/herbicida/31.jpg"
        },{
          img: "../../assets/images/herbicida/32.jpg"
        }]
      },
      {
        id: 9,
        primero: "SUPRESS",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Enfermedades Controladas:\nRoya asiática (Phakopsora pachyrhizi).",
        cuarto: "Principales beneficios:\n1- Fungicida de mayor eficacia para un control rápido de roya en la soya.\n2- Fungicida con una alta concentración de Cyproconazole.\n3- Dosis baja con alto efecto de control.\n4- Se complementa a la perfección con Mancoparts, proporcionando un control curativo y protector.\n5- Excelente Costo-Beneficio.\n6- No genera fitotoxicidad.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nCyproconazole 400 g/L SC, sistémico.",
        sexto: "Dosis:\n100 -150 ml/ha.",
        septimo: "Experiencia en campo:\nAdicionar aceite mineral CROP OIL a razon de 0,25% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/32.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        },{
          img: "../../assets/images/herbicida/29.jpg"
        },{
          img: "../../assets/images/herbicida/30.jpg"
        }]
      }
    ];

    this.herbicida = [
      {
        id: 1,
        primero: "AGROZINA",
        segundo: "Cultivos Registrados:\nMaíz y Sorgo.",
        tercero: "Malezas Controladas:\nVerdolaga (Portulaca oleracea); Quinuilla (Chenopodium álbum); Malva taporita (sida acuta); Chiori (Amaranthus quitensis)",
        cuarto: "Principales beneficios:\n1- Control de la calidad del activo y de las propiedades físico-químicas del producto garantizando la calidad de formulación.\n2- Control total de malezas en mezclas con Nifuron 75 WG (Post emergencia del cultivo) y Prime-S (Pre emergencia del cultivo).\n3- Selectivo",
        quinto: "Ingrediente activo, Concentración y Formulación:\nAtrazine 500 g/L SC, sistémico.",
        sexto: "Dosis:\n3.0 - 4.0 Lt/ha.",
        septimo: "Experiencia en campo:\nAdicionar aceite mineral CROP OIL a razon de 0,5% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/4.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        },{
          img: "../../assets/images/herbicida/12.jpg"
        },{
          img: "../../assets/images/herbicida/15.jpg"
        }]
      },
      {
        id: 2,
        primero: "BENTON",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Malezas Controladas:\nChiori (Amaranthus quitensis).",
        cuarto: "Principales beneficios:\n1- Herbicida selectivo para el cultivo de la soya y post emergente de las malezas.\n2- Control de malezas tolerantes a glifosato.\n3- Versatilidad de uso en mezclas.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nBentazone 480 g/L SL, acción por contacto.",
        sexto: "Dosis:\n1.0 — 1.2 Lt/ha.",
        septimo: "Experiencia en campo:\nAdicionar aceite mineral CROP OIL a razón de 0,5% v/v y SUPER GUN a 0,03% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/3.jpg"
        },{
          img: "../../assets/images/herbicida/9.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        },{
          img: "../../assets/images/herbicida/20.jpg"
        }]
      },
      {
        id: 3,
        primero: "CHARTER 240EC",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Malezas Controladas:\nCadillo (Cenchrus echinatus); Pata de Gallina (Digitaria ciliaris); Rogelia (Rottboelia cochinchinensis); Orizahá (Digitaria insularis); Pata de gallo (Eleusine indica).",
        cuarto: "Principales beneficios:\n1- Producto de rápida absorción, detiene el crecimiento de las malezas 24 horas después de la aplicación.\n2- Efectivo para el control de malezas gramíneas.\n3- Amplio uso para aplicaciones en barbecho químico y post emergencia de la soya.\n4- Bajo costo por hectárea.\n5- Incrementa el control de malezas en mezcla con Galant® HL.\n6- Selectivo para soya.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nClethodim 240 g/L EC, sistémico.",
        sexto: "Dosis:\n300 - 500 ml/ha.",
        septimo: "Experiencia en campo:\nDosis de 600 - 800 ml/ha. Se puede mezclar con GALANT HL a razón de 100 ml/ha. Adicionar aceite mineral CROP OIL a razón de 0,5% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/26.jpg"
        },{
          img: "../../assets/images/herbicida/29.jpg"
        },{
          img: "../../assets/images/herbicida/30.jpg"
        }]
      },
      {
        id: 4,
        primero: "CLOMAX 480EC",
        segundo: "Cultivos registrados:\nArroz.",
        tercero: "Malezas Controladas:\nPata de gallo (Eleusine indica); Pata de Gallina (Digitaria ciliaris); Rogelia (Rottboellia cochinchinensis); Orizaha (Digitaria insularis); Arrocillo (Echinochloa colona); Braquiaria (Brachiaria plantaginea); Maicillo (Sorghum sudanense); Pelo de chancho (Cyperus ferax).",
        cuarto: "Principales beneficios:\n1- Producto con flexibilidad de uso en pre y post emergencia inicial de las malezas.\n2- Selectivo para el cultivo de soya y arroz.\n3- Puede ser aplicado en mezcla con glifosato, para ampliar la residualidad.\n4- Excelente para rotación de mecanismos de acción en control de malezas difíciles.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nClomazone 480 g/L EC, sistémico.",
        sexto: "Dosis:\n1.0 —1.2 Lt/ha.",
        septimo: "Experiencia en campo:\nAdicionar aceite mineral CROP OIL a razón de 0,5% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/12.jpg"
        },{
          img: "../../assets/images/herbicida/13.jpg"
        },{
          img: "../../assets/images/herbicida/15.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 5,
        primero: "CLORIMUR 250WP",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Malezas Controladas:\nBarba de Chivo (Ageratum conyzoides); Chiori Espinoso (Amaranthus spinosus); Camotillo (Ipomoea purpura); Pega-Pega Verde (Boerhaavia caribea); Pega-Pega (Desmodium tortuosum); Leche-Leche (Euphorbia heterophylla); Chiori blanco (Amaranthus albus); Peluda (Galinsoga parviflora);Man1Uri (Senna obtusifolia); Verdolaga (Portulaca o/eracea); Santa Lucia (Commelina spp); Sensitiva (Mimosa púdica).",
        cuarto: "Principales beneficios:\n1- Producto con excelente control para Ciperáceas. 2- Opción para el control de malezas tolerantes a glifosato. 3- Por su excelente Costo-Beneficio se puede usar para cualquier aplicación de control de malezas. 4- Producto con excelente versatilidad de uso con otros herbicidas para potenciar la mezcla.",
        quinto: "Ingrediente activo, Concentración y Formulación:Chlorimuron-ethyl 250 g/Kg WP - Polvo mojable.",
        sexto: "Dosis:\n20 — 50 g/ha.",
        septimo: "Experiencia en campo:\nAdicionar aceite mineral CROP OIL a razón de 0,5% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/4.jpg"
        },{
          img: "../../assets/images/herbicida/3.jpg"
        }]
      },
      {
        id: 6,
        primero: "FENOX 10EC",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Malezas Controladas:\nPata de gallo (Eleusine indica); Rogelia (Rottboellia exaltata).",
        cuarto: "Principales beneficios:\n1- Herbicida post emergente que controla malezas gramíneas difíciles.\n2- Ideal para rotación de graminicidas en el cultivo de la soya evitando la tolerancia.\n3- La mejor opción para reemplazar el uso de Clethodim, mejor performance y seguridad para el cultivo subsecuente (sorgo y maíz).\n4- Rápida absorción que disminuye el riesgo de pérdida de producto a causa de las lluvias (2 horas).",
        quinto: "Ingrediente activo, Concentración y Formulación:\nFenoxaprop-P-ethyl 100 g/L EC, sistémico.",
        sexto: "Dosis:\n700 — 800 ml/ha.",
        septimo: "Experiencia en campo:\nAdicionar aceite mineral CROP OIL a razón de 0,5% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/33.jpg"
        },{
          img: "../../assets/images/herbicida/34.jpg"
        },{
          img: "../../assets/images/herbicida/32.jpg"
        }]
      },
      {
        id: 7,
        primero: "GALANT HL",
        segundo: "Cultivos registrados:\nFrejol ; Soya (Glycine max); Barbecho; Barbecho; Soya (Glycine max); Soya (Glycine max).",
        tercero: "Malezas Controladas:\nRogelia (Rottboellia cochinchinensis); Rogelia (Rottboellia cochinchinensis); Arrocillo ( Echinochloa colunum); Orizaha (Digitaria insularis); Rizaha (Digitaria insularis); Arrocillo (Echinochloa colunum).",
        cuarto: "Principales beneficios:\nPor su capacidad de penetración y translo-cación, elimina la competencia de las malezas inmediatamente después de ser aplicado. Las malezas tratadas con Galant HL detienen su crecimiento y las hojas muestran, a los pocos días de la aplica-ción, tonalidades violáceas, amarillas y finalmente marrones. En los rizomas, destruye inicialmente las yemas, y luego el tejido se necrosa.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nhaloxyfop 540 gr/Lt.",
        sexto: "Dosis:\n90 —120 cc/ha.",
        septimo: "Experiencia en campo:\nLa rapidez de la descomposición dependerá de las condiciones ambientales.",
        lista: [{
          img: "../../assets/images/herbicida/3.jpg"
        },{
          img: "../../assets/images/herbicida/26.jpg"
        },{
          img: "../../assets/images/herbicida/17.jpg"
        },{
          img: "../../assets/images/herbicida/18.jpg"
        }]
      },
      {
        id: 8,
        primero: "GALACTIC",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Malezas Controladas:\nBarba de Chivo (Ageeatum conyzoides); Chiori Espinoso (Amaranthus spinosus); Camotillo (Ipomoea purpura); Pega-Pega Verde (Boerhaavia caribea); Pega-Pega (Desmodium tortuosum); Leche-Leche (Euphorbia heterophylla); Chiori blanco (Amaranthus albus); Peluda (Galinsoga parviflora);MaMuri (Senna obtusifolia); Verdolaga (Portulaca oleracea); Santa Lucia (Commelina spp).",
        cuarto: "Principales beneficios:\n1- Alternativa de uso para controlar las malezas tolerantes a glifosatos en post emergencia del cultivo de la soya y de la maleza.\n2- Opción de mezcla con Zetapyr 100 SL, para ampliar el espectro de control.\n3- Puede utilizarse en cualquier estado de desarrollo del cultivo.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nFomesafen 250 g/L SL, acción por contacto.",
        sexto: "Dosis:\n0.5 —1.0 Lt/ha.",
        septimo: "Experiencia en campo:\nAdicionar aceite mineral CROP OIL a razón de 0,5% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        },{
          img: "../../assets/images/herbicida/3.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      },
      {
        id: 9,
        primero: "GLUFORTE",
        segundo: "Cultivos registrados:\nBarbecho químico.",
        tercero: "Malezas Controladas:\nChiori (Amaranthus quitensis); Pata de gallina (Digitada ciliares).",
        cuarto: "Principales beneficios:\n1- Control de malezas tolerantes a glifosatos. 2- Ayudar a mantener su campo libre de malezas tolerantes a glifosato. 3- Amplio espectro de control gramíneas y hoja ancha. 4- Rápida acción debido a su alta solubilidad (5 días).",
        quinto: "Ingrediente activo, Concentración y Formulación:\nGlufosinate-ammonium 200 g/L SL, contacto.",
        sexto: "Dosis:\n2.5 — 3.0 Lt/ha.",
        septimo: "Experiencia en campo:\nDosis 2,0 Lt/ha en mezcla con otro hercida latifolicida o graminicida. Adicionar aceite mineral CROP OIL a razón de 0,5% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/2.jpg"
        },{
          img: "../../assets/images/herbicida/12.jpg"
        },{
          img: "../../assets/images/herbicida/13.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        }]
      },
      {
        id: 10,
        primero: "GLIFORTE 480SL",
        segundo: "Cultivos registrados:\nBarbecho químico.",
        tercero: "Malezas Controladas:\nTorito (Acanthospermum hispidum); Chiori (Amaranthus quitensis); Emilia (Emilia sonchifolia); Leche leche (Euphorbia oleracea); Sanana (Bidens segetum); Malva taporita (Sida acuta); Chupurujume (Parthemium hysterophorus); Verdolaga camba (Talinum pariculatum); Maicillo (Sorghum sudanense); Rogelia (Rottboellia cochinchinensis).",
        cuarto: "Principales beneficios:\n1- Mejor performance del producto debido a su contenido de ingrediente activo (95% TC) y a la adición de un surfactante en su formulación.\n2- Mejor estabilidad del producto debido a su formulación con sal IPA.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nGlyphosate lsopropyl-ammonium 480 g/L SL (Glyphosate ácido 356 g/L), sistémico.",
        sexto: "Dosis:\n2.5 — 3.0 Lt/ha.",
        septimo: "Experiencia en campo:\nAdicionar aceite mineral CROP OIL a razón de 0,5% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/15.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        },{
          img: "../../assets/images/herbicida/17.jpg"
        },{
          img: "../../assets/images/herbicida/18.jpg"
        }]
      },
      {
        id: 11,
        primero: "GLIFORTE PLUS",
        segundo: "Cultivos registrados:\nBarbecho químico.",
        tercero: "Malezas Controladas:\nChiori (Amaranthus quitensis).",
        cuarto: "Principales beneficios:\n1- Mayor concentración menor dosis con el mismo control.\n2- Mejor performance del producto debido a su contenido de Ingrediente activo (97% TC) y a la adición de un surfactante en su formulación.\n3- Mejor estabilidad del producto debido a su formulación con sal IPA.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nGlyphosate Isopropyl-ammonium 660 g/L SL (Glyphosate ácido 490 g/L), sistémico.",
        sexto: "Dosis:\n2.0 — 2.5 Lt/ha.",
        septimo: "Experiencia en campo:\nAdicionar aceite mineral CROP OIL a razon de 0,5% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/26.jpg"
        },{
          img: "../../assets/images/herbicida/27.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      },
      {
        id: 12,
        primero: "LACTOFORTE",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Malezas Controladas:\nLeche leche (Euphorbia heterophylla).",
        cuarto: "Principales beneficios:\n1- Herbicida selectivo post-emergente para el cultivo de la soya y de malezas de hoja ancha.\n2- Excelente control sobre malezas tolerantes a glifosatos y de malezas de hoja ancha.\n3- En mezcla con Gluforte genera total control en malezas tolerantes a glifosato en barbecho químico.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nLactofen 240 g/L EC, acción por contacto.",
        sexto: "Dosis:\n500 — 800 ml/ha.",
        septimo: "Experiencia en campo:\nAdicionar aceite mineral CROP OIL a razón de 0,5% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/34.jpg"
        },{
          img: "../../assets/images/herbicida/33.jpg"
        },{
          img: "../../assets/images/herbicida/32.jpg"
        },{
          img: "../../assets/images/herbicida/31.jpg"
        }]
      },
      {
        id: 13,
        primero: "MAZAPYR 250SL",
        segundo: "Cultivos registrados:\nBarbecho químico.",
        tercero: "Malezas Controladas:\nCamotillo (Ipomoea ni!).",
        cuarto: "Principales beneficios:\n1- Producto latifolicida y graminicida para manejo de malezas consideradas de difícil control.\n2- Necesario para una estrategia de control diferenciada en malezas tolerantes a glifosato (Digitaria insularis).\n3- Excelente control de malezas desde el inicio. Sin presión de malezas en el momento de la siembra.\n4- Largo periodo residual que permite un control sobre los rebrotes de la maleza.\n5- La mejor alternativa para control de malezas en áreas no agrícolas (Potre-ros, enmallados, vías férreas, canales).",
        quinto: "Ingrediente activo, Concentración y Formulación:\nImazapyr 250 g/L SL, sistémico.",
        sexto: "Dosis:\n2.0 Lt/ha en Potrero /150 ml/ha en Barbecho.",
        septimo: "Experiencia en campo:\nRealizar las aplicaciones de MAZAPYR 20 días antes de la siembra de soya para evitar efextos fitotoxicos. Adicionar aceite mineral CROP OIL a razón de 0,5% v/v. Mazapyr se puede mezclar con Gluforte (Glufosinato de amonio) para obtener mejores porcentajes de control sobre malezas en barbecho químico o desecación pre siembra.",
        lista: [{
          img: "../../assets/images/herbicida/30.jpg"
        },{
          img: "../../assets/images/herbicida/29.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        },{
          img: "../../assets/images/herbicida/27.jpg"
        }]
      },
      {
        id: 14,
        primero: "NIFURON",
        segundo: "Cultivos registrados:\nMaíz.",
        tercero: "Malezas Controladas:\nRogelia (Rottboellia cochinchinensis).",
        cuarto: "Principales beneficios:\n1- Herbicida post emergente con amplio espectro de control en gramíneas.\n2- Selectivo para el cultivo de maíz.\n3- Excelente control de malezas en mezcla con Agrozina 50 SC aumentando el espectro de control, manteniendo la selectividad.\n4- Baja dosis con un buen costo por hectárea.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nNicosulfuron 750 g/Kg WG, sistémico.",
        sexto: "Dosis:\n60 gr/ha.",
        septimo: "Experiencia en campo:\nAdicionar aceite mineral CROP OIL a razón de 0,5% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/26.jpg"
        },{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/24.jpg"
        },{
          img: "../../assets/images/herbicida/23.jpg"
        }]
      },
      {
        id: 15,
        primero: "PANZER GOLD",
        segundo: "Cultivos registrados:\nDesecación de siembra, directa cultivos perennes y aplicaciones post emergentes en soya RG.",
        tercero: "Modo de acción:\nInhibidor competitivo de la enzima EPSPS (síntesis de aminoácidos aromáticos).",
        cuarto: "Principales beneficios:\nHerbicida no selectivo, post emergente. Actividad nula en el suelo. Sistémico (gran movilidad, especialmente por floema). Compatible con una amplia gama de herbicidas y formulaciones.\n• Uso poste-mergente en barbecho químico y poste-mergencia en soja RG y maíz RR.\n• Panzer Gold es una formulación optimiza-da desarrollada para proveer un control más efectivo en malezas difíciles y/o bajo condiciones ambientales adversas. Su paquete de adyuvantes y el tipo de sal (DMA), desarrollados específicamente, permiten una más efectiva y rápida absorción foliar, que otorga mayor veloci-dad de quemado y mantiene los niveles de control deseados en condiciones de estrés ambiental (hídrico y/o térmico).",
        quinto: "Ingrediente activo, Concentración y Formulación:\nGlifosato 480 g e.a./L (608 g i.a./L).",
        sexto: "Formulación:\n48 % equivalente ácido (sal DMA: dimetilamonica).",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/22.jpg"
        },{
          img: "../../assets/images/herbicida/21.jpg"
        },{
          img: "../../assets/images/herbicida/20.jpg"
        },{
          img: "../../assets/images/herbicida/19.jpg"
        }]
      },
      {
        id: 16,
        primero: "PACTO",
        segundo: "Cultivos registrados:\nSoya.",
        tercero:"Caracteristicas:\nExcelente control de malezas. Menos malezas hospederas para insectos. Selectividad en el cultivo. Efecto pre emergente sobre camotillo.",
        cuarto: "Principales beneficios:\nPacto es el único herbicida post-emergen-te totalmente selectivo en soya para el control de malezas difíciles tales como: Santa lucia (Commelina difusa), Camotillo (Ipomoea sp), Golondrina (Euphorbia hirta) Hierba caliente (Diodia sp). Adicionalmente, presente una alta sinergia en mezcla con Panzer Gold para el control de malezas difíciles.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nChloransulan 840 g/kg WG Sistemico.",
        sexto: "Dosis:\n40 ml/ha.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/10.jpg"
        },{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/1.jpg"
        },{
          img: "../../assets/images/herbicida/3.jpg"
        }]
      },
      {
        id: 17,
        primero: "PRIME-S",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Malezas Controladas:\nChiori (Amaranthus quitensis); Arrocillo (Echinochloa cotona L.).",
        cuarto: "Principales beneficios:\n1- Su soya libre de malezas desde el inicio.\n2. Excelente control pre emergente para malezas gramíneas y de hoja ancha.\n3- Selectivo para cultivo de soya, maíz y caña.\n4- Producto ideal para implementar un manejo de barbecho ante malezas de difícil control.\n5- Reducción del banco de semillas de malezas.\n6- Costos-Beneficio.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nS—Metolachlor 960 g/L EC, sistémico.",
        sexto: "Dosis:\n1,5 Ltlha.",
        septimo: "Experiencia en campo:\nAdicionar aceite mineral CROP OIL a razón de 0,5% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/2.jpg"
        },{
          img: "../../assets/images/herbicida/4.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 18,
        primero: "PYRIBAC PLUS",
        segundo: "Cultivos registrados:\nArroz.",
        tercero: "Malezas Controladas:\nArrocillo (Echinocloa colona).",
        cuarto: "Principales beneficios:\n1- Presenta alta selectividad, amplio espectro de control.\n2- Post emergente para el cultivo de arroz y malezas.\n3- Excelente control de gramíneas y hoja ancha (Soya guacha) en el cultivo del arroz.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nBispyribac-sodium 400 g/L SC, sistémico.",
        sexto: "Dosis:\n200 — 300 ml/ha.",
        septimo: "Experiencia en campo:\nSe puede mezclar con CLINCHER para aumentar el espectro de control en campos de mayor infestación de malezas Adicionar aceite mineral CROP OIL a razón de 0,5% viv.",
        lista: [{
          img: "../../assets/images/herbicida/10.jpg"
        },{
          img: "../../assets/images/herbicida/12.jpg"
        },{
          img: "../../assets/images/herbicida/14.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        }]
      },
      {
        id: 19,
        primero: "RANDON",
        segundo: "Cultivos registrados:\nBarbecho químico.",
        tercero: "Malezas Controladas:\nChiori (Amaranthus blitoides); Botoncillo o curichera (Eclipta alba); Sanana (Bidens pilosa).",
        cuarto: "Principales beneficios:\n1- Herbicida sistémico selectivo (no afecta a los pastos bien establecidos).\n2- Control de malezas de hoja ancha, herbáceas y arbustivas en pastizales o potreros.\n3- Excelente relación Costo-Beneficio, en comparación a los del mercado.\n4- Control de calidad del activo y de las propiedades físico-químicas del producto garantizando la calidad de formulación.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nPicloram 64 g/L + 2,4-D 240 g/L SL, sistémico y selectivo.",
        sexto: "Dosis:\n2.0-3.0 Lt/ha.",
        septimo: "Experiencia en campo:\nSe puede aplicar en arroz a razón de 300 ml/ha. Adicionar aceite mineral CROP OIL a razon de 0,5% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/18.jpg"
        },{
          img: "../../assets/images/herbicida/20.jpg"
        },{
          img: "../../assets/images/herbicida/22.jpg"
        },{
          img: "../../assets/images/herbicida/24.jpg"
        }]
      },
      {
        id: 20,
        primero: "SECAFORTE",
        segundo: "Cultivos registrados:\nBarbecho químico.",
        tercero: "Malezas Controladas:\nRogelia (Rottboelia cochinchinensi); Guapurucillo (Solanum americanum); Verdolaga (Portulaca oleracea); Camotillo (Ipomoea nil); Sanana (Bidens segetum); Chiori (Amaranthus quitensis); Barba de chivo (Argenatum conyzoides); Cadillo (Cenchrus echinatus); Pata de gallina (Digitaria ciliaris); Pata de gallo (Eleusine indica).",
        cuarto: "Principales beneficios:\n1- Desecante no selectivo para soya y malezas.\n2- Rápida acción de control generando la muerte de la soya y la maleza.\n3- Control de calidad en origen, garantizan-do la concentración de activo y formulación.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nParaquat dichloride 276 g/I SL (Paraquat ión 200 gil), acción por contacto.",
        sexto: "Dosis:\n1.0 — 2.0 Lt/ha.",
        septimo: "Experiencia en campo:\nAdicionar aceite mineral CROP OIL a razón de 0,5% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        },{
          img: "../../assets/images/herbicida/3.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      },
      {
        id: 21,
        primero: "SPIDER",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Nutrición vegetal:\nCamotillo (Ipomea Ni!). Caperonla (Caperonla Palustris). Curichera (Eclipta Sp). Golondrina (Euphorbla Hirta). Malva Taporita (Sida acuta). Pega-pega Verde (Boerhaavla caribaea). Santa lucia (Commelina benghalensis). Santa lucia (Commelina erecta). Orizaha(Digitaria insularis). Pata de gallo (Eleusine Indica).",
        cuarto: "Principales beneficios:\n•Es un herbicida de excelente performance en siembra directa, ya que es altamente compatible con glifosato y otros herbicidas de barbecho químico.\n•Posee baja retención por rastrojos y permite ser aplicado con cobertura verde, manteniendo su poder residual en el suelo.\n•Es absorbido por vía radicular y follar.\n•Fotoestable. No se degrada con la luz solar.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nDiclosulan 840 g/kg WDG.",
        sexto: "Experiencia en campo:\n30gr/ha en pre emergencia de la soya y maleza. desecación en mezcla con Glifosato.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/26.jpg"
        },{
          img: "../../assets/images/herbicida/27.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      },
      {
        id: 22,
        primero: "STARANE XTRA",
        segundo: "Cultivos registrados:\nBarbecho quimico.",
        tercero: "Principales beneficios:\nStarane* Xtra es el herbicida ideal para el control de malezas latifoliadas difíciles, como soja guacha resistente a glifosato y trébol blanco.\nExcelente compañero de glifosato en barbechos cortos o previos a la siembra de soja, girasol, maíz o sorgo, por su casi nula residualidad en el suelo.\nSu espectro herbicida se complementa en mezclas con glifosato, presenta un período de residualidad muy corto en el suelo, permitiendo ser aplicado entre 5-10 días antes de las siembras de diferentes cultivos como oleaginosas y cereales.\nHerbicida ideal para el control de malezas latifoliadas tolerantes a glifosato en barbechos cortos o inmediatamente anteriores a la siembra de soja, maíz, girasol, sorgo, trigo, etc.\n• Posee actividad herbicida sobre un muy amplio espectro de especies de difícil control y un excelente sinergismo en mezcla de tanque con glifosato y productos de tipo auxínicos como 2,4-D, Lontrel, Tordon, etc.",
        cuarto: "Ingrediente activo, Concentración y Formulación:\nFluroxypyr acid Concentración: 480 g/L.",
        quinto: "Dosis:\n300 ml/ha.",
        sexto: "",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 23,
        primero: "ZETAPYR",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Malezas Controladas:\nBarba de Chivo (Ageratum conyzoides); Chiori Espinoso (Amaranthus spinosus); Camotillo (Ipomoea purpura); Pega-Pega Verde (Boerhaavia caribea); Pega-Pega (Desmodium tortuosum); Leche-Leche (Euphorbia heterophylla); Chiori blanco (Amaranthus albus); Peluda (Galinsoga parviflora); Mamuri (Senna obtusifolia); Verdolaga (Portulaca oleracea); Santa Lucia (Commelina spp). Hierba caliente (Spermacoce latifolia)",
        cuarto: "Principales beneficios:\n1- Excelente complemento del glifosato para el control de malezas difíciles.\n2- Herbicida utilizado en aplicaciones para barbecho químico y post emergencia de la soya.\n3- Control alternativo para malezas. tolerantes a glifosato en post emergencia de la soya.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nlmazethapyr 100 g/L SL, sistémico.",
        sexto: "Dosis:\n0.5 —1.0 Ltlha.",
        septimo: "Experiencia en campo:\nAdicionar aceite mineral CROP OIL a razón de 0,5% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        },{
          img: "../../assets/images/herbicida/3.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      }
    ];

    this.insecticida = [
      {
        id: 1,
        primero: "ABAMEX PLUS",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nÁcaro de la Soya (Tetranychus urticae).",
        cuarto: "Principales beneficios:\n1- Excelente complemento del glifosato para el control de malezas difíciles.\n2- Herbicida utilizado en aplicaciones para barbecho químico y post emergencia de la soya.\n3- Control alternativo para malezas. tolerantes a glifosato en post emergencia de la soya.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nAbamectin 50 g/I EC, sistémico con acción de contacto e ingestión.",
        sexto: "Dosis:\n110 —140 ml/ha.",
        septimo: "Experiencia en campo:\nSe puede utilizar en cualquier cultivo que tenga presecia de ácaros. Se recomienda hacer rotación con AGROGITE. Se recomienda utilizar aceite mineral CROP OIL - 0,25% v/v.",
        lista: [{
          img: "../../assets/images/herbicida/18.jpg"
        },{
          img: "../../assets/images/herbicida/20.jpg"
        },{
          img: "../../assets/images/herbicida/22.jpg"
        },{
          img: "../../assets/images/herbicida/24.jpg"
        }]
      },
      {
        id: 2,
        primero: "AGROTHRIN",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nGusano pegador de la hoja (Omiodes indicata).",
        cuarto: "Principales beneficios:\n1)	Versatilidad de uso para posibles mezclas en tanque proporcionando al agricultor mejor espectro de control según el tipo de plaga presente en su campo.\n2)	Efectivo en el control del complejo de chinches.\n3) Ingrediente activo ideal para el control preventivo de la mosca barrenadora (Melanagromyza sojae).\n4)	Insecticida con baja exposición entre el grupo de los piretroides.\n5) Excelente efecto choque.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nBifenthrin 100 gil EC, con acción de contacto e ingestión.",
        sexto: "Dosis:\n200 — 300 ml/ha.",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        },{
          img: "../../assets/images/herbicida/3.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      },
      {
        id: 3,
        primero: "AGROGITE",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nÁcaro verde (Mononychellus planki)",
        cuarto: "Principales beneficios:\n1)	Acaricida de rápida acción y largo periodo residual.\n2) Amplio espectro, ideal para utilizar una mejor estrategia de control contras las diferentes especies de ácaros.\n3) Excelente performance en baja y alta infestación de ácaros.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nPropargite 730 g/I EC, acción de contacto, ingestión e inhalación.",
        sexto: "Dosis:\n400 — 600 ml/ha.",
        septimo: "Experiencia en campo:\nHacer rotación con ABAMEX PLUS. Utilizar aceite mineral CROP OIL a racion de 0,25 % v/v. Se puede utilizar en otros cultivos con presencia de ácaros.",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/26.jpg"
        },{
          img: "../../assets/images/herbicida/27.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      },
      {
        id: 4,
        primero: "AGROALPHA",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nGusano pegador de la hoja (Omiodes indicata).",
        cuarto: "Principales beneficios:\n1)	Gran efecto de choque.\n2)	Eficacia a dosis bajas en control de lepidópteros y muestra una acción ovicida.\n3)	Reemplaza los piretroides convencionales como Lambda-cyahlothrin y Cypermethrin.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nAlpha-cypermethrin 100 g/I EC, con acción de contacto e ingestión.",
        sexto: "Dosis:\n100 —150 ml/ha.",
        septimo: "Experiencia en campo:\nLa dosis puede llegar hasta 400 ml/ha dependiendo del nivel de infestación de las plagas a controlar.",
        lista: [{
          img: "../../assets/images/herbicida/18.jpg"
        },{
          img: "../../assets/images/herbicida/20.jpg"
        },{
          img: "../../assets/images/herbicida/22.jpg"
        },{
          img: "../../assets/images/herbicida/24.jpg"
        }]
      },
      {
        id: 5,
        primero: "AGROCARB",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nGusano Militar (Spodoptera eridania).",
        cuarto: "Principales beneficios:\n1- Excelente control de larvas de lepidópteros en aplicación foliar y tratamiento de semilla.\n2- Ideal en mezcla con Thorzagro SC y Dacloprid 350 SC, para control de complejo de plagas.\n3- Rápida translocación dentro de la planta.\n4- Alta residualidad.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nThiodicarb 375 g/I sc, acción por contacto e ingestión.",
        sexto: "Dosis:\n300 — 400m1/ha.",
        septimo: "Experiencia en campo:\nSe utiliza para tratamiento de semilla de soya en dosis de 300m1 / 100kg de semilla y en el cultivo de maiz 300m1 / bolsa de semilla.",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        },{
          img: "../../assets/images/herbicida/3.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      },
      {
        id: 6,
        primero: "COMPASS",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nFalso Medidor (Pseudoplusia includens). Pegador de Hoja (Omiodes indicata). Gusano Militar (Spodóptera eridania).",
        cuarto: "Principales beneficios:\nEs un insecticida formulado en base a 2 principios activos, los cuales ofrecen un excelente efecto de choque y buena persistencia para el control de larvas de lepidópteros y trips en el cultivo de soya.",
        sexto: "Dosis:\n300 ml/ha.",
        septimo: "Experiencia en campo:\nAplicar en los primeros estudios larvales.",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 7,
        primero: "CORAGEN",
        segundo: "Cultivos registrados:\nSoya, Maíz, Girasol, Tomate, Papa.",
        tercero: "Plagas Controladas:\nSoya: Gusano pegador de la hoja (Omiodes indicata); Gusano Militar (Spodoptera eridania); Falso medidor (Pseudoplusia includens) Maíz: Gusano cogollero (Spodoptera frugiperda) Girasol: Falso medidor (Pseudoplusia includens); Gusano peludo (Ghlosyne lacinia) Tomate: Polilla del tomate (ruta absoluta); Perforador del fruto (Neoleucinodes elegan- talis) Papa: Polilla de la papa (Phthorimaea operculella)",
        cuarto: "Principales beneficios:\n1- Seguridad en control de las principales plagas de Soya y Maíz.\n2- Ofrece alta residualidad con efectivo control sobre las plagas.\n3- Mejor costo/día de control.\n4- Selectivo con los enemigos naturales y benéficos.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nChlorantraniliprole 200 g/I sc, sistémico de contacto e ingestión. Acción ovicida.",
        sexto: "Dosis: Soya:\n50 ml/ha. Maíz: 75 —100 ml/ha Girasol: 80 -125 ml/ha Tomate: 80 — 100 ml/haPapa: 80 —100 ml/ha",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/26.jpg"
        },{
          img: "../../assets/images/herbicida/27.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      },
      {
        id: 8,
        primero: "DACLOPRID 600SC",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nChinches",
        cuarto: "Principales beneficios:\n1- Doble propósito, por la formulación SC, puede ser utilizado tanto en tratamiento de semillas como para aplicación foliar.\n2- Insecticida con actividad vía sistémica y residual; actúa por contacto e ingestión.\n3- Muestra actividad antialimentaria paralizando la acción de alimentarse de los insectos.\n4- Tiene efectos repelentes sobre los adultos, impidiendo la puesta de huevos.\n5- Mayo concentración con baja dosis con similar eficiencia.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nImidacloprid 600 gil sc, acción por contacto e ingestión",
        sexto: "Dosis:\n175 - 200 ml/ha.",
        septimo: "Experiencia en campo:\nProducto ideal para control y manejo de chinches.",
        lista: [{
          img: "../../assets/images/herbicida/18.jpg"
        },{
          img: "../../assets/images/herbicida/20.jpg"
        },{
          img: "../../assets/images/herbicida/22.jpg"
        },{
          img: "../../assets/images/herbicida/24.jpg"
        }]
      },
      {
        id: 9,
        primero: "DACLOPRID 650SC",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nChinches",
        cuarto: "Principales beneficios:\n1- Insecticida con actividad vía sistémica y residual; actúa por contacto e ingestión.\n2- Muestra actividad antialimentaria paralizando la acción de alimentarse de los insectos.\n3- Tiene efectos repelentes sobre los adultos, impidiendo la puesta de huevos.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nImidacloprid 350 g/L SC, acción por contacto e ingestión",
        sexto: "Dosis:\n300 - 350 ml/ha.",
        septimo: "Experiencia en campo:\nProducto para control y manejo de chinches.Versatilidad de uso para mezclas con otros insecticidas.",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 10,
        primero: "DELETE",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nÁcaro estriado (Tetranychus urticae)",
        cuarto: "Principales beneficios:\n1- Producto de doble propósito, Insectici - da (Lepidópteros) y acaricida.\n2- Insecticida con nuevo grupo químico de acción diferenciada.\n3- Excelente insecticida para realizar la rotación de grupos químicos evitando la pérdida de sensibilidad de los insectos.\n4- No es repelente y debido a su modo de acción es prácticamente imposible ser detectado por el insecto.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nChlorfenapyr 240 g/L SC, sistémico y traslaminar, de contacto e ingestión.",
        sexto: "Dosis:\n500 ml/ha.",
        septimo: "Experiencia en campo:\nSe puede utilizar en cultivos alternativos como papa y tomate. La dosis de 800 ml/ha resulta la mejor para altas infestaciones de larvas de pegador de hoja (Omioides indicata) y otras larvas en el cultivo de soya y maíz.",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 11,
        primero: "DINNO",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nMosca Blanca (Bemisia tabaci)",
        cuarto: "Principales beneficios:\n1- Nueva generación de Neonicotinoides.\n2-Alto poder de volteo y residual.\n3- Banda verde con menor impacto ambiental.\n4-Alta concentración con baja dosis.\n5- Control del complejo de chinches.\n6- Necesario para rotación de activos.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nDinotefuran 700 g/Kg WG",
        sexto: "Dosis:\n95 gr/ha (Para control de chinches)",
        septimo: "Experiencia en campo:\nSe puede ampliar su potencial de uso para mosca blanca (Bemisia tabaci), se debe aumentar la dosis a 100 — 120 gr/ha. Los ensayos con estas dosis muestran un control excelente en adultos y ninfas de mosca blanca.",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 12,
        primero: "EXPEDITION",
        segundo: "Plagas Controladas:\nEuschistu henos (Chinche marrón). Piezodorus guildinll (Chinche verde pequeño). Dichelops spp.(Chinche barriga verde).",
        tercero: "Principales beneficios:\nExpeditionTM es un insecticida foliar de amplio espectro, recomendado para el control de chinches en soya, que se caracteriza por su alto poder de volteo y persistencia de control.\nExpeditionTM es un insecticida a base de ISOCLAST- Active y lambdacialotrina, que actua por contacto e ingestión.• Contiene un nuevo principio activo: ISOCLAST TM.• El mayor poder de volteo en chinches.• Excelente persistencia / residualidad.Nuevo mecanismo de acción en el mercado.\n• Elevada actividad sistémica.",
        cuarto: "Ingrediente activo, Concentración y Formulación:\nSulfoxaflor 100g/Lt + Lambda Cyalothrina 150g/Lt - SE.",
        quinto: "Dosis:\n250 - 300m1/ha.",
        sexto: "",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 13,
        primero: "EXALT",
        segundo: "Cultivos registrados:\nMaíz.",
        tercero: "Plagas Controladas:\nLarvas de Lepidópteros, Thrips y Minadores.",
        cuarto: "Principales beneficios:\n1- Ofrece un efecto de control contundente sobre una amplio espectro de plagas masticadoras, pasadores enrolladores de hoja, minadores de hojas y thrips y minadores en una gran variedad de cultivos.\n2- Cortos períodos de re entrada.\n3- Baja toxicidad para los aplicadores.\n4- Selectivo a la fauna benéfica.\n5- Excelente herramienta de rotación en programas para el manejo integrado de plagas.\n6- Categoria toxicologica IV (Banda verde).",
        quinto: "Ingrediente activo, Concentración y Formulación:\nSpinetoran 120 gil. sc.",
        sexto: "Dosis:\n80-100 ml/ha. De acuerdo a presión y estadio de plaga.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/18.jpg"
        },{
          img: "../../assets/images/herbicida/20.jpg"
        },{
          img: "../../assets/images/herbicida/22.jpg"
        },{
          img: "../../assets/images/herbicida/24.jpg"
        }]
      },
      {
        id: 14,
        primero: "FENURON PLUS",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nGusano pegador de la hoja (Omiodes indicata).",
        cuarto: "Principales beneficios:\n1- Producto versátil que se puede mezclar con otros productos de acción de choque.\n2- Selectivo a los enemigos naturales y beneficos.\n3- Excelente Costo-Beneficio.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nLufenuron 100 g/L SC, sistémico de acción por ingestión.",
        sexto: "Dosis:\n150 — 200 ml/ha.",
        septimo: "Experiencia en campo:\nSe puede aumentar la dosis hasta 300 ml/ha.",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 15,
        primero: "FIPROGEM 800WG",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nPicudo gris pequeño (Promecops spp.).",
        cuarto: "Principales beneficios:\n1- Los insectos resistentes o tolerantes a piretroides, organofosforados y carbamatos son susceptibles a Fipronil.\n2-Altamente efectivo y de efecto contundente sobre un amplio rango de plagas de distintos órdenes.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nFipronil 800 g/Kg WG, con acción por contacto e ingestión.",
        sexto: "Dosis:\n45 — 60 g/100 Kg de semilla.",
        septimo: "Experiencia en campo:\nPara uso en caña siembra o soguera utilizamos las dosis de 200 a 250 gr/ha. Para control de: Heterotermes tenuis Corniternes cumulans.",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        },{
          img: "../../assets/images/herbicida/3.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      },
      {
        id: 16,
        primero: "FLYCONTROL",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nMosca Blanca (Bemisia tabaci).",
        cuarto: "Principales beneficios:\n1- Insecticida de rápida acción y efecto prolongado. (Choque y residual).\n2- Control efectivo de ninfas de mosca blanca.\n3- Control sobre el complejo de chinches. (Pentatomidae).\n4- Al fin en el mercado un producto de control efectivo de Mosca Blanca.\n5- Producto de alta concentración y baja dosis.\n6- Excelente costo:beneficio.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nAcetamiprid 700 g/Kg WG, sistémico con acción de contacto e ingestión.",
        sexto: "Dosis:\n70 gr/ha.",
        septimo: "Experiencia en campo:\nRealizar rotación con JOKER a dosis de 500 ml/ha. Se debe aplicar 70 a 80 gr/ha en estadios vegetativos iniciales (VE a V3) y se debe aplicar 100 —120 gr/ha en estadios vegetativos de V4 en adelante.",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 17,
        primero: "INTREPID SC",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Caracteristicas:\nLas larvas afectadas por Intrepid* , inician una muda prematura y dejan de alimentarse despúes de las 24hs de haber ingerido el producto. Al no poder deshacerse de la vieja cutícula, mueren por deshidratación e inanición entre las 48-72 horas después de consumirlo.",
        cuarto: "Principales beneficios:\n1- Único producto IGR de diferente mecanismo de acción (acelerador de muda), ideal para el manejo de resistencias.\n2- Mayor rapidez de control en comparación a otros IGR ( la larva deja de alimentarse a las 24hrs).\n3- Excelente control de pegador de hoja (Omiodes indicata).\n4- Acción ovicida comprobada.5- Excelente residualidad protegiendo su cultivo sin que avance el daño por defoliación.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nMethoxyfenozide 240g/I sc.",
        sexto: "Dosis:\nAntiCarCia(Anticarsia gemmatalis) 200 ml/ha. Pegador de hoja(omiodes indicata) 180 - 200 Gusano eridania(spodoptera eridania) ml/ha.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/1.jpg"
        },{
          img: "../../assets/images/herbicida/2.jpg"
        },{
          img: "../../assets/images/herbicida/3.jpg"
        },{
          img: "../../assets/images/herbicida/4.jpg"
        }]
      },
      {
        id: 18,
        primero: "JOKER",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nChinche verde pequeño (Piezodorus guildinii)",
        cuarto: "Principales beneficios:\n1- La más alta concentración de Bifentrin en mezcla, lo que permite mayor efecto de volteo sobre el complejo de chinches.\n2- Excelente relación costo beneficio.\n3- Rápida acción y largo residual.\n4- La más equilibrada mezcla de Bifenthrin + Thiamethoxan del mercado (Efectochoque + residual).\n5- Espectro de control que se amplia para mosca blanca.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nBifenthrin 180,2 g/L + Thiamethoxam 159 g/L SC, sistémico de contacto e ingestión.",
        sexto: "Dosis:\n300 ml/ha.",
        septimo: "Experiencia en campo:\nPara el control de chinches la dosis es de 300 ml/ha, si la población de la ninfas de chinches supera los 10 por batida de paño se debe aumentar la dosis hasta 400 ml/ha. Para ampliar su potencial de uso para mosca blanca se debe aumentar la dosis a 500 ml/ha.",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 19,
        primero: "LAMBDATRIN 50EC",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nAnticarsia (Anticarsia gemmatalis); Gusano pegador de la hoja (Hedylepta indicata) Alto poder de volteo.",
        cuarto: "Principales beneficios:\n1- Menor volatilidad y solubilidad en agua, por lo que no se lixivia a napas de agua subterráneas.\n2- No resulta perjudicial para microorganismos y lombrices de tierra a las dosis recomendadas.\n3- Excelente control y eficacia.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nLambda-cyhalothrin 50 g/I EC, acción por contacto e ingestión.",
        sexto: "Dosis:\n100 — 200 ml/ha.",
        septimo: "Experiencia en campo:\nUtilizar hasta 300 ml/ha. Se puede utilizar en cualquier cultivo con presencia de larvas.",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/26.jpg"
        },{
          img: "../../assets/images/herbicida/27.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      },
      {
        id: 20,
        primero: "PARMEX",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nGusano Militar (Spodoptera eridania) Falso medidor (Chrysodeixis includens)",
        cuarto: "Principales beneficios:\n1- Formulación diferenciada (Gránulos esféricos), por la cual no tenemos problema de trancado de boquillas.\n2- Baja toxicidad.\n3- Protección del medio ambiente.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nEmamectin Benzoate 57 gr/Kg WG, traslaminar de acción por contacto e ingestión.",
        sexto: "Dosis:\n300 — 350 g/ha",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/15.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        },{
          img: "../../assets/images/herbicida/17.jpg"
        },{
          img: "../../assets/images/herbicida/18.jpg"
        }]
      },
      {
        id: 21,
        primero: "THORZAGRO",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Plagas Controladas:\nChinche verde pequeño (Piezodorus guildinii)",
        cuarto: "Principales beneficios:\n1- Formulación diferenciada en concentración de ingrediente activo que permite el uso en aplicaciones foliares y/o tratamiento de semillas.\n2- Versatilidad de uso para posibles mezclas en tanque por el tipo de formulación (SC).\n3- Excelente Costo-Beneficio.\n4- Excelente para el control de Chinches.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nThiamethoxam 333 g/I sc, sistémico de ingestión.",
        sexto: "Dosis:\n200 — 250 ml/ha.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/30.jpg"
        },{
          img: "../../assets/images/herbicida/31.jpg"
        },{
          img: "../../assets/images/herbicida/32.jpg"
        },{
          img: "../../assets/images/herbicida/33.jpg"
        }]
      },
      {
        id: 22,
        primero: "TRACER",
        segundo: "Cultivos registrados:\nMaíz.",
        tercero: "Plagas Controladas:\nGusano Cogollero (Spodóptera frugiperda).",
        cuarto: "Principales beneficios:\nConduntende control de cogollero en maíz (spodoptera frugiperda). Altamente efectivo en bajas dosis (dependiendo del estadio de la plaga).\nModo de acción por contacto e ingestión (ingestión 5-10 veces más efectiva). Detiene su alimentación sin continuar dañando el cultivo (rendimiento). No hay resistencia cruzada con insecticidas sintéticos o biologicos conocidos.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nSpinosad 480 g/I sc.",
        sexto: "Dosis:\n60 - 80 ml/ha.",
        septimo: "Experiencia en campo:\nCuando se detecten un 20% de plantas dañadas con la presencia de larvas preferentemente en estadio L1-L2. Se recomienda no efectuar más de dos aplicaciones consecutivas.",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      }
    ];

    this.semilla = [
      {
        id: 1,
        primero: "DM 6.8i",
        segundo: "Principales beneficios:\nMuy buen porte vegetativo, y excelente arquitectura de planta. Excelente adaptación a diferentes fechas de siembra. Excelente comportamiento en ambientes A y B en zona Este y Centro. Así como en fechas de enero, muy buen comportamiento en zona Norte.",
        tercero: "Caracteristicas morfologicas de la variedad:\n1- Hábito de Crecimiento: Indeterminado.\n2- Ciclo total (Días desde siembra a R8): 94 días.\n3- Altura de planta: (100 cm).\n4- Potencial de ramificación: Medio.\n5- Tipo de ramificación: Cerrada.\n6- Peso promedio de 1000 semillas: 135 - 170 g.\n7- Color de pubescencia/Color de flor: Gris/Purpura.\n8- Comportamiento frente al Cancro de Tallo: Resistente.\n9- Comportamiento frente a Mancha Ojo de Rana (MOR): Resistente.\n10- Comportamiento frente a Mancha anillada: Moderadamente resistente.",
        cuarto: "Fecha de siembra recomendada:\nZona Este: 20 Nov. 15 Dic. 1 - 15 Dic |Zona Norte: 15 - 30 Dic. 15 - 30 Dic.",
        quinto: "Población recomendada:\nPoblación recomendada de 320000 pl/ha (Alto potencial). 0,52 m: (Ancho de surco de la sembradora): 16 —17 pi/mi.0,45 m:(Ancho de surco de la sembradora):13 —14 pi/mi.0,42 m:(Ancho de surco de la sembradora):12 —13 pi/mi.0,40 m:(Ancho de surco de la sembradora):11 —12 pi/mi.0,35 m:(Ancho de surco de la sembradora):10 —11 pi/mi",
        sexto: "",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        },{
          img: "../../assets/images/herbicida/3.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      },
      {
        id: 2,
        primero: "DM POTENCIA",
        segundo: "Principales beneficios:\nMuy buen porte vegetativo defensivo. Variedad con excelente estabilidad. Destacado comportamiento en ambientes A y B en zona Este y Centro. Potencial genético para alto rendimiento.",
        tercero: "Caracteristicas morfologicas de la variedad:\n1- Hábito de Crecimiento: Indeterminado.\n2- Ciclo total (Días desde siembra a R8): 93 días.\n3- Altura de planta: (100 cm).\n4- Potencial de ramificación: Medio.\n5- Tipo de ramificación: Cerrada.\n6- Peso promedio de 1000 semillas: 130 - 160 g.\n7- Color de pubescencia/Color de flor: Gris/Blanca.\n8- Comportamiento frente al Cancro de Tallo: Resistente.\n9- Comportamiento frente a Mancha Ojo de Rana (MOR): Resistente.\n10- Comportamiento frente a Mancha anillada: Moderadamente susceptible.",
        cuarto: "Fecha de siembra recomendada:\nZona Este: 20 Nov. 15 Dic. 1 - 15 Dic |Zona Norte: 15 - 30 Dic. 15 - 30 Dic.",
        quinto: "Población recomendada:\nPoblación recomendada de 320000 pl/ha (Alto potencial). 0,52 m: (Ancho de surco de la sembradora): 16 —17 pi/mi.0,45 m:(Ancho de surco de la sembradora):13 —14 pi/mi.0,42 m:(Ancho de surco de la sembradora):12 —13 pi/mi.0,40 m:(Ancho de surco de la sembradora):11 —12 pi/mi.0,35 m:(Ancho de surco de la sembradora):10 —11 pi/mi",
        sexto: "",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/26.jpg"
        },{
          img: "../../assets/images/herbicida/27.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      },
      {
        id: 3,
        primero: "DM 62R63 STS",
        segundo: "Principales beneficios:\nBuen porte vegetativo, excelente comportamiento frente al vuelco. Excelente adaptación a ambientes de alta tecnología. Resistente a sulfonilureas en pre emergencia. Excelente alternativa para siembras de cierre, por su precocidad. Potencial genético para alto rendimiento.",
        tercero: "Caracteristicas morfologicas de la variedad:\n1- Hábito de Crecimiento: Indeterminado.\n2- Ciclo total (Días desde siembra a R8): 87 días.\n3- Altura de planta: (93 cm).\n4- Potencial de ramificación: Medio.\n5- Tipo de ramificación: Cerrada.\n6- Peso promedio de 1000 semillas: 150 - 165 g.\n7- Color de pubescencia/Color de flor: Gris/Purpura.\n8- Comportamiento frente al Cancro de Tallo: Resistente.\n9- Comportamiento frente a Mancha Ojo de Rana (MOR): Resistente.\n10- Comportamiento frente a Mancha anillada: Moderadamente susceptible.",
        cuarto: "Fecha de siembra recomendada:\nZona Este: 1 - 30 Dic |Zona Norte: 1 - 30 Dic.",
        quinto: "Población recomendada:\nPoblación recomendada de 320000 pl/ha (Alto potencial). 0,52 m: (Ancho de surco de la sembradora): 16 —17 pi/mi.0,45 m:(Ancho de surco de la sembradora):13 —14 pi/mi.0,42 m:(Ancho de surco de la sembradora):12 —13 pi/mi.0,40 m:(Ancho de surco de la sembradora):11 —12 pi/mi.0,35 m:(Ancho de surco de la sembradora):10 —11 pi/mi",
        sexto: "",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/9.jpg"
        },{
          img: "../../assets/images/herbicida/10.jpg"
        },{
          img: "../../assets/images/herbicida/11.jpg"
        },{
          img: "../../assets/images/herbicida/12.jpg"
        }]
      },
      {
        id: 4,
        primero: "DM 8473 RSF",
        segundo: "Principales beneficios:\nBuen porte vegetativo, excelente comportamiento en ambientes A, B y frente al vuelco. Variedad de altísimo potencial de rendimiento. Muy buen paquete sanitario. Excelente comportamiento en zona Norte. Potencial genético para alto rendimiento.",
        tercero: "Caracteristicas morfologicas de la variedad:\n1- Hábito de Crecimiento: Indeterminado\n2- Ciclo total (Días desde siembra a R8): 101 días\n3- Altura de planta: (98 cm)\n4- Potencial de ramificación: Bajo\n5- Tipo de ramificación: Cerrada\n6- Peso promedio de 1000 semillas: 130 - 160 g.\n7- Color de pubescencia/Color de flor: Gris/Blanca\n8- Comportamiento frente al Cancro de Tallo: Resistente.\n9- Comportamiento frente a Mancha Ojo de Rana (MOR): Resistente.\n10- Comportamiento frente a Mancha anillada: Moderadamente resistente.",
        cuarto: "Fecha de siembra recomendada:\nZona Este: 1 - 15 Dic |Zona Norte: 1 - 15 Dic. 15 - 30 Dic.",
        quinto: "Población recomendada:\nPoblación recomendada de 320000 pl/ha (Alto potencial). 0,52 m: (Ancho de surco de la sembradora): 16 —17 pi/mi.0,45 m:(Ancho de surco de la sembradora):13 —14 pi/mi.0,42 m:(Ancho de surco de la sembradora):12 —13 pi/mi.0,40 m:(Ancho de surco de la sembradora):11 —12 pi/mi.0,35 m:(Ancho de surco de la sembradora):10 —11 pi/mi", 
        sexto: "",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/15.jpg"
        },{
          img: "../../assets/images/herbicida/20.jpg"
        },{
          img: "../../assets/images/herbicida/21.jpg"
        },{
          img: "../../assets/images/herbicida/22.jpg"
        }]
      }
    ];

    this.tratamientoSemilla = [
      {
        id: 1,
        primero: "NOD SOYA",
        segundo: "Composicion:\nBacterias Bradyrhizobium japonicum.",
        tercero: "Principales beneficios:\n1- Inoculación mas segura.\n2- Se asegura una cantidad optima de celulas bacterianas por semilla.\n3- Mejor fijación de nitrogeno.",
        cuarto: " Caracteristicas:\nPack completo para inoculación y tratamiento fungico de semilla.1 Bidon de 5 litros de cura semillas Germinex.1 Sachet de 5 litros de inoculante Grap Nod L.1 Sachet de 1,65 litros de protector Grap Extra Nod.Cantidad suficiente para tratar 2500 kg. de semilla.",
        quinto: "Concentración del inoculante:\n5x109 Ufc/ml en la fecha de vencimiento.",
        sexto: "",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/26.jpg"
        },{
          img: "../../assets/images/herbicida/27.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      },
      {
        id: 2,
        primero: "MG 360",
        segundo: "Caracteristicas:\n1- Estabilidad en ambientes de stress, manteniendo la materia grasa.\n2- Segmento de media y alta tecnología con alto potencial de rendimiento.\n3- Uniformidad de planta y capitulo.",
        tercero: "Comportamiento a Enfermedades:\nVerticilum: Moderadamente resistente.Oidio: Moderadamente resistente.",
        cuarto: "Aspectos Principales:\nTipo de híbrido: Simple.Ciclo: Intermedio.Contenido de aceite(%): 50 - 54%.Días de floración: 64 — 68.Días de cosecha: 115 —120 días.",
        quinto: "Caracteristicas de la planta:\nAquenio: Estriado claro.Capitulo: Excelente llenado Semidehicente.Altura de la planta(m): 1,65.Tallo: Resistencia fisica alta, Sanidad media-alta.Raíz: Excelente desarrollo radicular.",
        sexto: "Recomendaciones de Siembra:\nPoblación recomendada (pi/ha).Siembras tempranas   50.000 — 55.000.Siembras tardías     45.000 — 50.000.Recomendado para siembras tempranas y tardías.*Dependiendo de las condiciones favorables de clima y suelo.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/18.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        },{
          img: "../../assets/images/herbicida/14.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 3,
        primero: "DAS 688",
        segundo: "Caracteristicas:\nProducción en alta y media tecnologia, Adaptabilidad a todas las zonas maiceras, Estabilidad de producción, Excelente tolerancia a periodos de stress, Excelente Stay green",
        tercero: "Comportamiento a Enfermedades:\nPhaeosphaeria sp: Tolerante. Cercospora zea maydis: Tolerante.Bipolaris maydis: Tolerante. Sanidad de espigas: Excelente.Exserohilum turcium: Tolerante.Puccinia sorghi: Moderadamente susceptible.Puccinia polysora: Tolerante.",
        cuarto: "Aspectos Principales:\nTipo de híbrido Tripe. Color/Textura de grano Naranja - semiduro. Ciclo Intermedio - Tardio. Días de floración Invierno 60-65 Verano 55-60. Días de madurez fisiológica Invierno 125-130 Verano 120-125.",
        quinto: "Caracteristicas de la planta:\nAltura de la planta (m): 2,10.Altura insercción espigas (m): 0,98.Posición de la espiga a cosecha: Erecta.N° de hileras por mazorca: 20-22.Relacion grano-marlo(%): 80/20.Tipo de grano: Naranja, endosperma, duro", 
        sexto: "Recomendaciones de Siembra:\n50.000-550.000pl/ha (No exceder las poblaciones recomendadas) 55.000-60.000pl/ha (No exceder las poblaciones recomendadas).",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        },{
          img: "../../assets/images/herbicida/3.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      },{
        id: 4,
        primero: "DAS 710",
        segundo: "Caracteristicas:\nAltos rendimientos por hectárea. Muy bueno Stay green. Excelente sanidad.",
        tercero: "Comportamiento a Enfermedades:\nPhaeosphaeria maydis: Resistente. Cercospora zea maydis: Moderadamente resistente.Bipolaris maydis: Moderadamente resistente. Sanidad de espigas: Excelente.Exserohilum turcium: Moderadamente resistente.Puccinia sorghi: Resistente.Puccinia polysora: Resistente.",
        cuarto: "Aspectos Principales:\nTipo de híbrido Simple Color/Textura de grano Naranja - semiduro Ciclo Intermedio - Tardio Días de floración Invierno 60-65 Verano 55-60 Días de madurez fisiológica Invierno 125-130 Verano 120-125.",
        quinto: "Caracteristicas de la planta:\nSegmento de productores con alta y media tecnología. Buen comportamiento de suelo semipesado - pesado. Moderadamente tolerante a stress híbrico.",
        sexto: "Recomendaciones de Siembra:\n50.000-550.000pl/ha (No exceder las poblaciones recomendadas) 55.000-60.000pl/ha (No exceder las poblaciones recomendadas).",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/11.jpg"
        },{
          img: "../../assets/images/herbicida/22.jpg"
        },{
          img: "../../assets/images/herbicida/33.jpg"
        },{
          img: "../../assets/images/herbicida/10.jpg"
        }]
      },
      {
        id: 5,
        primero: "50A40",
        segundo: "Beneficios:\nCampeon en rendimiento Excelente sanidad Tolerante Ergot (Claviceps africana) Alto aporte de rastrojo Buen color de grano Siembra en verano e invierno.",
        tercero: "Comportamiento a Enfermedades:\nRoya: Tolerante.Helmintosporium: Altamente tolerante.Cercospora: Altamente tolerante.",
        cuarto: "Aspectos Principales:\nTipo de hibrido Tipo de panoja Ciclo Intermedio: Días a floración.Simple Abierta 130 días a cosecha 63 — 65 días",
        quinto: "Caracteristicas de la Planta:\nAltura total de la planta (m)  1,50m Altura desde la inserción a punta de panoja(m) 0,35 m Tallo Grueso, mayor tolerancia a quebrado. Panoja Panoja laxa, disminuye el ataque de plagas de panoja. Muy buena uniformidad de inserción de panoja.",
        sexto: "Recomendaciones de Siembra:\nPrincipales beneficios: 145.000-150.000pl/ha a cosecha durante invierno. 150.000-155.000pl/ha a cosecha durante el verano.1 Bolsa de semilla para 3 hectareas.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/25.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        },{
          img: "../../assets/images/herbicida/3.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      }
    ];

    this.coadyugante = [
      {
        id: 1,
        primero: "GRAP SENSOR",
        segundo: "Cultivos registrados:\nSoya, maíz, trigo, arroz, algodón, frijoles, avena y caña.",
        tercero: "Principales beneficios:\nEstabilidad de calda. Reduce incompatibilidad de mexclas.Usar solamente en productos que permiten reducir pH.Ideal para productos de dificil aplicación.",
        cuarto: "Ingrediente activo, Concentración y Formulación:\nP2O5 2,0% p/p 22g/L",
        quinto: "Dosis:\n50 -100m1/ha",
        sexto: "",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/33.jpg"
        },{
          img: "../../assets/images/herbicida/30.jpg"
        },{
          img: "../../assets/images/herbicida/31.jpg"
        },{
          img: "../../assets/images/herbicida/28.jpg"
        }]
      },
      {
        id: 2,
        primero: "CROP OIL",
        segundo: "Cultivos registrados:\nSoya, Maíz, Sorgo, Frejol, Girasol",
        tercero: "Caracteristicas:\nAceite mineral de alta calidad.",
        cuarto: "Principales beneficios:\nEstabilidad de calda.Escencial en la mezcla con los fungicidas, herbicidas y insecticidas.Mejora la calidad de aplicación.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nPetroleum Oil 720g/Lt + Alcohol E. 148g/Lt.",
        sexto: "Dosis:\nDe acuerdo con el segimiento general 0,5%v/v.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 3,
        primero: "GRAP SUPER GUN",
        segundo: "Cultivos registrados:\nSoya, maíz, trigo, arroz, algodón, frijoles, avena y caña.",
        tercero: "Principales beneficios:\nAcción anti deriva.Anti espuma.Distribución de gotas.Cobertura de gotas.Rompe la tensión superficial.Acción penetrante.Reductor de pH.",
        cuarto: "Ingrediente activo, Concentración y Formulación:\nN P2 05 | 5%p/p 16%p/p | 60g/Lt | 198g/Lt | d=1,20",
        quinto: "Dosis:\n30 - 80m1/ha.",
        sexto: "",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      }
    ];

    this.fertilizante = [
      {
        id: 1,
        primero: "BRANDT SMART MN",
        segundo: "Cultivos registrados:\nSoya, Maíz, Algodón, Caña.",
        tercero: "Nutrición vegetal:\nAporte nutricional es estadíos vegetativos del cultivo.",
        cuarto: "Principales beneficios:\n1- Tecnología específicamente diseñada para una mejor entrega foliar de micronutrientes. 2- Por su calidad de formulación permite un uso eficiente del Manganeso en mezcla con cualquier sal de glifosato. 3- El sistema provee una mejor compatibilidad física y biológica de los micronutrientes. 4- Entrega segura de los micronutrientes y su impacto sobre la salud total de la planta.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nNitrogeno 6 % p/v Azufre 3 % p/v Manganeso 6 % p/v.",
        sexto: "Dosis:\n1.0 Lt/ha.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/15.jpg"
        },{
          img: "../../assets/images/herbicida/26.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/10.jpg"
        }]
      },
      {
        id: 2,
        primero: "BRANDT SMART TRIO",
        segundo: "Cultivos registrados:\nSoya, Maíz, Algodón, Caña.",
        tercero: "Nutrición vegetal:\nAporte específico de nutrientes en etapa reproductiva del cultivo. ",
        cuarto: "Principales beneficios:\n1- Formulación única de azúcares alcoho -les, iguales a los carbohidratos producto de la fotosíntesis.\n2- Entrega segura de los micronutrientes y su impacto sobre la salud total de la planta.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nNitrógeno 4% Azufre 3% yUn Boro 0,25% p/v Manganeso 3 % p/v Zinc 3% p/v.",
        sexto: "Dosis:\n1.0 Lt/ha.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/33.jpg"
        },{
          img: "../../assets/images/herbicida/16.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/38.jpg"
        }]
      },
      {
        id: 3,
        primero: "MANNI-PLEX B MOLY",
        segundo: "Cultivos registrados:\nSoya, Maíz, Algodón, Caña.",
        tercero: "Nutrición vegetal:\nAporte nutricional efectivo en la formación de vainas.",
        cuarto: "Principales beneficios:\n1- Tecnología específicamente diseñada para una mejor entrega foliar de micronutrientes.\n2-El sistema provee una mejor compatibilidad física y biológica de los micronutrientes con varios plaguicidas, incluyendo el glifosato.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nNitrogeno 5 % p/p — 58,5 g/L p/v Boro 3,3 % p/p — 38,6 g/L p/v Molibdeno 0,5 % p/p — 5,85 g/L p/v.",
        sexto: "Dosis:\n1.0 Lt/ha.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 4,
        primero: "GRAP COMO RAIZ",
        segundo: "Cultivos registrados:\nSoya, Maíz, Trigo, Arroz.",
        tercero: "Caracteristicas:\nTratamiento de Semilla",
        cuarto: "Principales beneficios:\n1- Uniformidad en la germinación y mayor vigor.\n2- Potencia la fijación biológica de Nitro -geno, promueve un desarrollo vigoroso de las plantas, sistema radicular mas agresivo y mayor productividad.\n3- Compatible con todos los productos para tratamiento de semillas.\n4- Altos porcentajes de Cobalto que permiten un mejor metabolismo de las bacterias que producen nódulos.\n5- Altos porcentajes de Molibdeno que logran un mejor metabolismo del nitrógeno para la planta.",
        quinto: "Ingrediente activo, Concentración y Formulación: Cobalto:\n1,2 gr/Lt Molibdeno: 8,4 gr/Lt Acido giberélico.",
        sexto: "Dosis:\n200 cc/100 kg de semilla.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 5,
        primero: "GRAP EVIC-S",
        segundo: "Cultivos registrados:\nSoya, maíz, sorgo, frejol, girasol.",
        tercero: "Caracteristicas:\nFertilizante doble propósito, desalojante de plagas y nutricional.",
        cuarto: "Principales beneficios:\n1- Fertilizante liquido que contiene Nitrógeno y Azufre, en cantidades balanceadas. 2- Uso para cualquier cultivo 3- Reduce el PH del agua 4-Desalojante de plagas, el Azufre es: Irritante para los ojos. Irritante para los espiráculos y la tráquea. Causará dificultades respiratoria. Irritante para el tegumento. Prejudicial si ingerido. Nutricional, viene con Nitrogeno.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nNitrógeno: 14,6 gr/Lt. Azufre: 33,3 gr/Lt.",
        sexto: "Dosis:\n1 a 2 Lt/ha.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 6,
        primero: "GRAP GRAD",
        segundo: "Cultivos registrados:\nSoya.",
        tercero: "Caracteristicas:\nBiorregulador.",
        cuarto: "Principales beneficios:\n1- Plantas mas ramificadas.\n2- Plantas resistentes al acame.\n3- Mejor aprovechamiento de nutrientes.\n4- Plantas sanas con mayor numero de vainas y granos por vaina, mejor peso de granos y mayor productividad.\n5- Combinación exclusiva de magnesio y ácidos carboxílicos.\n6- Tallos mas resistentes y mayor cantidad de trifolios secundarios.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nMg 8,96 gr/Lt Exclusiva combinación de Ácidos Carboxílicos.",
        sexto: "Dosis:\n250 ml/ha.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 7,
        primero: "GRAP BORIC",
        segundo: "Cultivos registrados:\nSoya, maíz, sorgo, frejol, girasol.",
        tercero: "Principales beneficios:\nFavorece el crecimiento del tubo polínico, Incrementa la resistencia de las plantas y fomenta la formación de la pared celular.",
        cuarto: "Ingrediente activo, Concentración y Formulación:\nBoro 135g/Lt.",
        quinto: "Dosis:\n500ml/ha.",
        sexto: "",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 8,
        primero: "GRAP MANGANESO RR",
        segundo: "Cultivos registrados:\nSoya, maíz, sorgo, frejol, girasol.",
        tercero: "Principales beneficios:\nSuministra Mn en momento crucial, Mezcla que reduce golpe en las plantas y es compatible con Glyphosates.",
        cuarto: "Ingrediente activo, Concentración y Formulación:\nManganeso 88.9 g/L + Azufre 50.8 g/L.",
        quinto: "Dosis:\n1 Lt/ha.",
        sexto: "",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 9,
        primero: "GRAP PHIL",
        segundo: "Cultivos registrados:\nSoya, maíz, sorgo, frejol, girasol.",
        tercero: "Caracteristicas:\nFosfito de potasio",
        cuarto: "Principales beneficios:\n1. El fosfito estimula la producción de fitoalexinas de la planta, que es la defensa.\n2. Doble propósito, el potasio ayuda al llenado de grano.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nFosforo P205 + Potasio K20 429 g/It + 286,5 g/l.",
        sexto: "Dosis:\n1 Lt/ha. En aplicaciones junto con el fungicida.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 10,
        primero: "GRAP TOP FLUID",
        segundo: "Cultivos registrados:\nSoya, maíz, trigo, arroz, algodón, frijoles, avena y caña.",
        tercero: "Caracteristicas:\nComplejo de macro y micronutrientes con fosfito.",
        cuarto: "Principales beneficios:\nLa formulación quelatizada exclusiva, facilidad de aplicación, previene reacciones perjudiciales en la caldera de pulverización, suministro adecuado de Mn, mayor resistencia a enfermedades, aumentos de productividad.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nNitrógeno 18,9 g/It + Fosforo 9,45 g/It + Potasio 6,65 g/It + Magnesio 2,02 g/It+ Boro 0,13 + Manganeso 3,02 gr/It + Molibdeno 0,07 gr/It + Zinc 2,7 gr/It",
        sexto: "Dosis:\n1,5 Lt/ha.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 11,
        primero: "GRAP MONT 15",
        segundo: "Cultivos registrados:\nSoya, maíz, sorgo, frejol, girasol.",
        tercero: "Caracteristicas:\nComplejo de micronutrientes.",
        cuarto: "Principales beneficios:\nEs Compatible con Glyphosate y además contiene micronutrientes necesarios para el perfecto funcionamiento del aparato fotosintetico.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nManganeso + Zinc + Cobre + Molibdeno + Boro + Azufre 84.0 g/L + 42.0 g/L + 7.0 g/L + 1.4 g/L + 7.0 g/L + 70.0 g/L",
        sexto: "Dosis:\n1.0 — 2.0 Ltlha.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 12,
        primero: "GRAP NITRO",
        segundo: "Cultivos registrados:\nSoya, maíz, sorgo, frejol, girasol.",
        tercero: "Caracteristicas:\nConcentrado de nitrógeno.",
        cuarto: "Principales beneficios:\nAlto suministro de Nitrógeno, Fuente amoniacal y nítrica, Evita pérdidas de nitrógeno y es totalmente absorbido por las hojas.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nNitrogeno 390 g/L.",
        sexto: "Dosis:\n1 a 3 Lt/ha.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      },
      {
        id: 13,
        primero: "GRAP 30K",
        segundo: "Cultivos registrados:\nSoya, maíz, sorgo, frejol, girasol.",
        tercero: "Caracteristicas:\nPara llenado de grano.",
        cuarto: "Principales beneficios:\n1- Fertilizante de alta concentración.\n2- Alta solubilidad.\n3- Constituido íntegramente por potasio asimilable esencial en la fotosíntesis.\n4- Bajo índice salino.\n5- Mejor llenado de granos, mas pesados y mayor productividad.",
        quinto: "Ingrediente activo, Concentración y Formulación:\nPotasio 580gr/lts.",
        sexto: "Dosis:\n1 Lt/ha.",
        septimo: "",
        lista: [{
          img: "../../assets/images/herbicida/5.jpg"
        },{
          img: "../../assets/images/herbicida/6.jpg"
        },{
          img: "../../assets/images/herbicida/7.jpg"
        },{
          img: "../../assets/images/herbicida/8.jpg"
        }]
      }
    ];
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



/*this.fungicida = [
      {
        id: 1,
        nombre: "Aproach Prima",
        descripcion:
          "Ingrediente Activo: Picoxystrobin + Cyproconazole, Concentracion: 200g/L, Formulacion:SC",
        beneficios:
          "Tradición y confianza en control de roya, Control inmediato sin fitotoxicidad, Excelente costo por beneficio, Versatilidad en el momento de uso",
        tipoId: "2",
        imagenId: 24
      },
      {
        id: 2,
        nombre: "Viovan",
        descripcion:
          "Ingrediente Activo: Picoxystrobin + Prothioconazole, Concentracion: 100g/L + 116.7g/L, Formulacion:EC",
        beneficios:
          "Excelente performance, Formulación única, Control efectivo, Tecnologia LPU(Lista para usar), Tranquilidad y confianza, Mezcla de los dos mejores ingredientes activos para roya",
        tipoId: "2",
        imagenId: 25
      },
      {
        id: 3,
        nombre: "Cerbero",
        descripcion:
          "Ingrediente Activo: Pycoxistrobin + Thifluzamide + Cyproconazole, Concentracion: 200g/L + 250g/L + 120 g/L, Formulacion:SC",
        beneficios:
          "Carboxamida única en el mercado, Eficaz para el control de la roya, Mezcla exclusiva para las enfermedades foliares",
        tipoId: "2",
        imagenId: 26
      },
      {
        id: 4,
        nombre: "Carbezim",
        descripcion:
          "Ingrediente Activo: Carbendazim, Concentracion: 500g/L, Formulacion:SC",
        beneficios:
          "Excelente control sobre mancha anillada y E.F.C., Excelente costo por beneficio",
        tipoId: "2",
        imagenId: 27
      },
      {
        id: 5,
        nombre: "Concert",
        descripcion:
          "Ingrediente Activo: Pyraclostrobin + Difenoconazole, Concentracion: 150g/L + 150g/L, Formulacion:SC",
        beneficios:
          "Control eficaz para E.F.C. y mancha anillada, Exclusiva mezcla de ingredientes activos para E.F.C. y manchas, Adecuado para implementar un programa de manejo de enfermedades",
        tipoId: "2",
        imagenId: 28
      },
      {
        id: 6,
        nombre: "Innova",
        descripcion:
          "Ingrediente Activo: Tebuconazole, Concentracion: 430g/L, Formulacion:SC",
        beneficios:
          "Alta tasa de penetración en el tejido foliar: Rápida acción, Versatilidad de uso en diferentes cultivos, Efectivo control de la roya asiática",
        tipoId: "2",
        imagenId: 29
      },
      {
        id: 7,
        nombre: "Mancoparts",
        descripcion:
          "Ingrediente Activo: Mancozeb, Concentracion: 800g/Kg, Formulacion:WP",
        beneficios:
          "El protector ideal para el control de enfermedades, Suspensibilidad perfecta en la formulación, Ventana de aplicación flezible",
        tipoId: "2",
        imagenId: 30
      },
      {
        id: 8,
        nombre: "Piryzol 750 WP",
        descripcion:
          "Ingrediente Activo: Tricyclazone, Concentracion: 750g/Kg, Formulacion:WP",
        beneficios:
          "Control eficiente de Bruzone en arroz, Versatibilidad de uso en mezcla con Concert, Excelente costo por beneficio",
        tipoId: "2",
        imagenId: 31
      },
      {
        id: 9,
        nombre: "Selective Plus",
        descripcion:
          "Ingrediente Activo: Flutriafol, Concentracion: 250g/L, Formulacion:SC",
        beneficios:
          "Control preventivo y curativo para roya, Residualidad extendida en mezcla con Mancoparts",
        tipoId: "2",
        imagenId: 32
      },
      {
        id: 10,
        nombre: "Surpress",
        descripcion:
          "Ingrediente Activo: Cyproconazole, Concentracion: 400g/L, Formulacion:SC",
        beneficios:
          "Fungicida de mayor eficacia para un control de roya rápido y contundente, alta concentración de ingrediente activo, Dosis baja con alto efecto de control, No genera fitotoxicidad",
        tipoId: "2",
        imagenId: 33
      },
      {
        id: 11,
        nombre: "Nc-Kasin",
        descripcion:
          "Ingrediente Activo: Kasugamycin, Concentracion: 20g/L, Formulacion:EC",
        beneficios:
          "Amplio rango de acción, Ingrediente activo de origen biológico, Rápida absorción y disribución por la planta, Efecto sistémico ascendente desde la raiz",
        tipoId: "2",
        imagenId: 34
      }
    ];*/

/*this.herbicida = [
      {
        id: 1,
        nombre: "Agrozina 50 SC",
        descripcion:
          "Ingrediente Activo: Atrazine, Concentracion: 500g/L, Formulacion:SC",
        beneficios:
          "Producto Selectivo, Excelente en mezcla con Nifuron y Spider",
        tipoId: "1",
        imagenId: 1
      },
      {
        id: 2,
        nombre: "Benton",
        descripcion:
          "Ingrediente Activo: Bentazone, Concentracion: 480g/L, Formulacion:SL",
        beneficios:
          "Herbicida post emergente y selectivo para soya, Control de malezas resistentes a glifosato, Versatilidad de uso en mezclas",
        tipoId: "1",
        imagenId: 2
      },
      {
        id: 3,
        nombre: "Charter 240 EC",
        descripcion:
          "Ingrediente Activo: Clethodim, Concentracion: 240g/L, Formulacion:EC",
        beneficios:
          "Efectivo para el control de gramíneas, Producto de rápida absorción detiene el crecimiento en 24 Hrs, Selectivo para soya",
        tipoId: "1",
        imagenId: 3
      },
      {
        id: 4,
        nombre: "Clomax 480 EC",
        descripcion:
          "Ingrediente Activo: Clomazone, Concentracion: 480g/L, Formulacion:EC",
        beneficios:
          "Producto selectivo para los cultivos de soya y arroz, Flexibilidad de uso en pre y post emergencia inicial de las malezas, Excelente para rotación de mecanismos de acción",
        tipoId: "1",
        imagenId: 4
      },
      {
        id: 5,
        nombre: "Clorimur 250 WP",
        descripcion:
          "Ingrediente Activo: Chlorimuronethyl, Concentracion: 250g/Kg, Formulacion:WP",
        beneficios:
          "Excelente control de malezas Cyperaceas, Buena opción para el control de malezas resistentes a glifosato, Excelente versatilidad de uso con otros herbicidas para portenciar las mezclas",
        tipoId: "1",
        imagenId: 5
      },
      {
        id: 6,
        nombre: "Fenox 10 EC",
        descripcion:
          "Ingrediente Activo: Fenoxaprop-Pethyl, Concentracion: 100g/L, Formulacion:EC",
        beneficios:
          "Post emergente de excelente control de malezas gramíneas, Rapida absorcion del producto, Excelente opción para rotación de ingredientes activos graminícidas",
        tipoId: "1",
        imagenId: 6
      },
      {
        id: 7,
        nombre: "Gliforte Plus",
        descripcion:
          "Ingrediente Activo: Glyphosate Isopropylammonium, Concentracion: 490g/L, Formulacion:SL",
        beneficios:
          "Menor dosis con el mismo control, Mejor performance del producto por su alta concentración, Mejor estabilidad debido a su formulación con sal IPA",
        tipoId: "1",
        imagenId: 7
      },
      {
        id: 8,
        nombre: "GluForte",
        descripcion:
          "Ingrediente Activo: Glufosinateammonium, Concentracion: 200g/L, Formulacion:SL",
        beneficios:
          "Control de malezas tolerantes a glifosato, Amplio espectro de control de malezas gramíneas y hoja ancha, Alta solubilidad, resultando en rápida acción",
        tipoId: "1",
        imagenId: 8
      },
      {
        id: 9,
        nombre: "Lactoforte",
        descripcion:
          "Ingrediente Activo: Lactofen, Concentracion: 240g/L, Formulacion:EC",
        beneficios:
          "Herbicida selectivo en soya para control de malezas de hoja ancha, Excelente control de malezas tolerantes a glifosato, En mezcla con Gluforte genera control total de malezas resistentes a glifosato",
        tipoId: "1",
        imagenId: 9
      },
      {
        id: 10,
        nombre: "Prime-S",
        descripcion:
          "Ingrediente Activo: S-Metolachlor, Concentracion: 960g/L, Formulacion:EC",
        beneficios:
          "Menor dosis con el mismo control, Mejor performance del producto por su alta concentración, Mejor estabilidad debido a su formulación con sal IPA",
        tipoId: "1",
        imagenId: 10
      },
      {
        id: 11,
        nombre: "Randon",
        descripcion:
          "Ingrediente Activo: Picloram + 2.4 D, Concentracion: 64g/L + 240 g/L, Formulacion:SL",
        beneficios:
          "Menor dosis con el mismo control, Mejor performance del producto por su alta concentración, Mejor estabilidad debido a su formulación con sal IPA",
        tipoId: "1",
        imagenId: 11
      },
      {
        id: 12,
        nombre: "Spider",
        descripcion:
          "Ingrediente Activo: Diclosulam, Concentracion: 840g/Kg, Formulacion:WDG",
        beneficios:
          "Excelente performance para siembra directa, Baja retención de rastrojos, Se absorbe radicular y foliarmente",
        tipoId: "1",
        imagenId: 12
      },
      {
        id: 13,
        nombre: "Zetapyr 100 SL",
        descripcion:
          "Ingrediente Activo: Imazethapyr, Concentracion: 100g/L, Formulacion:SL",
        beneficios:
          "Excelente complemento del glifosato para control de malezas difíciles, Producto selectivo en soya, Post emergente para el control de malezas dificiles",
        tipoId: "1",
        imagenId: 13
      },
      {
        id: 14,
        nombre: "Clincher",
        descripcion:
          "Ingrediente Activo: Cyhalofopbutyl, Concentracion: 180g/L, Formulacion:EC",
        beneficios:
          "Herbicida sistérmico post emergente selectivo para control de malezas gramíneas en arroz, Producto de rápido absorción deteniendo en crecimiento en pocas horas",
        tipoId: "1",
        imagenId: 14
      },
      {
        id: 15,
        nombre: "Galactic HL",
        descripcion:
          "Ingrediente Activo: Fomesafen, Concentracion: 250g/L, Formulacion:SL",
        beneficios:
          "Buena opción para control de malezas resistentes a glifosato, Puede usarse en cualquier estado de desarrollo del cultivo",
        tipoId: "1",
        imagenId: 15
      },
      {
        id: 16,
        nombre: "Galant HL",
        descripcion:
          "Ingrediente Activo: Haloxyfop, Concentracion: 540g/L, Formulacion:EC",
        beneficios:
          "Rápida absorción y traslocación eliminando malezas rápidamente, Selectivo para los cultivos de soya y frejol",
        tipoId: "1",
        imagenId: 16
      },
      {
        id: 17,
        nombre: "Pacto",
        descripcion:
          "Ingrediente Activo: Chloransulan, Concentracion: 840g/Kg, Formulacion:WG",
        beneficios:
          "100% Selectivo para el cultivo de soya, No produce fito toxicidad, Efectivo control de malezas difíciles",
        tipoId: "1",
        imagenId: 17
      },
      {
        id: 18,
        nombre: "Panzer Gold",
        descripcion:
          "Ingrediente Activo: Chloransulammethyl, Concentracion: 840g/Kg, Formulacion:WG",
        beneficios:
          "Compartible con una alta gama de herbicidas y formulaciones, No selectivo post emergente, Sistémico de gran movilidad y absorción acelerada",
        tipoId: "1",
        imagenId: 18
      },
      {
        id: 19,
        nombre: "Pyribac Plus",
        descripcion:
          "Ingrediente Activo: Bispyribac-sodium, Concentracion: 400g/L, Formulacion:SC",
        beneficios:
          "Alta selectividad en el cultivo de arroz, Excelente control de gramíneas y hoja ancha",
        tipoId: "1",
        imagenId: 19
      },
      {
        id: 20,
        nombre: "Starane Xtra",
        descripcion:
          "Ingrediente Activo: Fluroxypyr acid, Concentracion: 480g/L, Formulacion:EC",
        beneficios:
          "Especial para la eliminación de soya guancha, Excelente compañero del glisofato en barbechos cortos, casi nula residualidad en el suelo",
        tipoId: "1",
        imagenId: 20
      },
      {
        id: 21,
        nombre: "Mazapyr 250 SL",
        descripcion:
          "Ingrediente Activo: Imazapyr, Concentracion: 250g/L, Formulacion:SL",
        beneficios:
          "Herbicida no selectivo de acción pre y post emergente, Efecto residual prolongado, Control total de vegetación",
        tipoId: "1",
        imagenId: 21
      },
      {
        id: 22,
        nombre: "Nifuron 75 WG",
        descripcion:
          "Ingrediente Activo: Nicosulfuron, Concentracion: 750g/Kg, Formulacion:WG",
        beneficios:
          "Selectivo para el cultivo de maíz, Herbicida post emergente con amplio espectro en el control de malezas gramíneas, Baja dosis con un buen costo por beneficio",
        tipoId: "1",
        imagenId: 22
      },
      {
        id: 23,
        nombre: "Secaforte 200",
        descripcion:
          "Ingrediente Activo: Paraquat dechloride, Concentracion: 276g/L, Formulacion:SL",
        beneficios:
          "Desecante no selectivo para soya y malezas, Control de calidad en origen garantizado concentración y formulación",
        tipoId: "1",
        imagenId: 23
      }
    ];*/

/*this.insecticida = [
      {
        id: 1,
        nombre: "Agroalpha",
        descripcion:
          "Ingrediente Activo: Alpha-cypermethrin, Concentracion: 100g/L, Formulacion:EC",
        beneficios:
          "Gran efecto de choque, Buena eficacia en dosis bajas para control de lepidopteros, Mestra acción ovicida, Reemplaza los piretroides convencionales",
        tipoId: "3",
        imagenId: 35
      },
      {
        id: 2,
        nombre: "Abamez Plus",
        descripcion:
          "Ingrediente Activo: Abamectin, Concentracion: 50g/L, Formulacion:EC",
        beneficios:
          "Control eficaz sobre ácaros, Dosis baja con alto efecto de control, Excelente costo por beneficio",
        tipoId: "3",
        imagenId: 36
      },
      {
        id: 3,
        nombre: "Agrothrin",
        descripcion:
          "Ingrediente Activo: Bifenthrin, Concentracion: 100g/L, Formulacion:EC",
        beneficios:
          "Excelente efecto de choque, Efectivo control de complejo de lepidopteros, Efectivo control de complejo de chinches, Ideal para control preventivo de mosca barrenadora",
        tipoId: "3",
        imagenId: 37
      },
      {
        id: 4,
        nombre: "Agrogite",
        descripcion:
          "Ingrediente Activo: Propargite, Concentracion: 730g/L, Formulacion:EC",
        beneficios:
          "Acaricida rápida acción y larga residualidad, Excelente performance con alta y baja infestación de ácaros, Amplio espectro de control",
        tipoId: "3",
        imagenId: 38
      },
      {
        id: 5,
        nombre: "Dinno",
        descripcion:
          "Ingrediente Activo: Dinotefuran, Concentracion: 700g/Kg, Formulacion:WG",
        beneficios:
          "Nueva generación de Neonicotinoides, Alto poder de volteo y residualidad, Banda verde con menor impacto ambiental, Control de complejo de chinches",
        tipoId: "3",
        imagenId: 39
      },
      {
        id: 6,
        nombre: "Delete",
        descripcion:
          "Ingrediente Activo: Chlorfenapyr, Concentracion: 240g/L, Formulacion:SC",
        beneficios:
          "Producto de doble proposito: Insecticida y acaricida, Amplio control de larvas de lepidópteros en diferentes estadios, No es repelente y es asi imposible de ser detectado por el insecto",
        tipoId: "3",
        imagenId: 40
      },
      {
        id: 7,
        nombre: "Fenuron Plus",
        descripcion:
          "Ingrediente Activo: Lufenuron, Concentracion: 100g/L, Formulacion:SC",
        beneficios:
          "Producto versátil de fácil mezcla con productos de choque, Selectivo con insectos benéficos, Excelente consto por beneficio",
        tipoId: "3",
        imagenId: 41
      },
      {
        id: 8,
        nombre: "Fatal 480 EC",
        descripcion:
          "Ingrediente Activo: Clorpirifos, Concentracion: 480g/L, Formulacion:EC",
        beneficios:
          "Acción de contacto ingestión e inhalacion, Rápido efecto de volteo, Buena residualidad, Excelente compatibilidad con otros productos",
        tipoId: "3",
        imagenId: 42
      },
      {
        id: 9,
        nombre: "Flycontrol",
        descripcion:
          "Ingrediente Activo: Acetamiprid, Concentracion: 700g/Kg, Formulacion:WG",
        beneficios:
          "Rápida acción y efecto prolongado, Control efectivo de ninfas de mosca blanca, Control sobre el complejo de chinches, Excelente costo por beneficio",
        tipoId: "3",
        imagenId: 43
      },
      {
        id: 10,
        nombre: "Fiprogem 800 WG",
        descripcion:
          "Ingrediente Activo: Fipronil, Concentracion: 800g/Kg, Formulacion:WG",
        beneficios:
          "Altamente efectivo y contundente sobre un amplio rango de plagas",
        tipoId: "3",
        imagenId: 44
      },
      {
        id: 11,
        nombre: "Lambdatrin 50 EC",
        descripcion:
          "Ingrediente Activo: Lambda-cyhalothrin, Concentracion: 50g/L, Formulacion:EC",
        beneficios:
          "Menor volatilidad, Mejor solubilidad en agua, No es perjudicial para micro organismos en dosis adecuadas, Excelente control y eficacia",
        tipoId: "3",
        imagenId: 45
      },
      {
        id: 12,
        nombre: "Joker",
        descripcion:
          "Ingrediente Activo: Bifenthrin + Thiamethoxam, Concentracion: 180.2g/L, Formulacion:SC",
        beneficios:
          "Rápida acción y larga residualidad, Espectro de control que se amplia hasta mosca blanca, La mas alta concentración de Bifentrin en mezcla del mercado, Mayor efecto de volteo sobre complejo de chinches",
        tipoId: "3",
        imagenId: 46
      },
      {
        id: 13,
        nombre: "Thorzagro",
        descripcion:
          "Ingrediente Activo: Thiamethoxam, Concentracion: 333g/L, Formulacion:SC",
        beneficios:
          "Versatibilidad de uso para posibles mezclas en tanque, Excelente costo por beneficio, Excelente para el control de chinches",
        tipoId: "3",
        imagenId: 47
      },
      {
        id: 14,
        nombre: "Parmex",
        descripcion:
          "Ingrediente Activo: Emamectin benzoate, Concentracion: 53g/KG, Formulacion:WG",
        beneficios:
          "Formulación diferenciada sin trancado de boquilla, Baja toxicidad",
        tipoId: "3",
        imagenId: 48
      },
      {
        id: 15,
        nombre: "Tracer",
        descripcion:
          "Ingrediente Activo: Spinosad, Concentracion: 480g/L, Formulacion:SC",
        beneficios:
          "Contundente control de gusano cogollero, Altamente efectivo en bajas dosis, Detiene la alimentacion de la plaga sin seguir dañando el cultivo, No existe resistencia cruzada con insecticidas sentéticos o biológicos",
        tipoId: "3",
        imagenId: 49
      },
      {
        id: 16,
        nombre: "Compass",
        descripcion:
          "Ingrediente Activo: Methoxfenozide + Spinosad, Concentracion: 104g/L, Formulacion:SC",
        beneficios:
          "Excelente efecto de choque, Alta residualidad, Excelente control de larvas de lepidópteros y trips",
        tipoId: "3",
        imagenId: 50
      },
      {
        id: 17,
        nombre: "Dacloprid 350 SC",
        descripcion:
          "Ingrediente Activo: Imidacioprid, Concentracion: 350g/L, Formulacion:SC",
        beneficios:
          "Insecticida sistémico y residual actúa por contacto e ingestión, Muestra acción anti alimentaria deteniendo el daño en cultivo, Acción repelente en adultos impidiendo la puesta de huevos",
        tipoId: "3",
        imagenId: 51
      },
      {
        id: 18,
        nombre: "Transform@",
        descripcion:
          "Ingrediente Activo: Sulfoxaflor, Concentracion: 500g/Kg, Formulacion:WG",
        beneficios:
          "Maxima eficacia para el control de pulgones en cereales, Amigable con el ambiente producto banda verde, Altamente sistémico actúa por contacto e ingestión, mecanismo de acción único en el mercado",
        tipoId: "3",
        imagenId: 52
      }
    ];*/

/*this.semilla = [
      {
        id: 1,
        nombre: "DM 6.8i",
        descripcion:
          "Habito de crecimiento: Indeterminado, Ciclo: 94 dias, Potencial de ramificacion: Medio, Peso 1000 semillas: 135-170g",
        beneficios:
          "Muy buen porte vegetativo, Excelente arquitectura de planta, Grano muy pesado, Excelente comportamiento en ambientes A y B, Promedio de vainas de 3 y 4 vainas elevado, Potencial genético de alto rendimiento",
        tipoId: "4",
        imagenId: 53
      },
      {
        id: 2,
        nombre: "DM POTENCIA",
        descripcion:
          "Habito de crecimiento: Indeterminado, Ciclo: 93 dias, Potencial de ramificacion: Medio, Peso 1000 semillas: 130-160g",
        beneficios:
          "Porte vegetativo defensivo, Excelente estabilidad, Destacado comportamiento en ambientes A y B, Potencial genético de alto rendimiento",
        tipoId: "4",
        imagenId: 54
      },
      {
        id: 3,
        nombre: "DM 62R63 STS",
        descripcion:
          "Habito de crecimiento: Indeterminado, Ciclo: 87 dias, Potencial de ramificacion: Medio, Peso 1000 semillas: 150-165g",
        beneficios:
          "Excelente alternativa para siembras de cierre, por su precocidad, Excelente comportamiento frente al vuelco, Buena adaptacion a ambientes de alta tecnologia, Potencial genético de alto rendimiento",
        tipoId: "4",
        imagenId: 55
      },
      {
        id: 4,
        nombre: "DM 8473 RSF",
        descripcion:
          "Habito de crecimiento: Indeterminado, Ciclo: 101 dias, Potencial de ramificacion: Bajo, Peso 1000 semillas: 130-160g",
        beneficios:
          "Excelente comportamiento en ambientes A y B, Promedio de vainas de 3-4 y 5 elevado, Sanidad foliar excelente, Variedad de altísimo potencial genético",
        tipoId: "4",
        imagenId: 56
      },
      {
        id: 5,
        nombre: "Jisunú101 Híbrido de Sorgo",
        descripcion:
          "Tipo de Híbrido: Simple, Ciclo: Corto, Dias a cosecha: 100 dias verano y 110 dias invierno, Altura de planta: 150-170cm",
        beneficios:
          "Gran adaptabilidad a todas las zonas productivas, Excelente estabilidad, Por su tipo de panoja no permite la f{acil alimentacion de los pajaros, Tolerante al Ergot, Muy fácil desgrane a la hora de cosecha",
        tipoId: "4",
        imagenId: 57
      },
      {
        id: 6,
        nombre: "Pioneer 85P20",
        descripcion:
          "Ciclo: Intermedio , Dias a cosehca: 124 dias, Altura de planta: 112cm, Tipo de Panoja: semi abierta, Color de grano: Marrón claro",
        beneficios:
          "Material altamente rendidor, Excelente peso especifico de granos, Apto para verano e invierno,  Ciclo intermedio",
        tipoId: "4",
        imagenId: 58
      },
      {
        id: 7,
        nombre: "Pioneer 50A40",
        descripcion:
          "Ciclo: Intermedio, Dias a cosecha: 150 dias, Altura de planta: 143cm, Tipo de panoja: abierta, Color de grano: Castaño oscuro",
        beneficios:
          "Excelente sanidad (Roya-Cercospora y Fusarium), Panoja laxa, Uniformidad en inserción de panoja, Excelente aporta de materia seca",
        tipoId: "4",
        imagenId: 59
      },
      {
        id: 8,
        nombre: "Pioneer P4039",
        descripcion:
          "Ciclo: Intermedio/Largo, Dias a cosecha: 138 dias, Altura de planta: 240 cm, Cobertura de mazorca: 100%, Color de grano: anaranjado",
        beneficios:
          "Híbrido doble propósito grano y ensilaje, Probado en todas las zonas maiceras, Ideal para la industria cervecera y alimento de aves",
        tipoId: "4",
        imagenId: 60
      },
      {
        id: 9,
        nombre: "Pioneer P64LL95",
        descripcion:
          "Ciclo: Super precoz/largo, Dias a cosecha: 105 - 108 dias, Altura de planta 120 - 150 cm, Diámetro de capitulo 15-18 cm",
        beneficios:
          "Híbrido de ciclo super precoz, Alta velocidad de secado, Color del grano negro y contenido de materia grasa hasta 50%",
        tipoId: "4",
        imagenId: 61
      }
    ];*/

/*this.coadyugante = [
      {
        id: 1,
        nombre: "Grap Sensor",
        descripcion:
          "Estabilizador de calda, Reductor de incompatibilidad de mezclas",
        beneficios:
          "Estabilidad de calda, Reduce incompatibilidad de mezclas, Ideal para productos de difícil aplicación",
        tipoId: "6",
        imagenId: 69
      },
      {
        id: 2,
        nombre: "Grap Super Gun",
        descripcion:
          "Anti deriva, Anti espumante, Sufactante, Reductor de pH Penetrante",
        beneficios:
          "Acción anti deriva, Anti espumante, Mejor cobertura de gotas, Acción penetrante, Reductor de pH",
        tipoId: "6",
        imagenId: 70
      }
    ];*/

/*this.fertilizante = [
      {
        id: 3,
        nombre: "Grap 15 Mol",
        descripcion: "Ingrediente activo: Molibdeno, Concentración: 225g/L",
        beneficios:
          "Por su alta concentración de molibdeno activa los nódulos de la planta, Asegura la producción de nitrógeno de la planta, Mayor rendimiento",
        tipoId: "7",
        imagenId: 71
      },
      {
        id: 4,
        nombre: "Grap Boric Fertilizante Foliar",
        descripcion: "Ingrediente activo: Boro, Concentración: 135g/L",
        beneficios:
          "Favorece al crecimiento del tubo polínico, Menor indice de aborto foliar, Mayor cantidad de flores, Mayor cantidad de vainas por planta, Mayor rendimiento",
        tipoId: "7",
        imagenId: 72
      },
      {
        id: 5,
        nombre: "Grap Evic-s Fertilizante Foliar",
        descripcion:
          "Ingrediente activo: Nitrógeno + Azufre, Concentración: 146.3g/L + 332.5g/L",
        beneficios:
          "Contiene nitrógeno y azufre en cantidades balanceadas, Desalojante de plagas por su contenido de azufre",
        tipoId: "7",
        imagenId: 73
      },
      {
        id: 6,
        nombre: "Grap Grad Fertilizante Foliar",
        descripcion: "Ingrediente activo: Magnesio, Concentración: 89.6g/L",
        beneficios:
          "Favorece el crecimiento del tubo polínico, Menor indice de aborto foliar, Mayor cantidad de flores, Mayor cantidad de vainas por planta, Maor rendimiento",
        tipoId: "7",
        imagenId: 74
      },
      {
        id: 7,
        nombre: "Grap Mont 15 Fertilizante Foliar",
        descripcion:
          "Ingrediente activo: Azufre + Boro + Cobre + Manganeso + Molibdeno + Zinc, Concentración: 70g/L + 7g/L + 7g/L + 84g/L + 1.4g/L + 42g/L",
        beneficios:
          "Favorece el crecimiento optimo de la planta, Contiene micro nutrientes esenciales, Es compatible para aplicaciones con glifosato, Mayor rendimiento",
        tipoId: "7",
        imagenId: 75
      },
      {
        id: 8,
        nombre: "Grap Nitro",
        descripcion: "Ingrediente activo: Nitrógeno, Concentración: 390g/L",
        beneficios:
          "Alto suministro de nitrógeno, Evita perdidas de nitrógeno, Nitrógeno totalmente disponible para la planta, Mayor renimiento",
        tipoId: "7",
        imagenId: 76
      },
      {
        id: 9,
        nombre: "Grap Phil Fertilizante Foliar",
        descripcion:
          "Ingrediente activo: Fósforo P2O5 + Potasio K2o, Concentración: 429g/L + 286g/L",
        beneficios:
          "Estimula las defensas de la planta, Potencia el llenado de granos, Mayor rendimiento",
        tipoId: "7",
        imagenId: 77
      },
      {
        id: 10,
        nombre: "Grap Top Fluid plus",
        descripcion:
          "Ingrediente activo: Nitrógeno + Fósforo + Potasio + Magnesio + oro + Manganeso + Molibdeno + Zinc, Concentración: 18.9g/L + 9.45g/L + 6.65g/L + 2.02g/L + 0.13g/L + 3.02g/L + 0.07g/L + 2.7g/L",
        beneficios:
          "Mayor resistencia a enfermedades, Formulación quelatizada exclusiva, Mayor rendimiento",
        tipoId: "7",
        imagenId: 78
      }
    ];*/

/*this.tratamientoSemilla = [
      {
        id: 1,
        nombre: "Agrocarb Insecticida",
        descripcion: "Thiodicarb, Concentración: 375g/L, Formularios SC",
        beneficios:
          "Excelente control de larvas de lepidópteros en aplicacion foliar y tratamiento de semillas, Rápida translocacion dentro de la planta, Alta residualidad",
        tipoId: "5",
        imagenId: 62
      },
      {
        id: 2,
        nombre: "Germinex Fungicida",
        descripcion:
          "Ingrediente Activo: Carboxin + Thiram, Concentración: 200g/L + 200g/L, Formulación:FS",
        beneficios:
          "Plantas uniformes en la germinación, Excelente costo por beneficio, Plantas protegidas de los patógenos del suelo",
        tipoId: "5",
        imagenId: 63
      },
      {
        id: 3,
        nombre: "Grap CoMo raiz",
        descripcion:
          "Ingrediente Activo: Cobalto + Molibdeno + ácido giberélico, Concentración: 1.2g/L + 8.4g/L",
        beneficios:
          "Uniformidad en la germinación y mayor vigor, Potencia la fijación biológica del nitrógeno, Mayor agresividad y vigor radicular, Compatible con todos los productos para tratamiento de semilla",
        tipoId: "5",
        imagenId: 64
      },
      {
        id: 4,
        nombre: "Grap Noda",
        descripcion:
          "Ingrediente Activo: Azospirillum brasilense, Concentración: 2x108 UFC/ml, Formulación: Líquido",
        beneficios:
          "Mejor asimilación del nitrógeno, Abastecimiento de nitrógeno asegurado para la planta, Mayor rendimiento",
        tipoId: "5",
        imagenId: 65
      },
      {
        id: 5,
        nombre: "Nod Soya Premium",
        descripcion:
          "El tratamiento de semillas mas completo y efectivo del mercado",
        beneficios:
          "El mejor arranque para su cultivo, El pack de tratamiento de semilla mas completo del mercado, Tranquilidad en la siembra, Mayor rendimiento",
        tipoId: "5",
        imagenId: 66
      },
      {
        id: 6,
        nombre: "Grap NODl@",
        descripcion:
          "Ingrediente activo: Bradyrhizobium japonicum, Estirpes: SEMIA 5079 y SEMIA 5080, Concentración de bacterias: 5x109 UFC/ml",
        beneficios:
          "Potencia la fijación biológica del nitrógeno, Asegura el abastecimiento de nitrógeno para la planta, Mayor rendimiento",
        tipoId: "5",
        imagenId: 67
      },
      {
        id: 7,
        nombre: "Coverseed Fungicida",
        descripcion:
          "ingrediente Activo: Fludioxonil + Metalaxyl-M + Azoxystrobin, Concentración: 12.5g/L + 37.5g/L + 75g/L, Formulación:FS",
        beneficios:
          "Amplio espectro de control para las enfermedades de arranque, Su cultivo protegido desde el inicio, Único fungicida en tratamiento de semilla con triple mezcla, Tranquilidad en la siembra",
        tipoId: "5",
        imagenId: 68
      }
    ];*/
