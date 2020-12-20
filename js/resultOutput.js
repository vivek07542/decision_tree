let userLocalStorage = JSON.parse(localStorage.getItem("userLocalStorage"));
let displayUserName = document.getElementById("displayUserName");
displayUserName.innerText = userLocalStorage.username;
// Load Function when Page Open
function onLoad() {
    let treeCreateDiv = document.getElementById("treeCreate");
    createTable(treeCreateDiv, "1");
    userSelectedOption();
}
// Function Create Tree Structre
function createTable(html, selectedId) {
    let arrayOfQuestions = JSON.parse(localStorage.getItem("arrayOfQuestions"));
    arrayOfQuestions.forEach(element => {
        if (element.id === selectedId) {
            let createdUl = createElements(html, "ul", "createUl", null, null, null, null, null);
            let createdLiForUl = createElements(createdUl, "li", "createLiForUl", null, null, null, null, null);
            let spanUl = createElements(createdLiForUl, "span", "createUlSpan", null, element.question, null, null, null);
            if (element.yesOPtion === "YES" || element.yesOPtion === "NO") {
                let createdYesUl = createElements(createdLiForUl, "ul", "createUl", null, null, null, null, null);
                let createdYesLi = createElements(createdYesUl, "li", "createYesLi", null, null, null, null, null);
                let spanYesLi = createElements(createdYesLi, "span", "createLiSpan", null, element.yesOPtion, null, null, null);
                let createdNoUl = createElements(createdLiForUl, "ul", "createUl", null, null, null, null, null);
                let createdNoLi = createElements(createdNoUl, "li", "createNoLi", null, null, null, null, null);
                let spanNoLi = createElements(createdNoLi, "span", "createLiSpan", null, element.noOPtion, null, null, null);
                verifyId(element.nextYesQuestionId, element.nextNoQuestionId, createdYesLi, createdNoLi);
            }
        }
    });
}
// Verify Click Event  
function verifyId(yesOptionId, noOptionId, yesHtml, noHtml) {
    if (yesHtml.innerText === "YES") {
        let selectedYesId = yesOptionId;
        createTable(yesHtml, selectedYesId)
    }
    if (noHtml.innerText === "NO") {
        let selectedNoId = noOptionId;
        createTable(noHtml, selectedNoId)
    }
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
// Highlight User Selection
function userSelectedOption() {
    let createdSpanUl = document.getElementsByClassName("createUlSpan");
    let arrayOfUserSelection = JSON.parse(localStorage.getItem("arrayOfUserSelection"))
    arrayOfUserSelection.forEach(elem => {
        for (i = 0; i < createdSpanUl.length; i++) {
            if (elem === createdSpanUl[i].innerText) {
                createdSpanUl[i].style.backgroundColor = "yellow";
            }
        }
    });
}