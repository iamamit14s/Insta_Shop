export class Product {
  constructor(title, name, price, category, imageURL, date = new Date()){
    this.title = title
    this.name = name
    this.price = price
    this.category = category
    this.imageURL = imageURL
    this.date = date
  }
}

const apple = new Product("iPhone 15 pro MAX", "asdf", 300, "Phones", "https://")
const fan = new Product("Bajaj Fan", "Baja Fan", 500, "Fan", "https://")

console.log(apple.title)