// index.js
// Author: Vertti K
// Date: 2025-11-07
// Handles adding new course rows with day marks (✅/❌)

document.addEventListener("DOMContentLoaded", () => {
    const CHECK = '✅';
    const CROSS = '❌';

    const form = document.getElementById("addCourseForm");
    const table = document.getElementById("timetable").querySelector("tbody");
    const formTimestamp = document.getElementById("formTimestamp");
    const formName = document.getElementById("formName");
    const formEmail = document.getElementById("formEmail");
    const formPhone = document.getElementById("formPhone");
    const formBirthdate = document.getElementById("formBirthdate");
    const formTerms = document.getElementById("formTerms");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formNameVal = formName.value.trim();
        if (!formNameVal) return;

        const formEmailVal = formEmail.value.trim();
        if (!formEmailVal) return;

        const formPhoneVal = formPhone.value.trim();
        if (!formPhoneVal) return;

        const formBirthdateVal = formBirthdate.value.trim();
        if (!formBirthdateVal) return;

        const formTermsVal = formTerms.value.trim();
        if (!formTermsVal) return;

        // Create new table row
        const row = document.createElement("tr");

        const now = new Date();
        formTimestamp.value = now.toISOString();
        const timestampCell = document.createElement("td");
        timestampCell.textContent = formTimestamp.value;
        row.appendChild(timestampCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = formNameVal;
        row.appendChild(nameCell);

        const emailCell = document.createElement("td");
        emailCell.textContent = formEmailVal;
        row.appendChild(emailCell);

        const phoneCell = document.createElement("td");
        phoneCell.textContent = formPhoneVal;
        row.appendChild(phoneCell);

        const birthdateCell = document.createElement("td");
        birthdateCell.textContent = formBirthdateVal;
        row.appendChild(birthdateCell);

        const termsCell = document.createElement("td");
        termsCell.textContent = formTerms.checked ? CHECK : CROSS;
        row.appendChild(termsCell);

        table.appendChild(row);

        // Reset form and focus
        form.reset();
        formName.focus();
    });
});
