const spinString = "|/-\\|";

for (let i = 0; i < spinString.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinString[i]}    `);
  }, (i * 200));
}

setTimeout(() => {
  process.stdout.write("\n");
}, 1000);