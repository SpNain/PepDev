socket.emit("user-connected", name);

socket.on("user-joined", function (name) {
  let chatJoin = document.createElement("div");
  chatJoin.classList.add("chat");
  chatJoin.classList.add("join");
  chatJoin.innerHTML = name + " joined chat";
  chatWindow.append(chatJoin);
});

socket.on("user-leave", function (name) {
  let chatLeave = document.createElement("div");
  chatLeave.classList.add("chat");
  chatLeave.classList.add("leave");
  chatLeave.innerHTML = name + " left chat";
  chatWindow.append(chatLeave);
});

// socket.js se aayi chat is on pe receive hogi aur as left chat sbke system pe append ho jaayegi
socket.on("append-chat", function ({name ,chat}) {
  let chatLeft = document.createElement("div");
  chatLeft.classList.add("chat");
  chatLeft.classList.add("left");
  chatLeft.innerHTML = name+" : " +chat;
  chatWindow.append(chatLeft);
});