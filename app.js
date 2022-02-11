function computerPlay () {
    var pick = Math.floor((Math.random() * 5) + 1) - 1;
    const choices = ["Rock", "Paper", "Scissors", "Lizzard", "Spock"];
    return choices[pick];
}