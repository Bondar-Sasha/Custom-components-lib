import React from 'react'
import { render, screen } from '@testing-library/react'
import BasicInput from './BasicInput'
import '@testing-library/jest-dom'

describe('testing BasicInput', () => {
   describe("testing input's classes (prop: classes)", () => {
      it('if prop was not passed', () => {
         render(<BasicInput />)

         const elementWrapper = screen.getByTestId('wrapper')
         const elementInput = screen.getByTestId('input')
         const elementLabel = screen.getByTestId('label-prompt')
         const elementUIHelper = screen.getByTestId('ui-helper')

         expect(elementWrapper).toBeInTheDocument()
         expect(elementInput).toBeInTheDocument()
         expect(elementLabel).toBeInTheDocument()
         expect(elementUIHelper).toBeInTheDocument()

         expect(elementWrapper).toMatchSnapshot()
      })
      it('passed all classes, each has "class" value', () => {
         render(<BasicInput classes={{ input: 'class', wrapper: 'class', prompt: 'class' }} />)

         const elementWrapper = screen.getByTestId('wrapper')
         const elementInput = screen.getByTestId('input')
         const elementLabel = screen.getByTestId('label-prompt')
         const elementUIHelper = screen.getByTestId('ui-helper')

         expect(elementWrapper).toBeInTheDocument()
         expect(elementInput).toBeInTheDocument()
         expect(elementLabel).toBeInTheDocument()
         expect(elementUIHelper).toBeInTheDocument()

         expect(elementWrapper).toHaveClass('wrapper wrapper class')
         expect(elementInput).toHaveClass('input input class')
         expect(elementLabel).toHaveClass('prompt prompt class')

         expect(elementWrapper).toMatchSnapshot()
      })
   })
   describe('testing error (prop: error)', () => {
      it('if prop was not passed', () => {
         render(<BasicInput />)

         const elementWrapper = screen.getByTestId('wrapper')
         const elementInput = screen.getByTestId('input')
         const elementLabel = screen.getByTestId('label-prompt')
         const elementUIHelper = screen.getByTestId('ui-helper')

         expect(elementWrapper).toBeInTheDocument()
         expect(elementInput).toBeInTheDocument()
         expect(elementLabel).toBeInTheDocument()
         expect(elementUIHelper).toBeInTheDocument()

         expect(elementWrapper).toMatchSnapshot()
      })
      it('error is true', () => {
         render(<BasicInput error />)

         const elementWrapper = screen.getByTestId('wrapper')
         const elementInput = screen.getByTestId('input')
         const elementLabel = screen.getByTestId('label-prompt')
         const elementUIHelper = screen.getByTestId('ui-helper')

         expect(elementWrapper).toBeInTheDocument()
         expect(elementInput).toBeInTheDocument()
         expect(elementLabel).toBeInTheDocument()
         expect(elementUIHelper).toBeInTheDocument()

         expect(elementLabel).toHaveTextContent('Error')
         expect(elementInput).toHaveAttribute('placeholder', 'Error')
         expect(elementInput).toHaveClass('error')

         expect(elementWrapper).toMatchSnapshot()
      })
   })
   describe('testing variant (prop: variant)', () => {
      it('if prop was not passed', () => {
         render(<BasicInput />)

         const elementWrapper = screen.getByTestId('wrapper')
         const elementInput = screen.getByTestId('input')
         const elementLabel = screen.getByTestId('label-prompt')
         const elementUIHelper = screen.getByTestId('ui-helper')

         expect(elementWrapper).toBeInTheDocument()
         expect(elementInput).toBeInTheDocument()
         expect(elementLabel).toBeInTheDocument()
         expect(elementUIHelper).toBeInTheDocument()

         expect(elementWrapper).toMatchSnapshot()
      })
      it('variant is filled', () => {
         render(<BasicInput variant="filled" />)

         const elementWrapper = screen.getByTestId('wrapper')
         const elementInput = screen.getByTestId('input')
         const elementLabel = screen.getByTestId('label-prompt')
         const elementUIHelper = screen.getByTestId('ui-helper')

         expect(elementWrapper).toBeInTheDocument()
         expect(elementInput).toBeInTheDocument()
         expect(elementLabel).toBeInTheDocument()
         expect(elementUIHelper).toBeInTheDocument()

         expect(elementInput).toHaveAttribute('data-input-type', 'filled')

         expect(elementWrapper).toMatchSnapshot()
      })
      it('variant is outlined', () => {
         render(<BasicInput variant="outlined" />)

         const elementWrapper = screen.getByTestId('wrapper')
         const elementInput = screen.getByTestId('input')
         const elementLabel = screen.getByTestId('label-prompt')
         const elementUIHelper = screen.getByTestId('ui-helper')

         expect(elementWrapper).toBeInTheDocument()
         expect(elementInput).toBeInTheDocument()
         expect(elementLabel).toBeInTheDocument()
         expect(elementUIHelper).toBeInTheDocument()

         expect(elementInput).toHaveAttribute('data-input-type', 'outlined')

         expect(elementWrapper).toMatchSnapshot()
      })
      it('variant is standard', () => {
         render(<BasicInput variant="standard" />)

         const elementWrapper = screen.getByTestId('wrapper')
         const elementInput = screen.getByTestId('input')
         const elementLabel = screen.getByTestId('label-prompt')
         const elementUIHelper = screen.getByTestId('ui-helper')

         expect(elementWrapper).toBeInTheDocument()
         expect(elementInput).toBeInTheDocument()
         expect(elementLabel).toBeInTheDocument()
         expect(elementUIHelper).toBeInTheDocument()

         expect(elementInput).toHaveAttribute('data-input-type', 'standard')

         expect(elementWrapper).toMatchSnapshot()
      })
   })
})
