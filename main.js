const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
const projectDatabase = {
  1: {
    title: "Website Konstruksi",
    description: `Keuntungan Website Konstruksi Kami 🏗️🚀<br />
      Kami menghadirkan solusi website profesional untuk bisnis konstruksi Anda dengan berbagai keuntungan:<br />
      ✅ Gratis Domain (.com, .id, .co.id) – Pilih domain sesuai kebutuhan bisnis Anda tanpa biaya tambahan.<br />
      ✅ Gratis Maintenance 1 Tahun – Kami pastikan website Anda berjalan lancar dan optimal selama satu tahun pertama.<br />
      ✅ Biaya Maintenance Terjangkau – Hanya Rp500.000 per 3 bulan mulai tahun kedua untuk menjaga performa dan keamanan website.<br />
      ✅ Desain Modern & Responsif – Tampil lebih profesional dengan desain yang menarik dan mudah diakses di semua perangkat.<br />
      ✅ Fitur Lengkap – Mulai dari portofolio proyek, daftar layanan, kontak mudah, hingga formulir penawaran.<br />
      💡 Tingkatkan kredibilitas dan jangkauan bisnis konstruksi Anda dengan website yang siap bersaing!<br />
      Tekan tanda checklis sekarang juga !!!`,
  },
  2: {
    title: "Website Kuliner",
    description: `Keuntungan Website Kuliner Kami 🍔🚀<br />
      Kami menghadirkan solusi website profesional untuk bisnis kuliner Anda dengan berbagai keuntungan:<br />
      ✅ Gratis Domain (.com, .id, .co.id) – Pilih domain sesuai kebutuhan bisnis Anda tanpa biaya tambahan.<br />
      ✅ Gratis Maintenance 1 Tahun – Kami pastikan website Anda berjalan lancar dan optimal selama satu tahun pertama.<br />
      ✅ Biaya Maintenance Terjangkau – Hanya Rp500.000 per 3 bulan mulai tahun kedua untuk menjaga performa dan keamanan website.<br />
      ✅ Desain Modern & Responsif – Tampilan menarik dan mudah diakses di semua perangkat, baik mobile maupun desktop.<br />
      ✅ Fitur terintegrasi dengan Wa Business anda.<br />
      💡 Tingkatkan kredibilitas dan penjualan bisnis kuliner Anda dengan website yang siap bersaing!<br />
      Tekan tanda checklis sekarang juga !!! ✅
`,
  },
  3: {
    title: "Website Portofolio",
    description:
      "Menampilkan portofolio dengan desain modern, responsif, dan optimal untuk membangun personal branding.",
  },
};

function openModal(id) {
  document.getElementById("modal-title").textContent =
    projectDatabase[id].title;
  document.getElementById("modal-description").innerHTML = // Use innerHTML to render HTML content
    projectDatabase[id].description;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
