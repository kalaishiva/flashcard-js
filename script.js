let createQuestion = document.querySelector(".create_question");
let createAnswer = document.querySelector(".create_answer");
//console.log(createAnswer);

let questionContainer = document.querySelector(".question_container");

let question = document.querySelector(".question");
let answer = document.querySelector(".answer");
let createCardContainer = document.querySelector(".createCardContainer");

// let itemDiv = document.querySelectorAll(".item_div");

let itemDivClone = document.getElementById("item_div_clone");

itemDivClone.classList.add("hidden");


//showCreateCard
function showCreateCard() {
    createCardContainer.classList.remove("hidden");
}

function hideCard() {
    createCardContainer.classList.add("hidden");
}

//new card created using ----cloneNoded
function newCard() {
    //let itemDivClone = document.getElementById("item_div_clone");
    let newDiv = itemDivClone.cloneNode(true);
    //changing the question and answer(which is the child)
    let paraQue = newDiv.childNodes[1].childNodes[1];
    let paraAns = newDiv.childNodes[1].childNodes[3];
    //console.log(paraAns);
    paraQue.innerHTML = createQuestion.value;
    paraAns.innerHTML = createAnswer.value;
    questionContainer.append(newDiv);
    newDiv.classList.remove("hidden");
}

function deleteCard() {

    let itemDiv = document.querySelectorAll(".item_div");

    itemDiv.forEach((item) => {
        item.remove();

    });


}