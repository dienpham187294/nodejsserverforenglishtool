module.exports = {
    "greeting": ["Hi, how are you?", "Good afternoon, how are you?", "Good morning, how are you?", "Good evening, how are you?"],
    "awGreeting": ["Doing fine", "Good", "I'm good", "I'm great"],
    "imgGreeting": "https://i.postimg.cc/kgRbM0Rv/guest-Is-Comming.jpg",
    "askForNeedGreeting": ["Do you want to eat here or to go?", "How can I help you?", "May I help you?"],
    "awForTogo": ["To go, please.", "I want to take it to go."],
    "awForEathere": ["Eat here, please.", "I want to eat here."],
    "askForHowmany": ["How many people do you have?", "For how many?"],
    "many": [2, 3, 4],
    "awForHowMany": awForHowMany,
    "askForFood": ["What would you like today?", "What do you want to order?"],
    "awForFood": awForFood,
    "askForDrink": ["Do you want to take some drinks?", "Something to drink?", "Do you want to order a drink?"],
    "awForDrink": awForDrink,
    "askForNeedInTable": ["How can I help you?", "May I help you?", "What do you want?"],
    "awNeedToOrder": ["I want to order.", "Order please!", "Can I order now?"],

}

function awForHowMany(n) {
    return ["I have " + n + " people, please.", "A table for " + n]
}
function awForFood(n) {
    return [n + ", please.", "I want to take " + n]
}
function awForDrink(n) {
    return [n + ", please."]
}