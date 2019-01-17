var q1 = {
	question:'Who was the 2002 champion?',
	options: ['Argentina','Brazil','Germany','Italy'],
	rightAnswer: 'Brazil',
	image:'<img src="assets/images/brazilGermany.gif" id="image">',
	legend: '<div id="legend">Brazil Won the tournament, defeating Germany 2:0</div>'
};
var q2 = {
	question:"Who scored Spain's winning goal in the 2010 final",
	options: ['David Villa','Fernando Torres','Sergio Ramos','Andres Iniesta'],
	rightAnswer: 'Andres Iniesta',
	image:'<img src="assets/images/Iniesta.gif" id="image">',
	legend:'<div id="legend">Andres Iniesta scored the winning goal on minute 116 of over time </div>'
};
var q3 = {
	question:'What team did Germany beat in the 2014 final?',
	options: ['Argentina','Colombia','France','Spain'],
	rightAnswer: 'Argentina',
	image:'<img src="assets/images/gotzeGoal.gif" id="image">',
	legend:'<div id="legend">Germany defeated Messi\'s Argentina 1:0 with Mario Gotze\'s late goal</div>'
};
var q4 = {
	question:'What team has been in every single World Cup?',
	options: ['Uruguay','England','Brazil','Germany'],
	rightAnswer: 'Brazil',
	image:'<img src="assets/images/brazilDancing.gif" id="image">',
	legend:'<div id="legend">Brazil has participated in every one of the 20 World Cup finals.</div>'
};
var q5 = {
	question:'What country hosted the 1990 FIFA World Cup?',
	options: ['Argentina','Brazil','Germany','Italy'],
	rightAnswer: 'Italy',
	image:'<img src="assets/images/italia90.jpg" id="image">',
	legend:'<div id="legend">Italy was the host, Salvatore Schillaci was the top scorer of the tournament with 6 goals.</div>'
};
var q6 = {
	question:'Where was the first World Cup held?',
	options: ['England','Uruguay','Germany','Italy'],
	rightAnswer: 'Uruguay',
	image:'<img src="assets/images/uruguay1930.jpg" id="image">',
	legend:'<div id="legend">Uruguay was the host for the first World Cup. It was played in the year 1930.</div>'
};
var q7 = {
	question:'What player was sent off for headbutting an oponent in the 2006 final?',
	options: ['Zinedine Zidane','Andrea Pirlo','Thierry Henry','Marco Materazzi'],
	rightAnswer: 'Zinedine Zidane',
	image:'<img src="assets/images/zidaneHeadbutt.gif" id="image">',
	legend:'<div id="legend">Zinedine Zidane was sent off in his last-ever match, for headbutting Italy\'s Marco Materazzi\'s chest.</div>'
};
var q8 = {
	question:'Who is the all time top scorer?',
	options: ['Lionel Messi','Ronaldo Nazario de Lima','Pele','Miroslav Klose'],
	rightAnswer: 'Miroslav Klose',
	image:'<img src="assets/images/klose.gif" id="image">',
	legend:'<div id="legend">Germany\'s Miroslav Klose went on to score a record 16 goals across 4 consecutive tournaments between 2002 and 2014.</div>'
};
var q9 = {
	question:'What teams played the final in Mexico 1986',
	options: ['Brazil and West Germany','Argentina and West Germany','Italy and Brazil','Argentina and Brazil'],
	rightAnswer: 'Argentina and West Germany',
	image:'<img src="assets/images/argentina.jpg" id="image">',
	legend:'<div id="legend">Argentina beat West Germany on the 1986 final</div>'
};
var q10 = {
	question:'Where will the 2018 World Cup be played?',
	options: ['Qatar','Germany','China','Russia'],
	rightAnswer: 'Russia',
	image:'<img src="assets/images/russia2018.jpg" id="image">',
	legend:'<div id="legend">The 2018 World Cup in Russia will have a total of 13 sites, 16 stadiums, of which thirteen will be brand new and other three which will be completely refurbished. </div>'
};

var questions = [q1,q2]; //,q3,q4,q5,q6,q7,q8,q9,q10
let timeLeft =0 ;
let counter =0 ; 
let currentQ=0;
let $displayQDiv ;
let $resultDiv ;
let correctAns =0; 
let wrongAns = 0 
let notAns = 0 ;
// let $optionDiv;
function init(){
    //construct the page with the q1 and timer .
    timeLeft =10;
    //first time
    $resultDiv = $('<div class="resultDiv">');
    $displayQDiv = $('<div class="displyQADiv">');
    
   
    
    constructGamePage();
   
}

