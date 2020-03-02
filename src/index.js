module.exports = function reverse (n) {
    return parseInt((n+'').split('').reduceRight(function(prev,item){
        return prev + item + '';
     },''));
}

