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
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model, img, descr, constr_yr, left_align) {
        this.brand = brand;
        this.model = model;
        this.image = img;
        this.description = descr;
        this.construction_year = constr_yr;
        this.left_align = left_align;
    }
    Vehicle.prototype.printCard = function () {
        var card = "";
        if (this.left_align == false) {
            card = "<div class=\"row row-cols-1 row-cols-md-2 g-4 align-items-center\">\n        <div class=\"col\">\n            <div class=\"card\">\n                <img src=" + this.image + " class=\"card-img-top\"\n                    alt=" + this.brand + " " + this.model + ">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.brand + this.model + "</h5>\n                    <hr>\n                    <div class=\"d-flex justify-content-between alignt-items-center\">\n                        <p class=\"card-text\">\n                            Construction year: 2019 <br>";
        }
        else {
            card = "<div class=\"row row-cols-1 row-cols-md-2 g-4 align-items-center\">\n            <p class=\"p-5\">" + this.description + "</p>\n            <div class=\"col\">\n                <div class=\"card\">\n                    <img src=" + this.image + " class=\"card-img-top\"\n                        alt=" + this.brand + " " + ">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.brand + " " + "</h5>\n                        <hr>\n                        <div class=\"d-flex justify-content-between\">\n                            <p class=\"card-text\">\n                                Construction year: " + this.construction_year + "<br>";
        }
        return card;
    };
    return Vehicle;
}());
var MotorVehicle = /** @class */ (function (_super) {
    __extends(MotorVehicle, _super);
    function MotorVehicle(brand, model, img, descr, constr_yr, left_align, nr_of_seats, fuel, km) {
        var _this = _super.call(this, brand, model, img, descr, constr_yr, left_align) || this;
        _this.nr_of_seats = nr_of_seats;
        _this.fuel = fuel;
        _this.km = km;
        return _this;
    }
    MotorVehicle.prototype.extendCard = function () {
        var card = _super.prototype.printCard.call(this) +
            "Seats: " + this.nr_of_seats + "<br>\n        Fuel: " + this.fuel + "<br>\n        km: " + this.km + "\n    </p>\n    <div class=\"test\" ></div>\n    <button class=\"me-5\" type=\"button\">Show Price</button>\n</div>\n</div>\n</div>\n</div>";
        if (this.left_align == false) {
            card += "<p class=\"p-5\">" + this.description + "</p></div>";
        }
        else {
            card += "</div>";
        }
        return card;
    };
    MotorVehicle.prototype.calcPrice = function (i) {
        var p = 7000;
        if (this.nr_of_seats > 2) {
            p = p * 1.4; // + 40%
        }
        if (this.brand == "BMW") {
            p = p * 1.2;
        }
        document.getElementsByClassName("test")[i].innerHTML = p.toString() + "\u20AC";
        return p;
    };
    return MotorVehicle;
}(Vehicle));
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
var bmw = new MotorVehicle("BMW", "XYZ 10009-rt", "https://cdn.pixabay.com/photo/2016/02/22/20/22/bmw-1216469__340.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec augue non lectus laoreet dictum. Nullam efficitur ultrices metus id pharetra. Phasellus euismod diam id felis porta, vel molestie urna  pharetra. Nunc nec purus risus.", 2019, false, 5, "Diesel", 0);
var audi = new MotorVehicle("Audi", "ZTZ 34T", "https://cdn.pixabay.com/photo/2018/01/19/20/56/truck-3093197__340.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec augue non lectus laoreet dictum. Nullam efficitur ultrices metus id pharetra. Phasellus euismod diam id felis porta, vel molestie urna  pharetra. Nunc nec purus risus.", 2018, true, 5, "Diesel", 0);
var bmw_bike = new MotorVehicle("BMW", "100 T", "https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec augue non lectus laoreet dictum. Nullam efficitur ultrices metus id pharetra. Phasellus euismod diam id felis porta, vel molestie urna  pharetra. Nunc nec purus risus.", 2020, false, 1, "Diesel", 0);
var bmw_bike2 = new MotorVehicle("BMW", "100 T", "https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec augue non lectus laoreet dictum. Nullam efficitur ultrices metus id pharetra. Phasellus euismod diam id felis porta, vel molestie urna  pharetra. Nunc nec purus risus.", 2020, true, 1, "Diesel", 0);
var arr = [bmw, audi, bmw_bike, bmw_bike2];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    document.getElementById("list-of-vehicles").innerHTML += val.extendCard();
}
var btn = document.getElementsByTagName("button");
var _loop_1 = function (i) {
    btn[i].addEventListener("click", function () {
        arr[i].calcPrice(i);
    });
};
for (var i = 0; i < btn.length; i++) {
    _loop_1(i);
}
console.log(btn);
