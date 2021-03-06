
var randomGeo = [];
var randomPol = [];
var randomHist =[];

var rAnswers = 0;
var wAnswers = 0;
var unAnswered = 0;
var GeoQ1_right;
var GeoQ2_right;
var PolQ1_right;
var PolQ2_right;
var HistQ1_right;
var HistQ2_right;

var displayedSecs = 15;
var timerRun = true;
var answered = false;
var started = false;

var origArray = [1,2,3,4,5,6,7,8];

var geography = {
    1: {
        Question: "What is the capital of Germany?",
        rightAnswer: "Berlin",
        Options: ["Bonn", "Hamburg", "Stutgart", "Berlin", "Frankfurt"]
    },
    2: {
        Question: "Where is located Lake Como?",
        rightAnswer: "Italy",
        Options: ["France", "Switzerland", "Italy", "Germany", "Portugal"]
    },
    3: {
        Question: "Highest mountain in the American Continent",
        rightAnswer: "Aconcagua",
        Options: ["Bolivar", "Aconcagua", "McKinley", "Chimborazo", "Frankfurt"]
    },
    4: {
        Question: "Where do you need to go to see the Mona Lisa?",
        rightAnswer: "Paris",
        Options: ["Rome", "Berlin", "Caracas", "Washington", "Paris"]
    },
    5: {
        Question: "Which country is home to the World Heritage Site Machu Picchu?",
        rightAnswer: "Peru",
        Options: ["Bolivia", "Argentina", "Panama", "Peru", "Colombia"]
    },
    6: {
        Question: "Riga is the capital of:",
        rightAnswer: "Latvia",
        Options: ["Lithuania", "Estonia", "Latvia", "Belarus", "Sweden"]
    },
    7: {
        Question: "Angel Falls, the highest waterfall is located in:",
        rightAnswer: "Venezuela",
        Options: ["Venezuela", "Guatemala", "Uganda", "Colombia", "Nigeria"]
    },
    8: {
        Question: "Biggest desert in the world:",
        rightAnswer: "Sahara",
        Options: ["Gobi", "Kalahari", "Mojave", "Sahara", "Sonora"]
    }
}
var politics = {
    1: {
        Question: "Who is the president of France?",
        rightAnswer: "Macron",
        Options: ["Platini", "Zidane", "Macron", "Miterrand", "Petain"]
    },
    2: {
        Question: "What island is considerd by China as part of their territory?",
        rightAnswer: "Taiwan",
        Options: ["Okinawa", "Guam", "Salomon", "Tasmania", "Taiwan"]
    },
    3: {
        Question: "Spain is a:",
        rightAnswer: "Kingdom",
        Options: ["Republic", "Principate", "Emirate", "Kingdom", "Colony"]
    },
    4: {
        Question: "Era of tension between USA and the USSR was known as:",
        rightAnswer: "Cold War",
        Options: ["Cold War", "Red Menace", "Blitzkrieg", "Imminent Danger", "Nuclear Time"]
    },
    5: {
        Question: "Which country is not part of the United Kingdom",
        rightAnswer: "Ireland",
        Options: ["England", "Scotland", "Ireland", "Wales", "Northern Ireland"]
    },
    6: {
        Question: "Name of the highest rank legal intrument in democracies:",
        rightAnswer: "Constitution",
        Options: ["Decree", "Constitution", "Norm", "Executive Order", "Regulation"]
    },
    7: {
        Question: "Title of the political authority of a city:",
        rightAnswer: "Mayor",
        Options: ["President", "Councelor", "Secretary", "Chancellor", "Mayor"]
    },
    8: {
        Question: "Element of the political system that create laws:",
        rightAnswer: "Congress",
        Options: ["Ministry", "Congress", "Elder's Council", "Comune", "Court"]
    }
}
var WHistory = {
    1: {
        Question: "Start year of WWI:",
        rightAnswer: "1914",
        Options: ["1918", "1938", "1492", "1914", "1990"]
    },
    2: {
        Question: "What country attacked the US Naval Base of Pearl Harbor?",
        rightAnswer: "Japan",
        Options: ["China", "North Korea", "Russia", "Japan", "Germany"]
    },
    3: {
        Question: "First explorer to reach the South Pole",
        rightAnswer: "Amundsen",
        Options: ["Scott", "Byrd", "Amundsen", "Picard", "Cousteau"]
    },
    4: {
        Question: "The first man landed on the moon in the year:",
        rightAnswer: "1969",
        Options: ["1969", "1984", "1977", "1944", "1990"]
    },
    5: {
        Question: "Christopher Columbus was:",
        rightAnswer: "Italian",
        Options: ["Spanish", "English", "Portuguese", "Italian", "French"]
    },
    6: {
        Question: "Name of the precolumbian people that live in modern Peru:",
        rightAnswer: "Incas",
        Options: ["Incas", "Mayans", "Caribes", "Tahinos", "Olmecs"]
    },
    7: {
        Question: "Who was the Russian Czar in 1917?",
        rightAnswer: "Nicholas II",
        Options: ["Nicholas II", "Peter the Great", "Ivan the Terrible", "Boris Godunov", "Catherine"]
    },
    8: {
        Question: "What was the name of modern Mexico during the Spanish Colony era?",
        rightAnswer: "New Spain",
        Options: ["Tenochtitlan", "Aztlan", "New Spain", "California", "New Madrid"]
    }
}
function randomNumGeo(min,max,source) {
    randomGeo = [];
    //source = [];
    for (i=0; i<2; i++){
        var newRandomIndex = Math.floor(Math.random()*max)+min;
        var newRandom = origArray[newRandomIndex];
        var del1 = origArray.indexOf(newRandom);
        randomGeo.push(origArray[newRandomIndex]);
        //source.push(origArray[newRandomIndex]);
        origArray.splice(del1,1);
        max = max-1;
    }
    origArray = [1,2,3,4,5,6,7,8];
    //return randomGeo;
}
function randomNumPol(min,max,source) {
    randomPol = [];
    //source = [];
    for (i=0; i<2; i++){
        var newRandomIndex = Math.floor(Math.random()*max)+min;
        var newRandom = origArray[newRandomIndex];
        var del1 = origArray.indexOf(newRandom);
        randomPol.push(origArray[newRandomIndex]);
        //source.push(origArray[newRandomIndex]);
        origArray.splice(del1,1);
        max = max-1;
    }
    origArray = [1,2,3,4,5,6,7,8];
    //return randomGeo;
}
function randomNumHist(min,max,source) {
    randomHist = [];
    //source = [];
    for (i=0; i<2; i++){
        var newRandomIndex = Math.floor(Math.random()*max)+min;
        var newRandom = origArray[newRandomIndex];
        var del1 = origArray.indexOf(newRandom);
        randomHist.push(origArray[newRandomIndex]);
        //source.push(origArray[newRandomIndex]);
        origArray.splice(del1,1);
        max = max-1;
    }
    origArray = [1,2,3,4,5,6,7,8];
    //return randomGeo;
}