function  constructGamePage(){
    $("#mainDiv").empty();
    if( currentQ === questions.length ){
        //summery //correct ans wrong ans unans
        $("#mainDiv").html('<div class="question">Let\'s see how you did!</div>');
		$("#mainDiv").append('<div id="result">Correct Answers: '+correctAns+'</div>');
		$("#mainDiv").append('<div id="result">Wrong Answers: '+wrongAns+'</div>')
		$("#mainDiv").append('<div id="result">Unanswered Questions: '+notAns+'</div>')
        $("#mainDiv").append('<button class="restartBtn ">Restart Game?</button>')
        $("#mainDiv").append('<button class="newGameBtn">New Game?</button>')
        reStart();
		return false;
	
    }
    timeLeft =5;
    $("#mainDiv").append ( '<h3 class="title">Can You Guess The Entreprenuer</h3>');
    $("#mainDiv").append('<div class="timeLeft">Time Left: <span id="time"></span></div>');
    $("#time").text(timeLeft);
    counter =0;
   
    $resultDiv.empty();
    
    counter = setInterval(timer,1000);
    
     displayQA(); //i = 0
   
    
}
function reStart(){
    $('.restartButton').click(function () {
        $("#mainDiv").empty();

        currentQ = 0;
        correctAns = 0;
        wrongAns = 0;
        notAns = 0;
        counter = 0;
        init();
    });
}

function timer(){
   
    if(timeLeft ===1){
        //print time up
        notAns++ ;
        clearInterval(counter);
        $(".title").empty();
        $displayQDiv.empty();
        $(".options").empty();
       
        $resultDiv.append('<h2><b>Out of Time!</b></h2>');
        $resultDiv.append('<h3>The Correct Answer Was :</h3>' + questions[currentQ].rightAnswer);
        $resultDiv.append(questions[currentQ].legend).addClass('question');
        $resultDiv.append(questions[currentQ].image);
        $("#mainDiv").append($resultDiv);
        
        // counter = setInterval(timer,1000);
        currentQ++;
        
       // else{
        setTimeout(constructGamePage,2000);
       //}
        // $("#mainDiv").append('<div class="resultDiv"><b>Out of Time!</b></div>');
        //display the ans 
        // $("#mainDiv").append('<h3>The Correct Answer Was</h3>');
    }
    // else{
    timeLeft-- ;
  
    $("#time").text(timeLeft);
    //}
  }
function displayQA(){
   
    $displayQDiv.empty();
   
     $displayQDiv.html( questions[currentQ].question);
    $("#mainDiv").append($displayQDiv);
    $(".options").empty();
        for(let j=0;j<questions[currentQ].options.length;j++)
        {
          let  $optionDiv = $('<div>').append(questions[currentQ].options[j]);
            
            $optionDiv.addClass('options');
        $("#mainDiv").append($optionDiv);

        }
        userSelection();
}

function userSelection(){
    $('.options').on('click', function() {
     let value = $(this).text();
     if(value == " ") return;
     clearInterval(counter);
        $(".title").empty();
        $displayQDiv.empty();
        $(".options").empty();
       
     $("#time").text(timeLeft);

     if(value === questions[currentQ].rightAnswer )
     {
        clearInterval(counter);
        $("#mainDiv").append('<div id="rightWrong">Correct!</div>');
        $("#mainDiv").append(questions[currentQ].legend).addClass('question');
        $("#mainDiv").append(questions[currentQ].image);
        correctAns++;
     }
     else{
        clearInterval(counter);
        $("#mainDiv").append('<div id="rightWrong">InCorrect!</div>');
        $("#mainDiv").append(questions[currentQ].legend).addClass('question');
        $("#mainDiv").append(questions[currentQ].image);
        wrongAns++;
     }
     currentQ++;
     setTimeout(constructGamePage,2000);

    })

}

  function clearTimer()
  {
    clearInterval(counter);
	counter = 0;
  }
 
    




//div on click 
$('#card').on('click', function() {

    createMainPage();
    init();

});


function createMainPage(){

   


}