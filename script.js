function volume_sphere() {
    //Write your code here
	 event.preventDefault(); // Prevent form submission

            const radius = parseFloat(document.getElementById('radius').value);

            if (radius > 0) {
                const volume = (4 / 3) * Math.PI * radius ** 3; // Simplified cube calculation
                document.getElementById('volume').value = volume.toFixed(2);
            } else {
                alert('Enter a positive number for the radius.');
            }
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
