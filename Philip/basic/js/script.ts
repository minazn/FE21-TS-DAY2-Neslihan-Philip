//@ts-check

// Basic 1
interface Human {
  name: string;
  age: number;
  OutputString: Function;
  PrintName: Function;
  PrintCard: Function;
  ClosingDiv: Function;

}

class Person implements Human {
  constructor(public name: string, public age: number, public image: string, public jobtitle: string) {
    this.jobtitle = jobtitle;
  }

  OutputString() {
    return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobtitle}`;
  }
  PrintName() {
    return `<p class="card-text">${this.OutputString()}</p>`;
  }

  PrintCard() {
    return `
    <div class="card h-100 p-1 my-4 mx-auto" style="width: 18rem;">
      <img src="${this.image}" class="img-fluid rounded" alt="${this.name}">
      <div class="card-body m-2">
        <h3 class="card-title">${this.name}</h3>`;
  }

  ClosingDiv() {
    return `
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `;
  }

}




// var jon: Human = new Person("Jon Jonsen", 29, "https://cdn.pixabay.com/photo/2019/09/01/10/13/portrait-4444764_1280.jpg", "Web Developer");
// var tommy: Human = new Person("Glan Matthews", 52, "https://static.wikia.nocookie.net/scrubs/images/b/bd/1x10janitordrill.jpg", "Janitor");
// var maria: Human = new Person("Maria Emil", 21, "https://cdn.pixabay.com/photo/2021/07/01/21/20/girl-6380331_1280.jpg", "Secretary");


// var arr: Array<Human> = [tommy, jon, maria];
// for (let val of arr) {
//   document.getElementById("results").innerHTML += val.PrintCard() + val.PrintName() + val.ClosingDiv();
// }

// Basic 2
class Employee extends Person {
  salary: number;
  joblocation: string;
  constructor(name: string, age: number, image: string, jobtitle: string, salary: number, joblocation: string) {
    super(name, age, image, jobtitle);
    this.salary = salary;
    this.joblocation = joblocation;
  }

  OutputString() {
    return `${super.OutputString()} and I get <strong>${this.salary}</strong> every month, and I work in <strong>${this.joblocation}</strong>`;
  }

}

var jon: Human = new Employee("Jon Jonsen", 29, "https://cdn.pixabay.com/photo/2019/09/01/10/13/portrait-4444764_1280.jpg", "Web Developer", 3000, "IT Company");
var tommy: Human = new Employee("Glan Matthews", 52, "https://static.wikia.nocookie.net/scrubs/images/b/bd/1x10janitordrill.jpg", "Janitor", 3000, "Sacred Heart Hospital");
var maria: Human = new Employee("Maria Emil", 21, "https://cdn.pixabay.com/photo/2021/07/01/21/20/girl-6380331_1280.jpg", "Secretary", 2000, "Another Company");

var arr: Array<Human> = [tommy, jon, maria];
for (let val of arr) {
  document.getElementById("results").innerHTML += val.PrintCard() + val.PrintName() + val.ClosingDiv();
}
