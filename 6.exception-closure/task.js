// Task 1

function parseCount(value) {
	const number = Number.parseInt (value, 10);
	if (number) {
		return number;
	}

	throw new Error ('Невалидное значение');
}

function validateCount(value) {
	try {
		return parseCount(value);
	}
	catch (error) {
		return error;
	}
}

// Task 2

class Triangle {
	constructor(a, b, c) {
		if ((a + b) < c || (a + c) < b || (b + c) < a) {
			throw new Error ('Треугольник с такими сторонами не существует');

		} 

		this.a = a;
		this.b = b;
		this.c = c;
	}

	getPerimeter() {
		return this.a + this.b + this.c;
	}

	getArea () {
	const p = 0.5 * this.getPerimeter();
	const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
	return +area.toFixed(3);
   }
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	}

	catch (error) {
		const noTriangle = new Object();
		noTriangle.getArea = function() {return 'Ошибка! Треугольник не существует'};
		noTriangle.getPerimeter = function() {return 'Ошибка! Треугольник не существует'};
		return noTriangle;
	}
}





