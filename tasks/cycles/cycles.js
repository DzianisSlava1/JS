/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
  let discount;
  
  
  if (redemption <= 350) {
    discount = '0%';
    console.log(discount);
    }

    else if (redemption <= 351 || redemption >= 1350)
     {
      discount = '15%';
      console.log(discount);
      }

      else if (redemption <= 1351 || redemption >= 2700)
     {
      discount = '30%';
      console.log(discount);
      }

      else if (redemption <= 2701 || redemtion >= 6500)
     {
      discount = '45%';
      console.log(discount);
      }

      return discount;
}

/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
    
        const i = 10; //10! = 3628800;
        //число 10 умножать чтоб получилось 3628800

let number = i;
let result = 0;

        do {
        result = number * number - 1;
        number = --number;
        result += result; 
        }        
        while (number === 0);


/**
 * return concatenated string from an array of substring
 */

  const substr = ["I", " love", "JS"];
  let string = "";
  for(let element of array){
    string += element;
  }


/**
 * calculate a total of income of certain person
 */
{
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };

  let income;
  let sumTotal;

  for (let month in personIncomes){
sumTotal += personIncomes[month];
  }
const avg = sumTotal - 900;
console.log(avg);
  }


  
}




