document.addEventListener("DOMContentLoaded", () => {
  const colorCircles = document.querySelectorAll(".color-circle");
  const umbrellaImage = document.getElementById("umbrella");
  const logoUpload = document.getElementById("logo-upload");
  const logoPreview = document.getElementById("logo-preview");

  const umbrellaColors = {
    blue: "images/umbrella-blue.png",
    pink: "images/umbrella-pink.png",
    yellow: "images/umbrella-yellow.png",
  };

  const backgroundColors = {
    blue: "#EAF6FF",
    pink: "#FFEAF6",
    yellow: "#FFFAEA",
  };

  colorCircles.forEach((circle) => {
    circle.addEventListener("click", (event) => {
      const color = event.target.getAttribute("data-color");
      umbrellaImage.src = umbrellaColors[color];
      document.body.style.backgroundColor = backgroundColors[color];
    });
  });

  logoUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      // 5MB size limit
      const reader = new FileReader();
      reader.onload = (e) => {
        logoPreview.src = e.target.result;
        logoPreview.classList.remove("hidden");
      };
      reader.readAsDataURL(file);
    } else {
      alert("File size exceeds 5MB or invalid file type.");
    }
  });
});
