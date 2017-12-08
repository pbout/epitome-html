var dict = (function () {

var staticcontent = [
    ['[?-test-?]','fsdf'], 
];

var djangocontent = [
    ['[?-test-?]','Hello!!!']
];

return {
    staticcontent : function(){
        return staticcontent;
    },
    djangocontent : function(){
        return djangocontent;
    }
}

}());