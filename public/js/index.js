// Get user inputs for pw1 pw2 and email -done
// check if p1 and pw2 match and if yes rtn true
//if check returns true, check if  inputemail exists in database
//return true or false
// if check returns false, create post request to logins database

$(document).ready(function () {
    function emailExists(email, pass) {
        var queryURL = "/api/logins/" + email;
        $.get(queryURL, function (data) {
            console.log("data stuff", data)
            if (!data) {
                console.log(" > this email doesnt exist")
                createAccount({
                    loginEmail: email,
                    loginPassword: pass
                });
                login(email);
            

            } else {
                $("#signup-alert").text("This email is already in use.");
                $("#signup-alert").removeClass("hidden");
                // console.log(" > email already exist");
            }
        })
    }
    function login(email){
        var loginQueryURL = "/api/logins/" + email;
        $.get(loginQueryURL, function (data) {
            // console.log(data.loginPassword);
            localStorage.setItem("userID", JSON.stringify(data.id));
            location.replace("/loggedin");
        })
    }

    function validateEmail(email) {
        var emailFormat = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return emailFormat.test(email);
    }
    $("#signup-btn").click(signupClick);

    function signupClick(evt) {
        evt.preventDefault();
        var inputEmail = $("#signupInputEmail").val().trim();
        var inputPass1 = $("#signupInputPassword1").val().trim();
        var inputPass2 = $("#signupInputPassword2").val().trim();
        // console.log(inputEmail, inputPass1, inputPass2);
        if (validateEmail(inputEmail) === false) {
            $("#signup-alert").text("Please enter a valid email address.");
            $("#signup-alert").removeClass("hidden");
            // console.log("please enter a valid email");
            return;
        }
        if (!inputEmail || !inputPass1 || !inputPass2) {
            $("#signup-alert").text("Please fill in all the required fields.");
            $("#signup-alert").removeClass("hidden");
            // console.log("please fill out all the fields")
            return;
        }
        if (inputPass1 !== inputPass2) {
            console.log("retyped password does not match")
            return;
        }
        emailExists(inputEmail, inputPass2);
    }

    function createAccount(newUserData) {
        $.post("/api/logins", newUserData);
    }

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
        location.replace("/loggedin");
    })
}

$(".signin-btn").click(correctPassword);

});

// $('#ourTabs a').click(function (e) {
//     console.log('we hit our ourTabs click !!!!!!!');
//     e.preventDefault()
//     $(this).tab('show')
// })
// Get user inputs for pw and email
//check if  inputemail exists in database
    //if check return true, return correct password
    //if check return false, show error message to user
// if check returns true, check if email matches correct pw
    // Go to brackets page for specific user if check returns true

