import { customElement, attr } from '@microsoft/fast-element';
import { BaseClass } from '../../utils/base-class/BaseClass.js';
import { styles } from './NameTagStyles.js';
import { template } from './NameTagTemplate.js';

@customElement({
  name: 'name-tag',
  template,
  styles,
})
export class NameTag extends BaseClass {
  @attr greeting: string = 'Hello';

  @attr name: string = 'Javed Habib';
}
