//conditional

/** TODO
 * Task - rewrite IF..ELSE to ternary operator
 */

const a = 3,
        b = 2;

const plus = (a + b == 4)? "Wrong":"Too much";


/** TODO
 * The system receives two params x and y.
 * Implement the logic when z equals to sum of x and y in case both of them
 * less than 10 or multiplication in case of greater or equal than 10
 * Task 1 - if else
 * Task 2 - ternary operator
 */

    const x = 3;
    const y = 7;
    const z = x + y;

    if (x + y < 10) {
      console.log('That is right');
    }


/** TODO
 * The system receives 3 params - x, y, operator.
 * Operator can pass 4 possible values - "add", "subtract", "multiply", "divide".
 * Implement the logic when the system does appropriate operation based on passed operator param.
 */

{
    const x = 3;
    const y = 7;
    const operator = "add";
}
function operators(x, y, operator) {
  switch(operator) {
    case "add":
      return x + y;
  case "subtract":
      return x - y;
  case "multiply":
      return x * y;
  case "devide":
      return x / y;
  default:
      return "Operator isn't recognized";
}
}