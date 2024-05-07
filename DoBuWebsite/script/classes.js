document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("payment-modal");
    const paymentMethodSelect = document.getElementById("payment-method");
    const confirmationSection = document.querySelector(".confirmation-section");
    const confirmationDetailsElement = document.getElementById("confirmation-details");
    const paymentMethodElement = document.getElementById("confirmation-payment-method");
    const submitPaymentButton = document.getElementById("submit-payment");
    const calculateCostBtn = document.getElementById("calculate-cost-btn");
    const cardNumberInput = document.querySelector("#credit-card-info input[placeholder='Card Number']");
    const expirationDateInput = document.querySelector("#credit-card-info input[placeholder='Expiration Date']");
    const cvvInput = document.querySelector("#credit-card-info input[placeholder='CVV']");

    const membershipPrices = {
      Basic: 25,
      Intermediate: 35,
      Advanced: 45,
      Elite: 60,
      "Private Martial Arts": 15,
      "Junior Membership": 25,
    };

    const coursePrices = {
      "Beginner's Self - Defense": 180,
      "Fitness Room": 6,
      "Personal Fitness Training": 35,
    };

    // Calculate cost function
    calculateCostBtn.addEventListener("click", () => {
      const membership = document.getElementById("membership").value;
      const course = document.getElementById("courses").value;
      const reservationDateValue = document.getElementById("reservation-date").value;
      const membershipCostValue = membershipPrices[membership] || 0;
      const courseCostValue = coursePrices[course] || 0;
      const totalCost = membershipCostValue + courseCostValue;
      document.getElementById("membership-cost").innerHTML = `Membership Cost: $${membershipCostValue}`;
      document.getElementById("courses-cost").innerHTML = `Specialist Courses & Fitness Training: $${courseCostValue}`;
      document.getElementById("overall-cost").innerHTML = `Overall Cost: $${totalCost}`;
    });

    // Function to update the confirmation table
    const updateConfirmationTable = () => {
      const membership = document.getElementById("membership").value;
      const course = document.getElementById("courses").value;
      const reservationDateValue = document.getElementById("reservation-date").value;
      const paymentMethod = paymentMethodSelect.value;
      const membershipCostValue = membershipPrices[membership] || 0;
      const courseCostValue = coursePrices[course] || 0;
      const totalCost = membershipCostValue + courseCostValue;
      paymentMethodElement.textContent = paymentMethod;
      confirmationDetailsElement.innerHTML = `
          <div class="confirmation-row">
              <div class="confirmation-label"><strong>Membership:</strong></div>
              <div class="confirmation-result">${membership}</div>
          </div>
          <div class="confirmation-row">
              <div class="confirmation-label"><strong>Specialist Courses & Fitness Training:</strong></div>
              <div class="confirmation-result">${course}</div>
          </div>
          <div class="confirmation-row">
              <div class="confirmation-label"><strong>Date of Reservation:</strong></div>
              <div class="confirmation-result">${reservationDateValue}</div>
          </div>
          <div class="confirmation-row">
              <div class="confirmation-label"><strong>Payment Method:</strong></div>
              <div class="confirmation-result">${paymentMethod}</div>
          </div>
          <div class="confirmation-row">
              <div class="confirmation-label"><strong>Total Cost:</strong></div>
              <div class="confirmation-result">$${totalCost}</div>
          </div>
          <button id="submit-button" class="reservation-button">Submit</button>
      `;
      document.getElementById("submit-button").addEventListener("click", function () {
          alert("Your reservation has been submitted.");
      });
    };

    // Event listener for the "Submit Payment" button
    submitPaymentButton.addEventListener("click", () => {
      if (cardNumberInput.value.trim() === '' || expirationDateInput.value.trim() === '' || cvvInput.value.trim() === '') {
          alert("Please fill in all card details.");
          return;
      }

      const selectedPaymentMethod = paymentMethodSelect.value;
      switch (selectedPaymentMethod) {
          case "Credit Card":
              alert("Credit Card payment submitted.");
              updateConfirmationTable();
              confirmationSection.style.display = "block";
              document.getElementById("submit-button").style.display = "block"; 
              break;
          case "PayPal":
              
              alert("PayPal payment submitted.");
              updateConfirmationTable();
              confirmationSection.style.display = "block";
              document.getElementById("submit-button").style.display = "block"; 
              break;
          case "Bank Transfer":
          
              alert("Bank Transfer payment submitted.");
              updateConfirmationTable();
              confirmationSection.style.display = "block";
              document.getElementById("submit-button").style.display = "block"; 
              break;
          default:
              alert("Please select a valid payment method.");
      }
    });
});