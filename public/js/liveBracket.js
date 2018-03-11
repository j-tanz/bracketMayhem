
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
let masterArr = [];
let pendingArr = [];
let placeArr = [];
let gamesArr = [];

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
// let bracketGamesArr =[];


function appendIdent(gamesList) {
    let bracketGamesArr = [];
    // console.log('gamesList: ', gamesList);
    for (let i = 0; i < gamesList.length; i++) {
        let gameNumber = gamesList[i].title.substring(gamesList[i].title.indexOf("Game"), gamesList[i].title.length);
        let num = gameNumber.slice(5);
        // console.log("num", num);

        if (_.includes(gamesList[i].title, "East")) {
            region = "W";
            regionNum = "0";
        } if (_.includes(gamesList[i].title, "West")) {
            region = "X";
            regionNum = "1";
        } if (_.includes(gamesList[i].title, "Mid")) {
            region = "Y";
            regionNum = "2";
        } if (_.includes(gamesList[i].title, "South")) {
            region = "Z";
            regionNum = "3";
        } if (_.includes(gamesList[i].title, "Championship")) {
            region = "";
            num = "CH";
        } if (_.includes(gamesList[i].title, "Final")) {
            region = "";
        }
        if (_.includes(gamesList[i].title, "First")) {
            round = "1"
        }
        if (_.includes(gamesList[i].title, "Second")) {
            round = "2"
        }
        if (_.includes(gamesList[i].title, "Sweet")) {
            round = "3"
        }
        if (_.includes(gamesList[i].title, "Elite")) {
            round = "4"
        }
        if (_.includes(gamesList[i].title, "Semifinals")) {
            round = "5"
        }
        if (_.includes(gamesList[i].title, "Championship")) {
            round = "6"
        }
        // console.log("ID ", "R",round,region,num);
        let workObj = {};
        workObj[i] = {
            gameId: "R" + "" + round + "" + region + "" + num,
            round: round,
            region: region,
            regionNum: regionNum,
            gameNum: num
        }
        gameIdsArr.push(workObj[i]);


        bracketGamesArr.push(_.merge({}, gamesList[i], gameIdsArr[i]));
        // console.log('bracketGamesArr: ', bracketGamesArr);
    }
    // console.log("bracketGamesArr", bracketGamesArr);
    updateTeamNames(bracketGamesArr.slice(0, bracketGamesArr.length - 3));
    // updateTeamNames(bracketGamesArr);
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
            winnerArr[i] = { winner: "awayTeam", didHomeTeamWin: false };
        mergedFinalArr.push(_.assign({}, finalizedGamesArr[i], winnerArr[i]));
    }
    combinedMasterArr(mergedFinalArr, pendingArr);
    // console.log('mergedFinalArr: ', mergedFinalArr); 
}
function combinedMasterArr(arr1, arr2) {
    Array.prototype.push.apply(arr1, arr2);
    masterArr = arr1;
    //    console.log('masterArr: ', masterArr);
    appendIdent(masterArr);
    return masterArr;
}

tourneyLookup();


