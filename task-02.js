// Створити класи Library та Book
// Клас Library буде описувати нашу бібліотеку книжок. Всі книжки
//  будуть зберігатися в масиві.
// Також цей клас буде мати такі методи:

// Метод buy- це метод що приймає аргументом
// обєкт книги і додає її в бібліотеку якщо її там ще немає.
// Якщо книга вже є показує повідомлення що книга вже куплена
// Метод sell- це метод що приймає аргументом назву книги і видаляє її з бібліотеки
// Метод addToFavourite - це метод що приймає
// аргументом назву книги і додає обєкт книги в список
// улюблених
// Метод removeFromFavourite - це метод що
// приймає назву книги і видаляє її з списку улюблених
// Гетер сountFavouriteBooks - це гетер що
// показує кількість книжок що додані в улюблені
//  Гетер finishedBook - це гетер що містить
//   колекцію всіх прочитаних книжок
//  Метод totalCost - це метод що рахує
// вартість всіх книжок в бібліотеці
//  Клас Book буде описувати окрему книгу. Кожна книга це буде обєкт
//   з такими ключами
//  author
//  title
//  price
//  totalPages
//  currentPage
// Також цей клас буде мати такі методи:
// Метод read - це метод що приймає кількість
// сторінок що було прочитано і міняє значення currentPage

// Гетер bookProgres - гетер що переводить
// кількість прочитаних сторінок в відсотки

// Сетер bookProgres - сетер що переводить
// відсоток прочитаних сторінок в кількість
                
// Клас Book приймає один аргумент - обєкт з парметрами книги. В
// середині класу використовувати деструктуризацію обєкта

class Library {
  constructor(arrBooks = []) {
    this.arrBooks = arrBooks;
    this.favouriteBooks = [];
  }

  buy(book) {
    if (this.arrBooks.includes(book)) {
      console.log("Эта книга уже куплена !");
    } else {
      this.arrBooks.push(book);
    }
  }
  sell(titleBook) {
    for (let el of this.arrBooks) {
      if (this.arrBooks.title === titleBook) {
        let index = this.arrBooks.indexOf(el);
        this.Books.splice(index, 1);
      }
    }
  }
  addToFavourite(nameBook) {
    for (let el of this.arrBooks) {
      if (el.title === nameBook && !this.favouriteBooks.includes(el)) {
        this.favouriteBooks.push(el);
      }
    }
  }
  removeFromFavourite(nameBook) {
    for (let el of this.favouriteBooks) {
      if (el.title === nameBook) {
        let index = this.favouriteBooks.indexOf(el);
        this.favouriteBooks.splice(index, 1);
      }
    }
  }
  сountFavouriteBooks() {
    return this.favouriteBooks.length;
  }
  finishedBook() {
    let finishedBooks = [];
    for (let el of this.arrBooks) {
      if (el.totalPages === el.currentPage) {
        finishedBooks.push(el);
      }
    }
    return finishedBooks.length;
  }
  totalCost() {
    let totalCost = 0;
    for (let el of this.arrBooks) {
      totalCost += el.price;
    }
    return totalCost;
  }
}

class Book {
  constructor(author, title, price, totalPages, currentPage = 0) {
    this.author = author;
    this.title = title;
    this.price = price;
    this.totalPages = totalPages;
    this.currentPage = currentPage;
  }

  read(readPages) {
    this.currentPage = readPages;
  }
  getBookProgres() {
    return (this.currentPage / this.totalPages) * 100;
  }
  setBookProgres(Percent) {
    this.currentPage = (Percent * this.totalPages) / 100;
  }
}

const myBook1 = new Book("Turgenev", "Mu-Mu", 100, 350);
const myBook2 = new Book("Dostoevsky", "Idiot", 200, 420, 420);
const myBook3 = new Book("Tolstoi", "War and Peace", 600, 555, 155);

//  console.log(myBook1);
//  console.log(myBook2);
//  console.log(myBook3);

let library = new Library([myBook1, myBook3]);
console.log(library);
library.buy(myBook1);
library.buy(myBook2);
console.log(library);
library.sell("Turgenev");
console.log(library);
library.buy(myBook1);
console.log(library);
console.log(library.favouriteBooks);
library.addToFavourite("Idiot");
library.addToFavourite("War and Peace");
console.log(library.favouriteBooks);
library.removeFromFavourite("Idiot");
console.log(library.favouriteBooks);
console.log(library.сountFavouriteBooks() + " -кол-во избранных книг");
console.log(library.finishedBook() + " -количество прочитанных книг");
console.log(library.totalCost() + " -общая стоимость");

console.log(myBook3.getBookProgres().toFixed(2) + "%");
 