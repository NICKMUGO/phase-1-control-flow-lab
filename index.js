function scuberGreetingForFeet(Feet){
  if(Feet<=400){
    return "This one is on me!";
  }else if(Feet>=2000 && Feet<=2500){
    return "I will gladly take your thirty bucks."
  }else if(Feet>2500){
    return "No can do."
  }else{
    return "No can do."
  }
  // Write your code here!
}
console.log(scuberGreetingForFeet("3000"))

function ternaryCheckCity(city){
  const message=city==="NYC"?"Ok, sounds good.":"No go.";
  return message
  // Write your code here!
}
console.log(ternaryCheckCity("NYC"))

function switchOnCharmFromTip(tip){
  switch(tip){
    case tip="generous":
      return "Thank you so much."
    case tip='not as generous':
      return "Thank you.";
    case tip='thanks for everything':
      return "Bye."
  }

  // Write your code here!
}