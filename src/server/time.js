module.exports = (clients) => {
  setInterval(() => {
    clients.forEach((client) => {
      client.send(new Date().toTimeString());
    });
  }, 1000);
}
