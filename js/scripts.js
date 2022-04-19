function parseString(text) {
  const parsed = parseInt(text);
  return parsed;
  
}

console.log(parseString)

function numberLength(parsed) {
  let result;
  if (parsed >= 15) {
    result = true;
  } else if (parsed < 17) {
    result = true;
  } else {
    result = false;
  }
  return result;
}  


