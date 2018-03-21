const apiKey = "api_key=jecrqz25rfftgybudkxx66nj";

let finalizedGamesArr = [];
let scheduleObj = {};
let winnerArr = [];
let mergedFinalArr = [];
let sortArr = [];
let tourneyRounds = [];
let gameState = [];
let masterArr = [];
let pendingArr = [];
let gamesArr = [];
let gameIdsArr = [];

let titles = [
    'Round 1', 'Round 2', 'Sweet Sixteen', 'Elite Eight', 'Final Four', 'Championship', 'Champion'
];

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
    let completedArr = [...arr1]
    Array.prototype.push.apply(arr1, arr2);
    masterArr = arr1;
    appendIdent(masterArr);
}

/**
 * Assigns properties to each object in the games array based upon Region, Round, game#, seedIDs, home/away stats, and the
 *  specific game the winning team advances to 
 * 
 * @param {array} gamesList - array of all sorted game objects
 */
function appendIdent(gamesList) {
    let bracketGamesArr = [];
    for (let i = 0; i < gamesList.length; i++) {
        let gameNumber = gamesList[i].title.substring(gamesList[i].title.indexOf("Game"), gamesList[i].title.length);
        let num = gameNumber.slice(5);
        let nextNum = parseInt(num)

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
        let homeSeed = gamesList[i].home.seed
        let awaySeed = gamesList[i].away.seed
        let winnerSeed;
        let loserSeed;

        if (homeSeed < 10) {
            homeSeed = "0" + homeSeed;
        }
        if (awaySeed < 10) {
            awaySeed = "0" + awaySeed;
        }
        if (gamesList[i].didHomeTeamWin !== undefined) {
            gamesList[i].didHomeTeamWin ?
                winnerSeed = "" + region + "" + homeSeed :
                winnerSeed = "" + region + "" + awaySeed;
        }
        if (gamesList[i].didHomeTeamWin !== undefined) {
            gamesList[i].didHomeTeamWin ?
                loserSeed = "" + region + "" + awaySeed :
                loserSeed = "" + region + "" + homeSeed;
        }

/**
 *  @param {object} workObj - Creating a corresponding object for each object with needed key value data
 */
        let workObj = {};
        workObj[i] = {
            gameId: "R" + "" + round + "" + region + "" + num,
            round: round,
            region: region,
            regionNum: regionNum,
            gameNum: num,
            winnerSeedId: winnerSeed || "tbd",
            loserSeedId: loserSeed || "tbd",
            homeSeed: region + "" + homeSeed,
            awaySeed: region + "" + awaySeed,
            advanceTo: "R" + "" + (parseInt(round) + 1) + "" + region + nextNum.toString(),
            idHome: "R" + "" + round + "" + region + "" + ((parseInt(num) * 2)),
            idAway: "R" + "" + round + "" + region + "" + ((parseInt(num) * 2 - 1))
        }

        gameIdsArr.push(workObj[i]);
        bracketGamesArr.push(_.merge({}, gamesList[i], gameIdsArr[i]));
    }
    updateTeamNames(bracketGamesArr.slice(0, bracketGamesArr.length - 31), bracketGamesArr);
}

/**
 * Renders the initial 64 team seeds and names onto the bracket UI
 *  
 * @param {array} bracketGamesArr - the 1st 32 elements spliced from the newly created and appended games array; this populates the initial field of 64 teams
 * @param {*} completeArr - passing through the full 63 element newly created game objects array.  
 */
function updateTeamNames(bracketGamesArr, completeArr) {
    _.forEach(bracketGamesArr, function (val, z) {
        let index = regionMap[val.gameId[2]] * ((rounds[val.gameId[1] - 1].length) / 4) + parseInt(val.gameId[3]) - 1;
        index = index !== 2.5 ? index : 0;
        rounds[val.gameId[1] - 1][index].player1.name = val.home.seed + " " + val.home.alias;
        rounds[val.gameId[1] - 1][index].player2.name = val.away.seed + " " + val.away.alias;
    })
    populateBracket(completeArr);
};

/**
 *  Sorts all first round games by region and home/away team.  Appends html data elements to the respective divs in order to keep track of where teams exist,
 * as well as create the logical bracket structure. 
 * 
 * @param {array} completeArr - Passing through the full newly created game objects array. 
 */
function populateBracket(completeArr) {
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
    getBracketData(completeArr);
}

/**
 * Looking up the User name and bracket name from local storage
 * 
 * @param {string} userID - User Id atored in local storage.
 * @param {string} selectedBracketName - Name of user bracket to render
 * @param {array} completeArr - Passing through the full newly created game objects array. 
 */
