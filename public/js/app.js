'use strict'

// Given a collection of values, return the division that was performed on each value.
let fbInput = (arr) => {
    let outputArr = []

    for (var i = 0; i < arr.length; i++) {
        // Trim any extra space around values
        var ele = arr[i].trim();

        // Check if the value is an integer
        let isnum = /^\d+$/.test(ele);

        if (isnum) {
            let val = parseInt(ele);

            if (val % 3 != 0 || val % 5 != 0) {
                if (val % 3 == 0) {
                    outputArr.push('Fizz');
                } else if (val % 5 == 0) {
                    outputArr.push('Buzz');
                } else {
                    outputArr.push('Divided ' + val + ' by 3');
                    outputArr.push('Divided ' + val + ' by 5');
                }
            } else {
                outputArr.push('FizzBuzz');
            }
        } else {
            // Value is not an integer
            outputArr.push('Invalid Item');
        }
    }

    return outputArr
};

// Runs on each button submission
$('#form').submit((e) => {
    e.preventDefault();

    // Clear the output list
    $('#output').empty();

    let input = $('input').val();

    if (input != "") {
        // Split input string by commas
        input = input.split(',');
        let output = fbInput(input);
        
        output.forEach(ele => {
            let $li = '<li class="list-group-item">' + ele + '</li>';
            $('#output').append($li);
        });
    }

});

