
const apiKey = "api_key=vf4kt7vxupytvw5px3z2t34x";

// $(document).ready(function () {

    function lookUpSchedule() {

        let getURL = "http://api.sportradar.us/ncaamb/trial/v4/en/games/2018/03/07/schedule.json?"
        let finalizedGamesArr = [];

        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/' + getURL + apiKey,
            method: 'GET'

        }).done(function (result) {
            scheduleObj = {
                games: result.games,
            }
            for (let i = 0; i < scheduleObj.games.length; i++) {
                // console.log('scheduleObj222: ', scheduleObj.games[0].status);
                if (scheduleObj.games[i].status === "closed") {
                    finalizedGamesArr.push(scheduleObj.games[i]);
                }
                // console.log('finalizedGamesArr', finalizedGamesArr);
            }

            // let endedGames = [...finalizedGamesArr].filter(e => e.home_points < e.away_points).map(elem => ({...elem})); 
            // console.log('endedGames: ', endedGames);
            winnerArr = [];
            mergedFinalArr = [];

            for (let i = 0; i < finalizedGamesArr.length; i++) {
                if (finalizedGamesArr[i].home_points > finalizedGamesArr[i].away_points) {
                    winnerArr[i] = {
                        winner: "homeTeam"
                    }
                } else {
                    winnerArr[i] = {
                        winner: "awayTeam"
                    }
                }
                console.log("gamesarr: ", winnerArr);
                // console.log("endedGames", endedGames)
                let mergedFinalArr = _.assign({}, finalizedGamesArr[i], winnerArr[i]);
                console.log('mergedFinalArr: ', mergedFinalArr);

            }
            
            
        });
    }

// })

