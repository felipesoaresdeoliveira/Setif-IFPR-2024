const siteData = window.SETIF_DATA || { event: {}, program: [] };
const eventConfig = siteData.event || {};
const programItems = siteData.program || [];

const statTargets = {
  experiencias: programItems.length,
  palestras: programItems.filter((item) => item.type === "palestra").length,
  minicursos: programItems.filter((item) => item.type === "minicurso").length
};

const monthIndex = Math.max((eventConfig.month || 10) - 1, 0);
const editionDay = eventConfig.day || 17;
const editionHour = eventConfig.hour || 8;
const editionMinute = eventConfig.minute || 0;

const programGrid = document.querySelector("#program-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const countdownMessage = document.querySelector("#countdown-message");
const heroDateLabel = document.querySelector("#hero-date-label");
const brandEditionLabel = document.querySelector("#brand-edition-label");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const aboutModal = document.querySelector("#about-modal");

function pad(value) {
  return String(value).padStart(2, "0");
}

function getNextEditionDate() {
  const now = new Date();
  let target = new Date(now.getFullYear(), monthIndex, editionDay, editionHour, editionMinute, 0);

  if (target <= now) {
    target = new Date(now.getFullYear() + 1, monthIndex, editionDay, editionHour, editionMinute, 0);
  }

  return target;
}

function formatDayMonth(date) {
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit"
  });
}

function getItemDate(item) {
  const editionDate = getNextEditionDate();
  const itemDate = new Date(editionDate);
  itemDate.setDate(editionDate.getDate() + (item.dayOffset || 0));
  return itemDate;
}

function renderProgram(filter = "todos") {
  if (!programGrid) return;

  const visibleItems = programItems.filter((item) => filter === "todos" || item.type === filter);

  programGrid.innerHTML = visibleItems
    .map((item) => {
      const label = item.type === "palestra" ? "Palestra" : "Minicurso";
      const itemDate = getItemDate(item);

      return `
        <article class="program-card">
          <div class="program-meta">
            <span>${label}</span>
            <span>${formatDayMonth(itemDate)}</span>
            <span>${item.time}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <footer>
            <div>
              <strong>${item.place}</strong>
              <span>${item.duration} de atividade</span>
            </div>
            <a class="button button-secondary" href="./pages/Programacao.html">Detalhes</a>
          </footer>
        </article>
      `;
    })
    .join("");
}

function animateStats() {
  const statElements = document.querySelectorAll("[data-stat]");

  statElements.forEach((element) => {
    const key = element.getAttribute("data-stat");
    const target = statTargets[key] || 0;
    const duration = 900;
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      element.textContent = Math.floor(progress * target);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target;
      }
    }

    requestAnimationFrame(update);
  });
}

function updateCountdown() {
  const target = getNextEditionDate();
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  const days = document.querySelector("#days");
  const hours = document.querySelector("#hours");
  const minutes = document.querySelector("#minutes");
  const seconds = document.querySelector("#seconds");

  if (!days || !hours || !minutes || !seconds || !countdownMessage || !heroDateLabel) return;

  if (diff <= 0) {
    days.textContent = "00";
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
    countdownMessage.textContent = "A próxima edição começou. Atualize os horários anuais no arquivo de dados.";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const dayValue = Math.floor(totalSeconds / 86400);
  const hourValue = Math.floor((totalSeconds % 86400) / 3600);
  const minuteValue = Math.floor((totalSeconds % 3600) / 60);
  const secondValue = totalSeconds % 60;

  days.textContent = pad(dayValue);
  hours.textContent = pad(hourValue);
  minutes.textContent = pad(minuteValue);
  seconds.textContent = pad(secondValue);

  const formattedDate = target.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  const editionYear = target.getFullYear();

  heroDateLabel.textContent = `Próxima edição prevista para ${formattedDate}`;
  countdownMessage.textContent = `Contagem configurada para a abertura da edição ${editionYear} em ${formattedDate}, às ${pad(editionHour)}:${pad(editionMinute)}.`;

  if (brandEditionLabel) {
    brandEditionLabel.textContent = `Edição ${editionYear} | ${eventConfig.campus || "IFPR"}`;
  }
}

function fillAboutModal() {
  if (!aboutModal || !eventConfig.about) return;

  const summary = document.querySelector("#about-modal-summary");
  const audience = document.querySelector("#about-modal-audience");
  const pillars = document.querySelector("#about-modal-pillars");

  if (summary) summary.textContent = eventConfig.about.summary || "";
  if (audience) audience.textContent = eventConfig.about.audience || "";

  if (pillars) {
    pillars.innerHTML = (eventConfig.about.pillars || [])
      .map((item) => `<li>${item}</li>`)
      .join("");
  }
}

function openModal(modal) {
  if (!modal) return;
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal(modal) {
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function bindModal() {
  const triggers = document.querySelectorAll("[data-open-modal]");
  const closers = document.querySelectorAll("[data-close-modal]");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modalId = trigger.getAttribute("data-open-modal");
      openModal(document.getElementById(modalId));
    });
  });

  closers.forEach((closer) => {
    closer.addEventListener("click", () => {
      const modal = closer.closest(".modal");
      closeModal(modal);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal(document.querySelector(".modal:not([hidden])"));
    }
  });
}

function bindFilters() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderProgram(button.dataset.filter || "todos");
    });
  });
}

function bindMobileNav() {
  if (!navToggle || !siteNav) return;

  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    siteNav.classList.toggle("open");
  });
}

renderProgram();
animateStats();
fillAboutModal();
bindFilters();
bindMobileNav();
bindModal();
updateCountdown();
setInterval(updateCountdown, 1000);
