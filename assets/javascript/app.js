var q1 = {
	question:'I am the CEO of private space transport company and leading electric car company?',
	options: ['1. Steve Jobs','2. Micheal Jr.','3. Elon Musk','4. Henry Ford'],
	rightAnswer: '3. Elon Musk',
	image:'<img src="assets/images/Elon-Musk1.jpg" id="image">',
	description: '<div id="description">Elon Musk the founder, CEO, and lead designer of SpaceX and co-founder, CEO, and product architect of Tesla, Inc.</div>'
};
var q2 = {
	question:"My Model T came in any color as long as it was black.",
	options: ['Henry Ford','Howward Huges','William C. Durant','Louis-Joseph Chevrolet'], 
	rightAnswer: 'Henry Ford',
	image:'<img src="assets/images/modelT.jpg" id="image">',
	description:'<div id="description">Henry Ford the founder of the Ford Motor Company,</div>'
};
var q3 = {
	question:'I am the chairperson of the second largest food & Beverage business.',
	options: ['Ophra Winfrey','Laurene Powell','Mackenzie Bezos','Indira Nooyi'],
	rightAnswer: 'Argentina',
	image:'<img src="assets/images/indira/jpg" id="image">',
	description:'<div id="description">Indra Nooyi is an Indian American business executive, serving as chairperson of PepsiCo, the second largest food and beverage business in the world by net revenue, and as CEO for 12 years from 2006-2018. </div>'
};
var q4 = {
	question:'I applied ten times to Harvard Business School (HBS) and got rejected.?',
	options: ['Jack Ma','EnglaJoseph TSai','Peng Li','Robin Li'],
	rightAnswer: 'Brazil',
	image:'<img src="assets/images/brazilDancing.gif" id="image">',
	description:'<div id="description">Brazil has participated in every one of the 20 World Cup finals.</div>'
};
var q5 = {
	question:'I am m usually ranked #1 or #2 in the list of the worlds wealthiest people.Not bad for a college dropout.',
	options: ['Jeff Bezos','Sunder Pichai','Satya Nadela','Bill Gates'],
	rightAnswer: 'Italy',
	image:'<img src="assets/images/italia90.jpg" id="image">',
	description:'<div id="description">Italy was the host, Salvatore Schillaci was the top scorer of the tournament with 6 goals.</div>'
};
var qa1 = {
	question:'Where was the first World Cup held?',
	options: ['England','Uruguay','Germany','Italy'],
	rightAnswer: 'Uruguay',
	image:'<img src="assets/images/uruguay1930.jpg" id="image">',
	description:'<div id="description">Uruguay was the host for the first World Cup. It was played in the year 1930.</div>'
};
var qa2 = {
	question:'What player was sent off for headbutting an oponent in the 2006 final?',
	options: ['Zinedine Zidane','Andrea Pirlo','Thierry Henry','Marco Materazzi'],
	rightAnswer: 'Zinedine Zidane',
	image:'<img src="assets/images/zidaneHeadbutt.gif" id="image">',
	description:'<div id="description">Zinedine Zidane was sent off in his last-ever match, for headbutting Italy\'s Marco Materazzi\'s chest.</div>'
};
var qa3 = {
	question:'Who is the all time top scorer?',
	options: ['Lionel Messi','Ronaldo Nazario de Lima','Pele','Miroslav Klose'],
	rightAnswer: 'Miroslav Klose',
	image:'<img src="assets/images/klose.gif" id="image">',
	description:'<div id="description">Germany\'s Miroslav Klose went on to score a record 16 goals across 4 consecutive tournaments between 2002 and 2014.</div>'
};
var qa4 = {
	question:'What teams played the final in Mexico 1986',
	options: ['Brazil and West Germany','Argentina and West Germany','Italy and Brazil','Argentina and Brazil'],
	rightAnswer: 'Argentina and West Germany',
	image:'<img src="assets/images/argentina.jpg" id="image">',
	description:'<div id="description">Argentina beat West Germany on the 1986 final</div>'
};
var qa5 = {
	question:'Where will the 2018 World Cup be played?',
	options: ['Qatar','Germany','China','Russia'],
	rightAnswer: 'Russia',
	image:'<img src="assets/images/russia2018.jpg" id="image">',
	description:'<div id="description">The 2018 World Cup in Russia will have a total of 13 sites, 16 stadiums, of which thirteen will be brand new and other three which will be completely refurbished. </div>'
};

