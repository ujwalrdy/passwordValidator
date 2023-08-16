function checkPassword(){

    let password = document.getElementById("password").value;
    let confrom_Password = document.getElementById("confirmPassword").value;

    console.log(password, confrom_Password);

    let message = document.getElementById("message");

    if (password.length != 0){
        if(password == confrom_Password){
            message.textContent="Password Matching"
            message.style.backgroundColor="green";

        }
        else{
            message.textContent="Password Not Matching"
            message.style.backgroundColor="red";

        }

    }
    else{
        alert("Password can be empty");
        message.textContent="";
    }


}