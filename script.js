let createQuestion = document.querySelector(".create_question");
let createAnswer = document.querySelector(".create_answer");
console.log(createAnswer);

let questionContainer = document.querySelector(".question_container");

let question = document.querySelector(".question");
let answer = document.querySelector(".answer");

/* let newItem = document.createElement('div');
newItem.className = "itemDivss";
console.log(newItem);
questionContainer.append(newItem);
 */

//new card created using ----cloneNoded
function newCard() {
    let itemDiv = document.querySelector(".item_div");
    let newDiv = itemDiv.cloneNode(true);
    //changing the question and answer(which is the child)
    let paraQue = newDiv.childNodes[1].childNodes[1];
    let paraAns = newDiv.childNodes[1].childNodes[3];
    //console.log(paraAns);
    paraQue.innerHTML = createQuestion.value;
    paraAns.innerHTML = createAnswer.value;
    questionContainer.append(newDiv);
}