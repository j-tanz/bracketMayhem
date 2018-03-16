function getUserBrackets(userid) {
    let queryURL = "/api/userBrackets/" + userid;
    $.get(queryURL, function (data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].bracketName)
            bracketName = data[i].bracketName
            var panelBracketClass = "panel-" + bracketName.split(" ").join("-");
            console.log(panelBracketClass);
            var newPanel = $("<div class ='panel panel-primary bracket-btn'> <div class='panel-heading' style='width:50%; margin: 0 auto;'><h2 class='panel-title " + panelBracketClass + "'>")
            console.log(newPanel)
            // var bracketBtn = $("<button class='brac-btn'>");
            // $(bracketBtn).text("hi");
            // $("#portfolio").append(bracketBtn);

            $(".user-brackets-panels").append(newPanel);
            $("h2." + panelBracketClass).text(bracketName);

        }
        $(".bracket-btn").on("click", clickBracketBtn);

    });
}

function renderUserBrackets(userid) {
    getUserBrackets(userid);
    //    $(".user-brackets-panels").
}
userID = JSON.parse(localStorage.getItem("userID"));
console.log("userid: ", userID);
renderUserBrackets(userID);

function clickBracketBtn(){
    console.log("this",$(this).text().trim());
    bracketName=$(this).text();
    localStorage.setItem("selectedBracketName", JSON.stringify(bracketName));
    location.assign("../bracket/savedBracket.html")
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
