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
{
    function factorialize(const)
        const i = 10; //10! = 3628800;
        let result = i;
    if (i === 10)
    return 10;
    while (i > 10){
i--;
result *= i;
    }
    return result;
factorialize(10);
};


/**
 * return concatenated string from an array of substring
 */
{
  const substr = ["I", " love", " JS"];
  substr.text1 = (arr[1]);
  substr.text2 = (arr[2]);
  substr.text3 = (arr[3]);
  substr.text41 = (arr[1] + [2] + [3]);

  
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

    personIncomes.salary = personIncomes - rent - interestOnDeposit - otherExpences;

  };
}

module.exports = calculateDiscount;


