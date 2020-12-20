let userSubmitBtn = document.getElementById("userSubmitBtn");
let userLocalStorage = JSON.parse(localStorage.getItem("userLocalStorage"));
userSubmitBtn.addEventListener("click",function(){
    let userNameInput = document.getElementById("userNameInput");
    if(userNameInput.value !== ""){
        let userObject={}
        userObject.username = userNameInput.value;        
    localStorage.setItem("userLocalStorage",JSON.stringify(userObject)); 
    setTimeout(function(){ document.location.href = "decisionMaking.html";}, 3000);
    userNameInput.value = "";
    }
});

