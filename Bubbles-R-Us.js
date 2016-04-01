//Created by Evan on 4/1/2016.


    var scores = [60, 50, 60, 58, 54, 54,
                    58, 50, 52, 54, 48, 69,
                    34, 55, 51, 52, 44, 51,
                    69, 64, 66, 55, 52, 61,
                    46, 31, 57, 52, 44, 18,
                    41, 53, 55, 61, 51, 44];

    function report() {
        var x = 0;
        var y = -1;
        var z = 0;
            while (x < scores.length) {
                var pullNumber = scores[x];
                x = x + 1;
            }
            while (y <= scores.length); {
                y = y + 1;
            }
            while (z <= scores.length) {
                console.log("Bubble solution #" + y + " score: " + pullNumber);
                z = z + 1;
            }
        }
report();