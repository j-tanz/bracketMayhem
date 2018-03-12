
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
}
function combinedMasterArr(arr1, arr2) {
    Array.prototype.push.apply(arr1, arr2);
    masterArr = arr1;
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

function updateTeamNames(bracketGamesArr) {
    console.log('bracketGamesArr: ', bracketGamesArr);
    // console.log("rounds ,", rounds);
    _.forEach(bracketGamesArr, function (val, z) {
        let index = regionMap[val.gameId[2]] * ((rounds[val.gameId[1] - 1].length) / 4) + parseInt(val.gameId[3]) - 1;
        index = index !== 2.5 ? index : 0;
        // if (parseInt(val.away.seed) < 10) { 
        //     val.away.seed = " " + val.away.seed;
        //     console.log('val.away.seed: ', val.away.seed);
        // }
        // if (val.round == "1") {
        rounds[val.gameId[1] - 1][index].player1.name = val.home.seed + " " + val.home.alias;
        rounds[val.gameId[1] - 1][index].player2.name = val.away.seed + " " + val.away.alias;
    })
    renderBracket();
};

function renderBracket() {
    //-- JSON with matches of each round
    $('selector').brackets({
        rounds: rounds
    });
    //dont touch-will break display
    $(".brackets").brackets({
        titles: titles, //-- (Array) with titles for each round -- default: false -- if the value is true, then add titles automatically
        rounds: rounds, //-- (Required) Array with matches ( JSON ) for each round
        // color_title: 'black', //-- (String) Color of the title text
        // border_color: '#00F', //-- (String) Border color of the line of brackets
        // color_player: 'black', //-- (String) Color of the player text (name)
        // bg_player: 'white', //-- (String) Background color of the player container
        // color_player_hover: 'white', //-- (String) Color of the player text (name) when mouse is hover
        // bg_player_hover: 'blue', //-- (String) Background color of the player container when mouse is hover
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
}

$(document).on("click", ".player", function () {
    let pick = $(this).attr("data-id");
    let pickName = this.innerText;
    let advanceTo = $(this).attr("data-advance");


    for (let i = 1; i < rounds.length; i++) {
        for (let j = 0; j < rounds[i].length; j++) {

            if (advanceTo == rounds[i][j].player1.slot) {
                rounds[i][j].player1.ID = pick
                rounds[i][j].player1.name = "" + pickName
                // rounds[i][j].player1.name += '<a href="#" data-toggle="popover" title="STATS" data-content="SHIT GOES HERE" data-container="body"><img src="../img/icons/fi-info.svg" alt="info icon" style="width:21px;height:21px;float:right;"></a>'
            }
            console.log('rounds[i][j].player2.slot: ', rounds[i][j].player2.slot);
            if (advanceTo == rounds[i][j].player2.slot) {
                rounds[i][j].player2.ID = pick
                rounds[i][j].player2.name = pickName
            }
        }
        renderBracket();
    }
})


// BROKEN   
$(document).ready(function () {
    $('[data-toggle="popover"]').popover('');
});
console.log('rounds: ', rounds);

// $(document).ready(function () {
//     $('a[rel=popover]').popover();
// });





console.log('rounds: ', rounds);


//Saves Bracket data once complete
// check if whole bracket is filled out
// posts request to database
$(".save-bracket-btn").click(saveBracket);
function saveBracket(evt) {
    evt.preventDefault();
    var inputBracketName = $("#bracketNameInput").val().trim();
    let pickR2W1 = $("#R2W1").attr('data-id');
    let pickR2W2 = $("#R2W2").attr('data-id');
    let pickR2W3 = $("#R2W3").attr('data-id');
    let pickR2W4 = $("#R2W4").attr('data-id');
    let pickR2W5 = $("#R2W5").attr('data-id');
    let pickR2W6 = $("#R2W6").attr('data-id');
    let pickR2W7 = $("#R2W7").attr('data-id');
    let pickR2W8 = $("#R2W8").attr('data-id');

    let pickR2X1 = $("#R2X1").attr('data-id');
    let pickR2X2 = $("#R2X2").attr('data-id');
    let pickR2X3 = $("#R2X3").attr('data-id');
    let pickR2X4 = $("#R2X4").attr('data-id');
    let pickR2X5 = $("#R2X5").attr('data-id');
    let pickR2X6 = $("#R2X6").attr('data-id');
    let pickR2X7 = $("#R2X7").attr('data-id');
    let pickR2X8 = $("#R2X8").attr('data-id');

    let pickR2Y1 = $("#R2Y1").attr('data-id');
    let pickR2Y2 = $("#R2Y2").attr('data-id');
    let pickR2Y3 = $("#R2Y3").attr('data-id');
    let pickR2Y4 = $("#R2Y4").attr('data-id');
    let pickR2Y5 = $("#R2Y5").attr('data-id');
    let pickR2Y6 = $("#R2Y6").attr('data-id');
    let pickR2Y7 = $("#R2Y7").attr('data-id');
    let pickR2Y8 = $("#R2Y8").attr('data-id');

    let pickR2Z1 = $("#R2Z1").attr('data-id');
    let pickR2Z2 = $("#R2Z2").attr('data-id');
    let pickR2Z3 = $("#R2Z3").attr('data-id');
    let pickR2Z4 = $("#R2Z4").attr('data-id');
    let pickR2Z5 = $("#R2Z5").attr('data-id');
    let pickR2Z6 = $("#R2Z6").attr('data-id');
    let pickR2Z7 = $("#R2Z7").attr('data-id');
    let pickR2Z8 = $("#R2Z8").attr('data-id');

    let pickR3W1 = $("#R3W1").attr('data-id');
    let pickR3W2 = $("#R3W2").attr('data-id');
    let pickR3W3 = $("#R3W3").attr('data-id');
    let pickR3W4 = $("#R3W4").attr('data-id');

    let pickR3X1 = $("#R3X1").attr('data-id');
    let pickR3X2 = $("#R3X2").attr('data-id');
    let pickR3X3 = $("#R3X3").attr('data-id');
    let pickR3X4 = $("#R3X4").attr('data-id');

    let pickR3Y1 = $("#R3X1").attr('data-id');
    let pickR3Y2 = $("#R3Y2").attr('data-id');
    let pickR3Y3 = $("#R3Y3").attr('data-id');
    let pickR3Y4 = $("#R3Y4").attr('data-id');

    let pickR3Z1 = $("#R3Z1").attr('data-id');
    let pickR3Z2 = $("#R3Z2").attr('data-id');
    let pickR3Z3 = $("#R3Z3").attr('data-id');
    let pickR3Z4 = $("#R3Z4").attr('data-id');

    let pickR4W1 = $("#R4W1").attr('data-id');
    let pickR4W2 = $("#R4W2").attr('data-id');
    let pickR4X1 = $("#R4X1").attr('data-id');
    let pickR4X2 = $("#R4X2").attr('data-id');
    let pickR4Y1 = $("#R4Y1").attr('data-id');
    let pickR4Y2 = $("#R4Y2").attr('data-id');
    let pickR4Z1 = $("#R4Z1").attr('data-id');
    let pickR4Z2 = $("#R4Z2").attr('data-id');

    let pickR5WX1 = $("#R5WX1").attr('data-id');
    let pickR5WX2 = $("#R5WX2").attr('data-id');
    let pickR5YZ1 = $("#R5YZ1").attr('data-id');
    let pickR5YZ2 = $("#R5YZ2").attr('data-id');

    let pickR6C1 = $("#R6C1").attr('data-id');
    let pickR6C2 = $("#R6C2").attr('data-id');

    let pickCHAMP = $("#CHAMP").attr('data-id');
    console.log(inputBracketName)
    postBracketData({
        userID: 1,
        bracketName: inputBracketName,
        winner1: pickR2W1,
        winner2: pickR2W2,
        winner3: pickR2W3,
        winner4: pickR2W4,
        winner5: pickR2W5,
        winner6: pickR2W6,
        winner7: pickR2W7,
        winner8: pickR2W8,
        winner9: pickR2X1,
        winner10: pickR2X2,
        winner11: pickR2X3,
        winner12: pickR2X4,
        winner13: pickR2X5,
        winner14: pickR2X6,
        winner15: pickR2X7,
        winner16: pickR2X8,
        winner17: pickR2Y1,
        winner18: pickR2Y2,
        winner19: pickR2Y3,
        winner20: pickR2Y4,
        winner21: pickR2Y5,
        winner22: pickR2Y6,
        winner23: pickR2Y7,
        winner24: pickR2Y8,
        winner25: pickR3Z1,
        winner26: pickR3Z2,
        winner27: pickR3Z3,
        winner28: pickR3Z4,
        winner29: pickR2Z5,
        winner30: pickR2Z6,
        winner31: pickR2Z7,
        winner32: pickR2Z8,
        winner33: pickR3W1,
        winner34: pickR3W2,
        winner35: pickR3W3,
        winner36: pickR3W4,
        winner37: pickR3X1,
        winner38: pickR3X2,
        winner39: pickR3X3,
        winner40: pickR3X4,
        winner41: pickR3Y1,
        winner42: pickR3Y2,
        winner43: pickR3Y3,
        winner44: pickR3Y4,
        winner45: pickR3Z1,
        winner46: pickR3Z2,
        winner47: pickR3Z3,
        winner48: pickR3Z4,
        winner49: pickR4W1,
        winner50: pickR4W2,
        winner51: pickR4X1,
        winner52: pickR4X2,
        winner53: pickR4Y1,
        winner54: pickR4Y2,
        winner55: pickR4Z1,
        winner56: pickR4Z2,
        winner57: pickR5WX1,
        winner58: pickR5WX2,
        winner59: pickR5YZ1,
        winner60: pickR5YZ2,
        winner61: pickR6C1,
        winner62: pickR6C2,
        winner63: pickCHAMP
    });
}
function postBracketData(newbracketData) {
    $.post("/api/userBrackets", newbracketData);
}

