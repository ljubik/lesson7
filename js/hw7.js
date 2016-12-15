var n = 100;
var arr = new Array();
arr[0] = 0;
var nomer = Number(prompt("Введіть який номер елемента Фібоначчі необхідно ? *Якщо 0 весь масив"));

/*
Fn = Fn-1 + Fn-2 
1,  1,  2(1+1), 3(1+2), 5(2+3)
1   2   3       4       5
*/
function fibo(n) {
    var a = 1;
    var b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
if (nomer != 0) {
    for (var j = 1; j <= n; j++) {
        arr.push(fibo(j));
    }
}
else {
    for (var j = 1; j <= n; j++) {
        arr.push(fibo(j));
        document.write('Елемент' + j + '=' + arr[j] + '<br>'); //вивід всього масиву
    }
}
document.write('<center><b>' + arr[nomer] + '</b></center>');



// РЕКУРСІЯ проба
// function factorial(num)
// {
//     // ЯКЩО  0
//     if (num < 0) {
//         return -1;
//     }
//     // НОМЕР  0, ТОДІ ФАКТОРІАЛ 1.
//     else if (num == 0) {
//         return 1;
//     }
//     var tmp = num;
//     while (num-- > 2) {
//         tmp *= num;
//     }
//     return tmp;
// }

// var result = factorial(8);
// document.write(result);

// // 40320