// Function to show only the selected page and hide others
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none'; // Hide every page initially
    });

    // Show the selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block'; // Display the target page
    }

    // Remove active class from all sidebar links and add to the clicked one
    document.querySelectorAll('.nav-links li').forEach(link => link.classList.remove('active'));
    const clickedLink = document.querySelector(`.nav-links li[onclick="showPage('${pageId}')"]`);
    if (clickedLink) {
        clickedLink.classList.add('active');
    }
}

// Event listener for logout button
document.querySelector('.logout-btn').addEventListener('click', function() {
    window.location.href = "index.html"; // Redirect to signup or home page
});

// Initial page load - show only the dashboard page
document.addEventListener("DOMContentLoaded", function() {
    showPage("dashboard"); // Show the dashboard as the default page
});


//SCRIPT FOR FACULTY BEGINS

function addFaculty() {
    // Get input values
    const name = document.querySelector('.faculty-form input[placeholder="John Doe"]').value;
    const subjectCode = document.querySelector('.faculty-form input[placeholder="Bca-401"]').value;
    const facultyId = document.querySelector('.faculty-form input[placeholder="101"]').value;
    const email = document.querySelector('.faculty-form input[placeholder="johndoe@gmail.com"]').value;

    // Validate inputs
    if (!name || !subjectCode || !facultyId || !email) {
        alert("Please fill out all fields before adding a record.");
        return;
    }

    // Select the faculty table body
    const facultyTableBody = document.querySelector('table tbody');

    // Create a new row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${facultyId}</td>
        <td>${subjectCode}</td>
        <td>${name}</td>
        <td>${email}</td>
    `;

    // Append the new row to the table body
    facultyTableBody.appendChild(newRow);

    // Clear the form inputs after adding the record
    document.querySelector('.faculty-form input[placeholder="John Doe"]').value = '';
    document.querySelector('.faculty-form input[placeholder="Bca-401"]').value = '';
    document.querySelector('.faculty-form input[placeholder="101"]').value = '';
    document.querySelector('.faculty-form input[placeholder="johndoe@gmail.com"]').value = '';
}

//MODIFY FACULTY RECORD

// Modify Faculty Record
function modifyFaculty() {
    // Get selected row
    const selectedRow = document.querySelector('table tbody tr.selected');

    if (selectedRow) {
        // Get input values
        const name = document.querySelector('.faculty-form input[placeholder="John Doe"]').value;
        const subjectCode = document.querySelector('.faculty-form input[placeholder="Bca-401"]').value;
        const facultyId = document.querySelector('.faculty-form input[placeholder="101"]').value;
        const email = document.querySelector('.faculty-form input[placeholder="johndoe@gmail.com"]').value;

        // Validate inputs
        if (!name || !subjectCode || !facultyId || !email) {
            alert("Please fill out all fields to modify the record.");
            return;
        }

        // Update the selected row
        selectedRow.cells[0].innerText = facultyId;
        selectedRow.cells[1].innerText = subjectCode;
        selectedRow.cells[2].innerText = name;
        selectedRow.cells[3].innerText = email;

        alert("Record modified successfully.");
    } else {
        alert("Please select a row to modify.");
    }
}

// DELETION OF FACULTY RECORD BEIGNS

function deleteFaculty() {
    // Get selected row
    const selectedRow = document.querySelector('table tbody tr.selected');

    if (selectedRow) {
        selectedRow.remove(); // Remove the selected row from the table
        alert("Record deleted successfully.");
    } else {
        alert("Please select a row to delete.");
    }
}

// Highlight selected row for modification or deletion
document.querySelector('table tbody').addEventListener('click', function (event) {
    const rows = document.querySelectorAll('table tbody tr');
    rows.forEach(row => row.classList.remove('selected')); // Remove 'selected' class from all rows
    event.target.parentElement.classList.add('selected'); // Add 'selected' class to clicked row
});


//mew modify and delete
// Add Faculty Record
function addFaculty() {
    const name = document.querySelector('.faculty-form input[placeholder="John Doe"]').value;
    const subjectCode = document.querySelector('.faculty-form input[placeholder="Bca-401"]').value;
    const facultyId = document.querySelector('.faculty-form input[placeholder="101"]').value;
    const email = document.querySelector('.faculty-form input[placeholder="johndoe@gmail.com"]').value;

    if (!name || !subjectCode || !facultyId || !email) {
        alert("Please fill out all fields to add a record.");
        return;
    }

    const tableBody = document.querySelector('table tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td><input type="checkbox" class="row-select"></td>
        <td>${facultyId}</td>
        <td>${subjectCode}</td>
        <td>${name}</td>
        <td>${email}</td>
    `;

    tableBody.appendChild(newRow);

    // Clear input fields
    document.querySelector('.faculty-form').reset();
    alert("Record added successfully.");
}

