let Playerchoice;

let rounds = 0;
let computer = 0;
let player = 0;

function interactive_Prisoners(){
    let Bootchoice = Math.floor(Math.random() * 2);

    if(Bootchoice === Playerchoice){
        document.getElementById(`get-3`).innerHTML = "3";
        document.getElementById(`get-3p`).innerHTML = "3";

        document.getElementById(`result-5`).innerHTML = "1";
        document.getElementById(`result-5p`).innerHTML = "1";

        rounds++;
        computer += 3;
        player += 3;

        document.getElementById('Rounsds').textContent = rounds;
        document.getElementById('computer-result').textContent = computer;
        document.getElementById('player-result').textContent = player;

    } else if (Bootchoice === 1 && Playerchoice === 2)  {
        document.getElementById(`get-5`).innerHTML = "5";
        document.getElementById(`get-5p`).innerHTML = "0";

        document.getElementById(`result-5`).innerHTML = "5";
        document.getElementById(`result-5p`).innerHTML = "0";

        rounds++;
        player += 5;

        document.getElementById('Rounsds').textContent = rounds;
        document.getElementById('computer-result').textContent = computer;
        document.getElementById('player-result').textContent = player;

    } else if (Bootchoice === 2 && Playerchoice === 1)  {
        document.getElementById(`get-5`).innerHTML = "0";
        document.getElementById(`get-5p`).innerHTML = "5";

        document.getElementById(`result-5`).innerHTML = "0";
        document.getElementById(`result-5p`).innerHTML = "5";

        rounds++;
        computer += 5;

        document.getElementById('Rounsds').textContent = rounds;
        document.getElementById('computer-result').textContent = computer;
        document.getElementById('player-result').textContent = player;
    }
}

function Cooperates(){
    Playerchoice = 1;
    interactive_Prisoners()
}
function Betrays(){
    Playerchoice = 2;
    interactive_Prisoners()
}