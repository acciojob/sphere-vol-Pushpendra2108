document.getElementById('MyForm').addEventListener('submit', function(event) {
    console.log("Form submitted");  // This should appear in the console when the form is submitted

    event.preventDefault(); // Prevent form submission

    var radius = parseFloat(document.getElementById('radius').value);

    if (isNaN(radius) || radius <= 0) {
        alert('Enter a positive number for the radius.');
        document.getElementById('volume').value = '';
    } else {
        var volume = (4 / 3) * Math.PI * Math.pow(radius, 3); // Simplified cube calculation
        document.getElementById('volume').value = volume.toFixed(2);
    }
});