
const apiKey = "api_key=vf4kt7vxupytvw5px3z2t34x";

// $(document).ready(function () {
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
var tomorrow = dd++;

if (dd < 10) {
    dd = "0" + dd;
}
if (tomorrow < 10) {
    tomorrow = "0" + tomorrow;
}
if (mm < 10) {
    mm = "0" + mm;
}

let finalizedGamesArr = [];
let scheduleObj = {};
let winnerArr = [];
let mergedFinalArr = [];
let tomorrowScheduleArr = [];
let sortArr = [];
let tourneyRounds = [];
let gameState = [];
let masterArr =[];
let pendingArr =[];
let placeArr = [];

function tourneyLookup() {
    let tournamentID = "74db39e5-be49-4ec8-9169-0cc20ed9f792"
    // let tournamentID = "caa4fb9e-12f1-4429-a160-8e6f4de1d84c"

    let getURL = "http://api.sportradar.us/ncaamb/trial/v4/en/tournaments/" + tournamentID + "/schedule.json?"

    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/' + getURL + apiKey,
        method: 'GET'
    }).done(function (result) {
        scheduleObj = {
            allData: result
        }

        for (let i = 1; i < scheduleObj.allData.rounds.length; i++) {
            tourneyRounds.push(_.forEach(scheduleObj.allData.rounds[i]));
        }
        _.forEach(tourneyRounds, function (val, z) {
            if (val.bracketed.length !== 0) {
                sortArr.push(val.bracketed);
            }
            if (val.games.length !== 0) {
                sortArr.push(val.games);
            }
        })
        _.forEach(sortArr, function (elem, y) {
            _.forEach(elem, function (sub) {
                if (sub.id) {
                    gameState.push(sub);
                } else {
                    _.forEach(sub.games, function (nest1) {
                        if (nest1) {
                            gameState.push(nest1)
                        }
                    })
                }
            })
        })
        checkCompleted(gameState);
    })
}
let gameIdsArr = [];
let bracketGamesArr =[];
let workObj = {};

function appendIdent(gamesList){
    // console.log('gamesList: ', gamesList);
    for ( let i = 0; i < gamesList.length; i++){
        let gameNumber = gamesList[i].title.substring(gamesList[i].title.indexOf("Game"), gamesList[i].title.length);
        let num = gameNumber.slice(5);
        // console.log("num", num);

        if (_.includes(gamesList[i].title, "East")){
            region = "W"
        } else if 
            (_.includes(gamesList[i].title, "West")){
                region = "X"
            } else if (_.includes(gamesList[i].title, "Mid")){
                region = "Y"
            } else region = "Z";
            // console.log("round", gameRound);
        
            if (_.includes(gamesList[i].title, "First")){
                round = "1"
            }
            if (_.includes(gamesList[i].title, "Second")){
                round = "2"
            }
            if (_.includes(gamesList[i].title, "Sweet")){
                round = "3"
            }
            if (_.includes(gamesList[i].title, "Elite")){
                round = "4"
            }
            if (_.includes(gamesList[i].title, "Semifinals")){
                round = "5"
            }
            if (_.includes(gamesList[i].title, "Chmpionship")){
                round = "6"
            }
            // console.log("ID ", "R",round,region,num);
            workObj[i]={
                gameId: "R" + "" + round + "" + region + "" + num
            }
            gameIdsArr.push(workObj[i]);
            bracketGamesArr.push(_.merge({},gamesList[i], gameIdsArr[i]));

            // console.log('bracketGamesArr: ', bracketGamesArr);
        }
        console.log("bracketGamesArr", bracketGamesArr);

    }


function checkCompleted(gsObj) {
    for (let i = 0; i < gsObj.length; i++) {
        if (gsObj[i].status === "closed") {
            finalizedGamesArr.push(gsObj[i]);
        } else {
            pendingArr.push(gsObj[i]);
        }
    }
    for (let i = 0; i < finalizedGamesArr.length; i++) {
        finalizedGamesArr[i].home_points > finalizedGamesArr[i].away_points ? 
            winnerArr[i] = { winner: "homeTeam", didHomeTeamWin: true } :
            winnerArr[i] = { winner: "awayTeam", didHomeTeamWin: false } ;
            mergedFinalArr.push(_.assign({}, finalizedGamesArr[i], winnerArr[i]));                
    }
    combinedMasterArr(mergedFinalArr, pendingArr);
    // console.log('mergedFinalArr: ', mergedFinalArr); 
}
function combinedMasterArr(arr1,arr2) {
   Array.prototype.push.apply(arr1, arr2); 
   masterArr = arr1;
//    console.log('masterArr: ', masterArr);
   appendIdent(masterArr);
   return masterArr;
}


// console.log('mergedFinalArr: ', mergedFinalArr);

//************************************************
// SAVE FOR NOW JUST IN CASE WE NEED TO LOOK UP OFF OF OTHER API!
//*********************************************** */

    // function lookUpEnded() {
    //     let getURL = "http://api.sportradar.us/ncaamb/trial/v4/en/games/" + yyyy + "/" + mm + "/" + dd + "/schedule.json?"

    //     $.ajax({
    //         url: 'https://cors-anywhere.herokuapp.com/' + getURL + apiKey,
    //         method: 'GET'

    //     }).done(function (result) {
    //         scheduleObj = { 
    //             games: result.games
    //         }
    //         for (let i = 0; i < scheduleObj.games.length; i++) {
    //             if (scheduleObj.games[i].status === "closed") {
    //                 finalizedGamesArr.push(scheduleObj.games[i]);
    //             }
    //         }
    //         for (let i = 0; i < finalizedGamesArr.length; i++) {
    //             finalizedGamesArr[i].home_points > finalizedGamesArr[i].away_points ?
    //                 winnerArr[i] = { winner: "homeTeam", didHomeTeamWin: true } : winnerArr[i] = { winner: "awayTeam", didHomeTeamWin: false }
    //             let mergedFinalArr = _.assign({}, finalizedGamesArr[i], winnerArr[i]);
    //             //  console.log('mergedFinalArr: ', mergedFinalArr);
    //         }    
    //     });
    // }

    // function lookUpTomorrow() {
    //     let getURL = "http://api.sportradar.us/ncaamb/trial/v4/en/games/" + yyyy + "/" + mm + "/" + tomorrow + "/schedule.json?"

    //     $.ajax({
    //         url: 'https://cors-anywhere.herokuapp.com/' + getURL + apiKey,
    //         method: 'GET'

    //     }).done(function (result) {
    //         tomorrowObj = {
    //             games: result.games
    //         }
    //         for (let i = 0; i < tomorrowObj.games.length; i++) {
    //             if (tomorrowObj.games[i].status === "scheduled") {
    //                 tomorrowScheduleArr.push(tomorrowObj.games[i]);
    //             }
    //         }
    //         console.log("tomorrowScheduleArr", tomorrowScheduleArr);

    //     })
    // }
// })
 // let endedGames = [...finalizedGamesArr].filter(e => e.home_points < e.away_points).map(elem => ({...elem})); 