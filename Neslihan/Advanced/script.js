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
    function Vehicle(brand, model, img, descr, constr_yr) {
        this.brand = brand;
        this.model = model;
        this.image = img;
        this.description = descr;
        this.construction_year = constr_yr;
    }
    Vehicle.prototype.printCard = function () {
        var card = "<div class=\"row row-cols-1 row-cols-md-2 g-4 align-items-center\">\n        <div class=\"col\">\n            <div class=\"card\">\n                <img src=" + this.image + " class=\"card-img-top\"\n                    alt=" + this.brand + " " + this.model + ">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.brand + this.model + "</h5>\n                    <hr>\n                    <div class=\"d-flex justify-content-between\">\n                        <p class=\"card-text\">\n                            Construction year: 2019 <br>";
        return card;
    };
    return Vehicle;
}());
var MotorVehicle = /** @class */ (function (_super) {
    __extends(MotorVehicle, _super);
    function MotorVehicle(brand, model, img, descr, constr_yr, nr_of_seats, fuel, km) {
        var _this = _super.call(this, brand, model, img, descr, constr_yr) || this;
        _this.nr_of_seats = nr_of_seats;
        _this.fuel = fuel;
        _this.km = km;
        return _this;
    }
    MotorVehicle.prototype.extendCard = function () {
        var card = _super.prototype.printCard.call(this) +
            "Seats: " + this.nr_of_seats + "<br>\n        Fuel: " + this.fuel + "<br>\n        km: " + this.km + "\n    </p>\n    <button class=\"me-5\" type=\"button\">Show Price</button>\n</div>\n</div>\n</div>\n</div>\n<p class=\"p-5\">" + this.description + "</p>\n</div>";
        return card;
    };
    return MotorVehicle;
}(Vehicle));
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(brand, img, descr, constr_yr, model, mountain, ebike) {
        var _this = _super.call(this, brand, model, img, descr, constr_yr) || this;
        mountain = _this.mountain;
        ebike = _this.e_bike;
        return _this;
    }
    return Bicycle;
}(Vehicle));
var bmw = new MotorVehicle("BMW", "XYZ 10009-rt", "https://cdn.pixabay.com/photo/2016/02/22/20/22/bmw-1216469__340.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec augue non lectus laoreet dictum. Nullam efficitur ultrices metus id pharetra. Phasellus euismod diam id felis porta, vel molestie urna  pharetra. Nunc nec purus risus.", 2019, 5, "Diesel", 0);
console.log(typeof (bmw.image));
document.getElementById("list-of-vehicles").innerHTML += bmw.extendCard();
