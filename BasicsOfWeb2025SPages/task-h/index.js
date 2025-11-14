// index.js
// Author: Vertti K
// Date: 2025-11-14
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

        row.innerHTML = `
          <td class="p-2.5 px-3 border-b border-[#d0d7e2]">${formTimestamp.value}</td>
          <td class="p-2.5 px-3 border-b border-[#d0d7e2] text-center">${formNameVal}</td>
          <td class="p-2.5 px-3 border-b border-[#d0d7e2] text-center">${formEmailVal}</td>
          <td class="p-2.5 px-3 border-b border-[#d0d7e2] text-center">${formPhoneVal}</td>
          <td class="p-2.5 px-3 border-b border-[#d0d7e2] text-center">${formBirthdateVal}</td>
          <td class="p-2.5 px-3 border-b border-[#d0d7e2] text-center">
            ${formTerms.checked ? CHECK : CROSS}
          </td>`

        table.appendChild(row);

        // Reset form and focus
        form.reset();
        formName.focus();
    });
});
