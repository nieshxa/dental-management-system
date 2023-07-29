// Function to generate PDF for a specific row
function generatePDF(row) {
  const printableDiv = document.getElementById("printable-view");
  printableDiv.style.display = "flex";
  const medName = row.querySelector("[data-title='Medication']").innerText;
  const dosage = row.querySelector("[data-title='Dosage']").innerText;
  const type = row.querySelector("[data-title='Form']").innerText;
  const quantity = row.querySelector("[data-title='Quantity']").innerText;

  const medNameSpan = printableDiv.querySelector(".med-name");
  const dosageSpan = printableDiv.querySelector(".dosage");
  const typeSpan = printableDiv.querySelector(".type");
  const quantitySpan = printableDiv.querySelector(".quantity");

  medNameSpan.innerText = medName;
  dosageSpan.innerText = dosage;
  typeSpan.innerText = type;
  quantitySpan.innerText = quantity;

  // Create PDF from the printable div and save it
  const opt = {
    margin: 0,
    filename: "prescription.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: [6, 7.5], orientation: "portrait" },
  };

  html2pdf().from(printableDiv).set(opt).save();
}

// Function to handle button click
function printRow(button) {
  const row = button.closest("tr");
  generatePDF(row);
}
// document.addEventListener("DOMContentLoaded", function () {
//   const closeBtn = document.querySelector(".close");
//   const printableView = document.querySelector(".printable-view");

//   closeBtn.addEventListener("click", function () {
//     // Add the 'hide' class to the printable view
//     printableView.classList.add("hide");
//   });
// });
