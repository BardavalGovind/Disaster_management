document.getElementById('flood-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const location = document.getElementById('flood-location').value.trim();
    const floodResultDiv = document.getElementById('flood-result');
    floodResultDiv.textContent = 'Checking flood data...';

    fetch(`/check-flood?location=${encodeURIComponent(location)}`)
        .then(response => response.json())
        .then(data => {
            if (data.isFlooded) {
                floodResultDiv.textContent = 'Warning: Water logging detected in your area!';
            } else {
                floodResultDiv.textContent = 'No water logging detected.';
            }
        })
        .catch(error => {
            floodResultDiv.textContent = 'Error checking flood data.';
            console.error('Error:', error);
        });
});

document.getElementById('earthquake-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const location = document.getElementById('earthquake-location').value.trim();
    const earthquakeResultDiv = document.getElementById('earthquake-result');
    earthquakeResultDiv.textContent = 'Checking earthquake data...';

    fetch(`/check-earthquake?location=${encodeURIComponent(location)}`)
        .then(response => response.json())
        .then(data => {
            if (data.isEarthquake) {
                earthquakeResultDiv.textContent = `Warning: Earthquake detected near ${data.location} with magnitude ${data.magnitude}.`;
            } else {
                earthquakeResultDiv.textContent = 'No significant earthquake activity detected.';
            }
        })
        .catch(error => {
            earthquakeResultDiv.textContent = 'Error checking earthquake data.';
            console.error('Error:', error);
        });
});
