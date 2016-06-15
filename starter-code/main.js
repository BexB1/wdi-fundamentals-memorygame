
var cards = ['queen', 'king', 'king', 'queen', 'queen', 'king', 'queen', 'king'];

var cardsInPlay = [];

var board = document.getElementById('game-board');

var score = 0;


function createBoard() {

	for (var i = 0; i < cards.length; i++) {
			var cardElement = document.createElement('div');
			cardElement.className = 'card';
			cardElement.setAttribute('data-card', cards[i]);
			cardElement.addEventListener('click', isTwoCards);
			board.appendChild(cardElement);
			}
	}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if(this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='KingHearts.png'>";
	} else {
		this.innerHTML = "<img src='QueenHearts.png'>";
	}	

		if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay);
			cardsInPlay = [];

		}	
	}


function isMatch(cards) {
	if (cards[0] === cards[1]) {
		score++;
		document.getElementById('score').innerHTML = score;
		var audio = new Audio('match.wav');
		audio.play();

			if (score === 4) {
			var audio = new Audio('win.wav');
			audio.play();
		}
}

 	else {
		var audio = new Audio('wrong.wav');
		audio.play();
	}
}

if (score === 4) {
	var audio = new Audio('win.wav');
	audio.play();
}

createBoard();




