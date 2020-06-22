class Payment {
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
        this.changeReturned = 0;
    }

    giveChange() {
        let hundreds = 0;
        let fifties = 0;
        let twenties = 0;
        let tens = 0;
        let fives = 0;
        let singles = 0;
        let quarters = 0;
        let dimes = 0;
        let nickels = 0;
        let pennies = 0;
        let changeLeft = this.cashTendered - this.amountDue;
        while (changeLeft > 0) {
            if (changeLeft >= 100) {
                changeLeft -= 100;
                hundreds++;
            } else if (changeLeft >= 50) {
                changeLeft -= 50;
                fifties++;
            } else if (changeLeft >= 20) {
                changeLeft -= 20;
                twenties++;
            } else if (changeLeft >= 10) {
                changeLeft -= 10;
                tens++;
            } else if (changeLeft >= 5) {
                changeLeft -= 5;
                fives++;
            } else if (changeLeft >= 1) {
                changeLeft -= 1;
                singles++;
            } else if (changeLeft >= 0.25) {
                changeLeft -= 0.25;
                quarters++;
            } else if (changeLeft >= 0.1) {
                changeLeft -= 0.1;
                dimes++;
            } else if (changeLeft >= 0.05) {
                changeLeft -= 0.05;
                nickels++;
            } else if (changeLeft >= 0.01) {
                changeLeft -= 0.01;
                pennies++;
            }
        }
        return {
            hundreds: hundreds,
            fifties: fifties,
            twenties: twenties,
            tens: tens,
            fives: fives,
            singles: singles,
            quarters: quarters,
            dimes: dimes,
            nickels: nickels,
            pennies: pennies,
        };
    }
    amountPaid(number) {
        if (number === this.amountDue) {
            this.cashTendered += number;
        } else if (number > this.amountDue) {
            console.log(this.giveChange());
        } else {
            alert("You're payment was not accepted, please try again!");
        }
    }
}

// let payment = new Payment(100);
// payment.amountPaid(150)

// Loops through "Remove" buttons and listens for a "click" that will run the "removeCartItem" function
let removeCartItemButtons = document.getElementsByClassName("btn-danger");
for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
}

// Loops through the "quantityInputs" and listens for a "change" that will run the "quantityChanged" function
let quantityInputs = document.getElementsByClassName("cart-quantity-input");
for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
}

// Loops through the "Add To Cart" buttons and listens for a "click" that will run the "addToCartClicked" function
let addToCartButtons = document.getElementsByClassName("shop-item-button");
for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
}

function showPayment(){
    let checkout = document.getElementById("checkout_container");
    checkout.style.display = "block"
}

let checkoutButton = document.getElementsByClassName("payment_button")[0];
checkoutButton.addEventListener("click", (e) => {
    alert("Thank you for your purchase!");
    let cartItems = document.getElementsByClassName("cart-items")[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
});
function purchaseClicked() {
}

// Function used to make the "Remove" buttons actually remove items from the cart while updating the total cost
function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

// Function used to check the validity of the quantity value and update the total cost accordingly
function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

// Function used to add the elements of items that have been selected to the cart
function addToCartClicked(event) {
    let button = event.target;
    let shopItem = button.parentElement.parentElement;
    let title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
    let price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
    let imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

// Function used to create a row of the newly added item that can actually be seen in the cart
function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    let cartItems = document.getElementsByClassName("cart-items")[0];
    let cartItemNames = cartItems.getElementsByClassName("cart-item-title");
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert("This item is already added to the cart");
            return;
        }
    }
    let cartRowContents = `
        <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" alt="" class="practice_image">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" name="" id="" value="1">
          <button class="btn btn-danger">REMOVE</button>
      </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow
        .getElementsByClassName("btn-danger")[0]
        .addEventListener("click", removeCartItem);
    cartRow
        .getElementsByClassName("cart-quantity-input")[0]
        .addEventListener("change", quantityChanged);
}

// Function that uses the cart item, the item's cost, and quantity input to calculate and update the total cost
function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName("cart-items")[0];
    let cartRows = cartItemContainer.getElementsByClassName("cart-row");
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName("cart-price")[0];
        let quantityElement = cartRow.getElementsByClassName(
            "cart-quantity-input"
        )[0];
        let price = parseFloat(priceElement.innerText.replace("$", ""));
        let quantity = quantityElement.value;
        total = total + price * quantity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("cart-total-price")[0].innerText =
        "$" + total;
}