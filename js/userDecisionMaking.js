let userLocalStorage = JSON.parse(localStorage.getItem("userLocalStorage"));
let displayUserName = document.getElementById("displayUserName");
let displayQuestion = document.getElementById("displayQuestion");
displayUserName.innerText = userLocalStorage.username;
// Function On Load
function onLoad() {
    generateQuestion();
    let arrayOfUserSelection = JSON.parse(localStorage.getItem("arrayOfUserSelection"));
    var userSelectAnswer = [];
    localStorage.setItem("arrayOfUserSelection", JSON.stringify(userSelectAnswer));
    generateQuestionOnClick("1");
}
// Generate Array of Question
function generateQuestion() {
    let arrayOfQuestions = JSON.parse(localStorage.getItem("arrayOfQuestions"));
    let questionObject = [{ id: "1", question: "Do You Want Doughnut ?", yesOPtion: "YES", nextYesQuestionId: "2", noOPtion: "NO", nextNoQuestionId: "3" },
    { id: "2", question: "Do I Deserve It ?", yesOPtion: "YES", nextYesQuestionId: "4", noOPtion: "NO", nextNoQuestionId: "5" },
    { id: "3", question: "MayBe You Want an Apple ?" },
    { id: "4", question: "Are You Sure ?", yesOPtion: "YES", nextYesQuestionId: "6", noOPtion: "NO", nextNoQuestionId: "7" },
    { id: "5", question: "Is it a Good Doughnut ?", yesOPtion: "YES", nextYesQuestionId: "8", noOPtion: "NO", nextNoQuestionId: "9" },
    { id: "6", question: "Go Get It.." },
    { id: "7", question: "Do Jumping Jack First.." },
    { id: "8", question: "What are You Waiting For..?" },
    { id: "9", question: "Wait till you find a sinful unforgettable Doughnut?" }];
    localStorage.setItem("arrayOfQuestions", JSON.stringify(questionObject));
}
// Generate Div InnerText And YES/NO Button
function generateQuestionOnClick(selectedId) {
    let arrayOfUserSelection = JSON.parse(localStorage.getItem("arrayOfUserSelection"));
    let arrayOfQuestions = JSON.parse(localStorage.getItem("arrayOfQuestions"));
    arrayOfQuestions.forEach(obj => {
        if (obj.id == selectedId) {
            let displayQuestion = document.getElementById("displayQuestion");
            displayQuestion.innerText = obj.question;
            arrayOfUserSelection.push(obj.question);
            localStorage.setItem("arrayOfUserSelection", JSON.stringify(arrayOfUserSelection));
            let yesButtonDiv = document.getElementById("yesButtonDiv");
            yesButtonDiv.innerHTML = "";
            let noButtonDiv = document.getElementById("noButtonDiv");
            noButtonDiv.innerHTML = "";
            if (obj.yesOPtion === "YES" || obj.noOPtion === "NO") {
                createElements(yesButtonDiv, "button", "btn btn-primary mx-auto", "yesButton", "YES", null, null, "yesBtnClick(displayQuestion.innerText)");
                createElements(noButtonDiv, "button", "btn btn-primary mx-auto", "noButton", "NO", null, null, "noBtnClick(displayQuestion.innerText)");
            }
            else{
                let nxtBtnDiv = document.getElementById("nxtBtnDiv");
                createElements(nxtBtnDiv, "button", "btn btn-primary mx-auto", "nxtButton", "NEXT", null, null, "nxtBtnClick()");
            }
        }
    })
}
// Yes Button Click Function
function yesBtnClick(objQuestion) {
    onCallOfButtonClick("YES", objQuestion);
}
// No Button Click Function
function noBtnClick(objQuestion) {
    onCallOfButtonClick("NO", objQuestion);
}
// Click Event Function 
function onCallOfButtonClick(btnText, objQuestion) {
    let arrayOfQuestions = JSON.parse(localStorage.getItem("arrayOfQuestions"));
    arrayOfQuestions.forEach(obj => {
        if (objQuestion === obj.question) {
            if (btnText === obj.yesOPtion) {
                generateQuestionOnClick(obj.nextYesQuestionId);
            }
            else if (btnText === obj.noOPtion) {
                generateQuestionOnClick(obj.nextNoQuestionId);
            }
        }
    });
}
// Next Btn Click
function  nxtBtnClick(){
    setTimeout(function(){ document.location.href = "result.html";}, 3000);
}
// Generate Element
function createElements(parentName, formType, className, idName, childInnerText, childValue, childName, functionClick) {
    let childrenName = document.createElement(formType);
    if (className !== null) {
        childrenName.setAttribute("class", className);
    }
    if (idName !== null) {
        childrenName.setAttribute("id", idName);
    }
    if (childValue !== null) {
        childrenName.value = childValue;
    }
    if (childInnerText !== null) {
        childrenName.innerText = childInnerText;
    }
    if (childName !== null) {
        childrenName.setAttribute("name", childName);
    }
    if (functionClick !== null) {
        childrenName.setAttribute("onclick", functionClick);
    }
    parentName.appendChild(childrenName);
    return childrenName;
}