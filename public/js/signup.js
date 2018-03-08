// Get user inputs for pw1 pw2 and email -done
// check if p1 and pw2 match and if yes rtn true
//if check returns true, check if  inputemail exists in database
//return true or false
// if check returns false, create post request to logins database
$(document).ready(function () {
    function emailExists(email) {
        var queryURL = "/api/logins/" + email;
        if($.get(queryURL, function (data) {
            // console.log(data)
            if (data === null) {
                console.log(data, " > this email doesnt exist")
                return false
            }
            else {
                console.log(data, " > email already exist")
                return true
            }
        })===true){return true}
        else{ return false}
    }

    function validateEmail(email) {
        var emailFormat = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return emailFormat.test(email);
    }

    $("#signup-btn").click(signupClick);

    function signupClick(evt) {
        var inputEmail = $("#signupInputEmail").val().trim();
        var inputPass1 = $("#signupInputPassword1").val().trim();
        var inputPass2 = $("#signupInputPassword2").val().trim();

        evt.preventDefault();
        console.log(inputEmail, inputPass1, inputPass2);
        if (validateEmail(inputEmail) === false) {
            console.log("please enter a valid email");
            return;
        }
        if (!inputEmail || !inputPass1 || !inputPass2) {
            console.log("please fill out all the fields")
            return;
        }
        if (inputPass1 !== inputPass2) {
            console.log("retyped password does not match")
            return;
        }
        if (emailExists(inputEmail) === true) {
            console.log(emailExists(inputEmail), "email already exists")
            return;
        }
        if (emailExists(inputEmail) !== false) {
            console.log(emailExists(inputEmail), "email doesnt exist")

            createAccount({
                loginEmail: inputEmail,
                loginPassword: inputPass1
            })
            return;
        }
    }

    function createAccount(newUserData) {
        $.post("/api/logins", newUserData);
    }
});

