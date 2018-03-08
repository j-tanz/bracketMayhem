function loginTo(emailInput, passInput) {
}
function correctPassword(email, pw) {
    var queryURL = "/api/logins/" + email;
    $.get(queryURL, function (data) {
        console.log(data.loginPassword);
        if (data.loginPassword !== pw) {
            console.log("bad pw");
            return true
        }
        console.log("yay pw correct");
    })
}
// Get user inputs for pw and email
//check if  inputemail exists in database
    //if check return true, return correct password
    //if check return false, show error message to user
// if check returns true, check if email matches correct pw
    // Go to brackets page for specific user if check returns true

