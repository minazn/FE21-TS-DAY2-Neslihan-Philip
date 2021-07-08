//@ts-check
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// weight in kg
var Vehicles = /** @class */ (function () {
    function Vehicles(name, model, color, fuel, weight, year, kilometer, seats, image) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.fuel = fuel;
        this.weight = weight;
        this.year = year;
        this.kilometer = kilometer;
        this.seats = seats;
        this.image = image;
    }
    Vehicles.prototype.CalculatePrice = function () {
        // personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price
        var fuel_mul = (this.fuel == "Diesel") ? (2 * Math.random() + 1) : (Math.random() + 1);
        var model_val = this.model.charCodeAt(0);
        var price = this.kilometer / this.seats * fuel_mul - model_val - this.year;
        return Math.round(price);
    };
    Vehicles.prototype.ToString = function () {
        return "This is a " + this.name + " " + this.model + " with the color " + this.color + " and " + this.fuel + " as fuel type &amp; " + this.kilometer + "km.";
    };
    Vehicles.prototype.PrintName = function () {
        return "<p class=\"card-text\">" + this.ToString() + "</p>";
    };
    Vehicles.prototype.PrintCard = function () {
        return "\n    <div class=\"card h-100 p-1 my-1 mx-auto\" style=\"width: 18rem;\">\n      <img src=\"" + this.image + "\" class=\"img-fluid rounded\" alt=\"" + this.name + "\">\n      <div class=\"card-body m-2\">\n        <h3 class=\"card-title\">" + this.name + "</h3>";
    };
    Vehicles.prototype.PrintPrice = function (index) {
        document.getElementsByClassName("own-show-price")[index].innerHTML = "<strong>" + this.CalculatePrice() + "&euro;</strong>";
    };
    Vehicles.prototype.PrintButton = function () {
        return "\n    <p class=\"card-text own-show-price\"></p>\n    <div class=\"btn btn-primary p-2 own-get-price m-2\">Price</div>\n    ";
    };
    Vehicles.prototype.PrintFooter = function () {
        return "<div class=\"card-footer h6 p-2\"><b>Year</b>: <i>" + this.year + "</i> <b>Weight</b>: <i>" + this.weight + "kg</i></div>";
    };
    Vehicles.prototype.ClosingDiv = function () {
        return "\n      </div>\n    </div>\n    ";
    };
    return Vehicles;
}());
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(name, model, color, fuel, weight, year, kilometer, seats, image) {
        return _super.call(this, name, model, color, fuel, weight, year, kilometer, seats, image) || this;
    }
    return Motorbikes;
}(Vehicles));
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(name, model, color, fuel, weight, year, kilometer, seats, image) {
        return _super.call(this, name, model, color, fuel, weight, year, kilometer, seats, image) || this;
    }
    return Trucks;
}(Vehicles));
var fiat = new Vehicles("Fiat", "500", "white", "Diesel", 850, 2000, 10000, 5, "https://www.w3schools.com/js/objectExplained.gif");
var renault = new Vehicles("Renault", "Initiale", "red", "Gasoline", 900, 2004, 20000, 5, "https://blog.auto-selection.com/wp-content/uploads/2013/09/renault-initiale-paris-concept-2013-10987127uemqk.jpg");
var citroen = new Vehicles("Citroen", "III", "green", "Diesel", 1200, 2009, 15000, 5, "https://carwiki.de/wp-content/uploads/2019/11/Citroen-Berlingo-III.jpg");
// let car_array: Array<Vehicles> = [fiat, renault, citroen];
var livewire = new Motorbikes("Harley-Davidson", "LiveWire", "black", "Diesel", 200, 2020, 3000, 2, "https://moto-station.com/wp-content/uploads/2019/01/08/livewire-002-2019-revue.jpg");
var honda = new Motorbikes("Honda", "Cbr", "red", "Gasoline", 150, 2017, 8000, 2, "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/CBR1000rrRepsol.jpg/1200px-CBR1000rrRepsol.jpg");
var yamacha = new Motorbikes("Yamacha", "R1", "silver", "Diesel", 170, 2010, 18000, 2, "https://www.asphaltandrubber.com/wp-content/uploads/2014/11/2015-yamaha-r1.jpg");
// let motorbike_array: Array<Vehicles> = [livewire, honda, yamacha];
var vehicle_array = [fiat, renault, citroen, livewire, honda, yamacha];
var results_div = document.getElementById("results");
// results_div.innerHTML += `<h2 class="m0 p-0 mt-5">${vehicles[0].constructor.name}</h2>`;
// Build Vehicle Cards
for (var _i = 0, vehicle_array_1 = vehicle_array; _i < vehicle_array_1.length; _i++) {
    var vehicle = vehicle_array_1[_i];
    results_div.innerHTML += vehicle.PrintCard() + vehicle.PrintName() + vehicle.PrintButton() + vehicle.PrintFooter() + vehicle.ClosingDiv();
}
var price_buttons = document.getElementsByClassName("own-get-price");
console.log(typeof (price_buttons[0]));
var _loop_1 = function (i) {
    price_buttons[i].addEventListener("click", function () {
        // alert("I am the button");
        vehicle_array[i].PrintPrice(i);
    });
};
for (var i = 0; i < price_buttons.length; i++) {
    _loop_1(i);
}
