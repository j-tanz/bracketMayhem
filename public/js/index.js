
const apiKey = "api_key=vf4kt7vxupytvw5px3z2t34x";

// $(document).ready(function () {

    let getURL = "http://api.sportradar.us/ncaamb/trial/v4/en/games/2018/03/07/schedule.json?"
    let finalizedGamesArr = [];
    let scheduleObj = {};
    let winnerArr = [];
    let mergedFinalArr = [];

    function lookUpSchedule() {
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/' + getURL + apiKey,
            method: 'GET'

        }).done(function (result) {
            scheduleObj = { 
                games: result.games
            }
            for (let i = 0; i < scheduleObj.games.length; i++) {
                if (scheduleObj.games[i].status === "closed") {
                    finalizedGamesArr.push(scheduleObj.games[i]);
                }
            }
            for (let i = 0; i < finalizedGamesArr.length; i++) {
                finalizedGamesArr[i].home_points > finalizedGamesArr[i].away_points ?
                    winnerArr[i] = { winner: "homeTeam", didHomeTeamWin: true } : winnerArr[i] = { winner: "awayTeam", didHomeTeamWin: false }
                let mergedFinalArr = _.assign({}, finalizedGamesArr[i], winnerArr[i]);
                console.log('mergedFinalArr: ', mergedFinalArr);
            }         
        });
    }

// })

 // let endedGames = [...finalizedGamesArr].filter(e => e.home_points < e.away_points).map(elem => ({...elem})); 