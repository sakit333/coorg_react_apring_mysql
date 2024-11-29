#!/bin/bash

echo "Building React frontend..."

# Check for Node.js and npm
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed or not in PATH."
    exit 1
fi

# Check if `node_modules` exists
if [ -d "node_modules" ]; then
    echo "Dependencies already installed, skipping npm install..."
else
    echo "Installing dependencies..."
    npm install || { echo "npm install failed"; exit 1; }
fi

# Build the React app
echo "Building the React application..."
npm run build || { echo "Build failed"; exit 1; }

echo "React frontend build completed successfully."
