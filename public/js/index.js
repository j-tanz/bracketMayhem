
const apiKey = "api_key=vf4kt7vxupytvw5px3z2t34x";

// $(document).ready(function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    var tomorrow = dd++;


    if(dd<10) {
        dd = "0" + dd;
    }
    if(tomorrow<10) {
        tomorrow = "0" + tomorrow;
    }
    if(mm<10) {
        mm = "0" + mm;
    }


    let finalizedGamesArr = [];
    let scheduleObj = {};
    let winnerArr = [];
    let mergedFinalArr = [];
    let tomorrowScheduleArr = [];
    let gamestate = [];

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

        console.log(scheduleObj.allData.rounds);

        for (let i = 1; i < scheduleObj.allData.rounds.length; i++) {
            for ( let j = 0; j < scheduleObj.allData.rounds[i].length; j++) {
                for ( let k = 0; k < scheduleObj.allData.rounds[i].bracketed[j].length; k++){
                    gameState.push(scheduleObj.allData.rounds[i].bracketed[j].games[k])
                    }
                } 
            }
            console.log("gameState", scheduleObj.allData.rounds[1].bracketed[0].games[0]);
            
        })       
    }
    


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