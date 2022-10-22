import { getAuthor, getInstructions, getShuffledDeck } from "./decks.js"
import modal from "./modal.js";

let cardObjectsDeck = []

let currentCardObjectsDeck = [];
let wrongCardObjectsDeck = [];

let isAudioEnable = localStorage.getItem('isAudioEnable') || 'true';


const landingPage = document.getElementById("landing-page");
const instructions = document.getElementById("instructions");
const category = document.getElementById("category");
const difficultyMode = document.getElementById("difficulty-mode");
const authorName = document.getElementById("author")
const gameArea = document.getElementById("game-area");
const playButton = document.getElementById("play-btn");
const homeButton = document.getElementById("home-btn");
const nameShower = document.getElementById("name-shower");
const nameToShow = document.querySelector("#name-shower span"); 
const cardDropPosition = document.getElementById("card-drop-position");
const source = document.getElementById("source");
const destination = document.getElementById("destination");
const score = document.getElementById("score");
const hint = document.getElementById("hint");
const audioButton = document.getElementById("audio-button");
const maxCardsPlayable = 6;
const maxCardsWrong = 3;
let deckLength;
let matcher;
let showName;
let scoreCount = 0;
let hintCount = 0;

chooseDeck()

category.addEventListener("change", chooseDeck)

playButton.addEventListener("click", setUpGame)

homeButton.addEventListener("click", goHome)

audioButton.addEventListener("click", changeAudioPreference)


// changeAudioPreference()
audioButton.children[0].src = isAudioEnable == 'true' ? './speaker_on.png' : './speaker_off.png';


function setUpGame()
{
	setDifficultyMode();
	landingPage.remove();
	gameArea.style.display = "flex";
	addCardsOneByOne(300)
	updateCardDropPosition();
	setUpCardDropPositionEventListeners();
}

function chooseDeck() {
    cardObjectsDeck = getShuffledDeck(category.value);
    deckLength = cardObjectsDeck.length
    instructions.innerText = getInstructions(category.value)
    const author = getAuthor(category.value)
    authorName.innerText = author
    //Only change href if we have text in the author field
    if (author != "") {
        authorName.href = "https://github.com/" + author
    }
}


function setDifficultyMode()
{
	const mode = difficultyMode.value;
	switch(mode)
	{
		case "Easy":
			matcher = "name";
			showName = false;
			break;
		case "Challenging":
			matcher = "matchValue";
			showName = true;
			break;
	}
}

function addCardsOneByOne (timeInterval) {
	addCard();
	let i = 1;
	let repeater = setInterval(()=>{
		if(i === maxCardsPlayable)
			clearInterval(repeater);
		else
		{
			addCard();
			i++;
		}
	}, timeInterval);
}

function addCard()
{
	const cardDocumentFragment = cardTemplate.content.cloneNode(true);
	const card = cardDocumentFragment.querySelector(".card");
	const cardObject = cardObjectsDeck.pop();
	currentCardObjectsDeck.push(cardObject);
	fillInCardDetails(card, cardObject);
	card.addEventListener("click", flip);
	const draggable = cardDocumentFragment.querySelector("[draggable='true']");
	setUpCardDragEventListeners(draggable);	
	source.append(cardDocumentFragment);
}

function fillInCardDetails(card, cardObject)
{
	const primary = card.querySelector(".primary");
	const secondary = card.querySelector(".secondary");
	const hint = card.querySelector(".hint");
	primary.innerText = cardObject.content.primary;
	secondary.innerText = cardObject.content.secondary;
	if(!cardObject.content.primary) primary.remove()
	if(!cardObject.content.secondary) secondary.remove()
	hint.innerText = cardObject.hint;
	card.dataset.name = cardObject.name;
}

function setUpCardDragEventListeners(draggable)
{
	draggable.addEventListener("dragstart", (e)=>{
		draggable.id = "dragging";
		setUpDragStart(e);
	});
	
	draggable.addEventListener("dragend", ()=>{
		draggable.removeAttribute("id");
	});	
}

function flip()
{
	const cardObject = getCorrespondingCardObject(this.dataset.name);
	if(cardObject.seenHint || wrongCardObjectsDeck.includes(cardObject))
	{
		this.classList.toggle("flipped");
	}
	else if(!cardObject.seenHint)
	{
		modal.show("Hint Confirmation", "Are you sure you want to see a hint?", {
			cancelBtnText: "No",
			confirmBtnText: "Yes",
			onConfirm : () => {
				updateHintElement(++hintCount);
				cardObject.seenHint = true;
				this.classList.toggle("flipped");
			}
		})
	}
}

function getCorrespondingCardObject(name)
{
	return currentCardObjectsDeck.find(cardObject=>(cardObject.name === name)) || wrongCardObjectsDeck.find(cardObject=>(cardObject.name === name));
}

function setUpDragStart(e)
{
	e.dataTransfer.effectAllowed = "move";
	setGhostImage(e);
}

