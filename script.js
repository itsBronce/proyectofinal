const links = [
      { name: "Calendario Académico", url: "https://itsbronce.github.io/web/" },
      { name: "102 Etiquetas HTML", url: "https://itsbronce.github.io/102etiquetas" },
      { name: "NOHESI", url: "https://itsbronce.github.io/nohesi" },
      { name: "Trapstars", url: "https://itsbronce.github.io/trapstars" },
      { name: "Validación de Cédula", url: "https://itsbronce.github.io/cedula" },
      { name: "Gráficos", url: "https://itsbronce.github.io/graficos" },
      { name: "Formulario", url: "https://itsbronce.github.io/formulario" },
      { name: "Código QR", url: "https://itsbronce.github.io/qr" }
    ];
  
    const menuLinks = document.querySelector(".menu-links ul");
    links.forEach(link => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.name;
      li.appendChild(a);
      menuLinks.appendChild(li);
    });
  
    const menuToggle = document.querySelector(".menu-toggle");
    menuToggle.addEventListener("click", () => {
      document.querySelector(".menu-links").classList.toggle("active");
    });
