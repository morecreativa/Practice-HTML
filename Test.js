const strArr=["zero","one","two","three","four","five","six","seven","eight","nine"];

function solution(num) {
    var answer = "";
    num=String(num);
    for(var i =0 ;i<num.length;++i){
        answer+=strArr[Number(num[i])];
    }
    return answer;
}