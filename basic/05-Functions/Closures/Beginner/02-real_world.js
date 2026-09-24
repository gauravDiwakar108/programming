// Create a createLoginManager() function for a login system.

// It should return an object with:

// login() → increments the failed-attempt counter.
// getAttempts() → returns the current number of failed attempts.
// reset() → resets the counter to 0.

// The failedAttempts variable must remain private and inaccessible directly from outside the function.

const createLoginManager = () => {
    let failedAttempts = 0;
    return {
        login() {
            failedAttempts++;
        },
        getAttempts() {
            return failedAttempts;
        },
        reset() {
            failedAttempts = 0;
        }
    };
};