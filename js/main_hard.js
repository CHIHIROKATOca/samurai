"use strict";

{
    const question = document.getElementById("question");
    const choices = document.getElementById("choices");
    const btn = document.getElementById("btn");
    const result = document.getElementById("result");
    const scorelabel = document.querySelector("#result-score");
    const count = document.getElementById("count");
    const startBtn = document.getElementById("start-btn")
    const startContainer = document.getElementById("startContainer")
    var correct = new Audio("https://raw.githubusercontent.com/CHIHIROKATOca/samurai/master/audio/Kurokoomigotovoices.mp3");
    var incorrect = new Audio("https://raw.githubusercontent.com/CHIHIROKATOca/samurai/master/audio/incorrect2.mp3");
    var endVoice = new Audio("https://raw.githubusercontent.com/CHIHIROKATOca/samurai/master/audio/Kurokogameovervoices.mp3");


    function runTimer(){
      const timer = document.getElementById("timer");
      timer.textContent = ((Date.now()-startTime)/1000).toFixed(2);

    timeoutId = setTimeout(function() {
        runTimer();
      },10);
    }
    let startTime;
    let timeoutId;

    startBtn.addEventListener("click",()=>{
      startContainer.remove();
      startTime = Date.now();
      runTimer();
    })
;

  const quizSet =shuffle([
    {id:"01",q: 'みせて あげましょう\n"Misete agemasyou"', c : ["I'll show you","Look over here","Perfect"]},
    {id:"02",q: 'わたしが おまもり します\n"Watashi ga omamori shimasu"' , c : ["I'll protect you","I'll teach you","I am a hero"]},
    {id:"03",q: 'たたかいたく ないのに！\n"Tatakaitaku nainoni!"', c : ["I don't want to fight","I'll never give up","It is over"]},
    {id:"04",q: 'これは いま ひつよう ないかな\n"Korewa ima hitsuyou naikana"' , c : ["I don't need this now","Umbrella","What's your name?"]},
    {id:"05",q: 'にげられないよ\n"Nigerarenaiyo"' , c : ["You can't escape","Can you block this?","I'll kill you"]},
]);

let currentNum = 0;
let isAnswered;
let score = 0;
let count0 = 1;

 //questionに入れるテキストは、quizSetの[]番目のq


 function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
}

function checkAnswer(li) {
  if (isAnswered) {
    return;
  }
  isAnswered = true;

  if (li.textContent === quizSet[currentNum].c[0]) {
    li.classList.add('correct');
    score++;
    correct.play();
  } else {
    li.classList.add('wrong');
    incorrect.play();
  }

  for(var j=0;j<correct.length;j++){
    if( correct[ j ]!=this ){ correct[ j ].pause() }
    }

  btn.classList.remove('disabled');
}

function setQuiz(){
  isAnswered = false;
  question.textContent = quizSet[currentNum].q;

  $("#playBtn").data("key", quizSet[currentNum].id);


  while(choices.firstChild){
    choices.removeChild(choices.firstChild);
  }
  //選択肢がシャッフルされる
  const shuffledChoices = shuffle([...quizSet[currentNum].c]);
  //shuffledChoices.forEach(choice)とは、
  //1・constでリストをつくるように指定。
  //その中にquizセットのc(問題)をforEachで入れる
  //2・liのテキストはchoiceを入れるように指定して(いまこの設定をしているもの)
  //3・choicesの子にliを追加する
  shuffledChoices.forEach(choice =>{
  const li = document.createElement("li");
  li.textContent = choice;
  li.addEventListener("click",()=>{
      checkAnswer(li);
  });
  choices.appendChild(li);
});

if(currentNum === quizSet.length - 1){
btn.textContent = "Show Score";
}
}

setQuiz();

function countNum(){
count.textContent = `Quiz: 1 / ${quizSet.length}`;
}
function playAudio(){
const key = $(this).data("key");
const audio = $(`audio[data-key="${key}"]`)[0];
audio.currentTime = 0;
　   audio.play();
console.log($(`audio[data-key="${key}"]`))
}
countNum();
$("#playBtn").click(playAudio);
btn.addEventListener("click", ()=>{
function countNum(){
if(currentNum === quizSet.length - 1){
count.textContent = `Quiz: ${currentNum + 1} / ${quizSet.length}`;
}else{
count.textContent = `Quiz: ${currentNum + 2} / ${quizSet.length}`;
}
}
countNum();

  if(btn.classList.contains("disabled")){
    return;
  }
  btn.classList.add("disabled");

  if(currentNum === quizSet.length - 1){
    endVoice.play();
    // console.log(`Score: ${score} / ${quizSet.length}`);
    scorelabel.textContent = `Score: ${score} / ${quizSet.length}`;
    result.classList.remove("hidden");
    clearTimeout(timeoutId);
    const timerResult =  document.getElementById("timerResult");
    timerResult.textContent = `Time : ${((Date.now()-startTime)/1000).toFixed(2)}`
  }else{
    currentNum++;
    setQuiz();
  }

if(score === quizSet.length){

  const perfectText = document.getElementById("perfectText");
  perfectText.textContent = "Perfect!!";

  var tmp = document.getElementsByClassName("perfect-bg") ;
  var val="perfect";
  tmp[0].setAttribute("id",val);

  var perfectBg = document.getElementById("perfect-animation");
  perfectBg.style.display;
  perfectBg.style.display = "block";

  var perfectBgColor = document.querySelector(".perfect-body-bg");
  perfectBgColor.style.backgroundColor;
  perfectBgColor.style.backgroundColor = "#ffda48";

  var normalBg = document.getElementById("normal-animation");
  var normalBgT = document.getElementById("normal-animation-tablet");
  var normalBgM = document.getElementById("normal-animation-mobile");
  var normalBgMY = document.getElementById("normal-animation-mobile-yoko");
  normalBg.style.display;
  normalBgT.style.display;
  normalBgM.style.display;
  normalBgMY.style.display;
  normalBg.style.display = "none";
  normalBgT.style.display = "none";
  normalBgM.style.display = "none";
  normalBgMY.style.display = "none";


  // goNext.innerText="Go Next Level";
  // goNext.href = "index_hard.html";
}else{
  return;
}

})
}
