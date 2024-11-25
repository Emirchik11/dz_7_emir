class Car {
    constructor(model, color, wheel = 4) {
        this.model = model
        this.color = color
        this.wheel = wheel
    }

    start() {
        console.log(`Машина заведена ${this.model}`)
    }
}

class Bmw extends Car {
    constructor(model, color, wheel = 4, sportMode = false) {
        super(model, color, wheel);
        this.sportMode = sportMode;
    }
}

const bmw = new Bmw('bmw m5 f90', 'red', 4, true)

class Toyota extends Car {
    constructor(model, color, wheel = 4, comfortMode = false, fullSetup= false) {
        super(model, color, wheel);
        this.comfortMode = comfortMode;
        this.fullSetup = fullSetup;
    }
}

class Mercedes extends Car {
    constructor(model, color, wheel = 4, description = '') {
        super(model, color, wheel);
        this.description = description;
    }
}

const cars = [
    new Bmw('bmw m5 f90', 'red', 4, true),
    new Toyota('Toyota Sorento', 'white', 4, true),
    new Mercedes('Mercedes cls 63', 'black', 4, 'super turbo car'),
]

cars.forEach(car => car.start())


const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const textTraffic = document.querySelector('.text_traffic')

class Traffic {
    static colorTrafficChange(color) {
        red.classList.remove('active')
        yellow.classList.remove('active')
        green.classList.remove('active')

        if (color.toLowerCase() === 'красный') {
            red.classList.add('active')
            alert('STOP')
        } else if (color.toLowerCase() === 'желтый') {
            yellow.classList.add('active')
            alert('WAIT')
        } else if (color.toLowerCase() === 'зеленый') {
            green.classList.add('active')
            alert('GO')
        } else {
            alert('Не правильный цвет')
        }
    }
}

const writeColor = prompt('Введите цвет светофора (Красный,Зеленый,Желтый)')
Traffic.colorTrafficChange(writeColor)