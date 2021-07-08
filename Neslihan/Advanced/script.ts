class Vehicle {

    brand: string;
    model: string;
    image: string;
    description: string;
    construction_year: number;
    constructor(brand, model, img, descr, constr_yr) {
        this.brand = brand;
        this.model = model;
        this.image = img;
        this.description = descr;
        this.construction_year = constr_yr;

    }
    printCard() {
        var card =
            `<div class="row row-cols-1 row-cols-md-2 g-4 align-items-center">
        <div class="col">
            <div class="card">
                <img src=` + this.image + ` class="card-img-top"
                    alt=`+ this.brand +` ` + this.model + `>
                <div class="card-body">
                    <h5 class="card-title">`+ this.brand + this.model + `</h5>
                    <hr>
                    <div class="d-flex justify-content-between">
                        <p class="card-text">
                            Construction year: 2019 <br>`;


        return card;
    }
}

class MotorVehicle extends Vehicle { // ①
    nr_of_seats: number;
    fuel: string;
    km: number;
    price: number;

    constructor(brand, model, img, descr, constr_yr, nr_of_seats, fuel, km) {
        super(brand, model, img, descr, constr_yr);
        this.nr_of_seats = nr_of_seats;
        this.fuel = fuel;
        this.km = km;       
    }

    extendCard() {
        var card = super.printCard() +
            `Seats: ` + this.nr_of_seats + `<br>
        Fuel: `+ this.fuel + `<br>
        km: ` + this.km + `
    </p>
    <button class="me-5" type="button">Show Price</button>
</div>
</div>
</div>
</div>
<p class="p-5">`+ this.description + `</p>
</div>`;
        return card;
    }

   
 }


class Bicycle extends Vehicle {
    city: true;
    mountain: boolean;
    e_bike: boolean;
    price: number;

    constructor(brand: string, img: string, descr: string, constr_yr: number, model: string, mountain: boolean, ebike: boolean) {
        super(brand, model, img, descr, constr_yr);
        mountain = this.mountain;
        ebike = this.e_bike;
    }
}



var bmw = new MotorVehicle("BMW", "XYZ 10009-rt", "https://cdn.pixabay.com/photo/2016/02/22/20/22/bmw-1216469__340.jpg",
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec augue non lectus laoreet dictum. Nullam efficitur ultrices metus id pharetra. Phasellus euismod diam id felis porta, vel molestie urna  pharetra. Nunc nec purus risus.",
  2019,5,"Diesel",0);

console.log(typeof(bmw.image));

document.getElementById("list-of-vehicles").innerHTML += bmw.extendCard();