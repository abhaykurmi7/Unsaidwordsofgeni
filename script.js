/* =========================
   WORDSOFGENI
   VANILLA JAVASCRIPT
========================= */

/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 700);
});

/* =========================
   HEADER ON SCROLL
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.12,
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

/* =========================
   MOBILE MENU
========================= */

const menuButton = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const mobileShop = document.querySelector(".mobile-shop");
const mobileShopTrigger = document.querySelector(".mobile-shop-trigger");

menuButton.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");

  menuButton.classList.toggle("active", isOpen);

  menuButton.setAttribute("aria-expanded", isOpen);

  document.body.classList.toggle("menu-open", isOpen);
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");

    menuButton.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");

    document.body.classList.remove("menu-open");
  });
});

if (mobileShop && mobileShopTrigger) {

    mobileShopTrigger.addEventListener("click", () => {
        mobileShop.classList.toggle("open");
    });

}
/* =========================
   SMOOTH INTERNAL LINKS
========================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (targetId === "#" || !targetId) {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

/* =========================
   MAGNETIC BUTTON
========================= */

const magneticElements = document.querySelectorAll(".circle-btn, .button");

magneticElements.forEach((element) => {
  element.addEventListener("mousemove", (event) => {
    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;

    const y = event.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "";
  });
});

/* =========================
   PARALLAX MOON
========================= */

const moon = document.querySelector(".hero-orbit");

window.addEventListener("mousemove", (event) => {
  if (!moon) return;
  const x = event.clientX / window.innerWidth - 0.5;

  const y = event.clientY / window.innerHeight - 0.5;

  moon.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
});

/* =========================
   CURRENT YEAR
========================= */

document.querySelector("#year").textContent = new Date().getFullYear();

/* =========================
   CUSTOM POEM → INSTAGRAM DM
========================= */

const requestForm = document.querySelector(".request-form");

if (requestForm) {
  requestForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = requestForm.querySelector('input[type="text"]').value.trim();

  const email = requestForm.querySelector('input[type="email"]').value.trim();

  const forWho = requestForm
    .querySelectorAll('input[type="text"]')[1]
    .value.trim();

  const story = requestForm.querySelector("textarea").value.trim();

  const selects = requestForm.querySelectorAll("select");

  const mood = selects[0].value;
  const length = selects[1].value;

  const message = `
Hi Geni,

I'd like to request a custom poem.

Name: ${name}

Email: ${email}

This poem is for:
${forWho}

Mood: ${mood}

Length: ${length}

My story:
${story}

Thank you 🤍
`.trim();

  try {
    await navigator.clipboard.writeText(message);
  } catch (error) {
    console.log("Clipboard permission unavailable.");
  }

  window.open("https://www.instagram.com/direct/new/", "_blank");
});
}