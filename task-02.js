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

class Library{

buy(book){
 
}
sell(){

}
addToFavourite(bookName){

}
removeFromFavourite(bookName){

}
get сountFavouriteBooks(){

}
get finishedBook (){

}
totalCost(){

}

}

class Book{
constructor(author,title,price,totalPages,currentPage){
     this.author=author;
     this.title= title;
     this.price=price;
     this.totalPages=totalPages;
     this.currentPage=currentPage;
}
read(countPage){

}
get bookProgres(){

}
set bookProgres(){

}

}
 const myBook = new Book();
 