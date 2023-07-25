function printRow(button) {
  var row = button.parentNode.parentNode;
  var medicationName = row.cells[0].innerText;
  var type = row.cells[1].innerText;
  var dosage = row.cells[2].innerText;
  var quantity = row.cells[3].innerText; 

  var printableRow = document.querySelector("#printable-view .printable-row");
  printableRow.querySelector(".med-name").innerText = medicationName;
  printableRow.querySelector(".dosage").innerText = dosage;
  printableRow.querySelector(".quantity").innerText = quantity;
  printableRow.querySelector(".type").innerText = type;

  // Print the row content using window.print()
  var printableView = document.querySelector("#printable-view").innerHTML;
  var originalBody = document.body.innerHTML;
  document.body.innerHTML = printableView;
  window.print();
  document.body.innerHTML = originalBody;
}
