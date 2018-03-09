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

        //region 2
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
        //region 3
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
let bracketGamesArr = [
{
    gameId: "R1W1",
    awayPoints: 53,
    homePoints: 54,
    winner: true,
    homeName: "Wolves",
    awayName: "panthers",
    homeTeamId: 4,
    awayTeamId: 5,
},
{
    gameId: "R1W2",
    awayPoints: 53,
    homePoints: 54,
    winner: true,
    homeName: "Dogs",
    awayName: "Dawgs",
    homeTeamId: 4,
    awayTeamId: 5,
},
{
    gameId: "R1W3",
    awayPoints: 53,
    homePoints: 54,
    winner: true,
    homeName: "people",
    awayName: "aliens",
    homeTeamId: 4,
    awayTeamId: 5,
}
];
let test = "South Regional = First Round - Game 4";
/*
 * @function getGameNum
 * @parameter{string}: game name variable
 * @return {string}: gameId num that will be concated to the gameId
 */
function getGameNum(test) {
    let gameNumber = test.substring(test.indexOf("Game"), test.length);
    console.log(gameNumber);
    let num = gameNumber.slice(5);
    console.log(num);
    let newGameId = num; 
    console.log(typeof newGameId, newGameId);
}
getGameNum(test);
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
function loopGameId() {
    bracketGamesArr.forEach((element) =>  updateTeamNames(element));
};
loopGameId(bracketGamesArr);


/*
 * @function updateTeamNames
 * @parameter{string}: gameId variable
 * @return {string}: awayName, homeName
 */
function updateTeamNames(bracketGamesArr) {
    rounds[bracketGamesArr.gameId[1]-1]
        [regionMap[bracketGamesArr.gameId[2]] ** 2 +
            parseInt(bracketGamesArr.gameId[3]) - 1
        ].player1.name = bracketGamesArr.homeName;

    rounds[bracketGamesArr.gameId[1]-1]
        [regionMap[bracketGamesArr.gameId[2]] ** 2 +
            parseInt(bracketGamesArr.gameId[3]) - 1
        ].player2.name = bracketGamesArr.awayName;
};
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
