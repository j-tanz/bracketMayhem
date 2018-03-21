const apiKey = "api_key=jecrqz25rfftgybudkxx66nj";

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
let gameIdsArr = [];

let rounds = [
    //round of 64 - 32 games
    [
        //region 1 
        {
            player1: {
                name: "",
                ID: "W01",
                advance: "R2W1",
                slot: ""
            },
            player2: {
                name: "",
                ID: "W16",
                advance: "R2W1",
                slot: ""
            },
        },

        {
            player1: {
                name: "",
                ID: "W08",
                advance: "R2W2",
                slot: ""
            },
            player2: {
                name: "",
                ID: "W09",
                advance: "R2W2",
                slot: ""
            }
        },

        {
            player1: {
                name: "",
                ID: "W05",
                advance: "R2W3",
                slot: ""
            },
            player2: {
                name: "",
                ID: "W12",
                advance: "R2W3",
                slot: ""
            }
        },
        {
            player1: {
                name: "",
                ID: "W04",
                advance: "R2W4",
                slot: ""
            },
            player2: {
                name: "",
                ID: "W13",
                advance: "R2W4",
                slot: ""
            },
        },
        {
            player1: {
                name: "",
                ID: "W06",
                advance: "R2W5",
                slot: ""
            },
            player2: {
                name: "",
                ID: "W11",
                advance: "R2W5",
                slot: ""
            },
        },

        {
            player1: {
                name: "",
                ID: "W03",
                advance: "R2W6",
                slot: ""
            },
            player2: {
                name: "",
                ID: "W14",
                advance: "R2W6",
                slot: ""
            },
        },
        {
            player1: {
                name: "",
                ID: "W07",
                advance: "R2W7",
                slot: ""
            },
            player2: {
                name: "",
                ID: "W10",
                advance: "R2W7",
                slot: ""
            }
        },
        {
            player1: {
                name: "",
                ID: "W02",
                advance: "R2W8",
                slot: ""
            },
            player2: {
                name: "",
                ID: "W15",
                advance: "R2W8",
                slot: ""
            },
        },
        //region 2
        {
            player1: {
                name: "",
                ID: "X01",
                advance: "R2X1",
                slot: ""
            },
            player2: {
                name: "",
                ID: "X16",
                advance: "R2X1",
                slot: ""
            }
        },

        {
            player1: {
                name: "",
                ID: "X08",
                advance: "R2X2",
                slot: ""

            },
            player2: {
                name: "",
                ID: "X09",
                advance: "R2X2",
                slot: ""
            },
        },

        {
            player1: {
                name: "",
                ID: "X05",
                advance: "R2X3",
                slot: ""
            },
            player2: {
                name: "",
                ID: "X12",
                advance: "R2X3",
                slot: ""
            }
        },
        {
            player1: {
                name: "",
                ID: "X04",
                advance: "R2X4",
                slot: ""
            },
            player2: {
                name: "",
                ID: "X13",
                advance: "R2X4",
                slot: ""
            }
        },
        {
            player1: {
                name: "",
                ID: "X06",
                advance: "R2X5",
                slot: ""
            },
            player2: {
                name: "",
                ID: "X11",
                advance: "R2X5",
                slot: ""
            },
        },

        {
            player1: {
                name: "",
                ID: "X03",
                advance: "R2X6",
                slot: ""
            },
            player2: {
                name: "",
                ID: "X14",
                advance: "R2X6",
                slot: ""
            }
        },

        {
            player1: {
                name: "",
                ID: "X07",
                advance: "R2X7",
                slot: ""
            },
            player2: {
                name: "",
                ID: "X10",
                advance: "R2X7",
                slot: ""
            },
        },

        {
            player1: {
                name: "",
                ID: "X02",
                advance: "R2X8",
                slot: ""
            },
            player2: {
                name: "",
                ID: "X15",
                advance: "R2X8",
                slot: ""
            }
        },
        //region 3
        {
            player1: {
                name: "",
                ID: "Y01",
                advance: "R2Y1",
                slot: ""
            },
            player2: {
                name: "",
                ID: "Y16",
                advance: "R2Y1",
                slot: ""
            }
        },

        {
            player1: {
                name: "",
                ID: "Y08",
                advance: "R2Y2",
                slot: ""
            },
            player2: {
                name: "",
                ID: "Y09",
                advance: "R2Y2",
                slot: ""
            },
        },
        {
            player1: {
                name: "",
                ID: "Y05",
                advance: "R2Y3",
                slot: ""
            },
            player2: {
                name: "",
                ID: "Y12",
                advance: "R2Y3",
                slot: ""
            }
        },
        {
            player1: {
                name: "",
                ID: "Y04",
                advance: "R2Y4",
                slot: ""
            },
            player2: {
                name: "",
                ID: "Y13",
                advance: "R2Y4",
                slot: ""
            },
        },
        {
            player1: {
                name: "",
                ID: "Y06",
                advance: "R2Y5",
                slot: ""
            },
            player2: {
                name: "",
                ID: "Y11",
                advance: "R2Y5",
                slot: ""
            },
        },

        {
            player1: {
                name: "",
                ID: "Y03",
                advance: "R2Y6",
                slot: ""
            },
            player2: {
                name: "",
                ID: "Y14",
                advance: "R2Y6",
                slot: ""
            },
        },

        {
            player1: {
                name: "",
                ID: "Y07",
                advance: "R2Y7",
                slot: ""
            },
            player2: {
                name: "",
                ID: "Y10",
                advance: "R2Y7",
                slot: ""
            }
        },
        {
            player1: {
                name: "",
                ID: "Y02",
                advance: "R2Y8",
                slot: ""
            },
            player2: {
                name: "",
                ID: "Y15",
                advance: "R2Y8",
                slot: ""
            },
        },
        //region 4
        {
            player1: {
                name: "",
                ID: "Z01",
                advance: "R2Z1",
                slot: ""
            },
            player2: {
                name: "",
                ID: "Z16",
                advance: "R2Z1",
                slot: ""
            }
        },

        {
            player1: {
                name: "",
                ID: "Z08",
                advance: "R2Z2",
                slot: ""
            },
            player2: {
                name: "",
                ID: "Z09",
                advance: "R2Z2",
                slot: ""
            },
        },

        {
            player1: {
                name: "",
                ID: "Z05",
                advance: "R2Z3",
                slot: ""
            },
            player2: {
                name: "",
                ID: "Z12",
                advance: "R2Z3",
                slot: ""
            }
        },
        {
            player1: {
                name: "",
                ID: "Z04",
                advance: "R2Z4",
                slot: ""
            },
            player2: {
                name: "",
                ID: "Z13",
                advance: "R2Z4",
                slot: ""
            }
        },

        {
            player1: {
                name: "",
                ID: "Z06",
                advance: "R2Z5",
                slot: ""
            },
            player2: {
                name: "",
                ID: "Z11",
                advance: "R2Z5",
                slot: ""
            },
        },

        {
            player1: {
                name: "",
                ID: "Z03",
                advance: "R2Z6",
                slot: ""
            },
            player2: {
                name: "",
                ID: "Z14",
                advance: "R2Z6",
                slot: ""
            }
        },
        {
            player1: {
                name: "",
                ID: "Z07",
                advance: "R2Z7",
                slot: ""
            },
            player2: {
                name: "",
                ID: "Z10",
                advance: "R2Z7",
                slot: ""
            }
        },
        {
            player1: {
                name: "",
                ID: "Z02",
                advance: "R2Z8",
                slot: ""
            },
            player2: {
                name: "",
                ID: "Z15",
                advance: "R2Z8",
                slot: ""
            }
        },
    ],

    //round of 32 - 16 games
    [
        //region 1    
        {
            player1: {
                name: "",
                slot: "R2W1",
                advance: "R3W1",
            },
            player2: {
                name: "",
                slot: "R2W2",
                advance: "R3W1",
            }
        },

        {
            player1: {
                name: "",
                slot: "R2W3",
                advance: "R3W2",
            },
            player2: {
                name: "",
                slot: "R2W4",
                advance: "R3W2",
            },
        },
        {
            player1: {
                name: "",
                slot: "R2W5",
                advance: "R3W3",
            },
            player2: {
                name: "",
                slot: "R2W6",
                advance: "R3W3",
            }
        },
        {
            player1: {
                name: "",
                slot: "R2W7",
                advance: "R3W4",
            },
            player2: {
                name: "",
                slot: "R2W8",
                advance: "R3W4",
            },
        },
        //region 2 
        {
            player1: {
                name: "",
                slot: "R2X1",
                advance: "R3X1",
            },
            player2: {
                name: "",
                slot: "R2X2",
                advance: "R3X1",
            },
        },

        {
            player1: {
                name: "",
                slot: "R2X3",
                advance: "R3X2",
            },
            player2: {
                name: "",
                slot: "R2X4",
                advance: "R3X2",
            },
        },

        {
            player1: {
                name: "",
                slot: "R2X5",
                advance: "R3X3",
            },
            player2: {
                name: "",
                slot: "R2X6",
                advance: "R3X3",
            }
        },

        {
            player1: {
                name: "",
                slot: "R2X7",
                advance: "R3X4",
            },
            player2: {
                name: "",
                slot: "R2X8",
                advance: "R3X4",
            },
        },
        //region 3
        {
            player1: {
                name: "",
                slot: "R2Y1",
                advance: "R3Y1",
            },
            player2: {
                name: "",
                slot: "R2Y2",
                advance: "R3Y1",
            }
        },

        {
            player1: {
                name: "",
                slot: "R2Y3",
                advance: "R3Y2",
            },
            player2: {
                name: "",
                slot: "R2Y4",
                advance: "R3Y2",
            },
        },

        {
            player1: {
                name: "",
                slot: "R2Y5",
                advance: "R3Y3",
            },
            player2: {
                name: "",
                slot: "R2Y6",
                advance: "R3Y3",
            }
        },
        {
            player1: {
                name: "",
                slot: "R2Y7",
                advance: "R3Y4",
            },
            player2: {
                name: "",
                slot: "R2Y8",
                advance: "R3Y4",
            }
        },
        //region 4
        {
            player1: {
                name: "",
                slot: "R2Z1",
                advance: "R3Z1",
            },
            player2: {
                name: "",
                slot: "R2Z2",
                advance: "R3Z1",
            },
        },

        {
            player1: {
                name: "",
                slot: "R2Z3",
                advance: "R3Z2",
            },
            player2: {
                name: "",
                slot: "R2Z4",
                advance: "R3Z2",
            }
        },

        {
            player1: {
                name: "",
                slot: "R2Z5",
                advance: "R3Z3",
            },
            player2: {
                name: "",
                slot: "R2Z6",
                advance: "R3Z3",
            },
        },
        {
            player1: {
                name: "",
                slot: "R2Z7",
                advance: "R3Z4",
            },
            player2: {
                name: "",
                slot: "R2Z8",
                advance: "R3Z4",
            }
        },
    ],

    // sweet sixteen
    [
        //region 1 
        {
            player1: {
                name: "",
                slot: "R3W1",
                advance: "R4W1",
            },
            player2: {
                name: "",
                slot: "R3W2",
                advance: "R4W1",
            }
        },

        {
            player1: {
                name: "",
                slot: "R3W3",
                advance: "R4W2",
            },
            player2: {
                name: "",
                slot: "R3W4",
                advance: "R4W2",
            },
        },
        //region 2
        {
            player1: {
                name: "",
                slot: "R3X1",
                advance: "R4X1",
            },
            player2: {
                name: "",
                slot: "R3X2",
                advance: "R4X1",
            }
        },

        {
            player1: {
                name: "",
                slot: "R3X3",
                advance: "R4X2",
            },
            player2: {
                name: "",
                slot: "R3X4",
                advance: "R4X2",
            },
        },
        //region 3
        {
            player1: {
                name: "",
                slot: "R3Y1",
                advance: "R4Y1",
            },
            player2: {
                name: "",
                slot: "R3Y2",
                advance: "R4Y1",
            }
        },

        {
            player1: {
                name: "",
                slot: "R3Y3",
                advance: "R4Y2",
            },
            player2: {
                name: "",
                slot: "R3Y4",
                advance: "R4Y2",
            },
        },
        //region 4
        {
            player1: {
                name: "",
                slot: "R3Z1",
                advance: "R4Z1",
            },
            player2: {
                name: "",
                slot: "R3Z2",
                advance: "R4Z1",
            }
        },

        {
            player1: {
                name: "",
                slot: "R3Z3",
                advance: "R4Z2",
            },
            player2: {
                name: "",
                slot: "R3Z4",
                advance: "R4Z2",
            },
        },
    ],

    //elite eight
    [
        //region 1  
        {
            player1: {
                name: "",
                slot: "R4W1",
                advance: "R5WX1",
            },
            player2: {
                name: "",
                slot: "R4W2",
                advance: "R5WX1",
            }
        },
        //region 2
        {
            player1: {
                name: "",
                slot: "R4X1",
                advance: "R5WX2",
            },
            player2: {
                name: "",
                slot: "R4X2",
                advance: "R5WX2",
            },
        },
        //region 3
        {
            player1: {
                name: "",
                slot: "R4Y1",
                advance: "R5YZ1",
            },
            player2: {
                name: "",
                slot: "R4Y2",
                advance: "R5YZ1",
            }
        },
        //region 4

        {
            player1: {
                name: "",
                slot: "R4Z1",
                advance: "R5YZ2",
            },
            player2: {
                name: "",
                slot: "R4Z2",
                advance: "R5YZ2",
            },
        },
    ],

    //final four
    [{
        player1: {
            name: "",
            slot: "R5WX1",
            advance: "R6C1",
        },
        player2: {
            name: "",
            slot: "R5WX2",
            advance: "R6C1",
        }
    },

    {
        player1: {
            name: "",
            slot: "R5YZ1",
            advance: "R6C2",
        },
        player2: {
            name: "",
            slot: "R5YZ2",
            advance: "R6C2",
        },
    },
    ],

    //championship game
    [

        {
            player1: {
                name: "",
                slot: "R6C1",
                advance: "CHAMP",
            },
            player2: {
                name: "",
                slot: "R6C2",
                advance: "CHAMP",
            },
        },
    ],

    // champion
    [
        {
            player1: {
                name: "",
                slot: "CHAMP",

            },
        },
    ]
];

