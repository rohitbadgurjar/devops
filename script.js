const form = document.getElementById("studentForm");
const tbody = document.querySelector("#studentTable tbody");

let students = [];

// Load data from JSON file
fetch("students.json")
.then(response => response.json())
.then(data => {
    students = data;
    displayStudents();
});

function displayStudents() {

    tbody.innerHTML = "";

    students.forEach(student => {

        let row = `
        <tr>
            <td>${student.name}</td>
            <td>${student.mobile}</td>
            <td>${student.email}</td>
            <td>${student.branch}</td>
        </tr>`;

        tbody.innerHTML += row;
    });

}

form.addEventListener("submit", function(e){

    e.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        branch: document.getElementById("branch").value
    };

    students.push(student);

    displayStudents();

    form.reset();

    alert("Student Registered Successfully!");
});