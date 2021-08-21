function greet() {
(process.stdout.write('\x07'));
    }
  let  myArgs = process.argv.slice(2);
  myArgs.forEach(element => {
if (!isNaN(element) && Math.sign(element) > 0){
    
    setTimeout(greet, element*1000);
    
}

  });
  
 
  