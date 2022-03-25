const Axios = require('axios');

/*
API Methods using the developer test key '1' as the API key

Search meal by name
www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
List all meals by first letter
www.themealdb.com/api/json/v1/1/search.php?f=a
Lookup full meal details by id
www.themealdb.com/api/json/v1/1/lookup.php?i=52772
Lookup a single random meal
www.themealdb.com/api/json/v1/1/random.php
Lookup a selection of 10 random meals (only available to $2+ Paypal supporters)
www.themealdb.com/api/json/v1/1/randomselection.php
List all meal categories
www.themealdb.com/api/json/v1/1/categories.php
Latest Meals (only available to $2+ Paypal supporters)
www.themealdb.com/api/json/v1/1/latest.php
List all Categories, Area, Ingredients
www.themealdb.com/api/json/v1/1/list.php?c=list
www.themealdb.com/api/json/v1/1/list.php?a=list
www.themealdb.com/api/json/v1/1/list.php?i=list
Filter by main ingredient
www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

Images
Meal Thumbnail Images
Add /preview to the end of the meal image URL
/images/media/meals/llcbn01574260722.jpg/preview
Ingredient Thumbnail Images
www.themealdb.com/images/ingredients/Lime.png
www.themealdb.com/images/ingredients/Lime-Small.png
*/
const baseUrl = "https://www.themealdb.com/api/json/v1/1/";

export function getAllCategories(setCategories) {
    Axios.get(`${baseUrl}categories.php`)
        .then(res => {
            const cats = res.data.categories;
            setCategories(cats);
            console.log(cats);
        })
        .catch(e => console.log(e.message));
}

export async function getRandomMeals(setRandomMeals) {
    let meals = [];

    async function getRandomMeal() {
        const meal = await Axios.get(`${baseUrl}random.php`);
        meals.push(meal.data.meals[0]);
    }

    await Promise.all([getRandomMeal(), getRandomMeal(), getRandomMeal(), getRandomMeal(), getRandomMeal(), getRandomMeal(), getRandomMeal(), getRandomMeal(), getRandomMeal(), getRandomMeal(), ]);
    console.log(meals);
    setRandomMeals(meals);
}

export function getMealById(setMeal, id) {
    Axios.get(`${baseUrl}lookup.php?i=${id}`)
        .then(res => {
            const meal = res.data.meals[0];
            setMeal(meal);
            console.log(meal);
        })
        .catch(e => console.log(e.message));
}

export function searchMealsByName(setMeals, name) {
    Axios.get(`${baseUrl}search.php?s=${name}`)
        .then(res => {
            const meals = res.data.meals;
            setMeals(meals);
            console.log(meals);
        })
        .catch(e => console.log(e.message));
}

let currentOrders = [{
    customerId: 123,
    meals: [
        { id: "52775", count: 2 },
        { id: "52906", count: 1 },
    ]
}];

export function addOrder(order) {
    currentOrders.push(order);
}

export function getOrder(custId) {
    return currentOrders.find(order => order.customerId === custId);
}

let customers = [{
    id: 123,
    firstName: "John",
    lastName: "Doe",
    address: "Central Park West 11, NY",
    email: "johndoe@mail.to",
    phone: "+123-456-789",
    orders: [
        { mealId: "52775", count: 2 },
        { mealId: "52906", count: 1 },
    ]
}]

export function getCustomer(id) {
    return customers.find(cust => cust.id === id);
}