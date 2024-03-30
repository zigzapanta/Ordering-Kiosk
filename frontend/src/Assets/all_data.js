import chicken_1pc_meal from './menu_pics/1pc_chicken_meal.jpeg';
import chicken_2pc_meal from './menu_pics/2pc_chicken_meal.jpeg';
import bigmac from './menu_pics/bigmac.jpeg';
import bigmac_meal from './menu_pics/bigmac_meal.jpeg';
import burger_mcdo from './menu_pics/burger_mcdo.jpeg';
import burger_mcdo_meal from './menu_pics/burger_mcdo_meal.jpeg';
import chesseburger from './menu_pics/cheeseburger.jpeg';
import chesseburger_meal from './menu_pics/cheeseburger_meal.jpeg';
import iced_coffee_original from './menu_pics/iced_coffee_original.png';
import iced_coffee_chocolate from './menu_pics/iced_coffee_chocolate.png';
import iced_coffee_vanilla from './menu_pics/iced_coffee_vanilla.png';
import nuggets from './menu_pics/nuggets.png';
import nuggets_fries_meal from './menu_pics/nuggets_fries_meal.jpeg';
import nuggets_rice_meal from './menu_pics/nuggets_rice_meal.jpeg';
import quarterponder from './menu_pics/quarterpounder.jpeg';
import quarterponder_meal from './menu_pics/quarterpounder.jpeg';
import sprite from './menu_pics/sprite.png';
import cocacola from './menu_pics/cocacola.png';
import mcflurry from './menu_pics/mcflurry.jpeg';
import sundae_caramel from './menu_pics/sundae_caramel.jpeg';
import sundae_chocolate from './menu_pics/sundae_chocolate.jpeg';
import spaghetti from './menu_pics/spaghetti.jpeg';
import spaghetti_meal from './menu_pics/spaghetti_meal.webp';
import spaghetti_chicken_meal from './menu_pics/spaghetti_chicken_meal.jpeg';
import applepie from './menu_pics/applepie.jpeg'

let all_product = [
  {
    id: 1,
    name: "Burger Mcdo",
    category: ["burger", "ala-carte"],
    image: burger_mcdo,
    price: 60,
  },
  {
    id: 2,
    name: "Burger Mcdo with fries and drink",
    category: ["burger", "meal"],
    image: burger_mcdo_meal,
    price: 99,
  },
  {
    id: 3,
    name: "Chesseburger",
    category: ["burger", "ala-carte"],
    image: chesseburger,
    price: 65,
  },
  {
    id: 4,
    name: "Chesseburger with fries and drink",
    category: ["burger", "meal"],
    image: chesseburger_meal,
    price: 110,
  },
  {
    id: 5,
    name: "Quarter Pounder",
    category: ["burger", "ala-carte"],
    image: quarterponder,
    price: 185,
  },
  {
    id: 6,
    name: "Quarter Pounder with fries and drink",
    category: ["burger", "meal"],
    image: quarterponder_meal,
    price: 210,
  },
  {
    id: 7,
    name: "Bigmac",
    category: ["burger", "meal"],
    image: bigmac,
    price: 185,
  },
  {
    id: 8,
    name: "Bigmac with fries and drink",
    category: ["burger", "meal"],
    image: bigmac_meal,
    price: 210,
  },
  {
    id: 9,
    name: "Chicken Nuggets",
    category: ["chicken", "ala-carte"],
    image: nuggets,
    price: 175,
  },
  {
    id: 10,
    name: "Chicken Nuggets with fries and drink",
    category: ["chicken", "meal"],
    image: nuggets_fries_meal,
    price: 200,
  },
  {
    id: 11,
    name: "1pc Chicken with Rice",
    category: ["chicken", "ala-carte"],
    image: chicken_1pc_meal,
    price: 120,
  },
  {
    id: 12,
    name: "1pc Chicken with Rice and Drink",
    category: ["chicken", "meal"],
    image: "pending", // No corresponding image
    price: 185,
  },
  {
    id: 13,
    name: "2pc Chicken with Rice",
    category: ["chicken", "ala-carte"],
    image: chicken_2pc_meal,
    price: 185,
  },
  {
    id: 14,
    name: "2pc Chicken with Rice and Drink",
    category: ["chicken", "meal"],
    image: "pending", // No corresponding image
    new_price: 85.0,
    old_price: 220,
  },
  {
    id: 15,
    name: "Spaghetti",
    category: ["spaghetti", "ala-carte"],
    image: spaghetti, // No corresponding image
    price: 65,
  },
  {
    id: 16,
    name: "Spaghetti with Chicken",
    category: ["spaghetti", "ala-carte"],
    image: spaghetti,
    price: 50.0,
  },
  {
    id: 17,
    name: "Spaghetti with Drink",
    category: ["spaghetti", "meal"],
    image: spaghetti_meal, // No corresponding image
    price: 50.0,
  },
  {
    id: 18,
    name: "Spaghetti with Chicken and Drink",
    category: ["spaghetti", "meal"],
    image: spaghetti_chicken_meal, // No corresponding image
    price: 50.0,
  },
  {
    id: 19,
    name: "Chicken Nuggets with Rice and Drink",
    category: ["chicken", "meal"],
    image: nuggets_rice_meal,
    price: 50.0,
  },
  {
    id: 20,
    name: "Mcflurry",
    category: ["icecream", "ala-carte", "dessert"],
    image: mcflurry,
    price: 50.0,
  },
  {
    id: 21,
    name: "Chocolate Sundae",
    category: ["icecream", "ala-carte", "dessert"],
    image: sundae_chocolate, // No corresponding image
    price: 50.0,
  },
  {
    id: 22,
    name: "Caramel Sundae",
    category: ["icecream", "ala-carte", "dessert"],
    image: sundae_caramel, 
    price: 50.0,
  },
  {
    id: 23,
    name: "McCafe Iced Coffee Original",
    category: ["coffee", "ala-carte"],
    image: iced_coffee_original,
    price: 50.0,
  },
  {
    id: 24,
    name: "McCafe Iced Coffee Vanilla",
    category: ["coffee", "ala-carte"],
    image: iced_coffee_vanilla,
    price: 50.0,
  },
  {
    id: 25,
    name: "McCafe Iced Coffee Chocolate",
    category: ["coffee", "ala-carte"],
    image: iced_coffee_chocolate,
    price: 50.0,
  },
  {
    id: 26,
    name: "CocaCola",
    category: ["drinks"],
    image: cocacola,
    price: 50.0,
  },
  {
    id: 27,
    name: "Sprite",
    category: ["drinks"],
    image: sprite,
    price: 50.0,
  },
  {
    id: 28,
    name: "Royal",
    category: ["drinks"],
    image: cocacola,
    price: 50.0,
  },
  {
    id: 29,
    name: "Apple Pie",
    category: ["ala-carte", "dessert"],
    image: applepie, // No corresponding image
    price: 50.0,
  },
];

export default all_product;
