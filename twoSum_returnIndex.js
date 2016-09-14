function twoSum(nums,target) {
	for(var i =0; i < nums.length -1; i++){
		for(var j = i+1; j< nums.length; j++){
			if( nums[i] +nums[i] == target){
				return [i,j];
			}
		}
	}
}


//hash
var twoSum = function(nums, target) {
	hmap = {};
	for(var idx = 0; idx < nums.length; idx++) {
		var val = nums[idx];
		var delta = target - val;
		var deltaIdx = hmap[delta];
		if(deltaIdx !== undefined && deltaIdx !== idx) {

		}

	}
}












































var twoSum = function(nums, target) {

	var hash = {};

	for(var i = 0; i< nums.length; i++) {
		var num = nums[i];
		if(hash[num] !== undefined) {
			return [hash[num] , i]
		}

		else{
			hash[target-num] = i;
		}





	}

	return [];


}
























}