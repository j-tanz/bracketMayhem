

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
