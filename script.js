const modals = document.querySelectorAll('.modal');
const modalTriggers = document.querySelectorAll('[data-modal]');
const closeTriggers = document.querySelectorAll('[data-close-modal]');

function setModal(modal, open) {
  modal.classList.toggle('is-open', open);
  modal.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('modal-open', open);
  if (open) modal.querySelector('button, input, textarea')?.focus();
}

modalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const modal = document.getElementById(trigger.dataset.modal);
    if (modal) setModal(modal, true);
  });
});

closeTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => setModal(trigger.closest('.modal'), false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const openModal = document.querySelector('.modal.is-open');
    if (openModal) setModal(openModal, false);
  }
});

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const submitButton = event.currentTarget.querySelector('.submit-button');
  submitButton.innerHTML = 'message sent <span>♥</span>';
  submitButton.disabled = true;
});