function setGhostImage(e)
{
	const cardToGhost = document.getElementById("dragging").getElementsByClassName("card")[0];
	let cardFace;
	if(cardToGhost.classList.contains("flipped"))
		cardFace = cardToGhost.getElementsByClassName("back-face")[0];
	else
		cardFace = cardToGhost.getElementsByClassName("front-face")[0];
	e.dataTransfer.setDragImage(cardFace, 90, 120);
}

function setUpCardDropPositionEventListeners()
{
	cardDropPosition.addEventListener("dragenter", (e)=>{
		cardDropPosition.classList.add("dragged-over");
		e.dataTransfer.dropEffect = "move";
	});

	cardDropPosition.addEventListener("dragover", (e)=>{
		e.preventDefault();
	});

	cardDropPosition.addEventListener("dragleave", ()=>{
		cardDropPosition.classList.remove("dragged-over");
	});

	cardDropPosition.addEventListener("drop", moveCard);
}

function moveCard()
{
	const cardToMove = document.getElementById("dragging");
	destination.insertBefore(cardToMove, cardDropPosition);
	cardToMove.removeAttribute("draggable");
	handleCardInDestination(cardToMove);
	removeFromCurrentDeck(cardToMove.querySelector(".card"));
	cardDropPosition.style.display = "none";
	if(cardObjectsDeck[0])
		setTimeout(addCard, 100);
	if(currentCardObjectsDeck[0])
		updateCardDropPosition();
}

function handleCardInDestination(card)
{
	const innerCard = card.querySelector(".card");
	if(showName)
	{
		nameToShow.innerText = innerCard.dataset.name;
		nameShower.classList.add("show");
		setTimeout(()=>{nameShower.classList.remove("show");}, 3200);
	}
	if(isCorrectMove(innerCard))
	{
		updateScoreElement(++scoreCount);
		card.classList.add("correct");
		setTimeout(()=>{card.remove();}, 2500);
		setTimeout(checkWin, 2500);
		playAudio('correct.mp3');
	}
	else
	{
		card.classList.add("wrong");
		wrongCardObjectsDeck.push(getCorrespondingCardObject(innerCard.dataset.name));
		checkLoss();
		playAudio('wrong.mp3');
	}	
}

function isCorrectMove(card) // temp body !!!
{
	const cardObject = getCorrespondingCardObject(card.dataset.name);
	if(cardObject[matcher] === cardDropPosition.innerText)
		return true;
	return false;
}

function updateScoreElement(scoreCount)
{
	score.innerText = scoreCount;
}

function updateHintElement(hintCount)
{
	hint.innerText = hintCount;
}

function checkWin()
{
	if(currentCardObjectsDeck.length === 0)
	{
		cardDropPosition.remove();
		showGameOver(true);
	}
}

function checkLoss()
{
	if(isDestinationFull())
	{
		cardDropPosition.remove();
		setTimeout(()=>{showGameOver(false)}, 1800);
	}
}

function isDestinationFull()
{
	if(destination.getElementsByClassName("card-wrapper")[maxCardsWrong-1])
	{
		return true;
	}
	return false;
}

function showGameOver(won)
{
	const msg = won? `🏆    You won!    🏆`: `😭    You lost!    😭`;
	modal.show(
		msg,
		`Your score is ${scoreCount} and you took ${hintCount} hint${hintCount===1?"":"s"}.
${won? getAchievement() : ""}Select ok to play again!`,
		{
			showCancelBtn: false,
			confirmBtnText: "OK",
			onConfirm: () => window.location.reload()
		}
	)
}

function getAchievement()
{
	if(scoreCount===deckLength && hintCount===0)
		return `You played a PERFECT GAME!

`;
	if(scoreCount===deckLength || hintCount===0)
		return `You played a NEAR PERFECT GAME!

`;
	else
		return``;
}

function updateCardDropPosition()
{
	setTimeout(()=>{
		cardDropPosition.style.display = "flex";
		cardDropPosition.classList.remove("dragged-over");
		cardDropPosition.querySelector("#matcher").innerText = getRandomMatcher();
	}, 2500);
}

function getRandomMatcher()
{
	const i = Math.floor(Math.random() * currentCardObjectsDeck.length);
	return currentCardObjectsDeck[i][matcher];
}

function removeFromCurrentDeck(card)
{
	const index = currentCardObjectsDeck.findIndex(cardObject=>card.dataset.name === cardObject.name);
	currentCardObjectsDeck.splice(index, 1);
}

function goHome()
{
	location.reload();
}


function playAudio(audioFile) {
	if(isAudioEnable == 'true'){
		const audio = new Audio(audioFile);
		audio.play();
	}
}

function changeAudioPreference() {
	console.log(isAudioEnable);
	isAudioEnable = isAudioEnable == 'true' ? 'false' : 'true';
	localStorage.setItem('isAudioEnable', isAudioEnable);
	audioButton.children[0].src = isAudioEnable == 'true' ? './speaker_on.png' : './speaker_off.png';
}