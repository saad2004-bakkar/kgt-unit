
const chatBox = document.getElementById('chat');
const emergencyBox = document.getElementById('emergency');

function send() {
  const msgInput = document.getElementById('msg');
  const msg = msgInput.value.trim();
  if (!msg) return;
  const div = document.createElement('div');
  div.textContent = '📢 القائد: ' + msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
  msgInput.value = '';
}

function triggerEmergency() {
  emergencyBox.style.display = 'block';
  setTimeout(() => {
    emergencyBox.style.display = 'none';
  }, 10000);
}
