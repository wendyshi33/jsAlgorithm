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


    if(p===null && q===null)
    {
        return true;
    }
    if(p===null || q === null)
    {
        return false;
    }
    var v1 = p.val;
    var v2 = q.val;
    if(v1!==v2)
    {
        return false;
    }
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)


   