import React from 'react'
import { render, screen } from '@testing-library/react'
import BasicButton from './BasicButton'
import '@testing-library/jest-dom'

describe('testing BasicButton', () => {
   describe('testing button variants (prop: variant)', () => {
      it('if prop was not passed', () => {
         render(<BasicButton>click</BasicButton>)
         const button = screen.getByTestId('button')
         expect(button).toBeInTheDocument()
         expect(button).toHaveClass('containedButton')
         expect(button).toMatchSnapshot()
      })
      it('variant is contained', () => {
         render(<BasicButton variant="contained">click</BasicButton>)
         const button = screen.getByTestId('button')
         expect(button).toBeInTheDocument()
         expect(button).toHaveClass('containedButton')
         expect(button).toMatchSnapshot()
      })
      it('variant is text', () => {
         render(<BasicButton variant="text">click</BasicButton>)
         const button = screen.getByTestId('button')
         expect(button).toBeInTheDocument()
         expect(button).toHaveClass('textButton')
         expect(button).toMatchSnapshot()
      })
      it('variant is outlined', () => {
         render(<BasicButton variant="outlined">click</BasicButton>)
         const button = screen.getByTestId('button')
         expect(button).toBeInTheDocument()
         expect(button).toHaveClass('outlinedButton')
         expect(button).toMatchSnapshot()
      })
   })
   describe('testing button sizes (prop: size)', () => {
      it('if prop was not passed', () => {
         render(<BasicButton>click</BasicButton>)
         const button = screen.getByTestId('button')
         expect(button).toBeInTheDocument()
         expect(button).toHaveClass('medium')
         expect(button).toMatchSnapshot()
      })
      it('size is small', () => {
         render(<BasicButton size="small">click</BasicButton>)
         const button = screen.getByTestId('button')
         expect(button).toBeInTheDocument()
         expect(button).toHaveClass('small')
         expect(button).toMatchSnapshot()
      })
      it('size is medium', () => {
         render(<BasicButton size="medium">click</BasicButton>)
         const button = screen.getByTestId('button')
         expect(button).toBeInTheDocument()
         expect(button).toHaveClass('medium')
         expect(button).toMatchSnapshot()
      })
      it('size is large', () => {
         render(<BasicButton size="large">click</BasicButton>)
         const button = screen.getByTestId('button')
         expect(button).toBeInTheDocument()
         expect(button).toHaveClass('large')
         expect(button).toMatchSnapshot()
      })
   })
})
