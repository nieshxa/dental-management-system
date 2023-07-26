const fileInput = document.getElementById("pic");
const previewImg = document.getElementById("userImg");
const fileNameDisplay = document.getElementById("fileNameDisplay");

fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      previewImg.src = reader.result;
      previewImg.style.display = "block";
    });

    reader.readAsDataURL(file);
    // const fileName = file.name;
    // const truncatedName = `${fileName.slice(0, 3)}...${fileName.slice(-7)}`;

    // fileNameDisplay.textContent = `${truncatedName}`;

    // fileNameDisplay.style.display = "block";
  } else {
    previewImg.style.display = "none";
    // fileNameDisplay.style.display = "none";
  }
});
