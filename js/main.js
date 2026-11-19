(function(){
  const config = window.HABITORA_CONFIG || {};
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if(menuButton && nav){
    menuButton.addEventListener("click",()=>{
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
      nav.classList.remove("open"); menuButton.setAttribute("aria-expanded","false");
    }));
  }
  const year = document.getElementById("year");
  if(year) year.textContent = new Date().getFullYear();

  document.querySelectorAll(".checkout-link").forEach(link=>{
    const url = config.checkoutUrl || "";
    if(url && !url.includes("YOUR_")){
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "contact.html";
      link.removeAttribute("target");
      link.addEventListener("click",e=>{
        e.preventDefault();
        alert("The SuperProfile checkout link has not been added yet. Please check back soon.");
      });
    }
  });

  document.querySelectorAll("[data-social]").forEach(link=>{
    const key = link.getAttribute("data-social");
    const url = config.socials && config.socials[key];
    if(url && !url.includes("YOUR_")) link.href = url;
    else {
      link.href = "contact.html";
      link.addEventListener("click",e=>{e.preventDefault();alert("This social media link will be added soon.");});
    }
  });

  document.querySelectorAll("[data-email]").forEach(el=>{
    const email = config.supportEmail || "";
    if(email && !email.includes("YOUR_")){
      el.textContent = email;
      el.href = "mailto:" + email;
    } else {
      el.textContent = "Support email coming soon";
      el.removeAttribute("href");
    }
  });
})();