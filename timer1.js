
  function greet() {
(process.stdout.write('\x07').slice(2));
    }
  let  myArgs = process.argv;
  myArgs.forEach(element => {
    setTimeout(greet, element*1000);
console.log(element);
  });
  
 
  