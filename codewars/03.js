/* At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age]. */





/* function differenceInAges(ages){
  let x = ages.sort((a,b) => a - b)[0]
  let y = ages.sort((a,b) => a - b)[ages.length - 1]
  return [x, y, y - x]
}
 */



/* function differenceInAges(ages){
  const youngest = Math.min(...ages);
  const oldest = Math.max(...ages);

  return [youngest, oldest, oldest - youngest];
} */

/* function differenceInAges(ages){
  let youngest = ages[0];
  let oldest = ages[0];
  for(i = 0; i < ages.length; i++) {
    if(ages[i] > oldest) {
      oldest = ages[i];
    } else if(ages[i] < youngest) {
      youngest = ages[i];
    }
  }
  return [youngest, oldest, oldest - youngest];
} */