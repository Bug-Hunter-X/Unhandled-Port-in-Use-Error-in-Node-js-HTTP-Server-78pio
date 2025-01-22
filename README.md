# Node.js Unhandled Port in Use Error

This repository demonstrates a common error in Node.js HTTP servers: the lack of graceful handling when the specified port is already in use.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The original code creates an HTTP server but doesn't include error handling for the `EADDRINUSE` error (address already in use). This can lead to silent failures or crashes, making debugging difficult.

## Solution

The solution uses the `'error'` event listener on the server object to capture and handle the port in use error.  This allows for more informative error messages and prevents unexpected behavior.

## How to Run

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `node bug.js` (This will likely fail if port 8080 is occupied).
4. Run `node bugSolution.js` (This will handle the port in use error gracefully).