// Modify Faculty Record
function modifyFaculty() {
    const selectedRow = getSelectedRow();

    if (!selectedRow) {
        alert("Please select a row to modify.");
        return;
    }

    const name = document.querySelector('.faculty-form input[placeholder="John Doe"]').value;
    const subjectCode = document.querySelector('.faculty-form input[placeholder="Bca-401"]').value;
    const facultyId = document.querySelector('.faculty-form input[placeholder="101"]').value;
    const email = document.querySelector('.faculty-form input[placeholder="johndoe@gmail.com"]').value;

    if (!name || !subjectCode || !facultyId || !email) {
        alert("Please fill out all fields to modify the record.");
        return;
    }

    // Update selected row's data
    selectedRow.cells[1].innerText = facultyId;
    selectedRow.cells[2].innerText = subjectCode;
    selectedRow.cells[3].innerText = name;
    selectedRow.cells[4].innerText = email;

    alert("Record modified successfully.");
}

// Delete Faculty Record
function deleteFaculty() {
    const selectedRow = getSelectedRow();

    if (!selectedRow) {
        alert("Please select a row to delete.");
        return;
    }

    selectedRow.remove();
    alert("Record deleted successfully.");
}

// Get the selected row based on the checked checkbox
function getSelectedRow() {
    const checkboxes = document.querySelectorAll('.row-select');
    let selectedRow = null;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedRow = checkbox.parentElement.parentElement; // Get the <tr> element
        }
    });

    return selectedRow;
}