let regionMap = {
    W: 0,
    X: 1,
    Y: 2,
    Z: 3
};

/**
 * Makes call to Sportradar API, returns a JSON object detailing the curent state of the NCAA Men's Basketball Tournament,
 * and sorts all pertinent game/match-up data into an array of objects
 */
(function tourneyLookup() {
    // let tournamentID = "74db39e5-be49-4ec8-9169-0cc20ed9f792"
    let tournamentID = "caa4fb9e-12f1-4429-a160-8e6f4de1d84c"

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
})();

/**
 *  Checks and sorts all games based upon the current status of the game (ie scheduled, in progress, closed).
 * 
 * @param {array} gsObj - The full array of 63 tournament game objects
 */
function checkCompleted(gsObj) {
    for (let i = 0; i < gsObj.length; i++) {
        if (gsObj[i].status === "closed") {
            /**
             * @param {array} finalizedGamesArr - Array comprising all completed games
             */
            finalizedGamesArr.push(gsObj[i]);
        } else {
            /**
             * @param {array} pendingArr - Array comprising all games yet to be scheduled, bracketed, or currently in progress
             */
            pendingArr.push(gsObj[i]);
        }
    }
    /**
     * Creates an array of objects with outcome properties of completed games and merges these properties with {@link finalizedGamesArr}
     * 
     * @param {array} winnerArr - work array
     * @param {array} mergedFinalArr - merges objects comprised within {@link winnerArr} and {@link finalizedGamesArr} 
     */
    for (let i = 0; i < finalizedGamesArr.length; i++) {
        finalizedGamesArr[i].home_points > finalizedGamesArr[i].away_points ?
            winnerArr[i] = { winner: "homeTeam", didHomeTeamWin: true } :
            winnerArr[i] = { winner: "awayTeam", didHomeTeamWin: false };
        mergedFinalArr.push(_.assign({}, finalizedGamesArr[i], winnerArr[i]));
    }
    combinedMasterArr(mergedFinalArr, pendingArr);
}

