
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
let selectedHeroes = new HeroList();
let itemsInCart = 0;

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
Heroes.add(
    "Hero3",
    "321-112-2311",
    "I'm a hero",
    "$500/hr"
);
Heroes.add(
    "Hero4",
    "321-112-2311",
    "I'm a hero",
    "$10/hr"
);
Heroes.add(
    "Hero5",
    "321-112-2311",
    "I'm a hero",
    "$7777/hr"
);
Heroes.add(
    "Hero6",
    "321-112-2311",
    "I'm a hero",
    "$8675309/hr"
);
Heroes.add(
    "Hero7",
    "321-112-2311",
    "I'm a hero",
    "$11/hr"
);
Heroes.add(
    "Hero8",
    "321-112-2311",
    "I'm a hero",
    "$1/hr"
);
Heroes.add(
    "Hero9",
    "321-112-2311",
    "I'm a hero",
    "$5/hr"
);
Heroes.add(
    "Hero10",
    "321-112-2311",
    "I'm a hero",
    "$50/hr"
);
console.log(Heroes);

let HeroesContainer = document.querySelector(".MainShopPage");
let cartButton = document.querySelector(".cart");

// displaying the Heroes on the main shopping page
function displayHeroes() {
    Heroes.services.forEach((hero) => {
        let product = document.createElement("div");
        product.classList.add("product");
        let name = document.createElement("p");
        name.innerText = `Name: ${hero.name}`;
        let phone = document.createElement("p");
        phone.innerText = `Phone: ${hero.phone}`;
        let description = document.createElement("p");
        description.innerText = `Description: ${hero.description}`;
        let price = document.createElement("p");
        price.innerText = `Price: ${hero.price}`;
        let addToCart = document.createElement("button");
        addToCart.classList.add("add2CartButton");
        addToCart.innerText = "Add to cart";
        product.append(name, phone, description, price, addToCart);
        HeroesContainer.append(product);
    });
}

displayHeroes();



// Adding a product to the cart
// Count on cart should increase every time the "Add to Cart" button is pressed

mainPage = document.querySelector(".MainShopPage");
let numberOfCartItems = [];
mainPage.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.className === "add2CartButton") {
        // increasing number of items in cart
        itemsInCart++;
        // creating the little number to display on cart button
        let cartQuantity = document.createElement("p");
        cartQuantity.classList.add("cartCount");
        cartQuantity.innerText = itemsInCart;
        //when "add to cart" is pressed, creates a new hero based on hero selected which is then added to to a 
        //separate list of heroes.
        let productChildren = e.target.parentElement.children;
        let heroName = productChildren[0].innerText;
        let heroPhone = productChildren[1].innerText;
        let heroDescription = productChildren[2].innerText;
        let heroPrice = productChildren[3].innerText;
        console.log(productChildren);
        selectedHeroes.add(heroName, heroPhone, heroDescription, heroPrice)
        console.log(selectedHeroes);
        numberOfCartItems.push(itemsInCart);
        cartButton.append(cartQuantity);
    }
});


// Clicking the cart button at the top brings up the cart with the current items inside

cartButton.addEventListener("click", (e) => {
    document.getElementById("cart-page").classList.toggle("cart-page");
});