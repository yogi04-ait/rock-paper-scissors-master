let SCORE = 0;

const userPick = (hand) => {
  console.log(hand);
  //hide the current page
  let hands = document.querySelector(".game-hands");
  hands.style.display = "none";
  
  // show the next page with the hand you pick
  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  let mobileContest = document.querySelector(".mobile-contest");
  let mobileResult = document.querySelector(".mobile-result");
  mobileContest.style.display= "flex";
  mobileResult.style.display = "flex";

  // set the user pick
  document.getElementById("user-pick").src = `/images/${hand}.png`;
  document.getElementById("mobile-user-pick").src = `/images/${hand}.png`;

  let comRandomPick = computerPick();
  contestResult(hand, comRandomPick)
};

const computerPick = () => {
  let hands = ["Rock", "Paper", "Scissors"];
  let comRandomPick = hands[Math.floor(Math.random() * 3)];

  console.log(comRandomPick);
  document.getElementById("computer-pick").src = `/images/${comRandomPick}.png`;
  document.getElementById("mobile-computer-pick").src = `/images/${comRandomPick}.png`;

  return comRandomPick;
};

const contestResult = (userHand, comRandomPick) => {
  if (userHand === "Paper" && comRandomPick === "Scissors") {
    setDecision("You Lose!");
    setScore(SCORE - 1);
  } 
  else if (userHand === "Scissors" && comRandomPick === "Paper") {
    setDecision("You Win!");
    setScore(SCORE + 1);
  }
  if (userHand === "Paper" && comRandomPick === "Rock") {
    setDecision("You Win!");
    setScore(SCORE + 1);
  } 
  else if (userHand === "Rock" && comRandomPick === "Paper") {
    setDecision("You Lose!");
    setScore(SCORE - 1);
  }
  if (userHand === "Rock" && comRandomPick === "Scissors") {
    setDecision("You Win!");
    setScore(SCORE + 1);
  } 
  else if (userHand === "Scissors" && comRandomPick === "Rock") {
    setDecision("You Lose!");
    setScore(SCORE - 1);
  }
  if (userHand === "Scissors" && comRandomPick === "Scissors") {
    setDecision("It's a tie!");
  }
  if (userHand === "Rock" && comRandomPick === "Rock") {
    setDecision("It's a tie!");
  }
  if (userHand === "Paper" && comRandomPick === "Paper") {
    setDecision("It's a tie!");
  }
};

const restartGame = () => {
  let hands = document.querySelector(".game-hands");
  hands.style.display = "flex";
  let contest = document.querySelector(".contest");
  contest.style.display = "none";
  let mobileContest = document.querySelector(".mobile-contest");
  let mobileResult = document.querySelector(".mobile-result");
  mobileContest.style.display= "none";
  mobileResult.style.display = "none";
  
}

const setDecision = (decision) => {
   document.getElementById("decision").innerHTML = decision;
   document.getElementById("mobile-decision").innerHTML = decision;
};

const setScore = (score) => {
    SCORE = score;
    document.getElementById("score").innerHTML = score;
    console.log(score);
};
