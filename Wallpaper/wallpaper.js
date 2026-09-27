document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".unlock-button");

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      const product = button.dataset.product;

      console.log("Selected wallpaper:", product);

      // Payment flow will go here later

    });

  });

});