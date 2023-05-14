import { css } from '@microsoft/fast-element';

export const styles = css`
  .header {
    background-color: var(--color-secondary);
    border-radius: var(--border-radius-medium);
    box-shadow: var(--shadow-small);
    padding: var(--spacing-medium);
    text-align: center;
  }

  h3 {
    color: var(--color-primary);
    margin: 0;
    text-transform: uppercase;
  }

  h4 {
    color: var(--color-accent);
    margin: 0;
  }

  .body {
    background-color: var(--color-secondary);
    border-radius: var(--border-radius-large);
    box-shadow: var(--shadow-medium);
    padding: var(--spacing-large);
    text-align: center;
  }

  .footer {
    background-color: var(--color-secondary);
    border-radius: var(--border-radius-small);
    box-shadow: var(--shadow-small);
    padding: var(--spacing-small);
    text-align: center;
  }
`;
