const words = {
    'A': ['Apple', 'Astronaut', 'Adventure', 'Autumn', 'Axe', 'Avocado'],
    'B': ['Butterfly', 'Beach', 'Banana', 'Bridge', 'Balloon', 'Breeze'],
    'C': ['Cloud', 'Cake', 'Coffee', 'Castle', 'Candle', 'Crystal'],
    'D': ['Dragon', 'Dance', 'Diamond', 'Desert', 'Dolphin', 'Daisy'],
    'E': ['Eagle', 'Earth', 'Echo', 'Elephant', 'Emerald', 'Eclipse'],
    'F': ['Forest', 'Fire', 'Flower', 'Friend', 'Feather', 'Festival'],
    'G': ['Garden', 'Galaxy', 'Ghost', 'Guitar', 'Gold', 'Glacier'],
    'H': ['Heart', 'Horse', 'House', 'Honey', 'Harbor', 'Horizon'],
    'I': ['Island', 'Ice', 'Igloo', 'Insect', 'Ivory', 'Illusion'],
    'J': ['Jungle', 'Jazz', 'Juice', 'Journey', 'Jewel', 'Jigsaw'],
    'K': ['Knight', 'King', 'Kitchen', 'Kite', 'Kangaroo', 'Key'],
    'L': ['Lion', 'Lake', 'Leaf', 'Light', 'Lemon', 'Lighthouse'],
    'M': ['Moon', 'Magic', 'Mountain', 'Music', 'Meadow', 'Meteor'],
    'N': ['Night', 'Nature', 'Needle', 'Nest', 'Neptune', 'Notebook'],
    'O': ['Ocean', 'Orange', 'Owl', 'Orchestra', 'Oasis', 'Opal'],
    'P': ['Planet', 'Peace', 'Penguin', 'Pizza', 'Pineapple', 'Pumpkin'],
    'Q': ['Queen', 'Quest', 'Quiet', 'Quarter', 'Quasar', 'Quilt'],
    'R': ['Rainbow', 'River', 'Robot', 'Rose', 'Rain', 'Rocket'],
    'S': ['Star', 'Sun', 'Snake', 'Storm', 'Snow', 'Sapphire'],
    'T': ['Tree', 'Train', 'Tiger', 'Time', 'Treasure', 'Tornado'],
    'U': ['Universe', 'Umbrella', 'Unity', 'Urban', 'Uranium', 'Utopia'],
    'V': ['Valley', 'Voice', 'Violin', 'Village', 'Velvet', 'Volcano'],
    'W': ['Water', 'Wind', 'World', 'Winter', 'Whale', 'Wizard'],
    'X': ['Xylophone', 'X-ray', 'Xenon', 'Xavier', 'Xyloid', 'Xerox'],
    'Y': ['Yellow', 'Youth', 'Yacht', 'Year', 'Yogurt', 'Yonder'],
    'Z': ['Zebra', 'Zoo', 'Zephyr', 'Zigzag', 'Zucchini', 'Zenith']
};


const keyboard = document.getElementById('keyboard');
const wordDisplay = document.getElementById('wordDisplay');

function getRandomWord(letter) {
    return words[letter][Math.floor(Math.random() * words[letter].length)];
}

function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US'; // Set language
    speechSynthesis.speak(utterance);
}

for (let letter in words) {
    let button = document.createElement("button");
    button.textContent = letter;
    button.onclick =  () => {
        const word = getRandomWord(letter);
        wordDisplay.textContent = word;
        speakWord(word);
    };
    keyboard.appendChild(button);
}