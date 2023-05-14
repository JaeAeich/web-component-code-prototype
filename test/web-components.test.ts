import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { WebComponents } from '../src/WebComponents.js';
import '../src/web-components.js';

describe('WebComponents', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<WebComponents>(
      html`<web-components></web-components>`
    );

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<WebComponents>(
      html`<web-components></web-components>`
    );
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<WebComponents>(
      html`<web-components header="attribute header"></web-components>`
    );

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<WebComponents>(
      html`<web-components></web-components>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
