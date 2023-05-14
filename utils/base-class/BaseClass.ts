import { FASTElement, attr } from '@microsoft/fast-element';
import { DesignToken } from '@microsoft/fast-foundation';
import { tokens } from '../../design-tokens/designToken.js';

export class BaseClass extends FASTElement {
  @attr tokens: object = tokens;

  connectedCallback(): void {
    super.connectedCallback();
    const currentElement = this.$fastController.element;
    if (tokens && Object.keys(tokens).length > 0) {
      Object.entries(tokens).forEach(([key, value]) => {
        const newToken = DesignToken.create<string>(key);
        newToken.setValueFor(currentElement, value as string);
      });
    }
  }
}
