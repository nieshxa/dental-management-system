document
  .getElementById("submit-health-protocols")
  .addEventListener("click", function () {
    const travelRadios = document.querySelectorAll('input[name="travel"]');
    const isTravelSelected = Array.from(travelRadios).some(
      (radio) => radio.checked
    );

    const covidRadios = document.querySelectorAll('input[name="covid"]');
    const isCovidSelected = Array.from(covidRadios).some(
      (radio) => radio.checked
    );

    const nameOfEC = document.getElementById("name-of-ec").value.trim();
    const relationshipOfEC = document
      .getElementById("relationship-of-ec")
      .value.trim();
    const phoneOfEC = document.getElementById("phone-of-ec").value.trim();

    const bodyTemperatureInput = document.querySelector(".answer.temp input");
    const bodyTemperature = bodyTemperatureInput
      ? bodyTemperatureInput.value.trim()
      : "";

    const hsConditionCheckbox = document.getElementById("hs-condition");
    const hsConditionInput = document.querySelector(".hs-condition-input");
    const hsConditionInputValue = hsConditionInput
      ? hsConditionInput.value.trim()
      : "";

    const warningContent = document.querySelector(".warning-content");

    const safetyProtocolsCheckbox = document.getElementById("safety-protocols");

    if (!isTravelSelected) {
      if (warningContent) {
        warningContent.textContent = "Recent travel history is required.";
      }
    } else if (!isCovidSelected) {
      if (warningContent) {
        warningContent.textContent =
          "Exposure to COVID-19 question is required.";
      }
    } else if (hsConditionCheckbox.checked && hsConditionInputValue === "") {
      if (warningContent) {
        warningContent.textContent = "Please specify your health condition.";
      }
    } else if (bodyTemperature === "") {
      if (warningContent) {
        warningContent.textContent =
          "Your current body temperature is required.";
      }
    } else if (!safetyProtocolsCheckbox.checked) {
      if (warningContent) {
        warningContent.textContent =
          "Complying to the safety protocols implemented by the dental clinic is required for the safety of both parties. Please consent to follow safety protocols.";
      }
    } else if (nameOfEC === "" || relationshipOfEC === "" || phoneOfEC === "") {
      if (warningContent) {
        warningContent.textContent =
          "Emergency contact information is required.";
      }
    } else {
      if (warningContent) {
        warningContent.textContent =
          "Please ensure that all details are correct before submitting.";
      }
    }

    document.querySelector(".modal").style.display = "flex";
  });

document.getElementById("modal-close").addEventListener("click", function () {
  document.querySelector(".modal").style.display = "none";
});
