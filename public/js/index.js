
const apiKey = "api_key=vf4kt7vxupytvw5px3z2t34x";

// $(document).ready(function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = "0" + dd;
    }
    if(mm<10) {
        mm = "0" + mm;
    }

    let getURL = "http://api.sportradar.us/ncaamb/trial/v4/en/games/" + yyyy + "/" + mm + "/" + dd + "/schedule.json?"
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