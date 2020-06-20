const user = {
  name: "Rafael Oliveira",
  transactions: [],
  balance: 0
};

function createTransaction({ type, value }) {
  user.transactions.push({ type, value });
  if (type === "credit") {
    user.balance += value;
  } else if (type === "debit") {
    user.balance -= value;
  }
};

function getHigherTransactionByType(type) {
  let higherValue = 0;
  let higherTransaction;
  for (let transaction of user.transactions) {
    if(transaction.type === type && transaction.value > higherValue){
      higherValue = transaction.value;
      higherTransaction = transaction;
    }
  }
  return higherTransaction
};

function getAverageTransactionValue(){
  let sum = 0;
  let average = 0;
  for(let transaction of user.transactions){
    sum += transaction.value;
    average = sum / user.transactions.length ;
  }
  return average
};

function getTransactionCount(){
  let sum = {
    credit: 0,
    debit:0
  };

  for(let transaction of user.transactions){
    if(transaction.type === "credit"){
      sum.credit +=1 
    } else {
      sum.debit +=1
    }
  }
  return sum 
};

/*Testing the functions*/
createTransaction({type: "credit", value: 50});
createTransaction({type: "credit", value: 120});
createTransaction({type: "debit", value: 80});
createTransaction({type: "debit", value: 30});
console.log(user.balance);

console.log(getHigherTransactionByType("credit"));
console.log(getHigherTransactionByType("debit"));

console.log(getAverageTransactionValue());

console.log(getTransactionCount());

