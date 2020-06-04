let currentPlayer = 'X'; // X is the starting player.
let playerXSelections = [];
let playerOSelections = [];



const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3]
];

const cellElementArray = document.querySelectorAll('.grid-cell');




for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
    const currentCellElement = cellElementArray[elementIndex]
    currentCellElement.addEventListener('click', function (event) {
        const clickedCellElement = event.target;
        if (clickedCellElement.innerHTML === '') {
            if (currentPlayer === 'X') {
                clickedCellElement.innerHTML = 'X'
                playerXSelections.push(Number(currentCellElement.id))
                if (checkForWin(winningCombinations, playerXSelections)) {
                    alert('Player X is the winner!');
                    reset()
                }
                currentPlayer = 'O'
            } else {
                clickedCellElement.innerHTML = 'O'
                playerOSelections.push(Number(currentCellElement.id))
                if (checkForWin(winningCombinations, playerOSelections)) {
                    alert('Player O is the winner!')
                    reset()
                }
                currentPlayer = 'X'
            }
            if (playerXSelections.length + playerOSelections.length === 9) {
                alert("Meow!")
                reset()
            }
        }
    });
}

// write a function named `checkForWin` and accepts two arguments: `winningCombination` and `playerSelections`
//     for every combination in `winningCombination`
//         create a `matches` counter variable, which starts at 0
//         for every number in the current combination
//             if the player's selections array contains the current number
//                 increment `matches` by 1
//             if `matches` is **equal** to 3
//                 return `true`, because we found a win!
//     we got through all combinations without returning `true`, so return `false`, because no win was found

function checkForWin(winningCombination, playerSelections) {
    for (let index = 0; index < winningCombination.length; index += 1) {
        let matches = 0
        let currentWinningCombo = winningCombination[index]
        for (let innerIndex = 0; innerIndex < currentWinningCombo.length; innerIndex += 1) {
            let currentNumber = currentWinningCombo[innerIndex]
            if (playerSelections.includes(currentNumber)) {
                matches += 1
            }
        }
        if (matches === 3) {
            return true
        }
    }
    return false
}

function reset() {
    for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
        cellElementArray[elementIndex].innerHTML = "";
    }
    playerOSelections = []
    playerXSelections = []
    currentPlayer = 'X'
}

