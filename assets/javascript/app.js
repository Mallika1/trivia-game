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
	image:'<img src="assets/images/indira.jpg" id="image">',
	description:'<div id="description">Indra Nooyi is an Indian American business executive, serving as chairperson of PepsiCo </div>'
};
var q4 = {
	question:'I applied ten times to Harvard Business School (HBS) and got rejected.?', 
	options: ['1. Jack Ma','2. EnglaJoseph TSai','3. Peng Li','4. Robin Li'],
	rightAnswer: '1. JAck Ma',
	image:'<img src="assets/images/JackMa.jpg" id="image">',
	description:'<div id="description">Jack Ma Yun is a Chinese business magnate, investor, and philanthropist. He is the co-founder and executive chairman of the Alibaba Group.</div>'
};
var q5 = {
	question:'I am m usually ranked #1 or #2 in the list of the worlds wealthiest people.Not bad for a college dropout.',
	options: ['Jeff Bezos','Sunder Pichai','Satya Nadela','Bill Gates'],
	rightAnswer: 'Bill Gates',
	image:'<img src="assets/images/billgates.jpg" id="image">',
	description:'<div id="description">He is best known as the principal founder of Microsoft Corporation.</div>'
};
var qa1 = {
	question:'Where is machu picchu located?',
	options: ['England','Uruguay','Germany','Peru'],
	rightAnswer: 'Peru',
	image:'<img src="assets/images/machupichu.jpg" id="image">',
	description:'<div id="description">Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley.</div>'
};
var qa2 = {
	question:'Where is Chichén Itzá located?',
	options: ['Spain','Italy','Mexico','Rome'],
	rightAnswer: 'Mexico',
	image:'<img src="assets/images/chichenItza.jpg" id="image">',
	description:'<div id="description">Chichén Itzá is a complex of Mayan ruins on Mexicos Yucatán Peninsula. A massive step pyramid, known as El Castillo or Temple of Kukulcan. </div>'
};
var qa3 = {
	question:'Where is Taj Mahal?',
	options: ['Nepal','India','Pakistan','China'],
	rightAnswer: 'India',
	image:'<img src="assets/images/taj.jpg" id="image">',
	description:'<div id="description">The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.</div>'
};
var qa4 = {
	question:'Where is Highest Mountain located?',
	options: ['Brazil','Argentina','Italy','Japan'],
	rightAnswer: 'Nepal',
	image:'<img src="assets/images/everest.jpg" id="image">',
	description:'<div id="description">Mount Everest, known in Nepali as Sagarmatha and in Tibetan as Chomolungma, is Earth\'s highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. </div>'
};
var qa5 = {
	question:'Where is Statue of Liberty located?',
	options: ['Tokyo','New York','Beijing','Moscow'],
	rightAnswer: 'New York',
	image:'<img src="assets/images/liberty.jpg" id="image">',
	description:'<div id="description">The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.</div>'
};

var qb1 = {
	question:'When was the first World Cup held?',
	options: ['1930','1924','1941','1950'],
	rightAnswer: '1930',
	image:'<img src="assets/images/fifa.jpg" id="image">',
	description:'<div id="description">Uruguay was the host for the first World Cup. It was played in the year 1930.</div>'
};
var qb2 = {
	question:'when is the super bowl 2019',
	options: ['February 3','February 13','August 4','March 3'],
	rightAnswer: 'February 3',
	image:'<img src="assets/images/superball.jpg" id="image">',
	description:'<div id="description">Super Bowl LIII, the 53rd Super Bowl and the 49th modern-era National Football League championship game, will decide the league champion for the 2018 NFL season. </div>'
};
var qb3 = {
	question:'when will be 2020 Summer Olympics?',
	options: ['Friday, July 24','Sunday, August 18','Sunday, July 18','Sunday, August 11'],
	rightAnswer: 'Friday, July 24',
	image:'<img src="assets/images/olympic2020.jpg" id="image">',
	description:'<div id="description">The 2020 Summer Olympics is scheduled to take place from 24 July to 9 August 2020. </div>'
};
var qb4 = {
	question:'What teams played the final in Mexico 1986',
	options: ['Brazil and West Germany','Argentina and West Germany','Italy and Brazil','Argentina and Brazil'],
	rightAnswer: 'Argentina and West Germany',
	image:'<img src="assets/images/argentina.jpg" id="image">',
	description:'<div id="description">Argentina beat West Germany on the 1986 final</div>'
};
var qb5 = {
	question:'Where 2018 World Cup was played?',
	options: ['Qatar','Germany','China','Russia'],
	rightAnswer: 'Russia',
	image:'<img src="assets/images/russia.png" id="image">',
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
    $("#mainDiv").append('<div class="timeLeft">Time Remaining: <span id="time"></span></div>');
    $("#time").text(timeLeft);
    if( currentQ === questions.length ){
      
        $resultDiv = $('<div class="resultDiv">');
        //summery //correct ans wrong ans unans
        $resultDiv.append('<div class="result m-4">Let\'s see how you did!</div>');
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
        $("#mainDiv").append('<div class="timeLeft">Time Remaining: <span id="time"></span></div>');
        $resultDiv = $('<div class="resultDiv">');
     
        $resultDiv.append('<div class="result">Out of Time!</div>');
        $resultDiv.append('<div class="score" id="">The Correct Answer Was : '+questions[currentQ].rightAnswer+'</div>');
        $resultDiv.append('<div class="score" id=""> '+ questions[currentQ].description +'</div>');
       
        $resultDiv.append(questions[currentQ].image);
        $("#mainDiv").append($resultDiv);
        
        
        currentQ++;
        setTimeout(constructGamePage,5000);
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
     setTimeout(constructGamePage,5000);

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
        questions = [q1,q2,q3,q4,q5];
    }
    else if(catVal === "TRAVEL")
    {
        questions = [qa1,qa2,qa3,qa4,qa5];
    }
    else if(catVal === "SPORTS")
    {
        questions = [qb1,qb2,qb3,qb4,qb5];
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