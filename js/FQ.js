  function openMenu() {
            document.getElementById("mobileMenu").classList.add("active");
        }

        function closeMenu() {
            document.getElementById("mobileMenu").classList.remove("active");
        }

        const faqItems = document.querySelectorAll(".faq-item");

        faqItems.forEach(item => {
            const question = item.querySelector(".faq-question");
            question.addEventListener("click", () => {
                faqItems.forEach(other => {
                    if (other !== item) {
                        other.classList.remove("active");
                    }
                });
                item.classList.toggle("active");
            });
        });