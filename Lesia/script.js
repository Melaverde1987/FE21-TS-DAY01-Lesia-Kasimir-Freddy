var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < 10; i++) {
    var a = myArray[i];
    for (var j = 0; j < 10; j++) {
        var b = myArray[j];
        console.table(a + 'X' + b + '=' + a * b);
    }
    //console.log(a + '*' + b + '=' + a*b);
}
var myTable = [
    {
        fName: 'John',
        lName: 'Doe'
    },
    {
        fName: 'Anna',
        lName: 'Smith'
    },
    {
        fName: 'Jane',
        lName: 'Eyre'
    }
];
/*
myTable.forEach(function (value) {
    console.log(value);
    var fullName = value.fName + ' ' + value.lName + '<br>';
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            document.write(fullName);
        }, 2000);
    }
});
*/
var myTable2 = [
    {
        id: 1,
        fName: 'John',
        lName: 'Doe'
    },
    {
        id: 2,
        fName: 'Anna',
        lName: 'Smith'
    },
    {
        id: 3,
        fName: 'Jane',
        lName: 'Eyre'
    }
];
myTable2.forEach(function (value) {
    var x = value.fName;
    console.log(value.fName);
    function declareType(x) {
        if (value.fName) {
            return value.fName;
        }
        else {
            return "Hello there";
        }
    }
    var result = declareType("x");
    document.write(result);
});
