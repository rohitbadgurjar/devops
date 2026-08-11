const fs = require('fs');

let passed = true;

console.log("Registration testing");

if (fs.existsSync("index.html")) {
    console.log("TC-01: index.html file exists");
} else {
    console.log("TC-01: index.html file does not exist");
    passed = false;
}

if (fs.existsSync("style.css")) {
    console.log("TC-02: style.css file exists");
} else {
    console.log("TC-02: style.css file does not exist");
    passed = false;
}

if (fs.existsSync("script.js")) {
    console.log("TC-03: script.js file exists");
} else {
    console.log("TC-03: script.js file does not exist");
    passed = false;
}

if (fs.existsSync("student.json")) {
    console.log("TC-04: student.json file exists");
} else {
    console.log("TC-04: student.json file does not exist");
    passed = false;
}

let student;

try {
    const data = fs.readFileSync("student.json", "utf8");
    student = JSON.parse(data);
    console.log("Student data loaded successfully");
} catch (error) {
    console.log("Error reading student.json");
    passed = false;
}

if (student) {

  
    if (student.name && student.name.trim() !== "") {
        console.log("TC-05: Name Validation PASS");
    } else {
        console.log("TC-05: Name Validation FAIL");
        passed = false;
    }

    
    if (student.email && student.email.includes("@")) {
        console.log("TC-06: Email Validation PASS");
    } else {
        console.log("TC-06: Email Validation FAIL");
        passed = false;
    }

    if (student.mobile && student.mobile.toString().length === 10) {
        console.log("TC-07: Mobile Validation PASS");
    } else {
        console.log("TC-07: Mobile Validation FAIL");
        passed = false;
    }

    if (student.branch && student.branch.trim() !== "") {
        console.log("TC-08: Branch Validation PASS");
    } else {
        console.log("TC-08: Branch Validation FAIL");
        passed = false;
    }

if (student.password && student.password.length >= 6) {
        console.log("TC-09: Password Validation PASS");
    } else {
        console.log("TC-09: Password Validation FAIL");
        passed = false;
    }
}

if (passed) {
    console.log("TC-10: Registration SUCCESS");
    process.exit(0);
} else {
    console.log("TC-10: Registration FAILED");
    process.exit(1);
}