// Arrays for different parts of the sentence
const nouns = ["dog", "cat", "car", "bird", "fish"];
const verbs = ["runs", "jumps", "flies", "swims", "drives"];
const adjectives = ["happy", "sad", "fast", "slow", "excited"];
const nouns2 = ["park", "house", "river", "mountain", "beach"];
const places = ["in the city", "at the zoo", "on the moon", "underwater", "in the forest"];

// Variables to store selected words
let selectedNoun = "";
let selectedVerb = "";
let selectedAdjective = "";
let selectedNoun2 = "";
let selectedPlace = "";

// Event listeners for each button to generate random words
document.getElementById('noun-btn').addEventListener('click', function() {
    selectedNoun = nouns[Math.floor(Math.random() * nouns.length)];
    displayStory();
});

document.getElementById('verb-btn').addEventListener('click', function() {
    selectedVerb = verbs[Math.floor(Math.random() * verbs.length)];
    displayStory();
});

document.getElementById('adj-btn').addEventListener('click', function() {
    selectedAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    displayStory();
});

document.getElementById('noun2-btn').addEventListener('click', function() {
    selectedNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    displayStory();
});

document.getElementById('place-btn').addEventListener('click', function() {
    selectedPlace = places[Math.floor(Math.random() * places.length)];
    displayStory();
});

// Function to display the current story
function displayStory() {
    const story = `${selectedNoun} ${selectedVerb} ${selectedAdjective} ${selectedNoun2} ${selectedPlace}`;
    document.getElementById('story').textContent = story;
}

// Event listener for the speak button
document.getElementById('speak-btn').addEventListener('click', function() {
    const textToSpeak = document.getElementById('story').textContent;
    if (textToSpeak) {
        speakNow(textToSpeak);
    } else {
        alert("Please generate a sentence first!");
    }
});

// Function to use the Web Speech API to speak the text
function speakNow(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
