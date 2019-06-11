(() => {
  const el = document.getElementById('server-time');

  ws.onmessage = function (event) {
    el.innerHTML = 'Server time: ' + event.data;
  };
})()
