import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { NameTag } from '../../src/index.js';
import '../../src/name-tag/name-tag.js';

describe('NameTag', () => {
  it('has a default name and heading', async () => {
    const el = await fixture<NameTag>(html`<name-tag></name-tag>`);

    expect(el.name).to.equal('Javed Habib');
    expect(el.greeting).to.equal('Hello');
  });

  it('with changed name and greeting', async () => {
    const el = await fixture<NameTag>(
      html`<name-tag greeting="Ola" name="JaeAeich"></name-tag>`
    );
    expect(el.name).to.equal('JaeAeich');
    expect(el.greeting).to.equal('Ola');
  });

  it('can override its CSS', async () => {
    const el = await fixture<NameTag>(html`<name-tag></name-tag>`);
    // Change the primary color
    el.style.setProperty('--color-primary', '#FF0000');

    // Verify that the changes are reflected in the rendered component
    expect(getComputedStyle(el).getPropertyValue('--color-primary')).to.equal(
      '#FF0000'
    );
  });

  describe('NameTag', () => {
    it('registers the custom element', () => {
      // Check if the custom element is already defined
      const isDefined = window.customElements.get('name-tag');

      if (!isDefined) {
        // Define the custom element if it's not defined
        window.customElements.define('name-tag', NameTag);
      }

      // Verify that the custom element is registered
      const el = document.createElement('name-tag');
      expect(el.constructor).to.equal(NameTag);
    });
  });
});
