
// Create Account
function signUp() {
    var email = document.getElementById("user_email_inputField").value.trim();
    var password = document.getElementById("user_pw_inputField").value.trim();

    if (email != "" && password != "") {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (userCredential) {
                var user = userCredential.user;
                // console.log("User signed up:", user.uid);
                sessionStorage.setItem("useruid", user.uid);
                document.getElementById("auth_status").innerText = "Successful Sign Up";
                // console.log("User signed up:", userCredential.user);
                // Add your custom logic after successful sign up
                document.getElementById("upload_section").style.display = "block";
                document.getElementById("download_section").style.display = "block";


            })
            .catch(function (error) {
                // console.log("Sign up error:", error);
                // Handle sign up errors

                document.getElementById("auth_status").innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>User already exists or Wrong`;

            });

    }
    else {
        document.getElementById("auth_status").innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>Enter Correct Email ID & Password`;
    }
}


// Already have an account
function signIn() {
    var email = document.getElementById("user_email_inputField").value.trim();
    var password = document.getElementById("user_pw_inputField").value.trim();

    if (email != "" && password != "") {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (userCredential) {
                document.getElementById("auth_status").innerText = "Successful Sign In";
                var user = userCredential.user;
                // console.log("User signed up:", user.uid);
                sessionStorage.setItem("useruid", user.uid);
                // console.log("User signed in:", userCredential.user);
                // Add your custom logic after successful sign in
                document.getElementById("upload_section").style.display = "";
                document.getElementById("download_section").style.display = "";

            })
            .catch(function (error) {
                // console.log("Sign in error:", error);
                // Handle sign in errors
                document.getElementById("auth_status").innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>Wrong Email ID Password`;

            });
    }
    else {
        document.getElementById("auth_status").innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>Enter Correct Email ID & Password`;
    }
}

