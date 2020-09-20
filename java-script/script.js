const paperButt=document.getElementById("paper");
const scissorsButt=document.getElementById("Scissors");
const rockButt=document.getElementById("Rock");
const paperIcon=document.getElementsByClassName("paper-icon");
const scissorsIcon=document.getElementsByClassName("scissors-icon");
const rockIcon=document.getElementsByClassName("rock-icon");
var computerValue=0;
const ScoreCal=document.getElementById("score")
const playAgain=document.getElementById("reset");
const yourDeck=document.getElementById("yourDeck");
const computerDeck=document.getElementById("computerDeck");
const won=document.getElementById("won");
const loss=document.getElementById("loss");
const rulesBlock=document.getElementById("rules-block");
const draw=document.getElementById("draw");
var paperSelect=0;
var scissorsSelect=0;
var rockSelect=0;
var paperComputer=1;  //not select
var scissorsComputer=1;
var rockComputer=1;
var compValue=0;
const compScore=document.getElementById("compScore");
// when click on paper icon
const paperClick=()=>
{
    if(attempt===1)
    {
    paperSelect=1;
    scissorsSelect=0;
    rockSelect=0;
    paperShow()
    computer();
    attempt=2;
    }

}
var attempt=1;

paperButt.addEventListener("click",paperClick);
scissorsButt.addEventListener("click",scissorsClick);
rockButt.addEventListener("click",rockClick);

//when click on scissors

function scissorsClick()
{ 
    if (attempt===1){
    paperSelect=0;
    scissorsSelect=1;
    rockSelect=0;
    scissorShow();
    computer();
    attempt=2;
}
}
function rockClick()
{
   if(attempt===1)
   {
    paperSelect=0;
    scissorsSelect=0;
    rockSelect=1;
    rockShow();
    computer();
    attempt=2;
   }

}
//paper icon select and display it
function paperShow()
{
    rockButt.style.visibility="hidden"


}
//scissors icon select and display it
function scissorShow()
{
    rockButt.style.visibility="hidden"
    paperButt.style.borderColor="yellow"
    paperIcon[0].style.display="none";
    scissorsIcon[0].style.display="block"

}
function rockShow()
{
    rockButt.style.visibility="hidden"
    paperButt.style.borderColor="Red"
    paperIcon[0].style.display="none";
    rockIcon[0].style.display="block"

}
//computer choice
function computer()
{
    var d=new Date();
   var mill=d.getUTCMilliseconds();
   var sec=d.getSeconds();  
  computerValue= (computerValue+sec+mill) %3;
  if(computerValue==0 ) 
  {
      scissorsButt.style.visibility="visible"
      paperIcon[1].style.display="block";
      scissorsIcon[1].style.display="none";
      scissorsButt.style.borderColor="blue"
        paperComputer=1;
        scissorsComputer=2;
        rockComputer=2;

  }
  else
  if(computerValue==1)
  {
    scissorsButt.style.visibility="visible"
    scissorsIcon[1].style.display="block";
    scissorsButt.style.borderColor="yellow"
    paperComputer=2;
    scissorsComputer=1;
    rockComputer=2;
    
  }
  if(computerValue==2)
  {

    scissorsButt.style.visibility="visible"
      rockIcon[1].style.display="block";
      scissorsIcon[1].style.display="none";
      scissorsButt.style.borderColor="red"
      paperComputer=2;
      scissorsComputer=2;
      rockComputer=1;
  }
   
   checkWinner();

}
//check the result
var scoreValue=0;
function scoreCheck()
{
    scoreValue++;
    ScoreCal.innerText=scoreValue;
    won.style.display="block";

}
function gameDraw()
{
    draw.style.display="block";

}
function checkWinner()
{
    if(paperSelect===rockComputer)
    {
        scoreCheck();
    }
    else if(scissorsSelect===paperComputer)
    {
        scoreCheck();
    }
    else if(rockSelect===scissorsComputer)
    {
        scoreCheck();
    }
    else
     if(paperSelect===paperComputer)
    {
        gameDraw();
    }
    else if(scissorsSelect===scissorsComputer)
    {
        gameDraw();
    }
    else if(rockSelect===rockComputer)
    {
        gameDraw();
    }
    else
    {
        loss.style.display="block";
        compValue++;
        compScore.innerText=compValue;
    }
    playAgain.style.display="block";
    yourDeck.style.display="block";
    computerDeck.style.display="block";
    rulesBlock.style.display="none";
}
// const reset=document.getElementById("playAgain");
// reset.addEventListener("click",resetAll());
//function for reset all
function resetAll()
{
    paperSelect=0;
    scissorsSelect=0;
    rockSelect=0;
    paperComputer=1;
    scissorsComputer=1;
    rockComputer=1;
    attempt=1;
    rockIcon[0].style.display="none";
    scissorsIcon[0].style.display="none"
    paperIcon[1].style.display="none";
    rockIcon[1].style.display="none"
    paperIcon[2].style.display="none";
    scissorsIcon[2].style.display="none"
    paperIcon[0].style.display="block";
    scissorsIcon[1].style.display="block"
    rockIcon[2].style.display="block"
    scissorsButt.style.borderColor="yellow"
    paperButt.style.borderColor="blue"
    rockButt.style.borderColor="red"
    rockButt.style.visibility="visible"
    playAgain.style.display="none"
    yourDeck.style.display="none";
    computerDeck.style.display="none";
    won.style.display="none";
    loss.style.display="none";
    draw.style.display="none";

    rulesBlock.style.display="block";







}