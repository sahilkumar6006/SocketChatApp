var socket = io();

const btn = document.getElementById('btn')
btn.addEventListener('click', function exec() {
  socket.emit("from_client");
})


socket.on("from_server", () => {

  const div = document.createElement('div')
  div.innerText = "New event from the server";
  console.log(div);
  document.body.appendChild(div)
})
