
var randomGeo = [];
var randomPol = [];
var randomHist =[];

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
    $("#Geo").empty();
    randomNumGeo(0,7);
    for (i=0; i<2; i++){
        var newQuestion = randomGeo[i];
        console.log(geography[newQuestion].Question);
    }
    var GeoQ1 = randomGeo[0];
    var GeoQ1_right = geography[GeoQ1].rightAnswer;
    $("#Geo").append("<div id='Q1'></div>");
    $("#Q1").append("<p class='quest'>Question:"+geography[GeoQ1].Question);
    $("#Q1").append("<form id='formQ1'></form>");
    $("#formQ1").append("<input type='radio' id='opt1' name='"+geography[GeoQ1].Options[0]+"' value='"+geography[GeoQ1].Options[0]+"'>"+geography[GeoQ1].Options[0]+"<br>");
    $("#formQ1").append("<input type='radio' id='opt2' name='"+geography[GeoQ1].Options[1]+"' value='"+geography[GeoQ1].Options[1]+"'>"+geography[GeoQ1].Options[1]+"<br>");
    $("#formQ1").append("<input type='radio' id='opt3' name='"+geography[GeoQ1].Options[2]+"' value='"+geography[GeoQ1].Options[2]+"'>"+geography[GeoQ1].Options[2]+"<br>");
    $("#formQ1").append("<input type='radio' id='opt4' name='"+geography[GeoQ1].Options[3]+"' value='"+geography[GeoQ1].Options[3]+"'>"+geography[GeoQ1].Options[3]+"<br>");
    $("#formQ1").append("<input type='radio' id='opt5' name='"+geography[GeoQ1].Options[4]+"' value='"+geography[GeoQ1].Options[4]+"'>"+geography[GeoQ1].Options[4]+"<br>");
  
    var GeoQ2 = randomGeo[1];
    var GeoQ2_right = geography[GeoQ2].rightAnswer;
    $("#Geo").append("<div id='Q2'></div>");
    $("#Q2").append("<p class='quest'>Question:"+geography[GeoQ2].Question);
    $("#Q2").append("<form id='formQ2'></form>");
    $("#formQ2").append("<input type='radio' id='opt1' name='"+geography[GeoQ2].Options[0]+"' value='"+geography[GeoQ2].Options[0]+"'>"+geography[GeoQ2].Options[0]+"<br>");
    $("#formQ2").append("<input type='radio' id='opt2' name='"+geography[GeoQ2].Options[1]+"' value='"+geography[GeoQ2].Options[1]+"'>"+geography[GeoQ2].Options[1]+"<br>");
    $("#formQ2").append("<input type='radio' id='opt3' name='"+geography[GeoQ2].Options[2]+"' value='"+geography[GeoQ2].Options[2]+"'>"+geography[GeoQ2].Options[2]+"<br>");
    $("#formQ2").append("<input type='radio' id='opt4' name='"+geography[GeoQ2].Options[3]+"' value='"+geography[GeoQ2].Options[3]+"'>"+geography[GeoQ2].Options[3]+"<br>");
    $("#formQ2").append("<input type='radio' id='opt5' name='"+geography[GeoQ2].Options[4]+"' value='"+geography[GeoQ2].Options[4]+"'>"+geography[GeoQ2].Options[4]+"<br>");
});