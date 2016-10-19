var reverse = function(nums,start,end) {
	while(start<end){
	var temp = nums[start];
	nums[start]=nums[end];
	nums[end]=temp;

	start++;end--
	}
}

var rotateSortedArray = function (nums,k){
	if(nums.length === 0) {
		return;
	}
	k=k%nums.length;
	reverse(nums,0,nums.length-k-1);
	reverse(nums,nums.length-k;nums.length-1);
	reverse(nums,0,nums.length-1);
	}
}