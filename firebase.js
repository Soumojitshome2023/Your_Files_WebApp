
// Create Account
function signUp() {
    var email = document.getElementById("user_email_inputField").value.trim();
    var password = document.getElementById("user_pw_inputField").value.trim();

    if (email != "" && password != "") {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (userCredential) {
                // console.log("User signed up:", user.uid);
                // console.log("User signed up:", userCredential.user);
                // Add your custom logic after successful sign up

                var user = userCredential.user;
                sessionStorage.setItem("useruid", user.uid);
                document.getElementById("auth_status").innerText = "Successful Sign Up";
                document.getElementById("upload_section").style.display = "";
                document.getElementById("download_section").style.display = "";
                document.getElementById("dlink").innerHTML = "";
                document.getElementById("your_files_heading").innerHTML = "";

            })
            .catch(function (error) {
                // console.log("Sign up error:", error);
                // Handle sign up errors

                document.getElementById("auth_status").innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>User already exists or Wrong`;
                document.getElementById("upload_section").style.display = "none";
                document.getElementById("download_section").style.display = "none";

            });

    }
    else {
        document.getElementById("auth_status").innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>Enter Correct Email ID & Password`;
        document.getElementById("upload_section").style.display = "none";
        document.getElementById("download_section").style.display = "none";
    }
}


// Already have an account
function signIn() {
    var email = document.getElementById("user_email_inputField").value.trim();
    var password = document.getElementById("user_pw_inputField").value.trim();

    if (email != "" && password != "") {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (userCredential) {
                // console.log("User signed up:", user.uid);
                // console.log("User signed in:", userCredential.user);
                // Add your custom logic after successful sign in

                var user = userCredential.user;
                sessionStorage.setItem("useruid", user.uid);
                document.getElementById("auth_status").innerText = "Successful Sign In";
                document.getElementById("upload_section").style.display = "";
                document.getElementById("download_section").style.display = "";
                document.getElementById("dlink").innerHTML = "";
                document.getElementById("your_files_heading").innerHTML = "";

            })
            .catch(function (error) {
                // console.log("Sign in error:", error);
                // Handle sign in errors
                document.getElementById("auth_status").innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>Wrong Email ID Password`;
                document.getElementById("upload_section").style.display = "none";
                document.getElementById("download_section").style.display = "none";
            });
    }
    else {
        document.getElementById("auth_status").innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>Enter Correct Email ID & Password`;
        document.getElementById("upload_section").style.display = "none";
        document.getElementById("download_section").style.display = "none";
    }
}

