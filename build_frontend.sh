#!/bin/bash

# Build React frontend with conditional dependency installation

# Check if node_modules directory exists
if [ -d "node_modules" ]; then
    echo "Dependencies are already installed, skipping npm install..."
else
    echo "Installing dependencies..."
    npm install
fi

echo "Building React application..."
npm run build

# Reinstall dependencies if necessary
if [ -d "node_modules" ]; then
    echo "Reinstalling dependencies..."
    npm i
else
    echo "node_modules not found, skipping npm i..."
fi
