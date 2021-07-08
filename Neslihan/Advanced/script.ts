class Vehicle {

    brand: string;
    model: string;
    image: string;
    description: string;
    construction_year: number;
    left_align: boolean;

    constructor(brand, model, img, descr, constr_yr, left_align) {
        this.brand = brand;
        this.model = model;
        this.image = img;
        this.description = descr;
        this.construction_year = constr_yr;
        this.left_align = left_align;

    }
    printCard() {
        var card = ``;
        if (this.left_align == false) {
            card = `<div class="row row-cols-1 row-cols-md-2 g-4 align-items-center">
        <div class="col">
            <div class="card">
                <img src=` + this.image + ` class="card-img-top"
                    alt=`+ this.brand + ` ` + this.model + `>
                <div class="card-body">
                    <h5 class="card-title">`+ this.brand + this.model + `</h5>
                    <hr>
                    <div class="d-flex justify-content-between">
                        <p class="card-text">
                            Construction year: 2019 <br>`;

        } else {
            card = `<div class="row row-cols-1 row-cols-md-2 g-4 align-items-center">
            <p class="p-5">`+ this.description + `</p>
            <div class="col">
                <div class="card">
                    <img src=` + this.image + ` class="card-img-top"
                        alt=`+ this.brand + ` ` + `>
                    <div class="card-body">
                        <h5 class="card-title">`+ this.brand + ` ` + `</h5>
                        <hr>
                        <div class="d-flex justify-content-between">
                            <p class="card-text">
                                Construction year: ` + this.construction_year + `<br>`;
        }
        return card;
    }
}

class MotorVehicle extends Vehicle { // ①
    nr_of_seats: number;
    fuel: string;
    km: number;

    constructor(brand, model, img, descr, constr_yr, left_align, nr_of_seats, fuel, km) {
        super(brand, model, img, descr, constr_yr, left_align);
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
</div>`
        if (this.left_align == false) {
            card += `<p class="p-5">` + this.description + `</p></div>`;
        } else {
            card += `</div>`;
        }
        return card;
    }
    calcPrice() {
        var p = 7000;
        if (this.nr_of_seats > 2) {
            p = p * 1.4; // + 40%
        }
        if (this.brand == "BMW") {
            p = p * 1.2;
        }
        console.log(p);
        return p;
    }


}


// class Bicycle extends Vehicle {
//     city: true;
//     mountain: boolean;
//     e_bike: boolean;
//     price: number;

//     constructor(brand: string, img: string, descr: string, constr_yr: number, model: string, mountain: boolean, ebike: boolean) {
//         super(brand, model, img, descr, constr_yr);
//         mountain = this.mountain;
//         ebike = this.e_bike;
//     }
// }



var bmw = new MotorVehicle("BMW", "XYZ 10009-rt", "https://cdn.pixabay.com/photo/2016/02/22/20/22/bmw-1216469__340.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec augue non lectus laoreet dictum. Nullam efficitur ultrices metus id pharetra. Phasellus euismod diam id felis porta, vel molestie urna  pharetra. Nunc nec purus risus.",
    2019, false, 5, "Diesel", 0);

var audi = new MotorVehicle("Audi", "ZTZ 34T", "https://cdn.pixabay.com/photo/2018/01/19/20/56/truck-3093197__340.png",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec augue non lectus laoreet dictum. Nullam efficitur ultrices metus id pharetra. Phasellus euismod diam id felis porta, vel molestie urna  pharetra. Nunc nec purus risus.",
    2018, true, 5, "Diesel", 0);

var bmw_bike = new MotorVehicle("BMW", "100 T", "https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec augue non lectus laoreet dictum. Nullam efficitur ultrices metus id pharetra. Phasellus euismod diam id felis porta, vel molestie urna  pharetra. Nunc nec purus risus.",
    2020, false, 1, "Diesel", 0);

var bmw_bike2 = new MotorVehicle("BMW", "100 T", "https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec augue non lectus laoreet dictum. Nullam efficitur ultrices metus id pharetra. Phasellus euismod diam id felis porta, vel molestie urna  pharetra. Nunc nec purus risus.",
    2020, true, 1, "Diesel", 0);

var arr = [bmw, audi, bmw_bike, bmw_bike2];

for (let val of arr) {
    document.getElementById("list-of-vehicles").innerHTML += val.extendCard();
}

var btn = document.getElementsByTagName("button");

for (let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){
        arr[i].calcPrice();
    });
}

console.log(btn);




