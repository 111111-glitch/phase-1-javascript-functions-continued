// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
 
  function mondayWork(job = 'go to the office') {
    return `This Monday, I will ${job}.`;
  }
  

  function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
 
  const encouragingPromptFunction = wrapAdjective("!!!");

  console.log(saturdayFun()); 
console.log(saturdayFun('hike')); 

console.log(mondayWork()); 
console.log(mondayWork('work from home')); 

console.log(encouragingPromptFunction()); 
console.log(encouragingPromptFunction('amazing')); 
  
