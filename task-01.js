// Створити простенький калькулятор за допомогою класу.
//  Цей клас буде мати такі методи:
//  Метод що запитує в користувача 2 числа
//  Метод що додає ці числа
//  Метод що віднімає ці числа
//  Метод що перемножує ці числа
//  Метод що ділить ці числа
//  Метод що виводить результат арефметичної операції на екран в
//  форматі  `Результат операції ${value}`
//  цей метод запускаєтьсяв кінці кожного з методів 2-5
//  Метод що додає в калькулятор новий функціонал (Приймає
//  аргументом колбек в якому описаний новий метод)
//  Передати в метод №7 колбек ф-ю що підносить числа в степінь
//  Написати всі методи і перевірити чи вони працюють

class Calculator{
  
getNumber() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
sum(){
  return megaCalc.result(this.a+this.b);
  }
minus(){
  return  megaCalc.result(this.a-this.b);
 }
multi(){
  return  megaCalc.result(this.a*this.b);
  
  }
division(){
  return megaCalc.result(this.a/this.b);
 }

addMethod (calculate, callback){
 
      return megaCalc.result(callback(calculate.a,calculate.b));
}
result(value){
  
    console.log(`Результат операции =  ${value}`);
}
}
let degree = ((a,b)=>a ** b);
const megaCalc = new Calculator();
megaCalc.getNumber();
megaCalc.sum();
megaCalc.minus();
megaCalc.multi();
megaCalc.division();
megaCalc.addMethod(megaCalc, degree);