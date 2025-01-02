import React from 'react'
import { render, screen } from '@testing-library/react'
import BasicButton from './BasicButton'
import '@testing-library/jest-dom'

describe('BasicButton', () => {
   it('default', () => {
      const { container } = render(<BasicButton value="test button" />)
      const button = screen.getByText('test button')
      expect(button).toBeInTheDocument()
      expect(button).toHaveClass('containedButton')
      expect(container).toMatchSnapshot()
   })
   it('contained', () => {
      const { container } = render(<BasicButton variant="contained" size="large" value="test button" />)
      const button = screen.getByText('test button')
      expect(button).toBeInTheDocument()
      expect(button).toHaveClass('containedButton')
      expect(button).toHaveClass('large')
      expect(container).toMatchSnapshot()
   })
   it('text', () => {
      const { container } = render(<BasicButton variant="text" value="test button" />)
      const button = screen.getByText('test button')
      expect(button).toBeInTheDocument()
      expect(button).toHaveClass('textButton')
      expect(button).toHaveClass('medium')
      expect(container).toMatchSnapshot()
   })
   it('outlined', () => {
      const { container } = render(<BasicButton variant="outlined" size="small" value="test button" />)
      const button = screen.getByText('test button')
      expect(button).toBeInTheDocument()
      expect(button).toHaveClass('outlinedButton')
      expect(button).toHaveClass('small')
      expect(container).toMatchSnapshot()
   })
})
