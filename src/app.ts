function randomOption() {
    const options = ["heads", "tails"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  console.log(randomOption());
document.getElementById("flip").innerHTML = randomOption()

function tryAgain() {
    document.getElementById("flip").innerHTML = randomOption()
}