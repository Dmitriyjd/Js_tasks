function deepCopy(originalObject){
    switch (typeof originalObject){
        case 'object' : return cloneObject(originalObject);
        case 'array' : return cloneArray(originalObject);
        default: return originalObject;
    }
}

function cloneObject(originalObject) {
    var clonedObject = {};
    for(var key in originalObject){
        clonedObject[key] = deepCopy(originalObject[key]);
    }
    return clonedObject;
}

function cloneArray(originalArray){
    var clonedArray = [];
    for (var i=0;i< originalArray.length;i++){
        clonedArray[i] = deepCopy(originalArray[i]);
    }
    return clonedArray;
}

var original = {
    firstValue: { someKey: 1 },
    secondValue: {
        anotherValue: {
            anotherKey: 15,
        },
        lorem: 'ipsum'
    },
    thirdValue: [{ someKey: 12 }, { someKey: 13 }]
};


var copied = deepCopy(original);

original.secondValue.anotherValue.anotherKey = 99;
console.log(original.secondValue.anotherValue.anotherKey === copied.secondValue.anotherValue.anotherKey);
