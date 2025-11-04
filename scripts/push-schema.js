const { spawn } = require('child_process');

const push = spawn('npm', ['run', 'db:push'], {
  stdio: ['pipe', 'inherit', 'inherit'],
  shell: true
});

// Wait for the prompt and send "y" + Enter
setTimeout(() => {
  push.stdin.write('\u001B[B'); // Down arrow to select "Yes"
  push.stdin.write('\n'); // Enter
  push.stdin.end();
}, 3000);

push.on('close', (code) => {
  console.log(`\nProcess exited with code ${code}`);
  process.exit(code);
});
