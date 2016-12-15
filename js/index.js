// for (var i=10; i>=2; i=--){
//     if (i%2 === 0)
//     document.write('<b>'+ i);
//     document.write('<br>');
// }
// }

// передумова якщо не так то не виконаэться жодного разу
// var i = 0;

// while (i <=10){
//   document.write('<b>'+ i);
//     document.write('<br>');
//     i++;
// }


// пысляумова цикл хоч раз виконаэться 
//  do {
//   document.write('<b>'+ i);
//     document.write('<br>');
//      i++;
//  }
//  while (i <=10)

var arr = [1, 2, 3, 4, 5];

arr[5] = 6;
arr.push(7);
// document.write(arr.length);//довжина
// document.write(arr);//буде 51 елемент

// for (var i=0; arr=2; i=--){
//     if (i%2 === 0)
//     document.write('<b>'+ i);
//     document.write('<br>');
// }
// }

// var students = {
    
//     vasyl:15,
//     petro:19,
//     ivan:20,
    
// }
// //document.write(students['vasyl']);
// for (var key in students){
// document.write(key + ' : ' + students[key]);
//  document.write('<br>');
// }

var student = {
    name : 'Vasyl',
    age: 20,
    learn: function(what){
        document.write(this.name + ' : ' + students[key]);
 document.write('<br>');
    }
}

function Student (name, age){
    this.name = name;
    this.age = age;
    this.learn = function(what){
        document.write(this.name + ' : ' + students[key]);
 document.write('<br>');
    }
    return this;
}

// add new student

var petro = new Students 