function getBracketData(completeArr) {
    var userID = JSON.parse(localStorage.getItem("userID"));
    var selectedBracketName = JSON.parse(localStorage.getItem("selectedBracketName")).trim();

/**  
 * Queries database via get call and retrieves all saved data associated with that bracket.
 * 
 * @param {object} userPicks - The bracket's selections data object returned from database.
 */
    var userBracketQueryURL = "/api/userBrackets/" + userID + "/" + selectedBracketName;
    $.get(userBracketQueryURL, function (userPicks) {
        renderUserPicks(userPicks, completeArr);
    })
}

/**
 * Populates bracket UI with the pick selections stored in database 
 * 
 * @param {object} userPicks - The bracket's selections data object returned from database.
 * @param {array} completeArr - Passing through the full game objects array. 
 */
function renderUserPicks(userPicks, completeArr) {
    $("#user-bracket-name").text(userPicks[0].bracketName);

    $("#R2W1").text((userPicks[0].R2W1).slice(4));
    $("#R2W2").text((userPicks[0].R2W2).slice(4));
    $("#R2W3").text((userPicks[0].R2W3).slice(4));
    $("#R2W4").text((userPicks[0].R2W4).slice(4));
    $("#R2W5").text((userPicks[0].R2W5).slice(4));
    $("#R2W6").text((userPicks[0].R2W6).slice(4));
    $("#R2W7").text((userPicks[0].R2W7).slice(4));
    $("#R2W8").text((userPicks[0].R2W8).slice(4));

    $("#R2X1").text((userPicks[0].R2X1).slice(4));
    $("#R2X2").text((userPicks[0].R2X2).slice(4));
    $("#R2X3").text((userPicks[0].R2X3).slice(4));
    $("#R2X4").text((userPicks[0].R2X4).slice(4));
    $("#R2X5").text((userPicks[0].R2X5).slice(4));
    $("#R2X6").text((userPicks[0].R2X6).slice(4));
    $("#R2X7").text((userPicks[0].R2X7).slice(4));
    $("#R2X8").text((userPicks[0].R2X8).slice(4));

    $("#R2Y1").text((userPicks[0].R2Y1).slice(4));
    $("#R2Y2").text((userPicks[0].R2Y2).slice(4));
    $("#R2Y3").text((userPicks[0].R2Y3).slice(4));
    $("#R2Y4").text((userPicks[0].R2Y4).slice(4));
    $("#R2Y5").text((userPicks[0].R2Y5).slice(4));
    $("#R2Y6").text((userPicks[0].R2Y6).slice(4));
    $("#R2Y7").text((userPicks[0].R2Y7).slice(4));
    $("#R2Y8").text((userPicks[0].R2Y8).slice(4));

    $("#R2Z1").text((userPicks[0].R2Z1).slice(4));
    $("#R2Z2").text((userPicks[0].R2Z2).slice(4));
    $("#R2Z3").text((userPicks[0].R2Z3).slice(4));
    $("#R2Z4").text((userPicks[0].R2Z4).slice(4));
    $("#R2Z5").text((userPicks[0].R2Z5).slice(4));
    $("#R2Z6").text((userPicks[0].R2Z6).slice(4));
    $("#R2Z7").text((userPicks[0].R2Z7).slice(4));
    $("#R2Z8").text((userPicks[0].R2Z8).slice(4));

    $("#R3W1").text((userPicks[0].R3W1).slice(4));
    $("#R3W2").text((userPicks[0].R3W2).slice(4));
    $("#R3W3").text((userPicks[0].R3W3).slice(4));
    $("#R3W4").text((userPicks[0].R3W4).slice(4));

    $("#R3X1").text((userPicks[0].R3X1).slice(4));
    $("#R3X2").text((userPicks[0].R3X2).slice(4));
    $("#R3X3").text((userPicks[0].R3X3).slice(4));
    $("#R3X4").text((userPicks[0].R3X4).slice(4));

    $("#R3Y1").text((userPicks[0].R3Y1).slice(4));
    $("#R3Y2").text((userPicks[0].R3Y2).slice(4));
    $("#R3Y3").text((userPicks[0].R3Y3).slice(4));
    $("#R3Y4").text((userPicks[0].R3Y4).slice(4));

    $("#R3Z1").text((userPicks[0].R3Z1).slice(4));
    $("#R3Z2").text((userPicks[0].R3Z2).slice(4));
    $("#R3Z3").text((userPicks[0].R3Z3).slice(4));
    $("#R3Z4").text((userPicks[0].R3Z4).slice(4));

    $("#R4W1").text((userPicks[0].R4W1).slice(4));
    $("#R4W2").text((userPicks[0].R4W2).slice(4));
    $("#R4X1").text((userPicks[0].R4X1).slice(4));
    $("#R4X2").text((userPicks[0].R4X2).slice(4));
    $("#R4Y1").text((userPicks[0].R4Y1).slice(4));
    $("#R4Y2").text((userPicks[0].R4Y2).slice(4));
    $("#R4Z1").text((userPicks[0].R4Z1).slice(4));
    $("#R4Z2").text((userPicks[0].R4Z2).slice(4));

    $("#R5WX1").text((userPicks[0].R5WX1).slice(4));
    $("#R5WX2").text((userPicks[0].R5WX2).slice(4));
    $("#R5YZ1").text((userPicks[0].R5YZ1).slice(4));
    $("#R5YZ2").text((userPicks[0].R5YZ2).slice(4));

    $('#R5WX1a').text($("#R5WX1").text());
    $('#R5WX2a').text($('#R5WX2').text());
    $('#R5YZ1a').text($('#R5YZ1').text());
    $('#R5YZ2a').text($('#R5YZ2').text());

    $("#R6C1").text((userPicks[0].R6C1).slice(4));
    $("#R6C2").text((userPicks[0].R6C2).slice(4));
    $("#CHAMP").text((userPicks[0].CHAMP).slice(4));

    syncDBkey(completeArr, userPicks);
}

