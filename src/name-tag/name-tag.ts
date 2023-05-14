import { NameTag } from './NameTag.js';

window.customElements.get('name-tag') ||
  window.customElements.define('name-tag', NameTag);
