function getBracketData(){
    var userID = JSON.parse(localStorage.getItem("userID"));
    console.log(selectedBracketName)
    var selectedBracketName = JSON.parse(localStorage.getItem("selectedBracketName")).trim();
    console.log(selectedBracketName);

    var userBracketQueryURL = "/api/userBrackets/" + userID +"/"+ selectedBracketName;
    console.log(userBracketQueryURL)
    $.get(userBracketQueryURL, function (bracketdata) {
        console.log(bracketdata);
    })
}
getBracketData();
