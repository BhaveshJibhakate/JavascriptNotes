// Function to simulate an API request (replace this with your actual API endpoint)
function fetchDataFromApi() {
    return new Promise((resolve, reject) => {
        // Simulating a delay, replace this with your actual API request
        setTimeout(() => {
            const success = Math.random()>0.5; // Simulating success or failure
            
            if (success) {
                resolve({ data: 'API data received successfully' });
            } else {
                reject(new Error('Failed to fetch data from the API'));
            }
        }, 2000); // Simulating a 2-second delay
    });
}

// Async function to fetch and handle data from the API
async function fetchData() {
    try {
        console.log('Fetching data...');
        
        // Using await to pause execution until the promise is settled
        const result = await fetchDataFromApi();

        // This code will only execute if the promise is resolved
        console.log('Data received:', result.data);
    } catch (error) {
        // This code will execute if the promise is rejected
        console.error('Error fetching data:', error.message);
    }
}

// Calling the async function
fetchData();
