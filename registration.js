let submitBtn = document.getElementById("submitBtn");
let tries = 3;

function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "Daniel" && password === "1234") {
        location.href = "site.html";
    } else {
        tries--;

        if (tries == 0) {
            location.href = "blocked.html";
        } else {
            if (username != "Daniel") {
                document.getElementById("usernameFailure").textContent = "Username is incorrect";
            } else {
                clearErrorMessage("username");
            }

            if (password != "1234") {
                document.getElementById("passwordFailure").textContent = "Password is incorrect";
            } else {
                clearErrorMessage("password");
            }
        }
    }
}

function clearErrorMessage(type) {
    if (type == "password") {
        document.getElementById("passwordFailure").textContent = "";
    } else {
        document.getElementById("usernameFailure").textContent = "";
    }
}

submitBtn.onclick = function() { validate(); }