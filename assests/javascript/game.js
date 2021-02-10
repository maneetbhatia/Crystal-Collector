
$('document').ready(function(){
        var Wins = 0;
        var Lossess = 0;
        
        newGame();
        
        $("#img1").on("click", function(){
        Total = Total + randomNumber1;
        checkWinLose();
        $("#div7").text(Total);
        });
        
        $("#img2").on("click", function(){
        Total = Total + randomNumber2;
        checkWinLose();
        $("#div7").text(Total);
        });


        $("#img3").on("click", function(){
        Total = Total + randomNumber3;
        checkWinLose();
        $("#div7").text(Total);
        });

        $("#img4").on("click", function(){
        Total = Total + randomNumber4;
        checkWinLose();
        $("#div7").text(Total);
        });


        function checkWinLose(){
                if (Total==randomNumber){
                        Wins++;
                        newGame();
                        $("p").filter($("div p.status")).text("You Win!!");
                }
                else if(Total > randomNumber){
                        Lossess++;
                        newGame();
                        $("p").filter($("div p.status")).text("You Lose!!");
                }

                $("p").filter($("div p.wins")).text("Wins: "+Wins);
                $("p").filter($("div p.losses")).text("Losses: "+Lossess);
        }

        function newGame(){
                Total = 0;
                randomNumber = Math.floor((Math.random()*102)+19);
                document.getElementById("col1").textContent = randomNumber;
                

                $("p").filter($("div p.wins")).text("Wins: "+ Wins);
                $("p").filter($("div p.losses")).text("Losses: "+ Lossess);

                randomNumber1 = Math.floor((Math.random()*12)+1);
                randomNumber2 = Math.floor((Math.random()*12)+1);
                randomNumber3 = Math.floor((Math.random()*12)+1);
                randomNumber4 = Math.floor((Math.random()*12)+1);
        }
});