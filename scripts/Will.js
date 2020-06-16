class Hero {
    constructor(name, phone, description, price) {
        this.name = name;
        this.phone = phone;
        this.description = description;
        this.price = price;
    }
}

class HeroList {
    constructor() {
        this.services = [];
    }

    add(name, phone, description, price) {
        this.services.push(new Hero(name, phone, description, price));
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
    "I fight for justice and equality for everyone.",
    "$100/hr"
);
Heroes.add(
    "Captain Planet",
    "777-777-7777",
    "I bring pollution down to zero with the help of my eco team",
    "$5/hr"
);
Heroes.add(
    "Medical Gal",
    "123-456-CURE",
    "I help fight diseases of all shapes and forms, the doctor is IN",
    "$150/hr"
);
console.log(Heroes);

let HeroesContainer = document.querySelector(".MainShopPage");
let cartButton = document.querySelector(".cart");

// displaying the Heroes on the main shopping page
function displayHeroes(){
    Heroes.services.forEach((hero) => {
        let product = document.createElement("div");
        product.classList.add("product");
        let name = document.createElement("p");
        name.innerText = `Name: ${hero.name}`;
        let phone = document.createElement('p');
        phone.innerText = `Phone: ${hero.phone}`;
        let description = document.createElement('p');
        description.innerText = `Description: ${hero.description}`;
        let price = document.createElement('p');
        price.innerText = `Price: ${hero.price}`;
        let addToCart = document.createElement("button");
        addToCart.classList.add("add2CartButton")
        addToCart.innerText = "Add to cart";
        product.append(name, phone, description, price, addToCart);
        HeroesContainer.append(product);
    });

};

displayHeroes();

// Adding a product to the cart
// Count on cart should increase every time the "Add to Cart" button is pressed
addToCart = document.querySelector(".add2CartButton");
let productsInCart = [];
addToCart.addEventListener("click", (e) => {
    e.preventDefault();
    let quantity = document.createElement("p");
    quantity.classList.add("cartCount");
    productsInCart.push(quantity);
    cartButton.append(quantity);
    quantity.innerText = productsInCart.length
});