class Vehicle {
  constructor(model, brand, color, year, transmission, fuelType, value) {
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.transmission = transmission;
    this.fuelType = fuelType;
    this.value = value;
  }

  getModel() {
    return this.model;
  }
  setModel(newModel) {
    this.model = newModel;
  }

  getBrand() {
    return this.brand;
  }
  setBrand(newBrand) {
    this.brand = newBrand;
  }

  getColor = () => this.color;
  setColor = (newColor) => (this.color = newColor);

  getYear = () => this.year;
  setYear = (newYear) => (this.year = newYear);

  getTransmission = () => this.transmission;
  setTransmission = (newTransmission) => (this.transmission = newTransmission);

  getFuelType = () => this.fuelType;
  setFuelType = (newFuelType) => (this.fuelType = newFuelType);

  getValue = () => this.value;
  setValue = (newValue) => (this.value = newValue);
}

const car = new Vehicle(
  "Gol",
  "VW",
  "silver",
  "2001",
  "manual",
  "gasoline",
  10000
);

console.log(car);

class Motorcicle extends Vehicle {
  constructor(model, brand, color, year, transmission, fuelType, tireNum) {
    super(model, brand, color, year, transmission, fuelType);
    this.tireNum = tireNum;
  }

  empinar = () => console.log("vrum vrum...");
}

const moto = new Motorcicle(
  "titan 125",
  "yamaha",
  "black",
  "2020",
  "manual",
  "gasoline",
  "5000",
  2
);

console.log(moto);

moto.empinar();