/*subjects */
// Data for courses and semesters
const courseData = {
    BCA: {
        "Semester 1": [
   
            { code: "BCA-101", name: "Mathematics I" },
            { code: "BCA-102", name: "Programming principles and algorithm" },
            { code: "BCA-103", name: "Computer fundamentals and office automation" },
            { code: "BCA-104", name: "Principles of Management" },
            { code: "BCA-105", name: "CFOA(Practical)" },
            { code: "BCA-106", name: "Business Communication" },
            { code: "BCA-107", name: "PPA(Practical)" },
            { code: "BCA-108", name: "Environmental Studies" },
        ],
        "Semester 2": [
            
            { code: "BCA-201", name: "Mathematics II" },
            { code: "BCA-202", name: "C Programming" },
            { code: "BCA-203", name: "Organization Behavior" },
            { code: "BCA-204", name: "Digital Electronics and Computer Organisation" },
            { code: "BCA-205", name: "Financial Accounting and Management" },
            { code: "BCA-206", name: "Computer Laboratory and Practical Work of C" },
            
            
        ],
        "Semester 3": [
            
            { code: "BCA-301", name: "Object Oriented Programming Using C++" },
            { code: "BCA-302", name: "Data Structure Using C & C++" },
            { code: "BCA-303", name: "Computer Architecture & Assembly Language" },
            { code: "BCA-304", name: "Business Economics" },
            { code: "BCA-305", name: "Elements of Statistics" },
            { code: "BCA-306", name: "Computer Laboratory and Practical Work of OOPS" },
            { code: "BCA-307", name: "Computer Laboratory and Practical Work of DS" },
            
            
        ],
        "Semester 4": [
            
            { code: "BCA-401", name: "Computer Graphics & Multimedia Application" },
            { code: "BCA-402", name: "Operating System" },
            { code: "BCA-403", name: "Software Engineering" },
            { code: "BCA-404", name: "Optimization Techniques" },
            { code: "BCA-405", name: "Practical Based on Subject Code-401." },
            { code: "BCA-406", name: "Mathematics-III" },
            
            
        ],
        "Semester 5": [
            
            { code: "BCA-501", name: "Introduction to DBMS" },
            { code: "BCA-502", name: "Java Programming and Dynamic Webpage Design" },
            { code: "BCA-503", name: "Computer Network" },
            { code: "BCA-504", name: "Numerical Methods" },
            { code: "BCA-505", name: "Computer Laboratory and Practical Work of DBMS" },
            { code: "BCA-506", name: "Computer Laboratory and Practical Work ofJava Programming & Dynamic Webpage Design" },
            { code: "BCA-507", name: "Viva-Voice on Summer Training" },
            { code: "BCA-508", name: "Minor Project" },
            
            
        ],
        "Semester 6": [
            
            { code: "BCA-601", name: "Computer Network Security" },
            { code: "BCA-602", name: "Information System: Analysis Design & Implementation" },
            { code: "BCA-603", name: "E-Commerce" },
            { code: "BCA-604", name: "Knowledge Management" },
            { code: "BCA-605", name: "Major Project" },
            { code: "BCA-606", name: "Presentation/Seminar based on Major Project" },
            
            
        ],

    },
    BBA: {
        "Semester 1": [
            { code: "BBA-101", name: ":Fundamentals of Management " },
            { code: "BBA-102", name: "OrganizationalBehavior" },
            { code: "BBA-103", name: "Managerial Economics" },
            { code: "BBA-104", name: "Accounting and Financial Analysis" },
            { code: "BBA-105", name: "Business Law   " },
            { code: "BBA-106", name: "BusinessOrganization and Ethics     " },
            { code: "BBA-008", name: "Environmental Studies (Qualifying paper)   " },
        ],
        "Semester 2": [
            { code: "BBA-201", name: "Quantitative Techniques for Business" },
            { code: "BBA-202", name: "Business Communication " },
            { code: "BBA-203", name: "Human Resource Management " },
            { code: "BBA-204", name: "Marketing Management  " },
            { code: "BBA-205", name: "Business Environment  " },
            { code: "BBA-206", name: "Fundamentals of Computer " },
            { code: "BBA-207", name: "Assessments on Soft Skill Based on Presentations/ G.D/ Personality traits " },
        ],
        "Semester 3": [
            { code: "BBA-301", name: "Advertising Management  " },
            { code: "BBA-302", name: ":Team Building & Leadership  " },
            { code: "BBA-303", name: "Indian Economy  " },
            { code: "BBA-304", name: "Customer Relationship Management   " },
            { code: "BBA-305", name: "Management Information System    " },
            { code: "BBA-306", name: "Income Tax Law & practice  " },
           
        ],
        "Semester 4": [
            { code: "BBA-401", name: "ConsumerBehavior  " },
            { code: "BBA-402", name: "Financial Management  " },
            { code: "BBA-403", name: "Production& Operation Management    " },
            { code: "BBA-404", name: "Sales& Distribution  Management   " },
            { code: "BBA-405", name: "Research Methodology   " },
            { code: "BBA-406", name: "Entrepreneurship & Small Business Management" },
            { code: "BBA-407", name: "Computer Oriented Practical &Viva- Voce  " },
        ],
        "Semester 5": [
            { code: "BBA-501", name: "Arithmetic Aptitude" },
            { code: "BBA-502", name: "Aptitude Reasoning  " },
            { code: "BBA-503", name: "General Business Awareness  " },
            { code: "BBA-504", name: "General English   " },
            { code: "BBA-505", name: "Elective Paper   M-1/ F-1   " },
            { code: "BBA-506", name: "Elective Paper   M-2 / F-2   " },
            { code: "BBA-507", name: "Summer Training Project Report based Viva- Voce  " },
        ],
        "Semester 6": [
            { code: "BBA-601", name: "Strategic Management & Business Policy  " },
            { code: "BBA-602", name: "Operation Research" },
            { code: "BBA-603", name: "Fundamentals of E Commerce " },
            { code: "BBA-604", name: "Economic and Industrial Law   " },
            { code: "BBA-605", name: "Elective Paper   M-3/ F-3    " },
            { code: "BBA-606", name: "Elective Paper   M-4/ F-4   " },
            { code: "BBA-607", name: "Comprehensive Viva-Voce  " },
        ],
    },
    // Add other courses here...
};

// Update subject table based on course and semester selection
function updateTable() {
    const courseSelect = document.getElementById("course-select").value;
    const semesterSelect = document.getElementById("semester-select").value;
    const tableBody = document.querySelector(".subject-table tbody");

    // Clear the table body
    tableBody.innerHTML = "";

    // Get the data for the selected course and semester
    const subjects = courseData[courseSelect]?.[semesterSelect] || [];

    // Populate the table with the subjects
    if (subjects.length === 0) {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="2" style="text-align: center;">No subjects available for the selected course and semester.</td>`;
        tableBody.appendChild(row);
        return;
    }

    subjects.forEach((subject) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${subject.code}</td><td>${subject.name}</td>`;
        tableBody.appendChild(row);
    });
}

