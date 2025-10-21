// This is a test script to check if the ProfessionalExperience component can be imported
console.log("Testing ProfessionalExperience component import...");

try {
  const ProfessionalExperience = require("./components/apps/ProfessionalExperience/ProfessionalExperience").default;
  console.log("ProfessionalExperience component imported successfully!");
  console.log("Component:", ProfessionalExperience);
} catch (error) {
  console.error("Error importing ProfessionalExperience component:", error);
}