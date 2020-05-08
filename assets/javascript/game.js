const teamOneshootButton = document.querySelector('#teamone-shoot-button');
const teamTwoshootButton = document.querySelector('#teamtwo-shoot-button');

const teamOnenumShots = document.querySelector('#teamone-numshots');
const teamTwonumShots = document.querySelector('#teamtwo-numshots');

const teamOnenumGoals = document.querySelector('#teamone-numgoals');
const teamTwonumGoals = document.querySelector('#teamtwo-numgoals');

const resetContainer = document.querySelector('#reset-container');
const resetButton = document.querySelector('#reset-button');
const numResets = document.querySelector('#num-resets');

//TeamOne//

teamOneshootButton.addEventListener('click', function () {
    console.log('shoot button cliked');

    const NewteamOnenumShotsvalue = Number(teamOnenumShots.innerHTML) + 1;
    teamOnenumShots.innerHTML = NewteamOnenumShotsvalue;

    const NewteamOnenumGoalsvalue = Number(teamOnenumGoals.innerHTML) + 1;


    if (Math.random() >= 0.5) {

        teamOnenumGoals.innerHTML = NewteamOnenumGoalsvalue;
    }
})

//TeamTwo//

teamTwoshootButton.addEventListener('click', function () {
    console.log('shoot button cliked');

    const NewteamTwonumShotsvalue = Number(teamTwonumShots.innerHTML) + 1;
    teamTwonumShots.innerHTML = NewteamTwonumShotsvalue;

    const NewteamTwonumGoalsvalue = Number(teamTwonumGoals.innerHTML) + 1;

    if (Math.random() >= 0.5) {

        teamTwonumGoals.innerHTML = NewteamTwonumGoalsvalue;
    }
})

//Reset//

resetButton.addEventListener('click', function () {
    console.log('reset button clicked');

    const NewnumResetsvalue = Number(numResets.innerHTML) + 1;
    numResets.innerHTML = NewnumResetsvalue;

    const resetContainer = Number(numResets.innerHTML) + 1;

    teamOnenumShots.innerHTML = 0;
    teamTwonumShots.innerHTML = 0;
    teamOnenumGoals.innerHTML = 0;
    teamTwonumGoals.innerHTML = 0;

})













