const input = document.getElementById('markdown-input');
const output = document.getElementById('markdown-output');

input.addEventListener('input', () => {
  fetch('/markdown', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ markdown: input.value })
  })
  .then(response => response.text())
  .then(html => {
    output.innerHTML = html;
  });
});
