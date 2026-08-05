const fs = require("fs");
let passed = true;
console.log("Registration Test\n")

if(fs.existsSync("regform.html")) {
   console.log("TC-01 : regform.html exists:PASS");
}
else{
        console.log("TC-01 : regform.html exists:FAIL");
        passed=false;
     }
if(fs.existsSync("css/style.css")) {
        console.log("TC-02 :style.css exists:PASS");
     }
else{
    console.log("TC-02 : style.css exists:FAIL");
    passed=false;
}
if(fs.existsSync("script.js")) {
    console.log("TC-03 :script.jss exists:PASS");
 }
else{
console.log("TC-03 : script.js exists:FAIL");
passed=false;
}
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
}