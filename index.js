var katzDeli=[];


function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  var numberInLine = katzDeliLine.indexOf(name)+1;
  return "Welcome, "+name+ ". You are number "+numberInLine+" in line."
}

function nowServing(n){
  
  if(n.length > 0){
    
    var nowServing = n.shift()
   return 'Currently serving '+nowServing+'.'
  
  }
 
  if( n.length === 0){
  return "There is nobody waiting to be served!"
 
}
 
}

function currentLine(){}