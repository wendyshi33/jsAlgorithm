//remove duplicate char
function removeDuplicateChar(str) {
	var hash={};
    var newStr='';
    var newArr =[];
    for(var i=0;i<str.length;i++) {
    	var char=str[i];
        if(hash[char]){
        	hash[char]=hash[char]+1;
        }else{
        	hash[char]=1;
        }
    }
    for(var j in hash){
    	if(hash[j] === 1){
         	newArr.push(j);
            newStr = newArr.join('');
        }
    }
    return newStr;
    
}
alert(removeDuplicateChar("Learn more javascript"));











