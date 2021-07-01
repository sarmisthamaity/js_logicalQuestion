var twoSum = function(nums, target) {
    index=0
    array=[]
    while(index<nums.length){
        j=0
        while(j<nums.length){
            if (nums[index]+nums[j]==target){
                array.push(index)
            }
            j++
        }
        index++
    }
    console.log(array)
};
twoSum([9,7,5,4],11)

