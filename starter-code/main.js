console.log("JS file is connected to HTML! Woo!")

var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";

// if (cardTwo === cardOne) {
//	alert('You found a match!');
// }
// else {
//	alert('Sorry, try again.');
//}


var getBoard = document.getElementById('game-board');

function createBoard() {

	for (var i = 0; i < cards.length; i++) {
			var cardElement = document.createElement('div');
			cardElement.className = 'card';
			board.appendChild(cardElement);
		}
	}

createBoard();