let titles = [
    'Round 1', 'Round 2', 'Sweet Sixteen', 'Elite Eight', 'Final Four', 'Championship', 'Champion'
];
//dont touch-will break display
let rounds = [
    //round of 64 - 32 games
    [
        //region 1 
        {
            player1: {
                name: "Team 1", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 1, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 64",
                ID: 64
            }
        },

        {
            player1: {
                name: "Team 63", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 63, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 2",
                ID: 2
            },
        },
        {
            player1: {
                name: "Team 4", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 4, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 61",
                ID: 61
            }
        },
        {
            player1: {
                name: "Team 5", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 5, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 60",
                ID: 60
            },
        },
        {
            player1: {
                name: "Team 59", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 59, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 6",
                ID: 6
            },
        },

        {
            player1: {
                name: "Team 58", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 58, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 7",
                ID: 7
            },
        },
        {
            player1: {
                name: "Team 8", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 8, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 57",
                ID: 57
            }
        },
        {
            player1: {
                name: "Team 9", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 9, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 56",
                ID: 56
            },
        },
        //region 2
        {
            player1: {
                name: "Team 10", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 10, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 55",
                ID: 55
            }
        },

        {
            player1: {
                name: "Team 54", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 54, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 11",
                ID: 11
            },
        },

        {
            player1: {
                name: "Team 12", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 12, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 53",
                ID: 53
            }
        },
        {
            player1: {
                name: "Team 13", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 13, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 52",
                ID: 52
            }
        },
        {
            player1: {
                name: "Team 51", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 51, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 14",
                ID: 14
            },
        },

        {
            player1: {
                name: "Team 50", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 50, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 15",
                ID: 15
            }
        },

        {
            player1: {
                name: "Team 16", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 16, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 49",
                ID: 49
            },
        },

        {
            player1: {
                name: "Team 48", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 48, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 17",
                ID: 17
            }
        },
        //region 3
        {
            player1: {
                name: "Team 18", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 18, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 47",
                ID: 47
            }
        },

        {
            player1: {
                name: "Team 19", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 19, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 46",
                ID: 46
            },
        },
        {
            player1: {
                name: "Team 45", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 45, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 20",
                ID: 20
            }
        },
        {
            player1: {
                name: "Team 21", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 21, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 44",
                ID: 44
            },
        },
        {
            player1: {
                name: "Team 43", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 43, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 22",
                ID: 22
            },
        },

        {
            player1: {
                name: "Team 42", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 42, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 23",
                ID: 23
            },
        },

        {
            player1: {
                name: "Team 24", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 24, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 41",
                ID: 41
            }
        },
        //region 4
        {
            player1: {
                name: "Team 25", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 25, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 40",
                ID: 40
            },
        },
        {
            player1: {
                name: "Team 39", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 39, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 26",
                ID: 26
            }
        },

        {
            player1: {
                name: "Team 37", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 37, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 28",
                ID: 28
            },
        },

        {
            player1: {
                name: "Team 27", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 27, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 38",
                ID: 38
            }
        },
        {
            player1: {
                name: "Team 29", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 29, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 36",
                ID: 36
            }
        },

        {
            player1: {
                name: "Team 35", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 35, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 30",
                ID: 30
            },
        },

        {
            player1: {
                name: "Team 34", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 34, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 31",
                ID: 31
            }
        },
        {
            player1: {
                name: "Team 32", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 32, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 33",
                ID: 33
            }
        },
        {
            player1: {
                name: "Team 3", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 3, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 62",
                ID: 62
            }
        },
    ],

    //round of 32 - 16 games
    [
        //region 1    
        {
            player1: {
                name: "Team 1", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 1, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 63",
                ID: 63
            }
        },

        {
            player1: {
                name: "Team 4", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 4, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 5",
                ID: 5
            },
        },
        {
            player1: {
                name: "Team 59", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 59, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 7",
                ID: 7
            }
        },
        {
            player1: {
                name: "Team 8", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 8, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 9",
                ID: 9
            },
        },
        //region 2 
        {
            player1: {
                name: "Team 10", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 10, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 54",
                ID: 54
            },
        },

        {
            player1: {
                name: "Team 12", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 12, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 13",
                ID: 13
            },
        },

        {
            player1: {
                name: "Team 51", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 51, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 15",
                ID: 15
            }
        },

        {
            player1: {
                name: "Team 16", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 16, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 48",
                ID: 48
            },
        },
        //region 3
        {
            player1: {
                name: "Team 18", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 18, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 46",
                ID: 46
            }
        },

        {
            player1: {
                name: "Team 45", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 45, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 21",
                ID: 21
            },
        },

        {
            player1: {
                name: "Team 43", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 43, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 23",
                ID: 23
            }
        },
        {
            player1: {
                name: "Team 24", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 24, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 40",
                ID: 40
            }
        },
        //region 4
        {
            player1: {
                name: "Team 39", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 39, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 28",
                ID: 28
            },
        },

        {
            player1: {
                name: "Team 27", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 27, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 29",
                ID: 29
            }
        },

        {
            player1: {
                name: "Team 35", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 35, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 31",
                ID: 31
            },
        },
        {
            player1: {
                name: "Team 32", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 32, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 62",
                ID: 62
            }
        },
    ],

    // sweet sixteen
    [
        //region 1 
        {
            player1: {
                name: "Team 1", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 1, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 4",
                ID: 4
            }
        },

        {
            player1: {
                name: "Team 59", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 59, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 8",
                ID: 8
            },
        },
        //region 2
        {
            player1: {
                name: "Team 10", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 10, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 13",
                ID: 13
            }
        },

        {
            player1: {
                name: "Team 15", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 15, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 16",
                ID: 16
            },
        },
        //region 3
        {
            player1: {
                name: "Team 46", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 46, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 45",
                ID: 45
            }
        },

        {
            player1: {
                name: "Team 23", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 23, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 24",
                ID: 24
            },
        },
        //region 4
        {
            player1: {
                name: "Team 28", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 28, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 27",
                ID: 27
            }
        },

        {
            player1: {
                name: "Team 35", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 35, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 32",
                ID: 32
            },
        },
    ],

    //elite eight
    [
        //region 1  
        {
            player1: {
                name: "Team 1", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 1, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 59",
                ID: 59
            }
        },
        //region 2
        {
            player1: {
                name: "Team 10", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 10, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 16",
                ID: 16
            },
        },
        //region 3
        {
            player1: {
                name: "Team 45", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 45, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 24",
                ID: 24
            }
        },
        //region 4

        {
            player1: {
                name: "Team 28", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 28, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 32",
                ID: 32
            },
        },
    ],

    //final four
    [{
        player1: {
            name: "Team 1", //-- name of the player
            winner: true, //-- add class winner to player container
            ID: 1, //-- player ID
            url: "http://custom_link.com" //-- action click to player
        },
        player2: {
            name: "Team 10",
            ID: 10
        }
    },

    {
        player1: {
            name: "Team 45", //-- name of the player
            winner: true, //-- add class winner to player container
            ID: 45, //-- player ID
            url: "http://custom_link.com" //-- action click to player
        },
        player2: {
            name: "Team 32",
            ID: 32
        },
    },
    ],

    //championship game
    [

        {
            player1: {
                name: "Team 10", //-- name of the player
                winner: true, //-- add class winner to player container
                ID: 10, //-- player ID
                url: "http://custom_link.com" //-- action click to player
            },
            player2: {
                name: "Team 32",
                ID: 32
            },
        },
    ],

    // champion
    [
        {
            player1: {
                name: "Team 10",
                winner: true,
                ID: 10,
                url: "http://custom_link.com"
            },
        },
    ]
];
// let bracketGamesArr = [
// {
//     gameId: "R1W1",
//     awayPoints: 53,
//     homePoints: 54,
//     winner: true,
//     homeName: "Wolves",
//     awayName: "panthers",
//     homeTeamId: 4,
//     awayTeamId: 5,
// },
// {
//     gameId: "R1W2",
//     awayPoints: 53,
//     homePoints: 54,
//     winner: true,
//     homeName: "Dogs",
//     awayName: "Dawgs",
//     homeTeamId: 4,
//     awayTeamId: 5,
// },
// {
//     gameId: "R1W3",
//     awayPoints: 53,
//     homePoints: 54,
//     winner: true,
//     homeName: "people",
//     awayName: "aliens",
//     homeTeamId: 4,
//     awayTeamId: 5,
// }
// ];
// let test = "South Regional = First Round - Game 4";
/*
 * @function getGameNum
 * @parameter{string}: game name variable
 * @return {string}: gameId num that will be concated to the gameId
 */
