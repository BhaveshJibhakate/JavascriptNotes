// Simulated asynchronous functions (replace these with your actual async operations)
function fetchData1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data from Task 1');
        }, 2000);
    });
}

function fetchData2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data from Task 2');
        }, 1500);
    });
}

function fetchData3() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data from Task 3');
        }, 1000);
    });
}

// Async function to perform three asynchronous tasks sequentially
async function performAsyncTasksSequentially() {
    try {
        console.log('Start performing async tasks...');

        // Run function1, then wait for it to complete before moving to function2
        const result1 = await fetchData1();
        console.log('Result from Task 1:', result1);

        // Run function2, then wait for it to complete before moving to function3
        const result2 = await fetchData2();
        console.log('Result from Task 2:', result2);

        // Run function3
        const result3 = await fetchData3();
        console.log('Result from Task 3:', result3);

        console.log('All async tasks completed sequentially.');
    } catch (error) {
        console.error('Error performing async tasks:', error.message);
    }
}

// Calling the async function
performAsyncTasksSequentially();
