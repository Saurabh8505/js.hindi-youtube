const accountID = 1445
let accountEmail = "Saurabh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState ;
let accountBlock = 0

/*
const is constant and it can't change
*/
accountEmail = "mishra@google.com"
accountPassword = "54321"
console.table([accountID, accountEmail, accountPassword, accountCity, accountState ,accountBlock])
console.log(accountPassword);

/*
Prefer Not to use Var
because of issue in block scope and functional scope
*/