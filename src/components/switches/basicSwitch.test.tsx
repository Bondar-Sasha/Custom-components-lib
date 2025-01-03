import React from 'react'
import { render, screen } from '@testing-library/react'
import BasicSwitch from './BasicSwitch'
import '@testing-library/jest-dom'

describe('BasicSwitch', () => {
   it('checked', () => {
      render(<BasicSwitch checked />)
      const wrapper = screen.getByTestId('wrapper')
      const switchWrapper = screen.getByTestId('switch-wrapper')
      const switchInput = screen.getByTestId('switch')
      const switchDisplayLabel = screen.getByTestId('switch-display-label')

      expect(wrapper).toBeInTheDocument()
      expect(switchWrapper).toBeInTheDocument()
      expect(switchDisplayLabel).toBeInTheDocument()
      expect(switchInput).toBeInTheDocument()
   })
   it('with label', () => {
      render(<BasicSwitch label="label" />)
      const wrapper = screen.getByTestId('wrapper')
      const switchWrapper = screen.getByTestId('switch-wrapper')
      const switchInput = screen.getByTestId('switch')
      const switchDisplayLabel = screen.getByTestId('switch-display-label')
      const switchLabel = screen.getByTestId('switch-label')

      expect(wrapper).toBeInTheDocument()
      expect(switchWrapper).toBeInTheDocument()
      expect(switchDisplayLabel).toBeInTheDocument()
      expect(switchInput).toBeInTheDocument()
      expect(switchLabel).toBeInTheDocument()

      expect(switchLabel).toHaveTextContent('label')
   })
})
