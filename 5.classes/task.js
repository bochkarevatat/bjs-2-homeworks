class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name,
            this.releaseDate = releaseDate,
            this.pagesCount = pagesCount,
            this.state = 100,
            this.type = null
    }

    fix() {
        this.state = this.state * 1.5;
    }
    set state(stateNew) {

        if (stateNew < 0) {
            this._state == 0;
        }
        if (stateNew > 100) {
            this._state = 100;
        } else {
            this._state = stateNew;
        }

    }
    get state() {
        return this._state
    }
};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    }

};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
        this.type = "book";
    }

};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "novel";
    }
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "fantastic";
    }
};

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "detective";
    }
};

// Домашнее задание к лекции 5 «Классы» > Задача №2 > создание библиотеки

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];

    };

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        };
    };

    findBookBy(type, value) {

        let bookFind = this.books.find(item => item[type] === value)

        if (bookFind == undefined) {
            return null;
        } else {
            return bookFind;
        }
    };


    giveBookByName(bookName) {

        let index = this.books.findIndex(item => item.name === bookName);

        if (index != -1) {
           let book = this.books.splice(index, 1);
            // console.log(typeof(bookName));
            return book[0];
        } else {
            return null
        };


    }
};