var ourArrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < 10; i++) {
    var a = ourArrayA[i];
    for (var j = 0; j < 10; j++) {
        var b = ourArrayA[j];
        var result = a * b;
        console.table(a + " X " + b + " = " + result);
    }
}
