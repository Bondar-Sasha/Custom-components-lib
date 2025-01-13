import React from 'react'
import { render, screen } from '@testing-library/react'
import BasicCheckbox from './BasicCheckbox'
import '@testing-library/jest-dom'

const testPrefix = '0.111111'.toString().substring(2, 11)

const getTestId = (str: string, postfix = testPrefix): string => {
   return str + '-' + postfix
}

describe('testing BasicCheckbox', () => {
   beforeAll(() => {
      jest.spyOn(Math, 'random').mockReturnValue(0.111111)
   })

   afterAll(() => {
      jest.restoreAllMocks()
   })
   describe("testing checkbox's classes (prop: classes)", () => {
      it('if prop was not passed', () => {
         render(<BasicCheckbox />)

         const elementWrapper = screen.getByTestId(getTestId('wrapper'))
         const elementCheckboxWrapper = screen.getByTestId(getTestId('checkbox-wrapper'))
         const elementCheckbox = screen.getByTestId(getTestId('checkbox'))
         const elementCheckboxDisplayLabel = screen.getByTestId(getTestId('checkbox-display-label'))

         expect(elementWrapper).toBeInTheDocument()
         expect(elementCheckboxWrapper).toBeInTheDocument()
         expect(elementCheckbox).toBeInTheDocument()
         expect(elementCheckboxDisplayLabel).toBeInTheDocument()

         expect(elementWrapper).toMatchSnapshot()
      })
      it('passed all classes, each has "class" value', () => {
         render(
            <BasicCheckbox
               classes={{
                  wrapper: 'class',
                  checkbox: 'class',
                  checkboxWrapper: 'class',
                  checkboxInterface: 'class',
                  checkboxLabel: 'class',
               }}
            />,
         )

         const elementWrapper = screen.getByTestId(getTestId('wrapper'))
         const elementCheckboxWrapper = screen.getByTestId(getTestId('checkbox-wrapper'))
         const elementCheckbox = screen.getByTestId(getTestId('checkbox'))
         const elementCheckboxDisplayLabel = screen.getByTestId(getTestId('checkbox-display-label'))

         expect(elementWrapper).toBeInTheDocument()
         expect(elementCheckboxWrapper).toBeInTheDocument()
         expect(elementCheckbox).toBeInTheDocument()
         expect(elementCheckboxDisplayLabel).toBeInTheDocument()

         expect(elementWrapper).toHaveClass('wrapper class')
         expect(elementCheckboxWrapper).toHaveClass('checkboxWrapper class')
         expect(elementCheckbox).toHaveClass('checkbox class')
         expect(elementCheckboxDisplayLabel).toHaveClass('checkboxInterface class')

         expect(elementWrapper).toMatchSnapshot()
      })
   })
   describe('testing checkbox label (prop: label)', () => {
      it('if prop was not passed', () => {
         render(<BasicCheckbox />)

         const elementWrapper = screen.getByTestId(getTestId('wrapper'))
         const elementCheckboxWrapper = screen.getByTestId(getTestId('checkbox-wrapper'))
         const elementCheckbox = screen.getByTestId(getTestId('checkbox'))
         const elementCheckboxDisplayLabel = screen.getByTestId(getTestId('checkbox-display-label'))

         expect(elementWrapper).toBeInTheDocument()
         expect(elementCheckboxWrapper).toBeInTheDocument()
         expect(elementCheckbox).toBeInTheDocument()
         expect(elementCheckboxDisplayLabel).toBeInTheDocument()

         expect(elementWrapper).toMatchSnapshot()
      })
      it('label is text for checkbox', () => {
         render(<BasicCheckbox label="text for checkbox" />)

         const elementWrapper = screen.getByTestId(getTestId('wrapper'))
         const elementCheckboxWrapper = screen.getByTestId(getTestId('checkbox-wrapper'))
         const elementCheckbox = screen.getByTestId(getTestId('checkbox'))
         const elementCheckboxDisplayLabel = screen.getByTestId(getTestId('checkbox-display-label'))
         const elementCheckboxLabel = screen.getByTestId(getTestId('checkbox-label'))

         expect(elementWrapper).toBeInTheDocument()
         expect(elementCheckboxWrapper).toBeInTheDocument()
         expect(elementCheckbox).toBeInTheDocument()
         expect(elementCheckboxDisplayLabel).toBeInTheDocument()

         expect(elementCheckboxLabel).toHaveTextContent('text for checkbox')

         expect(elementWrapper).toMatchSnapshot()
      })
   })
})
