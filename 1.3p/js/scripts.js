function changeText() {
    let textsArray = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"];
    let index = getRandomNumberBetween(0, textsArray.length - 1);
    console.log("Index: ", index);
    document.getElementById("heading").innerHTML = textsArray[index];
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
