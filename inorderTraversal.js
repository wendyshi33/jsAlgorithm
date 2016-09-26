var inorderTraversal = function(root) {
	var stack = [];
	var result = [];

	while (root !== null || stack.length !== 0) {
		if(root) {
			stack.push(root);
			root = root.left;
		}else {
			root = stack.pop();
			result.push(root.val);
			root = root.right;
		}
	}
	return result;
}