var qb1 = {
	question:'Where was the first World Cup held?',
	options: ['England','Uruguay','Germany','Italy'],
	rightAnswer: 'Uruguay',
	image:'<img src="assets/images/uruguay1930.jpg" id="image">',
	description:'<div id="description">Uruguay was the host for the first World Cup. It was played in the year 1930.</div>'
};
var qb2 = {
	question:'What player was sent off for headbutting an oponent in the 2006 final?',
	options: ['Zinedine Zidane','Andrea Pirlo','Thierry Henry','Marco Materazzi'],
	rightAnswer: 'Zinedine Zidane',
	image:'<img src="assets/images/zidaneHeadbutt.gif" id="image">',
	description:'<div id="description">Zinedine Zidane was sent off in his last-ever match, for headbutting Italy\'s Marco Materazzi\'s chest.</div>'
};
var qb3 = {
	question:'Who is the all time top scorer?',
	options: ['Lionel Messi','Ronaldo Nazario de Lima','Pele','Miroslav Klose'],
	rightAnswer: 'Miroslav Klose',
	image:'<img src="assets/images/klose.gif" id="image">',
	description:'<div id="description">Germany\'s Miroslav Klose went on to score a record 16 goals across 4 consecutive tournaments between 2002 and 2014.</div>'
};
var qb4 = {
	question:'What teams played the final in Mexico 1986',
	options: ['Brazil and West Germany','Argentina and West Germany','Italy and Brazil','Argentina and Brazil'],
	rightAnswer: 'Argentina and West Germany',
	image:'<img src="assets/images/argentina.jpg" id="image">',
	description:'<div id="description">Argentina beat West Germany on the 1986 final</div>'
};
var qb5 = {
	question:'Where will the 2018 World Cup be played?',
	options: ['Qatar','Germany','China','Russia'],
	rightAnswer: 'Russia',
	image:'<img src="assets/images/russia2018.jpg" id="image">',
	description:'<div id="description">The 2018 World Cup in Russia will have a total of 13 sites, 16 stadiums, of which thirteen will be brand new and other three which will be completely refurbished. </div>'
};


let  card1 = {
    category: "BUSINESS",
    name:"Who Am I",
    className: "panel1",
    bgImage: "assets/images/business.jpg"
};

let card2={
  category: "TRAVEL",
  name:"Where Is It",
  className: "panel2",
  bgImage: "assets/images/travel.jpg"
  

}
let card3 = {
  category: "SPORTS",
  name:"When Happend?",
  className: "panel3",
  bgImage: "assets/images/Olympic.jpg"

}

let col = [card1,card2,card3];


var questions = []; //,q3,q4,q5,q6,q7,q8,q9,q10
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
    // timeLeft =10;
    //first time
   
   
    constructGamePage();
   
}

function  constructGamePage(){
    $("#mainDiv").empty();
   
    timeLeft =10;
    $("#mainDiv").append('<div class="timeLeft">Time Left: <span id="time"></span></div>');
    $("#time").text(timeLeft);
    if( currentQ === questions.length ){
      
        $resultDiv = $('<div class="resultDiv">');
        //summery //correct ans wrong ans unans
        $resultDiv.append('<div class="result">Let\'s see how you did!</div>');
        $resultDiv.append('<div class="score" id="">Correct Answers: '+correctAns+'</div>');
        $resultDiv.append('<div class="score" id="">Wrong Answers: '+wrongAns+'</div>')
        $resultDiv.append('<div class="score" id="">Unanswered Questions: '+notAns+'</div>')

        let $buttonDiv = $('<div class="btnDiv d-flex justify-content-center">');
        $buttonDiv.append('<button class="restartBtn" onclick="reStart()">Restart Game?</button>')
       
        $buttonDiv.append('<button class="newGameBtn" onclick="newGame()">New Game?</button>')
      
        $resultDiv.append($buttonDiv);
        $("#mainDiv").append( $resultDiv);
		return false;
	
    }
   
    counter =0;
    counter = setInterval(timer,1000);
    displayQA(); //i = 0
}

