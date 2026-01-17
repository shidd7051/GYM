function openMenu() {
      document.getElementById("mobileMenu").classList.add("active");
    }

    function closeMenu() {
      document.getElementById("mobileMenu").classList.remove("active");
    }

    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
      faq.querySelector(".faq-question").addEventListener("click", () => {
        faq.classList.toggle("active");
      });
    });