





var n =5;
 for(i = 1;i <= n;i++){
var str="";
for(j = 1;j <=n-i;j++){

    str=str+' ';
}
for(k =1; k <= i;k++){
    str=str+'#';
}
console.log(str)
 }
