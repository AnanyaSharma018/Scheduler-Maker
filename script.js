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
/*SCRIPT*/
// Select table and form elements
const facultyTable = document.getElementById('facultyTable');
const addButton = document.getElementById('addButton');
const modifyButton = document.getElementById('modifyButton');
const deleteButton = document.getElementById('deleteButton');

// Add record
addButton.addEventListener('click', () => {
const name = document.getElementById('nameInput').value;
const department = document.getElementById('departmentInput').value;
const email = document.getElementById('emailInput').value;

if (name && department && email) {
    const newRow = facultyTable.insertRow();
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = department;
    newRow.insertCell(2).innerText = email;
} else {
    alert("Please fill out all fields.");
}
});

// Modify record
modifyButton.addEventListener('click', () => {
const selectedRow = facultyTable.querySelector('.selected');
if (selectedRow) {
    const name = document.getElementById('nameInput').value;
    const department = document.getElementById('departmentInput').value;
    const email = document.getElementById('emailInput').value;
    
    if (name && department && email) {
        selectedRow.cells[0].innerText = name;
        selectedRow.cells[1].innerText = department;
        selectedRow.cells[2].innerText = email;
    } else {
        alert("Please fill out all fields.");
    }
} else {
    alert("Please select a row to modify.");
}
});

// Delete record
deleteButton.addEventListener('click', () => {
const selectedRow = facultyTable.querySelector('.selected');
if (selectedRow) {
    selectedRow.remove();
} else {
    alert("Please select a row to delete.");
}
});
//new

// Select row for modification or deletion
facultyTable.addEventListener('click', (event) => {
const rows = facultyTable.rows;
for (let i = 0; i < rows.length; i++) {
    rows[i].classList.remove('selected');
}
event.target.parentElement.classList.add('selected');
});

/*dashboard js */
document.addEventListener("DOMContentLoaded", function () {
    const notifications = [
        "Notification 1",
        "Notification 2",
        "Notification 3",
        "Notification 4"
    ];
    
    const recentChanges = [
        "Change 1",
        "Change 2",
        "Change 3",
        "Change 4"
    ];

    const notificationCenter = document.querySelector(".notification-center");
    notificationCenter.innerHTML += notifications.map(item => `<p>${item}</p>`).join("");

    const recentChangesList = document.querySelector(".recent-changes ul");
    recentChangesList.innerHTML += recentChanges.map(item => `<li>${item}</li>`).join("");
});
