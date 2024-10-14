// Resource details for each disaster
const resourceDetails = {
    earthquake: `
        <strong>Earthquake Safety</strong><br>
        - <strong>Drop, Cover, and Hold On:</strong> Drop to your knees, cover your head and neck, and hold on until the shaking stops.<br>
        - <strong>Stay Indoors:</strong> Remain inside during shaking to avoid falling debris.<br>
        - <strong>Prepare an Emergency Kit:</strong> Include essentials such as water, food, and a flashlight.<br>
    `,
    flood: `
        <strong>Flood Preparedness</strong><br>
        - <strong>Evacuation:</strong> Follow evacuation orders and move to higher ground.<br>
        - <strong>Emergency Kit:</strong> Keep essential supplies in case of flooding.<br>
        - <strong>Stay Informed:</strong> Monitor weather reports and alerts.<br>
    `,
    wildfire: `
        <strong>Wildfire Response</strong><br>
        - <strong>Evacuate Early:</strong> Leave your home as soon as evacuation orders are issued.<br>
        - <strong>Defensible Space:</strong> Clear flammable materials around your property.<br>
        - <strong>Emergency Plan:</strong> Create a family evacuation plan.<br>
    `,
    tsunami: `
        <strong>Tsunami Awareness</strong><br>
        - <strong>Move to Higher Ground:</strong> Immediately move to higher ground if you feel an earthquake.<br>
        - <strong>Stay Informed:</strong> Pay attention to tsunami alerts and warnings.<br>
    `,
    hurricane: `
        <strong>Hurricane Preparedness</strong><br>
        - <strong>Evacuate if Ordered:</strong> Follow local evacuation orders.<br>
        - <strong>Emergency Kit:</strong> Ensure your emergency kit has enough supplies for at least three days.<br>
        - <strong>Reinforce Your Home:</strong> Secure windows and doors.<br>
    `,
    cyclone: `
        <strong>Cyclone Safety</strong><br>
        - <strong>Secure Your Property:</strong> Protect windows and outdoor items from strong winds.<br>
        - <strong>Emergency Kit:</strong> Stock up on essential items before the cyclone arrives.<br>
        - <strong>Follow Evacuation Orders:</strong> Evacuate to a safe place if instructed.<br>
    `,
    landslide: `
        <strong>Landslide Safety</strong><br>
        - <strong>Avoid Steep Slopes:</strong> Stay away from areas prone to landslides.<br>
        - <strong>Evacuate Immediately:</strong> If a landslide is imminent, evacuate your home.<br>
        - <strong>Be Aware of Warning Signs:</strong> Look out for changes in landscape, cracks in ground, or leaning trees.<br>
    `,
    waterlogging: `
        <strong>Water Logging Preparedness</strong><br>
        - <strong>Clear Drains:</strong> Ensure drains are clean to prevent water accumulation.<br>
        - <strong>Stay Indoors:</strong> Avoid stepping into deep waterlogged areas.<br>
        - <strong>Emergency Kit:</strong> Have essentials ready in case of waterlogging.<br>
    `
};

// Function to handle Learn More button clicks
document.querySelectorAll('.learn__button').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        const resource = event.target.getAttribute('data-resource');
        document.getElementById('educationalDetails').innerHTML = resourceDetails[resource];
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('educationalPopup').style.display = 'block';
    });
});

// Function to close the popup
document.getElementById('closeEducationalPopup').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('educationalPopup').style.display = 'none';
});

// Close popup if overlay is clicked
document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('educationalPopup').style.display = 'none';
});

// Handle form submissions for disaster alerts
document.getElementById('flood-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('flood-location').value;
    // TODO: Replace with actual API call to fetch flood data
    document.getElementById('flood-result').innerHTML = `<p>Checking for water logging at ${location}...</p>`;
    setTimeout(() => {
        document.getElementById('flood-result').innerHTML = `<p>Data fetched successfully for ${location}!</p>`;
    }, 2000);
});

document.getElementById('earthquake-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('earthquake-location').value;
    // TODO: Replace with actual API call to fetch earthquake data
    document.getElementById('earthquake-result').innerHTML = `<p>Checking for recent earthquakes at ${location}...</p>`;
    setTimeout(() => {
        document.getElementById('earthquake-result').innerHTML = `<p>Data fetched successfully for ${location}!</p>`;
    }, 2000);
});

document.getElementById('storm-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('storm-location').value;
    // TODO: Replace with actual API call to fetch storm data
    document.getElementById('storm-result').innerHTML = `<p>Checking for storms at ${location}...</p>`;
    setTimeout(() => {
        document.getElementById('storm-result').innerHTML = `<p>Data fetched successfully for ${location}!</p>`;
    }, 2000);
});

document.getElementById('wildfire-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('wildfire-location').value;
    // TODO: Replace with actual API call to fetch wildfire data
    document.getElementById('wildfire-result').innerHTML = `<p>Checking for wildfires at ${location}...</p>`;
    setTimeout(() => {
        document.getElementById('wildfire-result').innerHTML = `<p>Data fetched successfully for ${location}!</p>`;
    }, 2000);
});

// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation (you can enhance this as needed)
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // TODO: Implement form submission logic (e.g., send data to server)
    alert(`Thank you, ${name}! Your message has been received.`);
    // Reset the form
    document.getElementById('contactForm').reset();
});
