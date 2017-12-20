var recipes = {}
  
function updateObjectWithKeyAndValue(object , key,value){
  return Object.assign({}, object, {[key]: value});
}
/*function updateObjectWithKeyAndValue(object,key,value){
  var newObj = Object.assign({},obj)
  newObj.key = value;
 return newObj 
}*/
function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj.key = value;
  return obj
}