$("#start").on("click", function(){
    if (started == false){
    cleanSlate();
    started = true;
    answered = false;
    timerRun = true;
    $("#Geo").empty();
    $("#Pol").empty();
    $("#Hist").empty();
    $(".results").remove();
    randomNumGeo(0,7);
    randomNumPol(0,7);
    randomNumHist(0,7);
    rAnswers = 0;
    wAnswers = 0;
    unAnswered = 0;
    decrement();
    displayedSecs = 30;
    //Build the Geography Questions
    for (i=0; i<2; i++){
        var newQuestion = randomGeo[i];
    }
    // Geography Question #1
    var GeoQ1 = randomGeo[0];
    GeoQ1_right = geography[GeoQ1].rightAnswer;
    $("#Geo").append("<div id='Q1'></div>");
    $("#Geo > #Q1").append("<p class='quest'>Question: "+geography[GeoQ1].Question);
    $("#Geo > #Q1").append("<form id='formGeoQ1'></form>");
    $("#formGeoQ1").append("<input type='radio' class='radioBtn' id='opt1' name='GeoQuestion1' value='"+geography[GeoQ1].Options[0]+"'>"+geography[GeoQ1].Options[0]+"<br>");
    $("#formGeoQ1").append("<input type='radio' class='radioBtn' id='opt2' name='GeoQuestion1' value='"+geography[GeoQ1].Options[1]+"'>"+geography[GeoQ1].Options[1]+"<br>");
    $("#formGeoQ1").append("<input type='radio' class='radioBtn' id='opt3' name='GeoQuestion1' value='"+geography[GeoQ1].Options[2]+"'>"+geography[GeoQ1].Options[2]+"<br>");
    $("#formGeoQ1").append("<input type='radio' class='radioBtn' id='opt4' name='GeoQuestion1' value='"+geography[GeoQ1].Options[3]+"'>"+geography[GeoQ1].Options[3]+"<br>");
    $("#formGeoQ1").append("<input type='radio' class='radioBtn' id='opt5' name='GeoQuestion1' value='"+geography[GeoQ1].Options[4]+"'>"+geography[GeoQ1].Options[4]+"<br>");
    // Geography Question #2
    var GeoQ2 = randomGeo[1];
    GeoQ2_right = geography[GeoQ2].rightAnswer;
    $("#Geo").append("<div id='Q2'></div>");
    $("#Geo > #Q2").append("<p class='quest'>Question: "+geography[GeoQ2].Question);
    $("#Geo > #Q2").append("<form id='formGeoQ2'></form>");
    $("#formGeoQ2").append("<input type='radio' id='opt1' name='GeoQuestion2' value='"+geography[GeoQ2].Options[0]+"'>"+geography[GeoQ2].Options[0]+"<br>");
    $("#formGeoQ2").append("<input type='radio' id='opt2' name='GeoQuestion2' value='"+geography[GeoQ2].Options[1]+"'>"+geography[GeoQ2].Options[1]+"<br>");
    $("#formGeoQ2").append("<input type='radio' id='opt3' name='GeoQuestion2' value='"+geography[GeoQ2].Options[2]+"'>"+geography[GeoQ2].Options[2]+"<br>");
    $("#formGeoQ2").append("<input type='radio' id='opt4' name='GeoQuestion2' value='"+geography[GeoQ2].Options[3]+"'>"+geography[GeoQ2].Options[3]+"<br>");
    $("#formGeoQ2").append("<input type='radio' id='opt5' name='GeoQuestion2' value='"+geography[GeoQ2].Options[4]+"'>"+geography[GeoQ2].Options[4]+"<br>");
    
    //Building the Politics Questions
    for (i=0; i<2; i++){
        var newQuestion = randomPol[i];
    }
    // Politics Question #1
    var PolQ1 = randomPol[0];
    PolQ1_right = politics[PolQ1].rightAnswer;
    $("#Pol").append("<div id='Q1'></div>");
    $("#Pol > #Q1").append("<p class='quest'>Question: "+politics[PolQ1].Question);
    $("#Pol > #Q1").append("<form id='formPolQ1'></form>");
    $("#formPolQ1").append("<input type='radio' id='opt1' name='PolQuestion1' value='"+politics[PolQ1].Options[0]+"'>"+politics[PolQ1].Options[0]+"<br>");
    $("#formPolQ1").append("<input type='radio' id='opt2' name='PolQuestion1' value='"+politics[PolQ1].Options[1]+"'>"+politics[PolQ1].Options[1]+"<br>");
    $("#formPolQ1").append("<input type='radio' id='opt3' name='PolQuestion1' value='"+politics[PolQ1].Options[2]+"'>"+politics[PolQ1].Options[2]+"<br>");
    $("#formPolQ1").append("<input type='radio' id='opt4' name='PolQuestion1' value='"+politics[PolQ1].Options[3]+"'>"+politics[PolQ1].Options[3]+"<br>");
    $("#formPolQ1").append("<input type='radio' id='opt5' name='PolQuestion1' value='"+politics[PolQ1].Options[4]+"'>"+politics[PolQ1].Options[4]+"<br>");
    // Politics Question #1
    var PolQ2 = randomPol[1];
    PolQ2_right = politics[PolQ2].rightAnswer;
    $("#Pol").append("<div id='Q2'></div>");
    $("#Pol > #Q2").append("<p class='quest'>Question: "+politics[PolQ2].Question);
    $("#Pol > #Q2").append("<form id='formPolQ2'></form>");
    $("#formPolQ2").append("<input type='radio' id='opt1' name='PolQuestion2' value='"+politics[PolQ2].Options[0]+"'>"+politics[PolQ2].Options[0]+"<br>");
    $("#formPolQ2").append("<input type='radio' id='opt2' name='PolQuestion2' value='"+politics[PolQ2].Options[1]+"'>"+politics[PolQ2].Options[1]+"<br>");
    $("#formPolQ2").append("<input type='radio' id='opt3' name='PolQuestion2' value='"+politics[PolQ2].Options[2]+"'>"+politics[PolQ2].Options[2]+"<br>");
    $("#formPolQ2").append("<input type='radio' id='opt4' name='PolQuestion2' value='"+politics[PolQ2].Options[3]+"'>"+politics[PolQ2].Options[3]+"<br>");
    $("#formPolQ2").append("<input type='radio' id='opt5' name='PolQuestion2' value='"+politics[PolQ2].Options[4]+"'>"+politics[PolQ2].Options[4]+"<br>");

    for (i=0; i<2; i++){
        var newQuestion = randomHist[i];
    }
    var HistQ1 = randomHist[0];
    HistQ1_right = WHistory[HistQ1].rightAnswer;
    $("#Hist").append("<div id='Q1'></div>");
    $("#Hist > #Q1").append("<p class='quest'>Question:"+WHistory[HistQ1].Question);
    $("#Hist > #Q1").append("<form id='formHistQ1'></form>");
    $("#formHistQ1").append("<input type='radio' id='opt1' name='HistQuestion1' value='"+WHistory[HistQ1].Options[0]+"'>"+WHistory[HistQ1].Options[0]+"<br>");
    $("#formHistQ1").append("<input type='radio' id='opt2' name='HistQuestion1' value='"+WHistory[HistQ1].Options[1]+"'>"+WHistory[HistQ1].Options[1]+"<br>");
    $("#formHistQ1").append("<input type='radio' id='opt3' name='HistQuestion1' value='"+WHistory[HistQ1].Options[2]+"'>"+WHistory[HistQ1].Options[2]+"<br>");
    $("#formHistQ1").append("<input type='radio' id='opt4' name='HistQuestion1' value='"+WHistory[HistQ1].Options[3]+"'>"+WHistory[HistQ1].Options[3]+"<br>");
    $("#formHistQ1").append("<input type='radio' id='opt5' name='HistQuestion1' value='"+WHistory[HistQ1].Options[4]+"'>"+WHistory[HistQ1].Options[4]+"<br>");
  
    var HistQ2 = randomHist[1];
    HistQ2_right = WHistory[HistQ2].rightAnswer;
    $("#Hist").append("<div id='Q2'></div>");
    $("#Hist > #Q2").append("<p class='quest'>Question:"+WHistory[HistQ2].Question);
    $("#Hist > #Q2").append("<form id='formHistQ2'></form>");
    $("#formHistQ2").append("<input type='radio' id='opt1' name='HistQuestion2' value='"+WHistory[HistQ2].Options[0]+"'>"+WHistory[HistQ2].Options[0]+"<br>");
    $("#formHistQ2").append("<input type='radio' id='opt2' name='HistQuestion2' value='"+WHistory[HistQ2].Options[1]+"'>"+WHistory[HistQ2].Options[1]+"<br>");
    $("#formHistQ2").append("<input type='radio' id='opt3' name='HistQuestion2' value='"+WHistory[HistQ2].Options[2]+"'>"+WHistory[HistQ2].Options[2]+"<br>");
    $("#formHistQ2").append("<input type='radio' id='opt4' name='HistQuestion2' value='"+WHistory[HistQ2].Options[3]+"'>"+WHistory[HistQ2].Options[3]+"<br>");
    $("#formHistQ2").append("<input type='radio' id='opt5' name='HistQuestion2' value='"+WHistory[HistQ2].Options[4]+"'>"+WHistory[HistQ2].Options[4]+"<br>");

    //Timer
    var initialSecs = 30;
    var currentSecs = initialSecs;

    setTimeout(decrement,1000);
    function decrement() {
    displayedSecs = currentSecs % 60;
    currentSecs--;
    if (timerRun) {
    if (isNaN (displayedSecs) ==false) {
        $("#timerText").html("Timer:  "+displayedSecs);
    }
    if(currentSecs >= 0) setTimeout(decrement,1000);
    if (displayedSecs === 0){
    getResults();
    answered = true;
    }
    }
}
}

});
$("#reload").on("click", function(){
    cleanSlate();
});

