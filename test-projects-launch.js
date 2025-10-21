// This is a test script to check if the Projects app can be launched
const { useProcesses } = require("./contexts/process");

console.log("Testing Projects app launch...");

// Try to access the process directory
const processDir = require("./contexts/process/directory.ts");

console.log("Process directory loaded");
console.log("Projects app exists:", !!processDir.default.Projects);

// Try to launch the Projects app
const { default: processes } = useProcesses();
processes.open("Projects");