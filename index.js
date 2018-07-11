// Write your solution in this file!
var driver = {};

function updateDriverWithKeyAndValue(d, k, v){
  var newDriver = Object.assign({}, d)
  newDriver[k] = v
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(d, k, v){
  d[k] = v
  return d
}

function deleteFromDriverByKey(d, k){
  var newDriver = Object.assign({}, d)
  delete newDriver[k]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(d,k){
  
}