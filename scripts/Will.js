class Hero {
    constructor(name, phone, description) {
        this.name = name;
        this.phone = phone;
        this.description = description;
    }
}

class HeroList {
    constructor() {
        this.services = [];
    }

    add(name, phone, description) {
        this.services.push(new Hero(name, phone, description));
    }

    deleteAt(index) {
        this.services.splice(index, 1);
    }

    deleteByName(name) {
        for (let i = 0; i < this.services.length; i++) {
            if (name === this.services[i].name) {
                this.services.splice(i, 1);
            }
        }
    }
}

let Heroes = new HeroList();
Heroes.add(
    "Justice Man",
    "555-555-5555",
    "I fight for justice and equality for everyone"
);
Heroes.add(
    "Captain Planet",
    "777-777-7777",
    "I bring pollution down to zero with the help of my eco team"
);
Heroes.add(
    "Medical Gal",
    "123-456-CURE",
    "I help fight diseases of all shapes, the doctor is IN"
);
console.log(Heroes);