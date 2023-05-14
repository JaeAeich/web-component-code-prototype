import { html, TemplateResult } from 'lit';
import { tokens } from '../design-tokens/designToken.js';
import '../src/name-tag/NameTag.js';

export default {
  title: 'FAST/NameTag',
  component: 'name-tag',
  argTypes: {
    greeting: { control: 'text' },
    name: { control: 'text' },
    primaryColor: { control: 'color' },
    secondaryColor: { control: 'color' },
    accentColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  greeting?: string;
  name?: string;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
}

const Template: Story<ArgTypes> = ({
  name = 'Javed Habib',
  greeting = 'Hello',
  primaryColor = tokens['color-primary'],
  secondaryColor = tokens['color-secondary'],
  accentColor = tokens['color-accent'],
}: ArgTypes) => html`
  <name-tag
    style="--color-primary:${primaryColor};--color-secondary:${secondaryColor};--color-accent:${accentColor}"
    greeting=${greeting}
    name=${name}
  >
</name-tag>
`;
export const Regular = Template.bind({});

export const CustomGreeting = Template.bind({});
CustomGreeting.args = {
  greeting: 'Hola',
};

export const CustomName = Template.bind({});
CustomName.args = {
  name: 'John Doe',
};

export const CustomDesigned = Template.bind({});
CustomDesigned.args = {
  greeting: 'Hola',
  name: 'John Doe',
};
