const pet = "cow"

switch(pet) {
    case "horse":
        console.log("neigh")
        break
    case "dog":
        console.log("woof")
        break
    case "cat":
        console.log("purr")
        break
    case "cow":
        console.log("moo")
        break
    default:
        console.log("I love that animal!")
}

function fruitColor(fruit){ 
    if (fruit === "banana") {
    console.log("yellow")
    } else if (fruit === "apple" ) {
        console.log("red")
    } else if (fruit === "orange") {
        console.log("orange")
    } else if (fruit === "lime") {
        console.log("lime")
    } else {
        console.log("purple")
    }
}

fruitColor("banana")

function sumTotal(firstNumber, secondNumber) {
    const total = firstNumber + secondNumber;
    console.log(total)
}

sumTotal(1000, 2395);

