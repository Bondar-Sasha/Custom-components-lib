import React from 'react'
import { render, screen } from '@testing-library/react'
import BasicSwitch from './BasicSwitch'
import '@testing-library/jest-dom'

const testPrefix = '0.111111'.toString().substring(2, 11)

const getTestId = (str: string, postfix = testPrefix): string => {
   return str + '-' + postfix
}

describe('testing BasicSwitch', () => {
   beforeAll(() => {
      jest.spyOn(Math, 'random').mockReturnValue(0.111111)
   })

   afterAll(() => {
      jest.restoreAllMocks()
   })
   describe("testing switch's classes (prop: classes)", () => {
      it('if prop was not passed', () => {
         render(<BasicSwitch />)

         const elementWrapper = screen.getByTestId(getTestId('wrapper'))
         const elementSwitchWrapper = screen.getByTestId(getTestId('switch-wrapper'))
         const elementSwitch = screen.getByTestId(getTestId('switch'))
         const elementSwitchDisplayLabel = screen.getByTestId(getTestId('switch-display-label'))

         expect(elementWrapper).toBeInTheDocument()
         expect(elementSwitchWrapper).toBeInTheDocument()
         expect(elementSwitch).toBeInTheDocument()
         expect(elementSwitchDisplayLabel).toBeInTheDocument()

         expect(elementWrapper).toMatchSnapshot()
      })
      it('passed all classes, each has "class" value', () => {
         render(
            <BasicSwitch
               classes={{
                  wrapper: 'class',
                  toggle_container: 'class',
                  toggle_label: 'class',
                  toggle_switch: 'class',
                  switch_label: 'class',
                  toggle_checkbox: 'class',
               }}
            />,
         )

         const elementWrapper = screen.getByTestId(getTestId('wrapper'))
         const elementSwitchWrapper = screen.getByTestId(getTestId('switch-wrapper'))
         const elementSwitch = screen.getByTestId(getTestId('switch'))
         const elementSwitchDisplayLabel = screen.getByTestId(getTestId('switch-display-label'))

         expect(elementWrapper).toBeInTheDocument()
         expect(elementSwitchWrapper).toBeInTheDocument()
         expect(elementSwitch).toBeInTheDocument()
         expect(elementSwitchDisplayLabel).toBeInTheDocument()

         expect(elementWrapper).toHaveClass('wrapper wrapper class')
         expect(elementSwitchWrapper).toHaveClass('toggle_container toggle_container class')
         expect(elementSwitch).toHaveClass('toggle_checkbox toggle_checkbox class')
         expect(elementSwitchDisplayLabel).toHaveClass('toggle_label toggle_label class')

         expect(elementWrapper).toMatchSnapshot()
      })
   })
   describe('testing Switch label (prop: label)', () => {
      it('if prop was not passed', () => {
         render(<BasicSwitch />)

         const elementWrapper = screen.getByTestId(getTestId('wrapper'))
         const elementSwitchWrapper = screen.getByTestId(getTestId('switch-wrapper'))
         const elementSwitch = screen.getByTestId(getTestId('switch'))
         const elementSwitchDisplayLabel = screen.getByTestId(getTestId('switch-display-label'))

         expect(elementWrapper).toBeInTheDocument()
         expect(elementSwitchWrapper).toBeInTheDocument()
         expect(elementSwitch).toBeInTheDocument()
         expect(elementSwitchDisplayLabel).toBeInTheDocument()

         expect(elementWrapper).toMatchSnapshot()
      })
      it('label is text for Switch', () => {
         render(<BasicSwitch label="text for switch" />)
         const elementWrapper = screen.getByTestId(getTestId('wrapper'))
         const elementSwitchWrapper = screen.getByTestId(getTestId('switch-wrapper'))
         const elementSwitch = screen.getByTestId(getTestId('switch'))
         const elementSwitchDisplayLabel = screen.getByTestId(getTestId('switch-display-label'))
         const elementSwitchLabel = screen.getByTestId(getTestId('switch-label'))

         expect(elementWrapper).toBeInTheDocument()
         expect(elementSwitchWrapper).toBeInTheDocument()
         expect(elementSwitch).toBeInTheDocument()
         expect(elementSwitchDisplayLabel).toBeInTheDocument()
         expect(elementSwitchLabel).toBeInTheDocument()

         expect(elementSwitchLabel).toHaveTextContent('text for switch')

         expect(elementWrapper).toMatchSnapshot()
      })
   })
   describe('testing variant (prop: variant)', () => {
      it('if prop was not passed', () => {
         render(<BasicSwitch />)
         const elementWrapper = screen.getByTestId(getTestId('wrapper'))
         const elementSwitchWrapper = screen.getByTestId(getTestId('switch-wrapper'))
         const elementSwitch = screen.getByTestId(getTestId('switch'))
         const elementSwitchDisplayLabel = screen.getByTestId(getTestId('switch-display-label'))

         expect(elementWrapper).toBeInTheDocument()
         expect(elementSwitchWrapper).toBeInTheDocument()
         expect(elementSwitch).toBeInTheDocument()
         expect(elementSwitchDisplayLabel).toBeInTheDocument()

         expect(elementWrapper).toMatchSnapshot()
      })
      it('variant is iOS', () => {
         render(<BasicSwitch variant="iOS" />)

         const elementWrapper = screen.getByTestId(getTestId('wrapper'))
         const elementSwitchWrapper = screen.getByTestId(getTestId('switch-wrapper'))
         const elementSwitch = screen.getByTestId(getTestId('switch'))
         const elementSwitchDisplayLabel = screen.getByTestId(getTestId('switch-display-label'))

         expect(elementWrapper).toBeInTheDocument()
         expect(elementSwitchWrapper).toBeInTheDocument()
         expect(elementSwitch).toBeInTheDocument()
         expect(elementSwitchDisplayLabel).toBeInTheDocument()

         expect(elementSwitch).toHaveAttribute('data-switch-type', 'iOS')

         expect(elementWrapper).toMatchSnapshot()
      })
   })
})
