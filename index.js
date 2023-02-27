const chatMessages = document.getElementById("chat_messages");
const sendButton = document.getElementById("send_button");
const messageInput = document.getElementById("message_input");
const errorMassage = document.getElementById("error_massage");
const userDate = document.getElementById("user_date");


const userInfo = prompt("Input your name and surname");

function dateFunc() {
  let date = new Date();

  let year = date.getFullYear();
  let month = 1 + date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${day}.${month}.${year}-${hour}:${minutes}`;
}

let todayDate = dateFunc();
let info = `${userInfo} - ${todayDate}`;

const sendMessage = () => {
  const message = messageInput.value.trim();

  if (message) {
    userDate.innerHTML = info;
    userDate.style.display = "block";
  } else {
    userDate.style.display = "none";
  }

  if (!message) {
    errorMassage.innerHTML = "Error";
    errorMassage.style.display = "block";
    setTimeout(() => {
      errorMassage.style.display = "none";
    }, 3000);
    return;
  } else {
    errorMassage.style.display = "none";
  }

  const messageEl = document.createElement("div");
  messageEl.classList.add("chat_message");
  messageEl.textContent = message;
  
  chatMessages.appendChild(messageEl);

  messageInput.value = "";

  chatMessages.scrollTop = chatMessages.scrollHeight;
};

sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});