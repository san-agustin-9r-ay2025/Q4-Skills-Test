function comfirmation() {
    // assign id: UserName and UserPassword --> variables name and password
    let name = document.getElementById("UserName").value;
    let password = document.getElementById("UserPassword").value;

    //using those variables, you'd be able to assign them values, and then use those values to verify if the user is using the correct username and password; if yes, it teleports them to the ntoebook.html page, if not, if sends them a paragraph text saying access denid
    if (name === "RKing" && password === "Im_the_king_living_in_an_invisible_kingdom") {
        switch(name) {
            case"RKing":
                window.location.href = "notebook.html";
            break;
        }

    }
    else {
        document.getElementById("respondToComfirmation").innerHTML = 
        `<p class="text-danger" id="respondToComfirmation"> Access Denied!</p>`;
    }
}