// Save changes and update timetable
function saveChanges() {
    const courseSelect = document.getElementById("course-select").value;
    const semesterSelect = document.getElementById("semester-select").value;
    const tableBody = document.querySelector(".subject-table tbody");
    const timetableContainer = document.getElementById("timetable-container");

    const updatedSubjects = [];
    tableBody.querySelectorAll("tr").forEach((row) => {
        const columns = row.querySelectorAll("td");
        if (columns.length === 2) {
            const subjectCode = columns[0].textContent.trim();
            const subjectName = columns[1].textContent.trim();
            updatedSubjects.push({ code: subjectCode, name: subjectName });
        }
    });

    // Save the updated data back to courseData
    if (!courseData[courseSelect]) {
        courseData[courseSelect] = {};
    }
    courseData[courseSelect][semesterSelect] = updatedSubjects;

    // Update timetable dynamically
    timetableContainer.innerHTML = ""; // Clear the timetable container

    if (updatedSubjects.length === 0) {
        timetableContainer.innerHTML = `<p>No subjects available for ${courseSelect} - ${semesterSelect}.</p>`;
    } else {
        updatedSubjects.forEach((subject) => {
            const subjectDiv = document.createElement("div");
            subjectDiv.className = "timetable-subject";
            subjectDiv.innerHTML = `<strong>${subject.code}</strong>: ${subject.name}`;
            timetableContainer.appendChild(subjectDiv);
        });
    }

    // Display success message
    alert(`Changes for ${courseSelect} - ${semesterSelect} saved successfully and timetable updated!`);
}

// Add event listeners to dropdowns
document.getElementById("course-select").addEventListener("change", updateTable);
document.getElementById("semester-select").addEventListener("change", updateTable);

// Add event listener to save button
document.querySelector(".subject-save-btn button").addEventListener("click", saveChanges);

// Initial population of the table
updateTable();

//ROOM NUMBER JS BEGINS

// Function to add a new row
function addRoom() {
    const roomNumberInput = document.getElementById("roomNumber").value.trim();
    const classNameSelect = document.getElementById("className").value;
    const coordinatorNameSelect = document.getElementById("coordinatorName").value;

    if (!roomNumberInput || classNameSelect === "Select Class" || coordinatorNameSelect === "Select Coordinator") {
        alert("Please fill out all fields to add a room.");
        return;
    }

    const tableBody = document.querySelector(".table-container tbody");

    // Create a new row
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${roomNumberInput}</td>
        <td>${classNameSelect}</td>
        <td>${coordinatorNameSelect}</td>
        <td><input type="checkbox" class="select-row"></td>
    `;
    tableBody.appendChild(newRow);

    // Clear inputs after adding
    document.getElementById("roomNumber").value = "";
    document.getElementById("className").value = "Select Class";
    document.getElementById("coordinatorName").value = "Select Coordinator";
}

// Function to update a selected row
function updateRoom() {
    const tableBody = document.querySelector(".table-container tbody");
    const selectedRow = tableBody.querySelector(".select-row:checked");

    if (!selectedRow) {
        alert("Please select a row to update.");
        return;
    }

    const roomNumberInput = document.getElementById("roomNumber").value.trim();
    const classNameSelect = document.getElementById("className").value;
    const coordinatorNameSelect = document.getElementById("coordinatorName").value;

    if (!roomNumberInput || classNameSelect === "Select Class" || coordinatorNameSelect === "Select Coordinator") {
        alert("Please fill out all fields to update the row.");
        return;
    }

    // Update the selected row
    const row = selectedRow.parentElement.parentElement;
    row.children[0].textContent = roomNumberInput;
    row.children[1].textContent = classNameSelect;
    row.children[2].textContent = coordinatorNameSelect;

    // Clear inputs after updating
    document.getElementById("roomNumber").value = "";
    document.getElementById("className").value = "Select Class";
    document.getElementById("coordinatorName").value = "Select Coordinator";
}

// Function to delete selected rows
function deleteRoom() {
    const tableBody = document.querySelector(".table-container tbody");
    const selectedRows = tableBody.querySelectorAll(".select-row:checked");

    if (selectedRows.length === 0) {
        alert("Please select at least one row to delete.");
        return;
    }

    selectedRows.forEach((checkbox) => {
        const row = checkbox.parentElement.parentElement;
        tableBody.removeChild(row);
    });
}

// Save functionality (can be extended to save data to a database or file)
function saveRooms() {
    const tableBody = document.querySelector(".table-container tbody");
    const rows = tableBody.querySelectorAll("tr");
    const roomData = [];

    rows.forEach((row) => {
        const roomNumber = row.children[0].textContent.trim();
        const className = row.children[1].textContent.trim();
        const coordinatorName = row.children[2].textContent.trim();
        roomData.push({ roomNumber, className, coordinatorName });
    });

    console.log("Saved Room Data:", roomData);
    alert("Room data saved successfully!");
}

// Add event listeners to buttons
document.querySelector(".add-btn").addEventListener("click", addRoom);
document.querySelector(".update-btn").addEventListener("click", updateRoom);
document.querySelector(".delete-btn").addEventListener("click", deleteRoom);
document.querySelector(".save-btn").addEventListener("click", saveRooms);