/**
 * Pushes the completed and tbd games back onto same array; 
 * 
 * @param {array} arr1 - {@link mergedFinalArr}
 * @param {array} arr2 - {@link pendingArr}
 */
function combinedMasterArr(arr1, arr2) {
    Array.prototype.push.apply(arr1, arr2);
    masterArr = arr1;
    appendIdent(masterArr);
    return masterArr;
}

/**
 * Assigns properties to each object in the games array based upon Region, Round, and the position of the game within that specific region/round
 * 
 * @param {array} gamesList - array of all sorted game objects
 */
function appendIdent(gamesList) {
    let bracketGamesArr = [];
    for (let i = 0; i < gamesList.length; i++) {
        let gameNumber = gamesList[i].title.substring(gamesList[i].title.indexOf("Game"), gamesList[i].title.length);
        let num = gameNumber.slice(5);

        if (_.includes(gamesList[i].title, "South")) {
            region = "W";
            regionNum = "0";
        } if (_.includes(gamesList[i].title, "West")) {
            region = "X";
            regionNum = "1";
        } if (_.includes(gamesList[i].title, "East")) {
            region = "Y";
            regionNum = "2";
        } if (_.includes(gamesList[i].title, "Midwest")) {
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
    }
    updateTeamNames(bracketGamesArr.slice(0, bracketGamesArr.length - 31));
}

/**
 * Renders the intial 64 team seeds and names onto the bracket UI
 * 
 * @param {array} bracketGamesArr - the 1st 32 elements spliced from the newly created and appended the games array; this populates the initial field of 64 teams
 */
function updateTeamNames(bracketGamesArr) {
    _.forEach(bracketGamesArr, function (val, z) {
        let index = regionMap[val.gameId[2]] * ((rounds[val.gameId[1] - 1].length) / 4) + parseInt(val.gameId[3]) - 1;
        index = index !== 2.5 ? index : 0;
        rounds[val.gameId[1] - 1][index].player1.name = val.home.seed + " " + val.home.alias;
        rounds[val.gameId[1] - 1][index].player2.name = val.away.seed + " " + val.away.alias;
    })
    populateBracket();
};

/**
 *  Sorts all first round games by region and home/away team.  Appends html data elements to the respective divs in order to keep track of where teams exist,
 * as well as create the logical bracket structure. 
 */
function populateBracket() {
    for (let i = 1; i < 17; i++) {
        let ii = i;
        if (ii < 10) {
            ii = "0" + ii;
        }
        for (let j = 0; j < rounds[0].length; j++) {
            if (rounds[0][j].player1.ID == "W" + ii) {
                $("#W" + ii).text(rounds[0][j].player1.name);
                $("#W" + ii).attr({
                    "data-id": rounds[0][j].player1.ID,
                    "data-advance": rounds[0][j].player1.advance
                })
            } if (rounds[0][j].player2.ID == "W" + ii) {
                $("#W" + ii).text(rounds[0][j].player2.name);
                $("#W" + ii).attr({
                    "data-id": rounds[0][j].player2.ID,
                    "data-advance": rounds[0][j].player2.advance
                })
            }
            if (rounds[0][j].player1.ID == "X" + ii) {
                $("#X" + ii).text(rounds[0][j].player1.name);
                $("#X" + ii).attr({
                    "data-id": rounds[0][j].player1.ID,
                    "data-advance": rounds[0][j].player1.advance
                })
            } if (rounds[0][j].player2.ID == "X" + ii) {
                $("#X" + ii).text(rounds[0][j].player2.name);
                $("#X" + ii).attr({
                    "data-id": rounds[0][j].player2.ID,
                    "data-advance": rounds[0][j].player2.advance
                })
            }
            if (rounds[0][j].player1.ID == "Y" + ii) {
                $("#Y" + ii).text(rounds[0][j].player1.name);
                $("#Y" + ii).attr({
                    "data-id": rounds[0][j].player1.ID,
                    "data-advance": rounds[0][j].player1.advance
                })
            } if (rounds[0][j].player2.ID == "Y" + ii) {
                $("#Y" + ii).text(rounds[0][j].player2.name);
                $("#Y" + ii).attr({
                    "data-id": rounds[0][j].player2.ID,
                    "data-advance": rounds[0][j].player2.advance
                })
            }
            if (rounds[0][j].player1.ID == "Z" + ii) {
                $("#Z" + ii).text(rounds[0][j].player1.name);
                $("#Z" + ii).attr({
                    "data-id": rounds[0][j].player1.ID,
                    "data-advance": rounds[0][j].player1.advance
                })
            } if (rounds[0][j].player2.ID == "Z" + ii) {
                $("#Z" + ii).text(rounds[0][j].player2.name);
                $("#Z" + ii).attr({
                    "data-id": rounds[0][j].player2.ID,
                    "data-advance": rounds[0][j].player2.advance
                })
            }
        }
    }
}

/**
 * Click Listener to determine a team selection within the bracket; ie User makes a pick.
 */
$(document).on("click", ".team", function () {
    let pick = $(this).attr("data-id");
    let pickName = this.innerText;
    let advanceTo = $(this).attr("data-advance");

    for (let i = 0; i < rounds.length; i++) {
        for (let j = 0; j < rounds[i].length; j++) {
            if (advanceTo == rounds[i][j].player1.slot) {
                rounds[i][j].player1.ID = pick
                rounds[i][j].player1.name = "" + pickName
                $('#' + advanceTo + "").html("" + pickName /*+ '<a href="#" class="pop-over" data-toggle="popover" title="STATS" data-content="SHIT GOESHERE" data-container="body"><img class="game-info-icon" src="../img/icons/Get-Info-icon.png" alt="info icon" style="width:12px;height:12px;float:right;"></a>'*/)
                $('#' + advanceTo + "").attr({
                    "data-advance": rounds[i][j].player1.advance,
                    "data-id": pick,
                    "data-pickname": pickName
                });
            }
            if (advanceTo == rounds[i][j].player2.slot) {
                rounds[i][j].player2.ID = pick
                rounds[i][j].player2.name = "" + pickName
                $('#' + advanceTo + "").html("" + pickName /*+ '<a href="#" class="pop-over" data-toggle="popover" title="STATS" data-content="SHIT GOESHERE" data-container="body"><img class="game-info-icon" src="../img/icons/Get-Info-icon.png" alt="info icon" style="width:12px;height:12px;float:right;"></a>'*/)
                $('#' + advanceTo + "").attr({
                    "data-advance": rounds[i][j].player2.advance,
                    "data-id": pick,
                    "data-pickname": pickName
                });
            }
        }
        $('#R5WX1a').text($("#R5WX1").text());
        $('#R5WX2a').text($('#R5WX2').text());
        $('#R5YZ1a').text($('#R5YZ1').text());
        $('#R5YZ2a').text($('#R5YZ2').text());
    }
})

// WORK IN PROGRESS (and above commented out portion)
// $(document).on("click", ".game-info-icon", function (e) {
//     e.preventDefault();
//     $('.pop-over').popover('toggle');
//     return false;
// })

/**
 * Saves user's bracket pick selections and the bracket name
 */
$(".save-bracket-btn").click(saveBracket);
function saveBracket(evt) {
    evt.preventDefault();
    var inputBracketName = $("#bracketNameInput").val().trim();
    let pickR2W1 = $("#R2W1").attr('data-id') + " " + $("#R2W1").attr('data-pickname');
    let pickR2W2 = $("#R2W2").attr('data-id') + " " + $("#R2W2").attr('data-pickname');
    let pickR2W3 = $("#R2W3").attr('data-id') + " " + $("#R2W3").attr('data-pickname');
    let pickR2W4 = $("#R2W4").attr('data-id') + " " + $("#R2W4").attr('data-pickname');
    let pickR2W5 = $("#R2W5").attr('data-id') + " " + $("#R2W5").attr('data-pickname');
    let pickR2W6 = $("#R2W6").attr('data-id') + " " + $("#R2W6").attr('data-pickname');
    let pickR2W7 = $("#R2W7").attr('data-id') + " " + $("#R2W7").attr('data-pickname');
    let pickR2W8 = $("#R2W8").attr('data-id') + " " + $("#R2W8").attr('data-pickname');

    let pickR2X1 = $("#R2X1").attr('data-id') + " " + $("#R2X1").attr('data-pickname');
    let pickR2X2 = $("#R2X2").attr('data-id') + " " + $("#R2X2").attr('data-pickname');
    let pickR2X3 = $("#R2X3").attr('data-id') + " " + $("#R2X3").attr('data-pickname');
    let pickR2X4 = $("#R2X4").attr('data-id') + " " + $("#R2X4").attr('data-pickname');
    let pickR2X5 = $("#R2X5").attr('data-id') + " " + $("#R2X5").attr('data-pickname');
    let pickR2X6 = $("#R2X6").attr('data-id') + " " + $("#R2X6").attr('data-pickname');
    let pickR2X7 = $("#R2X7").attr('data-id') + " " + $("#R2X7").attr('data-pickname');
    let pickR2X8 = $("#R2X8").attr('data-id') + " " + $("#R2X8").attr('data-pickname');

    let pickR2Y1 = $("#R2Y1").attr('data-id') + " " + $("#R2Y1").attr('data-pickname');
    let pickR2Y2 = $("#R2Y2").attr('data-id') + " " + $("#R2Y2").attr('data-pickname');
    let pickR2Y3 = $("#R2Y3").attr('data-id') + " " + $("#R2Y3").attr('data-pickname');
    let pickR2Y4 = $("#R2Y4").attr('data-id') + " " + $("#R2Y4").attr('data-pickname');
    let pickR2Y5 = $("#R2Y5").attr('data-id') + " " + $("#R2Y5").attr('data-pickname');
    let pickR2Y6 = $("#R2Y6").attr('data-id') + " " + $("#R2Y6").attr('data-pickname');
    let pickR2Y7 = $("#R2Y7").attr('data-id') + " " + $("#R2Y7").attr('data-pickname');
    let pickR2Y8 = $("#R2Y8").attr('data-id') + " " + $("#R2Y8").attr('data-pickname');

    let pickR2Z1 = $("#R2Z1").attr('data-id') + " " + $("#R2Z1").attr('data-pickname');
    let pickR2Z2 = $("#R2Z2").attr('data-id') + " " + $("#R2Z2").attr('data-pickname');
    let pickR2Z3 = $("#R2Z3").attr('data-id') + " " + $("#R2Z3").attr('data-pickname');
    let pickR2Z4 = $("#R2Z4").attr('data-id') + " " + $("#R2Z4").attr('data-pickname');
    let pickR2Z5 = $("#R2Z5").attr('data-id') + " " + $("#R2Z5").attr('data-pickname');
    let pickR2Z6 = $("#R2Z6").attr('data-id') + " " + $("#R2Z6").attr('data-pickname');
    let pickR2Z7 = $("#R2Z7").attr('data-id') + " " + $("#R2Z7").attr('data-pickname');
    let pickR2Z8 = $("#R2Z8").attr('data-id') + " " + $("#R2Z8").attr('data-pickname');

    let pickR3W1 = $("#R3W1").attr('data-id') + " " + $("#R3W1").attr('data-pickname');
    let pickR3W2 = $("#R3W2").attr('data-id') + " " + $("#R3W2").attr('data-pickname');
    let pickR3W3 = $("#R3W3").attr('data-id') + " " + $("#R3W3").attr('data-pickname');
    let pickR3W4 = $("#R3W4").attr('data-id') + " " + $("#R3W4").attr('data-pickname');
    let pickR3X1 = $("#R3X1").attr('data-id') + " " + $("#R3X1").attr('data-pickname');
    let pickR3X2 = $("#R3X2").attr('data-id') + " " + $("#R3X2").attr('data-pickname');
    let pickR3X3 = $("#R3X3").attr('data-id') + " " + $("#R3X3").attr('data-pickname');
    let pickR3X4 = $("#R3X4").attr('data-id') + " " + $("#R3X4").attr('data-pickname');

    let pickR3Y1 = $("#R3Y1").attr('data-id') + " " + $("#R3Y1").attr('data-pickname');
    let pickR3Y2 = $("#R3Y2").attr('data-id') + " " + $("#R3Y2").attr('data-pickname');
    let pickR3Y3 = $("#R3Y3").attr('data-id') + " " + $("#R3Y3").attr('data-pickname');
    let pickR3Y4 = $("#R3Y4").attr('data-id') + " " + $("#R3Y4").attr('data-pickname');
    let pickR3Z1 = $("#R3Z1").attr('data-id') + " " + $("#R3Z1").attr('data-pickname');
    let pickR3Z2 = $("#R3Z2").attr('data-id') + " " + $("#R3Z2").attr('data-pickname');
    let pickR3Z3 = $("#R3Z3").attr('data-id') + " " + $("#R3Z3").attr('data-pickname');
    let pickR3Z4 = $("#R3Z4").attr('data-id') + " " + $("#R3Z4").attr('data-pickname');
    let pickR4W1 = $("#R4W1").attr('data-id') + " " + $("#R4W1").attr('data-pickname');
    let pickR4W2 = $("#R4W2").attr('data-id') + " " + $("#R4W2").attr('data-pickname');
    let pickR4X1 = $("#R4X1").attr('data-id') + " " + $("#R4X1").attr('data-pickname');
    let pickR4X2 = $("#R4X2").attr('data-id') + " " + $("#R4X2").attr('data-pickname');
    let pickR4Y1 = $("#R4Y1").attr('data-id') + " " + $("#R4Y1").attr('data-pickname');
    let pickR4Y2 = $("#R4Y2").attr('data-id') + " " + $("#R4Y2").attr('data-pickname');
    let pickR4Z1 = $("#R4Z1").attr('data-id') + " " + $("#R4Z1").attr('data-pickname');
    let pickR4Z2 = $("#R4Z2").attr('data-id') + " " + $("#R4Z2").attr('data-pickName');

    let pickR5WX1 = $("#R5WX1").attr('data-id') + " " + $("#R5WX1").attr('data-pickname');
    let pickR5WX2 = $("#R5WX2").attr('data-id') + " " + $("#R5WX2").attr('data-pickname');
    let pickR5YZ1 = $("#R5YZ1").attr('data-id') + " " + $("#R5YZ1").attr('data-pickname');
    let pickR5YZ2 = $("#R5YZ2").attr('data-id') + " " + $("#R5YZ2").attr('data-pickname');

    let pickR6C1 = $("#R6C1").attr('data-id') + " " + $("#R6C1").attr('data-pickname');
    let pickR6C2 = $("#R6C2").attr('data-id') + " " + $("#R6C2").attr('data-pickname');

    let pickCHAMP = $("#CHAMP").attr('data-id') + " " + $("#CHAMP").attr('data-pickname');

    /**
     * Tests to ensure user bracket is entirely completed (no blank selections), and bracket name is alphanumeric only.
     * 
     * @return {boolean} isValid - Returns false if bracket fails to pass validation.
     */
    function validateBracket() {
        var isValid = false
        let userid = JSON.parse(localStorage.getItem("userID"));
        let queryURL = "/api/userBrackets/" + userid + "/" + inputBracketName.split(" ").join("%20");
console.log(queryURL);
        if (/[^a-zA-Z\d\s\:]/.test(inputBracketName)) {
            alert("Bracket Name must not contain special characters");
            isValid = false;
            console.log("regex", isValid);
            return isValid;
        }

        else if (!$("#R2W1").attr('data-pickname') ||
            !$("#R2W2").attr('data-pickname') ||
            !$("#R2W3").attr('data-pickname') ||
            !$("#R2W4").attr('data-pickname') ||
            !$("#R2W5").attr('data-pickname') ||
            !$("#R2W6").attr('data-pickname') ||
            !$("#R2W7").attr('data-pickname') ||
            !$("#R2W8").attr('data-pickname') ||
            !$("#R2X1").attr('data-pickname') ||
            !$("#R2X2").attr('data-pickname') ||
            !$("#R2X3").attr('data-pickname') ||
            !$("#R2X4").attr('data-pickname') ||
            !$("#R2X5").attr('data-pickname') ||
            !$("#R2X6").attr('data-pickname') ||
            !$("#R2X7").attr('data-pickname') ||
            !$("#R2X8").attr('data-pickname') ||
            !$("#R2Y1").attr('data-pickname') ||
            !$("#R2Y2").attr('data-pickname') ||
            !$("#R2Y3").attr('data-pickname') ||
            !$("#R2Y4").attr('data-pickname') ||
            !$("#R2Y5").attr('data-pickname') ||
            !$("#R2Y6").attr('data-pickname') ||
            !$("#R2Y7").attr('data-pickname') ||
            !$("#R2Y8").attr('data-pickname') ||
            !$("#R2Z1").attr('data-pickname') ||
            !$("#R2Z2").attr('data-pickname') ||
            !$("#R2Z3").attr('data-pickname') ||
            !$("#R2Z4").attr('data-pickname') ||
            !$("#R2Z5").attr('data-pickname') ||
            !$("#R2Z6").attr('data-pickname') ||
            !$("#R2Z7").attr('data-pickname') ||
            !$("#R2Z8").attr('data-pickname') ||
            !$("#R3W1").attr('data-pickname') ||
            !$("#R3W2").attr('data-pickname') ||
            !$("#R3W3").attr('data-pickname') ||
            !$("#R3W4").attr('data-pickname') ||
            !$("#R3X1").attr('data-pickname') ||
            !$("#R3X2").attr('data-pickname') ||
            !$("#R3X3").attr('data-pickname') ||
            !$("#R3X4").attr('data-pickname') ||
            !$("#R3Y1").attr('data-pickname') ||
            !$("#R3Y2").attr('data-pickname') ||
            !$("#R3Y3").attr('data-pickname') ||
            !$("#R3Y4").attr('data-pickname') ||
            !$("#R3Z1").attr('data-pickname') ||
            !$("#R3Z2").attr('data-pickname') ||
            !$("#R3Z3").attr('data-pickname') ||
            !$("#R3Z4").attr('data-pickname') ||
            !$("#R4W1").attr('data-pickname') ||
            !$("#R4W2").attr('data-pickname') ||
            !$("#R4X1").attr('data-pickname') ||
            !$("#R4X2").attr('data-pickname') ||
            !$("#R4Y1").attr('data-pickname') ||
            !$("#R4Y2").attr('data-pickname') ||
            !$("#R4Z1").attr('data-pickname') ||
            !$("#R4Z2").attr('data-pickName') ||
            !$("#R5WX1").attr('data-pickname') ||
            !$("#R5WX2").attr('data-pickname') ||
            !$("#R5YZ1").attr('data-pickname') ||
            !$("#R5YZ2").attr('data-pickname') ||
            !$("#R6C1").attr('data-pickname') ||
            !$("#R6C2").attr('data-pickname') ||
            !$("#CHAMP").attr('data-pickname')) {
            isValid = false;
            console.log("incomp", isValid);
            alert("Please fill out a complete Bracket");

            return isValid;

        }

        else {
            $.get(queryURL, function (data) {
                console.log("data: ", data[0])
                if (data[0]) {
                    alert("You've already created a bracket with this name.");
                }
                if (!data[0]) {
                    console.log("Bracket Name is free");

                    isValid = true;
                    console.log(isValid)
                    console.log("posting ", inputBracketName)
                    console.log("userid: ", userID);
                    postBracketData({
                        userID: userID,
                        bracketName: inputBracketName,
                        R2W1: pickR2W1,
                        R2W2: pickR2W2,
                        R2W3: pickR2W3,
                        R2W4: pickR2W4,
                        R2W5: pickR2W5,
                        R2W6: pickR2W6,
                        R2W7: pickR2W7,
                        R2W8: pickR2W8,
                        R2X1: pickR2X1,
                        R2X2: pickR2X2,
                        R2X3: pickR2X3,
                        R2X4: pickR2X4,
                        R2X5: pickR2X5,
                        R2X6: pickR2X6,
                        R2X7: pickR2X7,
                        R2X8: pickR2X8,
                        R2Y1: pickR2Y1,
                        R2Y2: pickR2Y2,
                        R2Y3: pickR2Y3,
                        R2Y4: pickR2Y4,
                        R2Y5: pickR2Y5,
                        R2Y6: pickR2Y6,
                        R2Y7: pickR2Y7,
                        R2Y8: pickR2Y8,
                        R2Z1: pickR2Z1,
                        R2Z2: pickR2Z2,
                        R2Z3: pickR2Z3,
                        R2Z4: pickR2Z4,
                        R2Z5: pickR2Z5,
                        R2Z6: pickR2Z6,
                        R2Z7: pickR2Z7,
                        R2Z8: pickR2Z8,
                        R3W1: pickR3W1,
                        R3W2: pickR3W2,
                        R3W3: pickR3W3,
                        R3W4: pickR3W4,
                        R3X1: pickR3X1,
                        R3X2: pickR3X2,
                        R3X3: pickR3X3,
                        R3X4: pickR3X4,
                        R3Y1: pickR3Y1,
                        R3Y2: pickR3Y2,
                        R3Y3: pickR3Y3,
                        R3Y4: pickR3Y4,
                        R3Z1: pickR3Z1,
                        R3Z2: pickR3Z2,
                        R3Z3: pickR3Z3,
                        R3Z4: pickR3Z4,
                        R4W1: pickR4W1,
                        R4W2: pickR4W2,
                        R4X1: pickR4X1,
                        R4X2: pickR4X2,
                        R4Y1: pickR4Y1,
                        R4Y2: pickR4Y2,
                        R4Z1: pickR4Z1,
                        R4Z2: pickR4Z2,
                        R5WX1: pickR5WX1,
                        R5WX2: pickR5WX2,
                        R5YZ1: pickR5YZ1,
                        R5YZ2: pickR5YZ2,
                        R6C1: pickR6C1,
                        R6C2: pickR6C2,
                        CHAMP: pickCHAMP
                    });
                    localStorage.setItem("selectedBracketName", JSON.stringify(inputBracketName));
                    userID = JSON.parse(localStorage.getItem("userID"));

                    window.location.href = "/savedBracket";

                    /**
                     * 
                     * @param {object} newbracketData - Object containing user's picks and data to be posted to database 
                     */
                    function postBracketData(newbracketData) {
                        $.post("/api/userBrackets", newbracketData);
                    }
                }
            });
            // return isValid;
        };
        console.log("func eval to: ", isValid)

        return isValid;

    };
    console.log("func is: ", validateBracket())
}