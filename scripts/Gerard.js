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
      } else if (changeLeft >= .25) {
        changeLeft -= .25;
        quarters++;
      } else if (changeLeft >= .10) {
        changeLeft -= .10;
        dimes++;
      } else if (changeLeft >= .05) {
        changeLeft -= .05;
        nickels++;
      } else if (changeLeft >= .01) {
        changeLeft -= .01;
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
      pennies: pennies
    };
  };
  amountPaid(number) {
    if (number === this.amountDue) {
      this.cashTendered += number;
    } else if (number > this.amountDue) {
      console.log(this.giveChange());
    } else {
      alert("You're payment was not accepted, please try again!");
    };
  };
};

// let payment = new Payment(100);
// payment.amountPaid(150)

let removeCartItemButtons = document.getElementsByClassName("btn-danger")
for (let i = 0; i < removeCartItemButtons.length; i++) {
  let button = removeCartItemButtons[i]
  button.addEventListener("click", removeCartItem)
  }

  let quantityInputs = document.getElementsByClassName("cart-quantity-input")
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i]
    input.addEventListener("changed", quantityChanged)
  }

  let addToCartButtons = document.getElementsByClassName("shop-button-item")
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i]
    button.addEventListener("clicked", addToCartClicked)
  }

function removeCartItem(event) {
  let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
  let input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  let button = event.target
  let shopItem = button.parentElement.parentElement
  let title = shopItem.getElementsByClassName("shop-item-title")[0].innerText
  let price = shopItem.getElementsByClassName("shop-item-price")[0].innerText
  let imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src
  addItemToCart(title, price, imageSrc)
}

function addItemToCart(title, price, imageSrc) {
  let cartRow = document.createElement("div")
  cartRow.classList.add("cart-row")
  let cartItems = document.getElementsByClassName("cart-items")[0]
  let cartRowContents = `
      <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" alt="" class="practice_image">
        <span class="cart-item-title">Captain Planet</span>
    </div>
    <span class="cart-price cart-column">99.99</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" name="" id="" value="1">
        <button class="btn btn-danger">REMOVE</button>
    </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-items")[0]
  let cartRows = cartItemContainer.getElementsByClassName("cart-row")
  let total = 0
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i]
    let priceElement = cartRow.getElementsByClassName("cart-price")[0]
    let quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0]
    let price = parseFloat(priceElement.innerText.replace("$", ""))
    let quantity = quantityElement.value
    total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName("cart-total-price")[0].innerText = "$" + total
}
