const scheduleData = window.SETIF_DATA || { event: {}, program: [] };
const scheduleEvent = scheduleData.event || {};
const scheduleItems = scheduleData.program || [];

const scheduleMonthIndex = Math.max((scheduleEvent.month || 10) - 1, 0);
const scheduleDay = scheduleEvent.day || 17;
const scheduleHour = scheduleEvent.hour || 8;
const scheduleMinute = scheduleEvent.minute || 0;

function getScheduleEditionDate() {
  const now = new Date();
  let target = new Date(now.getFullYear(), scheduleMonthIndex, scheduleDay, scheduleHour, scheduleMinute, 0);

  if (target <= now) {
    target = new Date(now.getFullYear() + 1, scheduleMonthIndex, scheduleDay, scheduleHour, scheduleMinute, 0);
  }

  return target;
}

function getActivityDate(item) {
  const startDate = getScheduleEditionDate();
  const itemDate = new Date(startDate);
  itemDate.setDate(startDate.getDate() + (item.dayOffset || 0));
  return itemDate;
}

function formatLongDate(date) {
  return date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

function groupScheduleItems() {
  return scheduleItems.reduce((groups, item) => {
    const date = getActivityDate(item);
    const key = date.toISOString().slice(0, 10);

    if (!groups[key]) {
      groups[key] = {
        label: formatLongDate(date),
        items: []
      };
    }

    groups[key].items.push(item);
    return groups;
  }, {});
}

function renderSchedule() {
  const scheduleDays = document.querySelector("#schedule-days");
  if (!scheduleDays) return;

  const groups = groupScheduleItems();

  scheduleDays.innerHTML = Object.values(groups)
    .map(
      (group) => `
        <section class="day-card">
          <header class="day-header">
            <p class="eyebrow">Dia da programação</p>
            <h3>${group.label}</h3>
          </header>
          <div class="session-list">
            ${group.items
              .map(
                (item) => `
                  <article class="session-card">
                    <div class="session-time">
                      <strong>${item.time}</strong>
                      <span>${item.duration}</span>
                    </div>
                    <div class="session-copy">
                      <span class="session-tag">${item.type === "palestra" ? "Palestra" : "Minicurso"}</span>
                      <h4>${item.title}</h4>
                      <p>${item.description}</p>
                    </div>
                    <div class="session-side">
                      <strong>${item.place}</strong>
                      <span>${item.speaker}</span>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");
}

function fillScheduleSummary() {
  const editionDate = getScheduleEditionDate();
  const editionYear = editionDate.getFullYear();
  const scheduleBrandLabel = document.querySelector("#schedule-brand-label");
  const scheduleEditionYear = document.querySelector("#schedule-edition-year");
  const scheduleDaysCount = document.querySelector("#schedule-days-count");
  const scheduleCampusLabel = document.querySelector("#schedule-campus-label");
  const updateNote = document.querySelector("#schedule-update-note");

  if (scheduleBrandLabel) {
    scheduleBrandLabel.textContent = `Cronograma da edição ${editionYear}`;
  }

  if (scheduleEditionYear) {
    scheduleEditionYear.textContent = editionYear;
  }

  if (scheduleDaysCount) {
    scheduleDaysCount.textContent = `${scheduleEvent.durationDays || 2} dias`;
  }

  if (scheduleCampusLabel) {
    scheduleCampusLabel.textContent = scheduleEvent.campus || "IFPR";
  }

  if (updateNote) {
    updateNote.innerHTML = `Programacao referente a edicao <strong>${editionYear}</strong>, sujeita a atualizacoes conforme divulgacao da comissao organizadora.`;
  }
}

renderSchedule();
fillScheduleSummary();
