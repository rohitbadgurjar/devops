const fs = require('fs');
let passed = true;

console.log("Registration testing");

// TC-01: Check HTML file exists
if (fs.existsSync("index.html")) {
    console.log("index.html file exists");
} else {
    console.log("index.html file does not exist");
    passed = false;
}

// TC-02: Check CSS file exists
if (fs.existsSync("style.css")) {
    console.log("style.css file exists");
} else {
    console.log("style.css file does not exist");
    passed = false;
}

// TC-03: Check JS file exists
if (fs.existsSync("script.js")) {
    console.log("script.js file exists");
} else {
    console.log("script.js file does not exist");
    passed = false;
}
<<<<<<< HEAD
if(fs.existsSync("data/students.json")) {
    console.log("TC-04 : students.json exists:PASS");
 }
else{
console.log("TC-04 : students.json exists:FAIL");
passed=false;
}
const students = JSON.parse(
    fs.readFileSync("data/students.json")
);
const student=student[0];
if(student.email.includes("@")) {
    console.log("TC-06 : Email Validation:PASS");
 }
else{
console.log("TC-06 : Email Validation:FAIL");
passed=false;
}
if(student.mobile.includes("@")) {
    console.log("TC-07 : Mobile Validation:PASS");
 }
else{
console.log("TC-07 : Mobile Validation:FAIL");
passed=false;
}
if(student.branch!==""){
    console.log("TC-08 : Branch Validation:PASS");
 }
else{
console.log("TC-08 : Branch Validation:FAIL");
passed=false;
}
if(student.password.length>=6){
    console.log("TC-09 : Password Validation:PASS");
 }
else{
console.log("TC-09 : Password Validation:FAIL");
passed=false;
}
if(passed){
    console.log("TC-10: Registration Successful:PASS");
    console.log("\nBuild SUCCESS");
   process.exit(0);
 }
else{
console.log("TC-10 : Registration Successful:FAIL");
console.log("\nBuild FAILED");
process.exit(1);
=======

// TC-04: Check student file exists & Load JSON Data
let student = null;

if (fs.existsSync("student.json")) {
    console.log("student.json file exists");
    try {
        const rawData = fs.readFileSync("student.json", "utf8");
        const parsedData = JSON.parse(rawData);
        
        // If student.json contains an array, pick the first object
        student = Array.isArray(parsedData) ? parsedData[0] : parsedData;
    } catch (err) {
        console.log("Error reading or parsing student.json");
        passed = false;
    }
} else {
    console.log("student.json file does not exist");
    passed = false;
}

// Perform property checks only if student data loaded successfully
if (student) {
    // TC-05: Name validation
    if (student.name && student.name.trim() !== "") {
        console.log("Name Validation pass");
    } else {
        console.log("Name Validation fail");
        passed = false;
    }

    // TC-06: Email validation
    if (student.email && student.email.includes("@")) {
        console.log("Email Validation pass");
    } else {
        console.log("Email Validation fail");
        passed = false;
    }

    // TC-07: Mobile / Phone validation (supports either property name)
    const phone = student.phone || student.mobile;
    if (phone && String(phone).length === 10) {
        console.log("Mobile Validation pass");
    } else {
        console.log("Mobile Validation fail");
        passed = false;
    }

    // TC-08: Branch validation
    if (student.branch && student.branch.trim() !== "") {
        console.log("Branch Validation pass");
    } else {
        console.log("Branch Validation fail");
        passed = false;
    }

    // TC-09: Password validation
    if (student.password && student.password.length >= 6) {
        console.log("Password Validation pass");
    } else {
        console.log("Password Validation fail");
        passed = false;
    }
} else {
    console.log("Skipping field validations due to missing/invalid student.json");
    passed = false;
}

// TC-10: Registration status
if (passed) {
    console.log("Registration success");
} else {
    console.log("Registration failed");
>>>>>>> fc27893 (Update student registration form)
}