/**
 * Retrieves detailed team information data object from database
 * 
 * @param {array} completeArr - Passing through the full game objects array.
 * @param {object} userPicks - The bracket's selections data object returned from database.
 * @param {object} masterKeyData - Master team id, name, seed info returned from database.
 */
function syncDBkey(completeArr, userPicks) {
    $.get("/api/masterKeys", function (masterKeyData) {
        gradeOutPicks(completeArr, userPicks, masterKeyData)
    })
}

let bustArr = [[], [], [], [], [], []];
let scoreArr = [];

/**
 * Evaluates user's bracket selections against any games that have been finalized and renders style attributes to bracket UI. 
 * 
 * @param {array} completeArr - The full game objects array
 * @param {object} userPicks - The selections data object returned from database
 * @param {object} masterKeyData - Master key table of team id, name, seed info returned from database
 */
function gradeOutPicks(completeArr, userPicks, masterKeyData) {
    _.forEach(completeArr, function (game) {
        if (game.status == "closed") {
            if ((userPicks[0][game.advanceTo]).slice(0, 3) != game.winnerSeedId) {
                let badSeed = (userPicks[0][game.advanceTo].slice(0, 3));
                _.forEach(_.toPairs(userPicks[0]), function (pick) {
                    if (_.startsWith(pick[1], badSeed)) {
                        $("#" + game.advanceTo).attr({
                            style: "background-color:  rgba(179, 0, 27, 1); text-decoration: line-through;"
                        });
                        $("#" + pick[0]).attr({
                            style: "background-color:  rgba(179, 0, 27, 1); text-decoration: line-through;;"
                        });
                        for (let i = 1; i < 7; i++) {
                            if (game.round == [i]) {
                                if (bustArr[i - 1].indexOf(badSeed) === -1) {
                                    bustArr[i - 1].push(badSeed)
                                };
                                if (game.round == "1") {
                                    $("#" + badSeed).attr({ style: "background-color:   rgb(255, 123, 0);" });
                                    $("#" + game.advanceTo).attr({
                                        style: "background-color: rgba(179, 0, 27, 1); text-decoration: line-through;;"
                                    })
                                }
                                if (_.startsWith(pick[0], i, 1)) {
                                    if (badSeed == game.loserSeedId) {
                                        $("#" + pick[0]).attr({ style: "background-color:  rgb(255, 123, 0);" });
                                    }
                                }
                            }
                        }
                        if (pick[0] == "R5WX1" || pick[0] == "R5WX2" || pick[0] == "R5YZ1" || pick[0] == "R5YZ2") {
                            let color = document.getElementById("" + pick[0] + "").style.backgroundColor;
                            let strikeOut = document.getElementById("" + pick[0] + "").style.textDecoration;
                            document.getElementById("" + pick[0] + "a").style.backgroundColor = color;
                            document.getElementById("" + pick[0] + "a").style.textDecoration = strikeOut;
                        }
                    }
                })
            } else {
                $("#" + game.advanceTo).attr({
                    style: "background-color: rgba(37, 92, 153, 1);"
                });
                if (game.advanceTo == "R5WX1" || game.advanceTo == "R5WX2" || game.advanceTo == "R5YZ1" || game.advanceTo == "R5YZ2") {
                    $("#" + game.advanceTo + "a").attr({
                        style: "background-color: rgba(37, 92, 153, 1);"
                    })
                }
                if (game.round == "1") {
                    $("#" + game.winnerSeedId).attr({
                        style: "background-color: rgba(37, 92, 153, 1);"
                    })
                }
            }
        }
    })
}
/**
 * Removes old bracket name from local storage data cache
 */
window.onbeforeunload = function () {
    localStorage.removeItem("selectedBracketName");
    alert("bye");
};
