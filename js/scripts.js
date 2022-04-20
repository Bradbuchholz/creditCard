function parseString(text) {
  const parsed = parseInt(text);
  return parsed;
  
}
console.log(parseString)

function numberLength(parsed) {
  let result;
  if (parsed.length === 15 || parsed.length === 16) {
    result = true;
  } else {
    result = false;
    }
    return result;
  }


function valid(parsed) {
  let result;
  if (parsed[0] === 3) { 
    if (parsed[1] === 4 || parsed[1] === 7)
    result = true;
  } else if (parsed[0] >= 4 && parsed[0]<= 6) {
    result = true;
  } else {
    result = false;
    }
    return result;
  }


//how all of these sep functions will work. combine at 
  
  