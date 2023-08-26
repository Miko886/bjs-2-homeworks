function parseCount(numToParse) {
  let parsingResult = Number.parseFloat(numToParse);
  if (Number.isNaN(parsingResult)) {
    throw new Error('Невалидное значение')
  }
  return parsingResult;
}

function validateCount(numToParse) {
  try {
    return parseCount(numToParse);
  } catch (error) {
    return error;
  }

}

class Triangle {
  constructor(firstSide, secondSide, thirdSide) {
    if (((firstSide + secondSide) <= thirdSide) || ((secondSide + thirdSide) <= firstSide) || ((thirdSide + firstSide) <= secondSide)) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.firstSide = firstSide;
    this.secondSide = secondSide;
    this.thirdSide = thirdSide;
  }
  get perimeter() {
    return (this.firstSide + this.secondSide + this.thirdSide);
  }
  get area() {
    let halfPerimeter = (this.firstSide + this.secondSide + this.thirdSide) / 2;
    return + (Math.sqrt(halfPerimeter * (halfPerimeter - this.firstSide) * (halfPerimeter - this.secondSide) * (halfPerimeter - this.thirdSide))).toFixed(3);
  }
}

function getTriangle(firstSide, secondSide, thirdSide) {
  try {
    return (new Triangle(firstSide, secondSide, thirdSide));
  } catch (error) {
    const errorObject = {
      get perimeter() {
        return ('Ошибка! Треугольник не существует');
      },
      get area() {
        return ('Ошибка! Треугольник не существует');
      },
    }
    return (errorObject)
  }
}
