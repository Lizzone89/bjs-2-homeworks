class PrintEditionItem {

	constructor(name, releaseDate, pagesCount, state, type) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *=1.5;
		if(this.state > 100) {
			this.state = 100;
		}
	}

	set state(newState) {
		if(newState < 0) {
			this._state = 0;
		} else if(newState > 100) {
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
	constructor(name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.type = 'book';
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = 'novel';

	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = 'detective';
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if(book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let result = this.books.find(book => book[type] === value);

		if (result === undefined) {
			return null;
		} else {
			return result;
		}
	}

	giveBookByName(bookName) {
		let findResult = this.findBookBy('name', bookName);
		if (findResult !== null) {
			let index = this.books.indexOf(findResult);
			this.books.splice(index, 1);
		}

		return findResult;
	}
}