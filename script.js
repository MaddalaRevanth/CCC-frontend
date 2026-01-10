const adviceText = document.getElementById("advice-text");
const adviceId = document.getElementById("advice-id");
const diceBtn = document.getElementById("dice-btn");

async function getAdvice() {
  try {
    //Fetching the response from URL
    const response = await fetch("https://api.adviceslip.com/advice", {
      method: "GET",
      cache: "no-store" 
    });

    //Data given by the response
    const data = await response.json();

    //If data received
    if (data.message) {
      adviceText.textContent = data.message.text;
      adviceId.textContent = "---";
      return;
    }

    adviceText.textContent = `"${data.slip.advice}"`;
    adviceId.textContent = data.slip.id;

  } catch (error) {
    adviceText.textContent = "Failed to fetch advice."; //If no response
    adviceId.textContent = "---";
  }
}

//On pressing Dice Button -> generates the advice
diceBtn.addEventListener("click", getAdvice);

//Initial Load
getAdvice();