// function getGameNum(test) {
//     let gameNumber = test.substring(test.indexOf("Game"), test.length);
//     console.log(gameNumber);
//     let num = gameNumber.slice(5);
//     console.log(num);
//     let newGameId = num; 
//     console.log(typeof newGameId, newGameId);
// }
// getGameNum(test);
/*
 * @function loopGameId
 * @parameter{array of strings}: gameId
 * @return {string}: awayName, homeName
 */
let regionMap = {
    W: 0,
    X: 1,
    Y: 2,
    Z: 3
};
// function loopGameId(bracketGamesArr) {
//     console.log('bracketGamesArr: ', bracketGamesArr);
//     bracketGamesArr.forEach((element) =>  updateTeamNames(element));
// };
// loopGameId(bracketGamesArr);


/*
 * @function updateTeamNames
 * @parameter{string}: gameId variable
 * @return {string}: awayName, homeName
 */


function updateTeamNames(bracketGamesArr) {
    console.log('bracketGamesArr: ', bracketGamesArr);
    console.log("rounds ,", rounds);
    _.forEach(bracketGamesArr, function (val, z) {
        let index = regionMap[val.gameId[2]] * ((rounds[val.gameId[1] - 1].length) / 4) + parseInt(val.gameId[3]) - 1;
        index = index !== 2.5 ? index : 0;
        // if (parseInt(val.away.seed) < 10) { 
        //     val.away.seed = " " + val.away.seed;
        //     console.log('val.away.seed: ', val.away.seed);
        // }

        rounds[val.gameId[1] - 1][index].player1.name = val.home.seed + " " + val.home.alias;
        rounds[val.gameId[1] - 1][index].player2.name = val.away.seed + " " + val.away.alias;

        rounds[val.gameId[1] - 1][index].player1.winner = val.didHomeTeamWin;
        console.log('val.didHomeTeamWin: ', val.didHomeTeamWin);
        // rounds[val.gameId[1] - 1][index].player2.winner = ; 
    })

    // console.log('rounds[val.gameId[1] - 1][index].player1.name: ', rounds[val.gameId[1] - 1][index].player1.name);

    // if (val.round == "1") {
    //     console.log('val.round: ', val.round);
    //     if (val.region === "W") {
    // rounds[0][parseInt(val.gameNum - 1)].player1.name = val.home.name;
    // rounds[0][parseInt(val.gameNum - 1)].player2.name = val.away.name;
    //     }
    // }

    // rounds[parseInt(val.round) - 1][(((64/(2**(parseInt(val.round) + 2)))*parseInt(val.regionNum)) + parseInt(val.gameNum))].player1.name = val.home.name;
    // rounds[parseInt(val.round) - 1][(((64/(2**(parseInt(val.round) + 2)))*parseInt(val.regionNum)) + parseInt(val.gameNum))].player2.name = val.away.name;

    // rounds[val.gameId[1]-1]
    //     [index].player2.name = val.away.name;

    // updateTeamNames();

    //-- JSON with matches of each round
    $('selector').brackets({
        rounds: rounds
    });
    //dont touch-will break display
    $(".brackets").brackets({
        titles: titles, //-- (Array) with titles for each round -- default: false -- if the value is true, then add titles automatically
        rounds: rounds, //-- (Required) Array with matches ( JSON ) for each round
        color_title: 'black', //-- (String) Color of the title text
        border_color: '#00F', //-- (String) Border color of the line of brackets
        color_player: 'black', //-- (String) Color of the player text (name)
        bg_player: 'white', //-- (String) Background color of the player container
        color_player_hover: 'white', //-- (String) Color of the player text (name) when mouse is hover
        bg_player_hover: 'blue', //-- (String) Background color of the player container when mouse is hover
        border_radius_player: '10px', //-- (String) Border radius of the player container
        border_radius_lines: '10px', //-- (String) Border radius of the lines that join rounds
    });
    //dont touch-will break display
    $(".brackets").brackets({
        titles: false, //-- If the value is true, then add titles automatically
        color_title: 'black',
        border_color: 'black',
        color_player: 'black',
        bg_player: 'white',
        color_player_hover: 'black',
        bg_player_hover: 'white',
        border_radius_player: '0px',
        border_radius_lines: '0px'
    });
};
