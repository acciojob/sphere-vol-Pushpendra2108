document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const radius = parseFloat(document.getElementById('radius').value);

    if (isNaN(radius) || radius <= 0) {
        alert('Enter a positive number for the radius.');
        document.getElementById('volume').value = '';
    } else {
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3); // Simplified cube calculation
        document.getElementById('volume').value = volume.toFixed(2);
    }
});

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
