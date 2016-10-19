var findPosition = function (nums, target) {
	if(nums === null || nums.length === 0) {
		return -1;
	}

	var start = 0;
	var end = nums.length -1;


	while(start+1<end){
		var mid = start+(end-start)/2;
		if(nums[mid] === target){
			return mid;
		}else if(nums[mid] < target){
			start = mid;
		}else {
			end = mid
		}
	}
	if(nums[start] === target){
		return start;
	}

	if(nums[end] == target) {
		return end;
	}

	return -1;






}