// This is a test script to check if the Projects component can be imported
console.log("Testing Projects component import...");

// Try to import the Projects component
import("./components/apps/Projects/Projects.tsx")
  .then((module) => {
    console.log("Projects component imported successfully!");
    console.log("Module:", Object.keys(module));
  })
  .catch((error) => {
    console.error("Failed to import Projects component:", error);
  });