
function bellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.work = function () {
        console.log('Cleaning in progress');
    }
}

var bellBoy1 = new bellBoy('Debarko', 20, true, ['Bengali', 'English', 'Hindi']);
var bellBoy2 = new bellBoy('Sumit', 21, true, ['Jharkhandi', 'English', 'Hindi']);

bellBoy1.work();

function buttonPress (keyWord, mp3file, keyStroke) {
    this.keyWord = keyWord;
    this.playSound = function () {
        var audioFile = new Audio(mp3file);
        audioFile.play();
    }
}

