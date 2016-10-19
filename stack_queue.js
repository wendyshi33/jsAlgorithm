function QTwoStacks() {
	this.inStack = [];
	this.outStack = [];

} 

QTwoStacks.prototype.enqueue = function(item) {
	this.inStack.push(item);
}

QTwoStacks.prototype.dequeue = function() {
	if(this.outStack.length === 0) {
		while(this.inStack.length>0) {
			var newestInstackItem = this.inStack.pop();
			this.outStack.push(newestInstackItem);
		}

		if(this.outStack.length === 0) {
			return undefined
		}
	}
	return this.outStack.pop();
}