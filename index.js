// Code your solution in this file!


function distanceFromHqInBlocks(distance){
  return Math.abs(distance - 42)
}

function distanceFromHqInFeet(distance){
  return Math.abs((distance - 42) * 264)
}

function distanceTravelledInFeet(start, end){
  return Math.abs((start- end) * 264)
}

function calculatesFarePrice(start, end){
  if (Math.abs((start-end) * 264) >= 400 && Math.abs((start-end) * 264)  <= 2000){
      return Number.parseInt(((Math.abs((start-end) * 264) * 2)/100).toFixed(2))
  }
}