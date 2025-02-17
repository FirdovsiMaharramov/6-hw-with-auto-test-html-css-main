// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a,b,c) {
    let max=0;
    if(a>b){
        max=a;
    }
    else{
        max=b;
    }
    if(c>max){
        max=c
    }
    return max;
    
}
