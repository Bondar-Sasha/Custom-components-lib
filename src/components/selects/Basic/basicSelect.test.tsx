import React from 'react'
import { render, screen } from '@testing-library/react'
import BasicSelect from './BasicSelect'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('BasicSelect', () => {
   it('default', async () => {
      render(<BasicSelect />)
      const wrapper = screen.getByTestId('wrapper')
      const display = screen.getByTestId('display')
      const label = screen.getByTestId('label-prompt')

      expect(wrapper).toBeInTheDocument()
      expect(display).toBeInTheDocument()
      expect(screen.getByTestId('display-text')).toBeInTheDocument()
      expect(label).toBeInTheDocument()

      await userEvent.click(screen.getByTestId('wrapper'))
      expect(screen.getByTestId('options')).toBeInTheDocument()

      expect(wrapper).toMatchSnapshot()
   })
})
