function getUserBrackets(userid) {
    let queryURL = "/api/userBrackets/" + userid;
    $.get(queryURL, function (data) {
        for (var i = 0; i < data.length; i++) {
            // console.log(data[i].bracketName)
            bracketName = data[i].bracketName
            var panelBracketClass = "panel-" + bracketName.split(" ").join("-");
            // console.log(panelBracketClass);
            var newPanel = $("<div class ='panel panel-primary bracket-btn'> <div class='panel-heading' style='width:100%; margin: 0 auto; border-radius: 3px;'><h2 class='panel-title " + panelBracketClass + "'>")
            // console.log(newPanel)
            $(".user-brackets-panels").append(newPanel);
            $("h2." + panelBracketClass).text(bracketName);
        }
        $(".bracket-btn").on("click", clickBracketBtn);
    });
}

function renderUserBrackets(userid) {
    getUserBrackets(userid);
}
userID = JSON.parse(localStorage.getItem("userID"));
// console.log("userid: ", userID);
renderUserBrackets(userID);

function clickBracketBtn(){
    // console.log("this",$(this).text().trim());
    bracketName=$(this).text();
    localStorage.setItem("selectedBracketName", JSON.stringify(bracketName));
    location.assign("../bracket/savedBracket.html")
}

function clickSignoutBtn(){
    localStorage.clear();
    location.assign("/index");
}
$(".signout-btn").click(clickSignoutBtn);