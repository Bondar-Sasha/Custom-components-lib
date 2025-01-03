import React from 'react'
import { render, screen } from '@testing-library/react'
import BasicCheckbox from './BasicCheckbox'
import '@testing-library/jest-dom'

describe('BasicCheckbox', () => {
   it('checked', () => {
      render(<BasicCheckbox checked />)
      const wrapper = screen.getByTestId('wrapper')
      const checkboxWrapper = screen.getByTestId('checkbox-wrapper')
      const checkbox = screen.getByTestId('checkbox')
      const checkboxDisplayLabel = screen.getByTestId('checkbox-display-label')

      expect(wrapper).toBeInTheDocument()
      expect(checkboxWrapper).toBeInTheDocument()
      expect(checkboxDisplayLabel).toBeInTheDocument()
      expect(checkbox).toBeInTheDocument()
   })
   it('with label', () => {
      render(<BasicCheckbox label="label" />)
      const wrapper = screen.getByTestId('wrapper')
      const checkboxWrapper = screen.getByTestId('checkbox-wrapper')
      const checkbox = screen.getByTestId('checkbox')
      const checkboxDisplayLabel = screen.getByTestId('checkbox-display-label')
      const checkboxLabel = screen.getByTestId('checkbox-label')

      expect(wrapper).toBeInTheDocument()
      expect(checkboxWrapper).toBeInTheDocument()
      expect(checkboxDisplayLabel).toBeInTheDocument()
      expect(checkbox).toBeInTheDocument()
      expect(checkboxLabel).toBeInTheDocument()

      expect(checkboxLabel).toHaveTextContent('label')
   })
})
