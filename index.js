// Write your solution in this file!
const employee={
    name:'victor',
    streetAddress:'nairobi 1'
};
console.log(employee);
 
function updateEmployeeWithKeyAndValue(object,key,value)
{const newObject={...object};// i had not declared it 
 newObject[key]=value;
return (newObject)};

function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value){
    object[key]=value;
    return(object);
}
function deleteFromEmployeeByKey(object,key,value){
     const newObject={...object}
    delete newObject[key];
    return(newObject);
}
function destructivelyDeleteFromEmployeeByKey(object,key,value){
    delete object[key];
    return(object);
}