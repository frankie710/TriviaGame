$(document).ready(function(){


var gameTime = 60;
var correctAns = 0;
var incorrectAns = 0;
var ans1 = 0
var ans2 = 0
var ans3 = 0
var ans4 = 0
var ans5 = 0




$('#timeLeft').text(gameTime);


$('#startBtn').on('click', function (){
    timerStart();
})


$('#submitBtn').on('click', function (){
    gameOver();
})


    function countDown(){
        gameTime--;
        $('#timeLeft').html(gameTime)

        if (gameTime <= 0){
            gameOver()
        }
    }


    function timerStart(){
        setInterval(countDown, 1000);
    };


    function gameOver(){
        var Q1 = $('input:radio[name = "Q1"]:checked').val();
		var Q2 = $('input:radio[name = "Q2"]:checked').val();
		var Q3 = $('input:radio[name = "Q3"]:checked').val();
		var Q4 = $('input:radio[name = "Q4"]:checked').val();
        var Q5 = $('input:radio[name = "Q5"]:checked').val();
        
        if (Q1 == "Durin's Folk"){
            correctAns++;
            ans1++
        }
            else{
            incorrectAns++;
        }

        if (Q2 == "The Men of Dale"){
            correctAns++;
            ans2++
        }
        else{
            incorrectAns++;
        }   

        if (Q3 == "Wounds inflicted by the Nazgûl"){
            correctAns++;
            ans3++
        }
        else{
            incorrectAns++;
        }

        if (Q4 == "Rivendell"){
            correctAns++;
            ans4++
        }
        else{
            incorrectAns++;
        }

        if (Q5 == "In the Shire"){
            correctAns++;
            ans5++
        }
        else{
            incorrectAns++;
        }

        $('#yourResults').text(correctAns + " Out Of 5");
        console.log(correctAns);
        console.log(incorrectAns);
        console.log(ans1);
        console.log(ans2);
        console.log(ans3);
        console.log(ans4);
        console.log(ans5);
        }


});


