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
var Person = /** @class */ (function () {
    function Person(name, age, image, jobtitle) {
        this.name = name;
        this.age = age;
        this.image = image;
        this.jobtitle = jobtitle;
        this.jobtitle = jobtitle;
    }
    Person.prototype.OutputString = function () {
        return "Hello there, My name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobtitle;
    };
    Person.prototype.PrintName = function () {
        return "<p class=\"card-text\">" + this.OutputString() + "</p>";
    };
    Person.prototype.PrintCard = function () {
        return "\n    <div class=\"card h-100 p-1 my-4 mx-auto\" style=\"width: 18rem;\">\n      <img src=\"" + this.image + "\" class=\"img-fluid rounded\" alt=\"" + this.name + "\">\n      <div class=\"card-body m-2\">\n        <h3 class=\"card-title\">" + this.name + "</h3>";
    };
    Person.prototype.ClosingDiv = function () {
        return "\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n      </div>\n    </div>\n    ";
    };
    return Person;
}());
// var jon: Human = new Person("Jon Jonsen", 29, "https://cdn.pixabay.com/photo/2019/09/01/10/13/portrait-4444764_1280.jpg", "Web Developer");
// var tommy: Human = new Person("Glan Matthews", 52, "https://static.wikia.nocookie.net/scrubs/images/b/bd/1x10janitordrill.jpg", "Janitor");
// var maria: Human = new Person("Maria Emil", 21, "https://cdn.pixabay.com/photo/2021/07/01/21/20/girl-6380331_1280.jpg", "Secretary");
// var arr: Array<Human> = [tommy, jon, maria];
// for (let val of arr) {
//   document.getElementById("results").innerHTML += val.PrintCard() + val.PrintName() + val.ClosingDiv();
// }
// Basic 2
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, image, jobtitle, salary, joblocation) {
        var _this = _super.call(this, name, age, image, jobtitle) || this;
        _this.salary = salary;
        _this.joblocation = joblocation;
        return _this;
    }
    Employee.prototype.OutputString = function () {
        return _super.prototype.OutputString.call(this) + " and I get <strong>" + this.salary + "</strong> every month, and I work in <strong>" + this.joblocation + "</strong>";
    };
    return Employee;
}(Person));
var jon = new Employee("Jon Jonsen", 29, "https://cdn.pixabay.com/photo/2019/09/01/10/13/portrait-4444764_1280.jpg", "Web Developer", 3000, "IT Company");
var tommy = new Employee("Glan Matthews", 52, "https://static.wikia.nocookie.net/scrubs/images/b/bd/1x10janitordrill.jpg", "Janitor", 3000, "Sacred Heart Hospital");
var maria = new Employee("Maria Emil", 21, "https://cdn.pixabay.com/photo/2021/07/01/21/20/girl-6380331_1280.jpg", "Secretary", 2000, "Another Company");
var arr = [tommy, jon, maria];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    document.getElementById("results").innerHTML += val.PrintCard() + val.PrintName() + val.ClosingDiv();
}
