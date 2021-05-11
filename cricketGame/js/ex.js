let i = 0;
while (i < 10) {
  task(i);
   i++;
}
function task(j) {
  setTimeout(function() {
      console.log(j);
  }, 2000 * j);
}