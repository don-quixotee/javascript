const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
}
const keys = Object.keys(car)


const pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2
}



document.getElementById('demo').innerHTML=keys;

document.getElementById('demo1').innerHTML=pizza;