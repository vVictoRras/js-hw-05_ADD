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
    
getNumber(a,b){
    this.a=a;
    this.b=b;
}
sum(){
    return this.a+this.b;
  
}

minus(){
  return  this.a-this.b;
  
}

multi(){
  return  this.a*this.b;
  }

division(){
  return this.a/this.b;
 
}

addMethod (a,b, callback){
      return callback(a,b);
}

result(value){
  this.value=value;
    console.log(`Результат операции =  ${value}`);
}
}

const megaCalc = new Calculator();
megaCalc.getNumber(2,4);

megaCalc.result(megaCalc.sum());
megaCalc.result(megaCalc.minus());
megaCalc.result(megaCalc.multi());
megaCalc.result(megaCalc.division());

megaCalc.result(megaCalc.addMethod(2,2,(a, b) => a ** b));