$("#Done").on("click", function(){
    if (answered == false){
    timerRun = false;
    getResults(); 
    $("#timerText").text('Timer : ');
    answered = true;
    }
});

function cleanSlate(){
    timerRun = false;
    answered = false;
    started = false;
    $("#Geo").empty();
    $("#Pol").empty();
    $("#Hist").empty();
    $(".results").remove();
    rAnswers = 0;
    wAnswers = 0;
    unAnswered = 0;
    $("#timerText").text('Timer : ');
}

function getResults (){
    if ($("input[name='GeoQuestion1']:checked").length == 0){
        ++unAnswered;
    } else if ($("input[name='GeoQuestion1']:checked")[0].value == GeoQ1_right){
       ++rAnswers;
    } else {
       ++wAnswers;
    }

   if ($("input[name='GeoQuestion2']:checked").length == 0){
    ++unAnswered;
    } else if ($("input[name='GeoQuestion2']:checked")[0].value == GeoQ2_right){
    ++rAnswers;
    } else {
    ++wAnswers;
    }

    if ($("input[name='PolQuestion1']:checked").length == 0){
        ++unAnswered;
    } else if ($("input[name='PolQuestion1']:checked")[0].value == PolQ1_right){
    ++rAnswers;
    } else {
    ++wAnswers;
    }
    
    if ($("input[name='PolQuestion2']:checked").length == 0){
        ++unAnswered;
    } else if ($("input[name='PolQuestion2']:checked")[0].value == PolQ2_right){
    ++rAnswers;
    } else {
    ++wAnswers;
    } 

    if ($("input[name='HistQuestion1']:checked").length == 0){
        ++unAnswered;
    } else if ($("input[name='HistQuestion1']:checked")[0].value == HistQ1_right){
        ++rAnswers;
    } else {
        ++wAnswers;
    }

    if ($("input[name='HistQuestion2']:checked").length == 0){
        ++unAnswered;
    } else if ($("input[name='HistQuestion2']:checked")[0].value == HistQ2_right){
        ++rAnswers;
    } else {
        ++wAnswers;
    }
$("#finalResults").append("<p class='results' > Right Answers: "+rAnswers+"</p>");
$("#finalResults").append("<p class='results' > Wrong Answers: "+wAnswers+"</p>");
$("#finalResults").append("<p class='results' > Not Answered: "+unAnswered+"</p>");
}