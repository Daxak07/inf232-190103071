function myFunction() {
    var person = prompt("Enter the types of animals");
    if (person != null) {
        var array = [];
        var length = parseInt(person);
        var result = 0;
        for (i = 0; i < length; i++) {
            array[i] = prompt((i + 1) + ".Animal type");
        }
        if (length === 3) {
            document.getElementById("demo").innerHTML = "Solution of the exercise is " + array[0] * array[1] * array[2];
        }

        else if (length > 3) {
            for (i = 0; i < length; i++) {
                for (j = i + 1; j < length; j++) {
                    for (k = j + 1; k < length; k++) {
                        result += array[i] * array[j] * array[k];
                    }
                }
            }
            document.getElementById("demo").innerHTML = "Solution of the exercise is " + result;
        }
    }
    else {
        alert("Empty value");
    }
}


