function calculateVolume() {
            var radius = parseFloat(document.getElementById('radius').value);

            if (isNaN(radius) || radius <= 0) {
                alert('Enter a positive number for the radius.');
                document.getElementById('volume').value = '';
            } else {
                var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
                document.getElementById('volume').value = volume.toFixed(2);
            }
        }