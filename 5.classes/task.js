class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }
  fix() {
    this._state *= 1.5;
    if (this._state > 100) {
      this._state = 100;
    }

  }
  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }
  giveBookByName(bookName) {
    for (let book of this.books) {
      if (book.name === bookName) {
        this.books.splice(book, 1)
        return book;
      }
    }
    return null;
  }
}

function testCase() {
  let library = new Library("Библиотека им. Ельцина");
  library.addBook(new DetectiveBook("Агата Кристи", "Часы", 1963, 178));
  library.addBook(new FantasticBook("Говард Филлипс Лавкрафт", "Карающий Рок над Сарнатом", 1919, 254));
  console.log(library.findBookBy("releaseDate", 1919));
  let testBook = library.giveBookByName("Часы");
  console.log(testBook);
  testBook.state = 25;
  library.addBook(testBook);
  testBook.fix();
  library.addBook(testBook);
  console.log(library);
}