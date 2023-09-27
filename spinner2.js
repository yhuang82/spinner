const sentence = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]; // Spinner characters for animation
let delay = 100;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 200; // increase the spinner for the next one
}

