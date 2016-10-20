/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(s,t) {
    
    
    for(var i=0;i<s.length-t.length+1;i++) {
        for(var j=0;j<t.length;j++){
            if(s.charAt(i+j) !== t.charAt(j)) {
                break;
            }
        }
        if(j===t.length) {
            return i;
        }
    }
    return -1;
};