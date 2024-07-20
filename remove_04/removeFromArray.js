removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

const removeFromArray = function(word, remove) {
    const NewArray = [];
    Array.array.forEach(item => {
        if(remove.include(item)){
            NewArray.push(item);
        }
    });
    return NewArray;
};

// Do not edit below this line
module.exports = removeFromArray;