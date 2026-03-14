//your JS code here. If required.



function updateTimer() {
  const now = new Date();
  const time = now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear() +
               " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  document.getElementById("timer").textContent = time;
}

setInterval(updateTimer, 1000);





