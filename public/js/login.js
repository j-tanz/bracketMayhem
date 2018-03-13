function correctPassword(evt) {
    evt.preventDefault();
    var inputEmail = $("#loginInputEmail1").val().trim();
    var inputPass = $("#loginInputPassword1").val().trim();
    // console.log(inputEmail, inputPass);
    var loginQueryURL = "/api/logins/" + inputEmail;
    $.get(loginQueryURL, function (data) {
        // console.log(data.loginPassword);
        if (data.loginPassword !== inputPass) {
            console.log("bad pw");
            return;
        }
        localStorage.setItem("userID", JSON.stringify(data.id));
        location.replace("/index");
    })
}

$(".signin-btn").click(correctPassword);


// Get user inputs for pw and email
//check if  inputemail exists in database
    //if check return true, return correct password
    //if check return false, show error message to user
// if check returns true, check if email matches correct pw
    // Go to brackets page for specific user if check returns true

