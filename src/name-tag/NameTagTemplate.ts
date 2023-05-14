import { html } from '@microsoft/fast-element';
import { NameTag } from './NameTag.js';

export const template = html<NameTag>`
  <div class="header">
    <h3>${x => x.greeting.toUpperCase()}</h3>
    <h4>my name is</h4>
  </div>

  <div class="body">${x => x.name}</div>

  <div class="footer">contact : JaeAeich</div>
`;
