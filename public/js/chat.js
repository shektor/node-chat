(() => {
  const content = $('#content');
  const input = $('#input');
  const status = $('#status');

  ws.onopen = function () {
    // first we want users to enter their names
    input.removeAttr('disabled');
    status.text('Choose name:');
  };
})()
