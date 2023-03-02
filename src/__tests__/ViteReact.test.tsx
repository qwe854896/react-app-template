// Imports
import { describe, expect, it } from 'vitest';

import ViteReact from '@/pages/ViteReact';
import { render, screen, userEvent } from '@/utils/test-utils';

// Tests
describe('Sample test', () => {
  it('the title is visible', () => {
    render(<ViteReact />);
    expect(screen.getByText(/React App Template/)).toBeInTheDocument();
  });
  it('uses block in app header', async () => {
    render(<ViteReact />);
    const element = screen.getByRole('heading');
    expect(getComputedStyle(element).display).toEqual('block');
  });
});

describe('Button', () => {
  it('Should increment count on click', async () => {
    // Setup
    render(<ViteReact />);
    const buttonCount = await screen.findByRole('button');
    const codeCount = await screen.queryByText(/The count is now: /);

    // Pre expectations
    expect(buttonCount.innerHTML).toBe('count is 0');
    // Instead of:
    // expect(codeCount).toBeNull();
    expect(codeCount).not.toBeInTheDocument();

    // Init
    await userEvent.click(buttonCount);
    await userEvent.click(buttonCount);

    // Post Expectations
    expect(buttonCount.innerHTML).toBe('count is 2');
    expect(await screen.queryByText(/The count is now: /)).toBeInTheDocument();
  });
});
