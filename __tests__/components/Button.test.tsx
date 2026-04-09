import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ButtonTest } from '../../components/ButtonTest'

describe('Button Component', () => {
  it('Button dengan label submit', () => {
    render(<ButtonTest label="Submit" onClick={() => {}} />)
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })

  it('User pencet tombol Submit', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()
    render(<ButtonTest label="Submit" onClick={onClick} />)

    await user.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledOnce()
  })
})
