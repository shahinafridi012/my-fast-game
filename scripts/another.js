// function play(){
//     const hideTheHome = document.getElementById('home-screen');
//     const hideTheHomeOn = hideTheHome.classList.add('hidden');
//     console.log(hideTheHomeOn);
//     const showThePlay = document.getElementById('play-ground');
//     const showTheKbd = showThePlay.classList.remove('hidden');
//     console.log(showTheKbd);
// }

// function getARandomLatter(){
//     const alPaBetString = 'abcdefghijklmnopqrstwyz';
//     const alPhaBet = alPaBetString.split('');
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
//     const alphaDed = alPhaBet[index];
//     console.log(index, alphaDed);
//     return alphaDed;
// }
// function continueGame(){
//     const alphaDed = getARandomLatter();
//     console.log(alphaDed);
// }
// function play(){
//     continueGame()
// }
// function setBgColor(elementId){
//   const element = document.getElementById(elementId);
//   element.classList.add('bg-orange-400');

// }
// function paly(){
//     setBgColor(alphaDed);
// }
// function handleKeyPress(event){
//     const pressByMan = event.key;
//     console.log('player pressed', pressByMan)
    
//     // get the expected to press
//     const theCurRntAlphabet = document.getElementById('screen-latter')
//     const theAlphaBet = theCurRntAlphabet.innerText;
//     const theExpectedAlPahBet = theAlphaBet.toLowerCase();
//     console.log(pressByMan, theExpectedAlPahBet);

//     // check match or not

//     if(pressByMan === theExpectedAlPahBet){
//         console.log('you win')
//     }
//     else{
//         console.log('you lose')

//     }

