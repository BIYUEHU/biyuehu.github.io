import { sites } from './data.js';

const letIn = (binding, k) => k(binding);

const q = (sel, root = document) => root.querySelector(sel);
const qa = (sel, root = document) => [...root.querySelectorAll(sel)];

const append = (el, html) => el.insertAdjacentHTML('beforeend', html);

const render = (list, k) =>
  sites.forEach((el) =>
    append(list, /* html */`<div><a target='_blank' href='${el.url}'>${el.text}</a></div>`)
  ) || k()


const withEl = (sel, k) => letIn(q(sel), (el) => el ? k(el) : void 0)

const openDonate = (id, k) => (
  qa('.dialog').forEach((el) => (el.hidden = true)) ||
  letIn(q('#' + id), (dialog) => dialog ? (dialog.hidden = false) : void 0),
  q('#overlay')?.classList.add('open'),
  k && k()
)

const closeDonate = (k) => (q('#overlay')?.classList.remove('open'), k && k())

const copyBTC = (btn, k) =>
  navigator.clipboard.writeText(btn.previousElementSibling.textContent).then(() =>
    letIn(btn.textContent, (original) => (
      btn.textContent = 'Copied ✓',
      setTimeout(() => (btn.textContent = original, k && k()), 1800)
    ))
  )

const setup = (k) =>
  withEl('#sites', (list) => render(list, () => (
    document.addEventListener('click', (e) =>
      letIn(e.target, (t) =>
        letIn(t.closest('.card'), (card) => card ? openDonate(card.dataset.c) : void 0) ||
        letIn(t.closest('.close'), (close) => close ? closeDonate() : void 0) ||
        letIn(t.closest('.btc-copy'), (copy) => copy ? copyBTC(copy) : void 0) ||
        (t.id === 'overlay' ? closeDonate() : void 0)
      )
    ),
    document.addEventListener('keydown', (e) => e.key === 'Escape' ? closeDonate() : void 0),
    k && k()
  )))

setup(() => console.log('Setup complete.'))
