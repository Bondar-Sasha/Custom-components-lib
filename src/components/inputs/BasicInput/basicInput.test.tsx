import React from 'react'
import { render, screen } from '@testing-library/react'
import BasicInput from './BasicInput'
import '@testing-library/jest-dom'

describe('BasicInput', () => {
   it('default', () => {
      render(<BasicInput placeholder="test" />)
      const wrapper = screen.getByTestId('wrapper')
      const input = screen.getByTestId('input')
      const label = screen.getByTestId('label-prompt')
      const uiHelper = screen.getByTestId('ui-helper')

      expect(wrapper).toBeInTheDocument()
      expect(input).toBeInTheDocument()
      expect(label).toBeInTheDocument()
      expect(uiHelper).toBeInTheDocument()

      expect(wrapper).toMatchSnapshot()
   })
   it('error', () => {
      render(<BasicInput error placeholder="test" />)
      const wrapper = screen.getByTestId('wrapper')
      const input = screen.getByTestId('input')
      const label = screen.getByTestId('label-prompt')
      const uiHelper = screen.getByTestId('ui-helper')

      expect(wrapper).toBeInTheDocument()
      expect(input).toBeInTheDocument()
      expect(label).toBeInTheDocument()
      expect(uiHelper).toBeInTheDocument()

      expect(input).toHaveAttribute('placeholder', 'Error')
      expect(label).toHaveTextContent('Error')

      expect(wrapper).toMatchSnapshot()
   })

   it('standard', () => {
      render(<BasicInput variant="standard" placeholder="test" />)
      const wrapper = screen.getByTestId('wrapper')
      const input = screen.getByTestId('input')
      const label = screen.getByTestId('label-prompt')
      const uiHelper = screen.getByTestId('ui-helper')

      expect(wrapper).toBeInTheDocument()
      expect(input).toBeInTheDocument()
      expect(label).toBeInTheDocument()
      expect(uiHelper).toBeInTheDocument()

      expect(wrapper).toMatchSnapshot()
   })
   it('outlined', () => {
      render(<BasicInput variant="outlined" placeholder="test" />)
      const wrapper = screen.getByTestId('wrapper')
      const input = screen.getByTestId('input')
      const label = screen.getByTestId('label-prompt')
      const uiHelper = screen.getByTestId('ui-helper')

      expect(wrapper).toBeInTheDocument()
      expect(input).toBeInTheDocument()
      expect(label).toBeInTheDocument()
      expect(uiHelper).toBeInTheDocument()

      expect(wrapper).toMatchSnapshot()
   })
   it('filled', () => {
      render(<BasicInput variant="filled" placeholder="test" />)
      const wrapper = screen.getByTestId('wrapper')
      const input = screen.getByTestId('input')
      const label = screen.getByTestId('label-prompt')
      const uiHelper = screen.getByTestId('ui-helper')

      expect(wrapper).toBeInTheDocument()
      expect(input).toBeInTheDocument()
      expect(label).toBeInTheDocument()
      expect(uiHelper).toBeInTheDocument()

      expect(wrapper).toMatchSnapshot()
   })
})
