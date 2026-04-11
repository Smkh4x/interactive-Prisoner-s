let Playerchoice;

let rounds = 1 ;


let computer = 0;
let player = 0;

let chacker = false;

function random_choise_and_if(){
    const bool = [false, true]
    var Bootchoice = bool[Math.floor(Math.random() * 2)];
    if(Bootchoice && Playerchoice){
        rounds++;
        computer += 3;
        player += 3;
        chacker = false;

        document.getElementById(`get-3`).innerHTML = "3";
        document.getElementById(`get-3p`).innerHTML = "3";

        document.getElementById(`result-5`).innerHTML = "1";
        document.getElementById(`result-5p`).innerHTML = "1";


        document.getElementById('Rounsds').textContent = rounds;
        document.getElementById('computer-result').textContent = computer;
        document.getElementById('player-result').textContent = player;

    } else if(!Bootchoice && !Playerchoice){
        rounds++;
        computer += 5;
        player += 5;
        chacker = false;

        document.getElementById(`get-3`).innerHTML = "5";
        document.getElementById(`get-3p`).innerHTML = "5";

        document.getElementById(`result-5`).innerHTML = "1";
        document.getElementById(`result-5p`).innerHTML = "1";


        document.getElementById('Rounsds').textContent = rounds;
        document.getElementById('computer-result').textContent = computer;
        document.getElementById('player-result').textContent = player;
    }else if (Bootchoice && !Playerchoice)  {
        rounds++;
        player += 5;
        chacker = false;


        document.getElementById(`get-5`).innerHTML = "5";
        document.getElementById(`get-5p`).innerHTML = "0";

        document.getElementById(`result-5`).innerHTML = "5";
        document.getElementById(`result-5p`).innerHTML = "0";

        document.getElementById('Rounsds').textContent = rounds;
        document.getElementById('computer-result').textContent = computer;
        document.getElementById('player-result').textContent = player;

    } else if (!Bootchoice && Playerchoice)  {
        rounds++;
        computer += 5;
        chacker = true;

        document.getElementById(`get-5`).innerHTML = "0";
        document.getElementById(`get-5p`).innerHTML = "5";

        document.getElementById(`result-5`).innerHTML = "0";
        document.getElementById(`result-5p`).innerHTML = "5";


        document.getElementById('Rounsds').textContent = rounds;
        document.getElementById('computer-result').textContent = computer;
        document.getElementById('player-result').textContent = player;
    }

}


function main(){
    if(rounds !== 10){
        if(!chacker){
            random_choise_and_if()
        }else{
            Bootchoice = true;
            random_choise_and_if()
        }
    }
}

function Cooperates(){
    Playerchoice = false;
    main()
}
function Betrays(){
    Playerchoice = true;
    main()
}