//Basic Question answer
/*
(function(){
function Question(question,answers,correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function(){
    console.log(this.question);
    for(var i = 0;i<this.answers.length;i++){
        console.log(i + ': ' + this.answers[i]);
    }

}

Question.prototype.checkAnswer= function(ans){
    if(ans === this.correct)
        console.log("Correct Answer");
    else{
        console.log("Oops! Better luck next time")
    }
}

var q1 = new Question('Father of nation of India?',['Mahatma Gandhi','jawahar lal Nehru'],0);
var q2 = new Question('What is my name?',['Riya','Pooja','Chakku'],1);
var q3 = new Question('Is JS a cool language?',['Yes','No'],0);

var questions = [q1,q2,q3];

var n = Math.floor(Math.random()*questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer.'));

questions[n].checkAnswer(answer);

})();

*/
// Expert level Game
(function(){ // for privacy - IIFE; just add (function(){//all private code here})();
function Question(question,answers,correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function(){
    console.log(this.question);
    for(var i = 0;i<this.answers.length;i++){
        console.log(i + ': ' + this.answers[i]);
    }

}

Question.prototype.checkAnswer= function(ans,callback){
    var sc;
    if(ans === this.correct){
        console.log("Correct Answer");
        sc = callback(true);
        }
    else{
        console.log("Oops! Better luck next time");
        sc = callback(false); //closure
    }
    this.displayScore(sc);
}

Question.prototype.displayScore = function(score){
    console.log('Your current score is: ' + score);
    console.log('-------------------------------------------------------------------------');
}
var q1 = new Question('Father of nation of India?',['Mahatma Gandhi','jawahar lal Nehru'],0);
var q2 = new Question('What is my name?',['Riya','Pooja','Chakku'],1);
var q3 = new Question('Is JS a cool language?',['Yes','No'],0);
var questions = [q1,q2,q3];

function score(){ //closure
    var sc = 0;
    return function(correct){
        if(correct){
            sc++;
        }
        return sc;
    }
}

var keepScore = score();
function nextQuestion(){

    var n = Math.floor(Math.random()*questions.length);

    questions[n].displayQuestion();

    var answer = prompt('Please select the correct answer.');

    if(answer !== 'exit'){
        questions[n].checkAnswer(parseInt(answer),keepScore);
        nextQuestion();
    }

}
nextQuestion();

})();
