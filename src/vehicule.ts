// Définition de l'interface Vehicule
interface Vehicule {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implémentation de la classe Voiture qui implémente l'interface Vehicule
class Voiture implements Vehicule {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Moteur de la voiture démarré");
  }
}

// Création d'une instance de Voiture
const maVoiture = new Voiture("Toyota", "Corolla", 2022);

// Appel de la méthode start
maVoiture.start();