function displayQA()
{
    $displayQDiv = $('<div class="displyQADiv">');
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


function reStart(){
   
        $("#mainDiv").empty();

        currentQ = 0;
        correctAns = 0;
        wrongAns = 0;
        notAns = 0;
        counter = 0;
        
        init();
 
}
function newGame(){
  
        $("#mainDiv").empty();
        currentQ = 0;
        correctAns = 0;
        wrongAns = 0;
        notAns = 0;
        counter = 0;
      
        createMainPage();
 
}


function timer(){
  
    if(timeLeft ===1){
        //print time up
     
        notAns++ ;
        clearInterval(counter);
        $("#mainDiv").empty();
        $("#mainDiv").append('<div class="timeLeft">Time Left: <span id="time"></span></div>');
        $resultDiv = $('<div class="resultDiv">');
     
        $resultDiv.append('<div class="result">Out of Time!</div>');
        $resultDiv.append('<div class="score" id="">The Correct Answer Was : '+questions[currentQ].rightAnswer+'</div>');
        $resultDiv.append('<div class="score" id=""> '+ questions[currentQ].description +'</div>');
       
        $resultDiv.append(questions[currentQ].image);
        $("#mainDiv").append($resultDiv);
        
        
        currentQ++;
        setTimeout(constructGamePage,2000);
    }
    timeLeft-- ;
    $("#time").text(timeLeft);
  }


function userSelection(){
   
    $('.options').on('click', function() {
     let value = $(this).text();
     if(value == " ") return;
     clearInterval(counter);
  
        $("#mainDiv").empty();
        $("#mainDiv").append('<div class="timeLeft">Time Remaining: <span id="time"></span></div>');
        $resultDiv = $('<div class="resultDiv">');
     $("#time").text(timeLeft + " Seconds");

     if(value === questions[currentQ].rightAnswer )
     {
        clearInterval(counter);
       
        $resultDiv.append('<div class="rightWrong">Correct!</div>');
        $resultDiv.append(questions[currentQ].description);
        $resultDiv.append(questions[currentQ].image);
        $("#mainDiv").append($resultDiv);
        correctAns++;
     }
     else{
        clearInterval(counter);
        $resultDiv.empty();
        $resultDiv.append('<div class="rightWrong">Wrong!</div>');
        $resultDiv.append(questions[currentQ].description);
        $resultDiv.append(questions[currentQ].image);
        $("#mainDiv").append($resultDiv);
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
function onCardClick(){
$('.panel').on('click', function() {

    let catVal = $(this).attr('data_category');
    if(catVal === "BUSINESS")
    {
        questions = [q1,q2];
    }
    else if(catVal === "TRAVEL")
    {
        questions = [qa1,qa2];
    }
    else if(catVal === "SPORTS")
    {
        questions = [qb1,qb2];
    }
    if(questions.length > 0)
    init();

});

}


function createMainPage(){
    $("#mainDiv").append ( '<h4 class="subHeading mt-4">What Will You Play Today</h4>');
    
    $("#mainDiv").append('<div class="row d-flex justify-content-center mb-5">');

    for(let i= 0 ; i<3 ; i++)
    {
      let $eachColDiv = $('<div class="col-lg-3 panel position-relative">');
   
      $eachColDiv.append('<div class="category">'+col[i].category);
      $eachColDiv.append('<div class="innerDiv position-absolute fixed-bottom text-center">'+col[i].name);
      $eachColDiv.css("background-image" ,'url(' + col[i].bgImage + ')');
      $eachColDiv.attr('data_category', col[i].category);
      $(".row").append($eachColDiv);
      $("#mainDiv").append($(".row"));
    }
    onCardClick();
}

$(document).ready(function(){
    createMainPage();

});