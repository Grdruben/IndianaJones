
function ShowHours(hour){
  if (timeFormat() || (hour > 0 && hour < 13)) {
  return (hour);
  }
  if (hour == 0) {
  return (12);
  }
  return (hour-12);
}


function displayZero(timeVal) {
if (timeVal > 9) {
return "" + timeVal;
}
}

function validTime (Time){


}
