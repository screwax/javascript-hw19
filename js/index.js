const addButton = document.getElementById('addMoney');
const getButton = document.getElementById('getMoney');
const bankAccont = {
    ownerName: "Egor",
    accountNumber: 9929,
    balance: 8000,
    deposit: 5000,
    get: 1000,
    addMoneyButton() {
        addButton.addEventListener('click', (event) => {
            bankAccont.balance = bankAccont.balance + bankAccont.deposit
            console.log(bankAccont.balance)
        })
    },
    getMoneyButton() {
        getButton.addEventListener('click', (event) => {
            bankAccont.balance = bankAccont.balance - bankAccont.get
            if (bankAccont.balance <= 0) {
                console.log("На рахунку вистачає грошей")
            }
            console.log(bankAccont.balance)
        })
    }
}
bankAccont.addMoneyButton()
bankAccont.getMoneyButton()

const { ownerName, accountNumber, deposit, balance  } = bankAccount;
console.log(ownerName, accountNumber, deposit, balance );


const user = {
    name: 'Jack',
    hobby: 'playing',
    premium: true,
}
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

for (const key of Object.keys(user)) {
    console.log(user[key]);
}

const {hobby: userHobby, premium: userPremium} = user;
console.log(userHobby, userPremium)

const object = {
    number1: 1,
    number2: 2,
    number3: 3,
    number4: 4,
}
const objectCheck = Object.values(object)
console.log(objectCheck)

const employ = {
    Maria: 5,
    Johnson: 10,
    George: 20,
}
const employCheck = Object.values(employ)
const findBestEmploy = Math.max(...employCheck)
console.log(findBestEmploy)

const {Maria: MariaEmploy, Johnson: johnsonEmploy, George: GeorgeEmploy} = employ;
console.log(MariaEmploy, johnsonEmploy, GeorgeEmploy)

function countTotalSalary(employ) {
    let totalSalary = 0;
    for (let employs in employ) {
    totalSalary += employ[employs]
}
    return totalSalary
}
const totalSalary = countTotalSalary(employ)
console.log(totalSalary)

function getAllPropValues(arr, prop) {
    const propValues = [];
  
    for (const obj of arr) {
      if (prop in obj) {
        propValues.push(obj[prop]);
      }
    }
  
    return propValues;
  }

const products = [{name: 'Bottle', price: 100, amount: 2}, {name: 'Food', price: 200, amount: 4}, {name: 'Meat', price: 300, amount: 6}]
const price1 = getAllPropValues(products, 'name');
const price2 = getAllPropValues(products, 'price');
console.log(price1, price2);

function calculateTotalPrice(allProducts, productName) {
    for (const product of allProducts) {
      if (product.name === productName) {
        return product.price * product.amount;
      }
    }
    return 0;
}

const totalPrice = calculateTotalPrice(products, 'Food');
console.log(totalPrice);

const {Maria: MariaSalary, Johnson: johnsonSalary, George: GeorgeSalary} = employ;
console.log(MariaSalary, johnsonSalary, GeorgeSalary)