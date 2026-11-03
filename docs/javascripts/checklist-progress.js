(() => {
  const contentSelector = '.md-content__inner';
  const progressSelector = '[data-checklist-progress]';

  const countCheckboxes = (content) => {
    const checkboxes = Array.from(content.querySelectorAll('input[type="checkbox"]'));
    const total = checkboxes.length;
    const checked = checkboxes.filter((checkbox) => checkbox.checked).length;

    return { checked, total };
  };

  const renderProgress = (progressElement) => {
    const content = progressElement.closest(contentSelector);

    if (!content) {
      return;
    }

    // Wrap the progress element to support overlay layout
    if (progressElement.parentElement && !progressElement.parentElement.classList.contains('checklist-progress-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'checklist-progress-wrapper';
      progressElement.parentNode.insertBefore(wrapper, progressElement);
      wrapper.appendChild(progressElement);
    }

    const { checked, total } = countCheckboxes(content);
    const percentage = total === 0 ? 0 : Math.round((checked / total) * 100);

    progressElement.setAttribute('role', 'progressbar');
    progressElement.setAttribute('aria-valuemin', '0');
    progressElement.setAttribute('aria-valuemax', String(total));
    progressElement.setAttribute('aria-valuenow', String(checked));
    progressElement.setAttribute('aria-valuetext', `${checked} de ${total} itens marcados`);
    progressElement.setAttribute('aria-label', 'Progresso do checklist');
    progressElement.style.setProperty('--checklist-progress-value', String(percentage));

    progressElement.innerHTML = `
      <div class="checklist-progress__header">
        <div>
          <span class="checklist-progress__label">Progresso</span>
          <span class="checklist-progress__count">${checked}/${total}</span>
          <span class="checklist-progress__meta">itens marcados</span>
        </div>
      </div>
    `;
  };

  const updateAllProgressBars = () => {
    document.querySelectorAll(progressSelector).forEach(renderProgress);
  };

  document.addEventListener('DOMContentLoaded', updateAllProgressBars);
  document.addEventListener('change', (event) => {
    const target = event.target;

    if (!(target instanceof HTMLInputElement) || target.type !== 'checkbox') {
      return;
    }

    const progressElement = target.closest(contentSelector)?.querySelector(progressSelector);

    if (progressElement) {
      renderProgress(progressElement);
    }
  });
})();
