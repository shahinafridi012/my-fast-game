// event handler


function handleKeyBoardKeyUpEvent(event){
const playerPressed = event.key ;   
console.log(playerPressed)
// get the expected to press
const theCurRntAlphabet = document.getElementById('screen-latter');
const CurrentAlphabet = theCurRntAlphabet.innerText;
const expectedAlphabet = CurrentAlphabet.toLowerCase();
console.log(playerPressed, expectedAlphabet)
// console.log(theCurRntAlphabet.innerText);
// check match or not 
if(playerPressed === expectedAlphabet){
    console.log('you got point');
    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    console.log(currentScore);
    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore;
    // console.log('you have press right', expectedAlphabet);
    removeBgColoById(expectedAlphabet);
    play();
}
else {
    console.log('you lose your point')
    const currentLifeElement = document.getElementById('current-life')
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    const newLife = currentLife -1;
    currentLifeElement.innerText = newLife;
    if(newLife === 0){
       const gameOver = document.getElementById('play-ground');
        gameOver.classList.add('hidden');
        const gamePoint = document.getElementById('final-round');
        gamePoint.classList.remove('hidden');
    }
}
}

document.addEventListener('keyup', handleKeyBoardKeyUpEvent )



function play(){
    const hideTheHome = document.getElementById('home-screen');
    const hideTheHomeOn = hideTheHome.classList.add('hidden');
    console.log(hideTheHomeOn);
    const showThePlay = document.getElementById('play-ground');
    const showTheKbd = showThePlay.classList.remove('hidden');
    console.log(showTheKbd);
    
    const alPaBetString = 'abcdefghijklmnopqrstwyz';
    const alPhaBet = alPaBetString.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphaDed = alPhaBet[index];
    console.log(index, alphaDed);
    // return alphaDed;
    
    const alphabetOnScreen = document.getElementById('screen-latter')
    alphabetOnScreen.innerText = alphaDed;

    const setBgColor = document.getElementById(alphaDed);
    setBgColor.classList.add('bg-orange-400');

    const finalRoundAgain = document.getElementById('final-round')
    finalRoundAgain.classList.add('hidden')

    // const RecoverPoint = document.getElementById('current-life');
    // const showThePoint = RecoverPoint.innerText;
    // console.log(showThePoint);
    
    
}
function removeBgColoById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}










