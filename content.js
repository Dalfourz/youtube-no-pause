function autoClickYesButton() {
    const button = [...document.querySelectorAll("button")].find(b =>
      b.textContent.includes("Yes") || b.getAttribute("aria-label") === "Yes"
    );
    if (button) {
      button.click();
      console.log("✅ Clicked 'Yes' button to keep playing");
    }
  }
  
  setInterval(autoClickYesButton, 30000); // Check every 30 seconds
  