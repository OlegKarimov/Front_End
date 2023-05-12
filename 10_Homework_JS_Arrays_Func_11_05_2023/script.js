// Create an object literal representing a bank account with properties for account number,
// account holder name, and balance. Add methods for depositing and withdrawing money from the account,
// and a method for checking the balance.


// Создайте литерал объекта, представляющий банковский счет со свойствами для номера счета,
// имени владельца счета и баланса. Добавьте способы ввода и вывода денег со счета,
// а также способ проверки баланса.


function bankAccount(numberAccount, name, balance) {
    this.numberAccount = numberAccount;
    this.name = name;
    this.balance = balance;
    this.addMoney = function (money) {    // способ ввода денег
        this.balance += money;
        console.log(`You have added ${money} to your account`);
    }
    this.withdrawalMoney = function (money) {    // способ вывода денег
        if (this.balance - money < 0) {
            console.log("There is not enough money in your account");
        } else {
            this.balance -= money;
            console.log(`You have withdrawn ${money} from your account`);
        }
    }
    this.printBalance = function () {                   // способ проверки баланса
        console.log(`Your balance: ${this.balance}`);
    }
}

let persons = [person1 = new bankAccount(123,"Ivan",50), 
                person2 = new bankAccount(345,"Kolya",150),
                person3 = new bankAccount(34,"Vasya",10),
                person4 = new bankAccount(36,"Petya",15)];

                
console.log(persons);

persons[0].printBalance();

persons[0].addMoney(110);
persons[0].printBalance();

persons[0].withdrawalMoney(10);
persons[0].printBalance();
