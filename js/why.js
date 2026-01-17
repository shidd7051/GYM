      function openMenu() {
            document.getElementById("mobileMenu").classList.add("active");
        }

        function closeMenu() {
            document.getElementById("mobileMenu").classList.remove("active");
        }

        const openBtn =document.getElementById("openVideo");
         const popup =document.getElementById("videoPopup");
          const closeBtn=document.getElementById("closevideo");

          openBtn.onclick = () =>{
            popup.style.display ="flex";
          }

          closeBtn.onclick = () =>{
            popup.style.display = "none"
          }