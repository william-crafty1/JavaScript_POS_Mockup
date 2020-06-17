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