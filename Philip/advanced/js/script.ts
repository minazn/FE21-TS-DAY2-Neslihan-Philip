//@ts-check

// weight in kg
class Vehicles {
  constructor(public name: string, public model: string, public color: string, public fuel: string, public weight: number, public year: number, public kilometer: number, public seats: number, public image: string) { }
  CalculatePrice(): number {
    // personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price
    let fuel_mul: number = (this.fuel == "Diesel") ? (2*Math.random() + 1) : (Math.random() + 1);
    let model_val: number = this.model.charCodeAt(0);
    let price = this.kilometer / this.seats * fuel_mul - model_val - this.year
    return Math.round(price);
  }
  
  ToString(): string {
    return `This is a ${this.name} ${this.model} with the color ${this.color} and ${this.fuel} as fuel type &amp; ${this.kilometer}km.`;
  }

  PrintName(): string {
    return `<p class="card-text">${this.ToString()}</p>`;
  }

  PrintCard(): string {
    return `
    <div class="card h-100 p-1 my-1 mx-auto" style="width: 18rem;">
      <img src="${this.image}" class="img-fluid rounded" alt="${this.name}">
      <div class="card-body m-2">
        <h3 class="card-title">${this.name}</h3>`;
  }

  PrintPrice(index): void {
    document.getElementsByClassName("own-show-price")[index].innerHTML = `<strong>${this.CalculatePrice()}&euro;</strong>`;
  }
  PrintButton(): string {
    return `
    <p class="card-text own-show-price"></p>
    <div class="btn btn-primary p-2 own-get-price m-2">Price</div>
    `;
  }

  PrintFooter(): string {
    return `<div class="card-footer h6 p-2"><b>Year</b>: <i>${this.year}</i> <b>Weight</b>: <i>${this.weight}kg</i></div>`;
  }

  ClosingDiv(): string {
    return `
      </div>
    </div>
    `;
  }
  
}

class Motorbikes extends Vehicles {
  constructor(name: string, model: string, color: string, fuel: string, weight: number, year: number, kilometer: number, seats: number, image: string) {
    super(name, model, color, fuel, weight, year, kilometer, seats, image);
  }

}

class Trucks extends Vehicles {
  constructor(name: string, model: string, color: string, fuel: string, weight: number, year: number, kilometer: number, seats: number, image: string) {
    super(name, model, color, fuel, weight, year, kilometer, seats, image);
  }
}



let fiat: Vehicles = new Vehicles("Fiat", "500", "white", "Diesel", 850, 2000, 10000, 5, "https://www.w3schools.com/js/objectExplained.gif");
let renault: Vehicles = new Vehicles("Renault", "Initiale", "red", "Gasoline", 900, 2004, 20000, 5, "https://blog.auto-selection.com/wp-content/uploads/2013/09/renault-initiale-paris-concept-2013-10987127uemqk.jpg");
let citroen: Vehicles = new Vehicles("Citroen", "III", "green", "Diesel", 1200, 2009, 15000, 5, "https://carwiki.de/wp-content/uploads/2019/11/Citroen-Berlingo-III.jpg");


// let car_array: Array<Vehicles> = [fiat, renault, citroen];


let livewire: Motorbikes = new Motorbikes("Harley-Davidson", "LiveWire", "black", "Diesel", 200, 2020, 3000, 2, "https://moto-station.com/wp-content/uploads/2019/01/08/livewire-002-2019-revue.jpg");
let honda: Motorbikes = new Motorbikes("Honda", "Cbr", "red", "Gasoline", 150, 2017, 8000, 2, "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/CBR1000rrRepsol.jpg/1200px-CBR1000rrRepsol.jpg");
let yamacha: Motorbikes = new Motorbikes("Yamacha", "R1", "silver", "Diesel", 170, 2010, 18000, 2, "https://www.asphaltandrubber.com/wp-content/uploads/2014/11/2015-yamaha-r1.jpg");

// let motorbike_array: Array<Vehicles> = [livewire, honda, yamacha];

let vehicle_array: Array<Vehicles> = [fiat, renault, citroen, livewire, honda, yamacha];



var results_div = document.getElementById("results");
// results_div.innerHTML += `<h2 class="m0 p-0 mt-5">${vehicles[0].constructor.name}</h2>`;
  
// Build Vehicle Cards
for (let vehicle of vehicle_array) {
    results_div.innerHTML += vehicle.PrintCard() + vehicle.PrintName() + vehicle.PrintButton() + vehicle.PrintFooter() + vehicle.ClosingDiv();
}



var price_buttons: HTMLCollection = document.getElementsByClassName("own-get-price");
console.log(typeof (price_buttons[0]));
for (let i = 0; i < price_buttons.length; i++) {
  
  price_buttons[i].addEventListener("click", function () {
    // alert("I am the button");
    vehicle_array[i].PrintPrice(i);
  })
}
