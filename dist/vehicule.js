"use strict";
class Voiture {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Moteur de la voiture démarré");
    }
}
const maVoiture = new Voiture("Toyota", "Corolla", 2022);
maVoiture.start();
