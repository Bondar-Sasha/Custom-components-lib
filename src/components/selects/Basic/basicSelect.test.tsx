import React, { FC, useState } from 'react'
import { render, screen } from '@testing-library/react'
import BasicSelect, { BasicSelectProps } from './BasicSelect'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

const ControlledBasicSelect: FC<BasicSelectProps> = ({ ...props }) => {
   const [curValue, setCurValue] = useState<string>('')

   const handleSetCurValue = (value: string) => {
      setCurValue(value)
   }
   console.log(curValue)

   return <BasicSelect currentValue={curValue} onChange={() => handleSetCurValue} />
}

describe('testing BasicSelect', () => {
   describe('uncontrolled BasicSelect', () => {
      it('without passed props', async () => {
         render(<BasicSelect />)
         const elementWrapper = screen.getByTestId('wrapper')
         const elementDisplay = screen.getByTestId('display')
         const elementTextInDisplay = screen.getByTestId('display-text')
         const elementLabel = screen.getByTestId('label-prompt')

         expect(elementWrapper).toBeInTheDocument()
         expect(elementDisplay).toBeInTheDocument()
         expect(elementTextInDisplay).toBeInTheDocument()
         expect(elementLabel).toBeInTheDocument()

         await userEvent.click(screen.getByTestId('wrapper'))
         expect(screen.getByTestId('options')).toBeInTheDocument()
         expect(screen.getByTestId('item-1')).toBeInTheDocument()
         expect(screen.getByTestId('item-2')).toBeInTheDocument()

         expect(elementWrapper).toMatchSnapshot()
      })
      it('with prompt (props: prompt)', async () => {
         render(<BasicSelect prompt="prompt" />)
         const elementWrapper = screen.getByTestId('wrapper')
         const elementDisplay = screen.getByTestId('display')
         const elementTextInDisplay = screen.getByTestId('display-text')
         const elementLabel = screen.getByTestId('label-prompt')

         expect(elementWrapper).toBeInTheDocument()
         expect(elementDisplay).toBeInTheDocument()
         expect(elementTextInDisplay).toBeInTheDocument()
         expect(elementLabel).toBeInTheDocument()

         expect(elementLabel).toHaveTextContent('prompt')

         expect(elementWrapper).toMatchSnapshot()
      })
   })
   describe('controlled BasicSelect', () => {
      it('interactive', async () => {
         render(<ControlledBasicSelect />)
         const elementWrapper = screen.getByTestId('wrapper')
         const elementDisplay = screen.getByTestId('display')
         const elementTextInDisplay = screen.getByTestId('display-text')
         const elementLabel = screen.getByTestId('label-prompt')

         expect(elementWrapper).toBeInTheDocument()
         expect(elementDisplay).toBeInTheDocument()
         expect(elementTextInDisplay).toBeInTheDocument()
         expect(elementLabel).toBeInTheDocument()

         await userEvent.click(screen.getByTestId('wrapper'))
         expect(screen.getByTestId('options')).toBeInTheDocument()
         expect(screen.getByTestId('item-1')).toBeInTheDocument()
         expect(screen.getByTestId('item-2')).toBeInTheDocument()

         await userEvent.click(screen.getByTestId('item-2'))

         expect(screen.queryByTestId('options')).not.toBeInTheDocument()

         expect(screen.getByTestId('display-text')).toHaveTextContent('second_option')

         expect(elementWrapper).toMatchSnapshot()
      })
      it('interactive (onBlur)', async () => {
         render(<ControlledBasicSelect />)
         const elementWrapper = screen.getByTestId('wrapper')
         const elementDisplay = screen.getByTestId('display')
         const elementTextInDisplay = screen.getByTestId('display-text')
         const elementLabel = screen.getByTestId('label-prompt')

         expect(elementWrapper).toBeInTheDocument()
         expect(elementDisplay).toBeInTheDocument()
         expect(elementTextInDisplay).toBeInTheDocument()
         expect(elementLabel).toBeInTheDocument()

         await userEvent.click(screen.getByTestId('wrapper'))
         expect(screen.getByTestId('options')).toBeInTheDocument()
         expect(screen.getByTestId('item-1')).toBeInTheDocument()
         expect(screen.getByTestId('item-2')).toBeInTheDocument()

         const prEl = screen.getByTestId('wrapper').parentElement
         if (!prEl) throw new Error('no parent element')
         await userEvent.click(prEl)

         expect(screen.queryByTestId('options')).not.toBeInTheDocument()

         expect(screen.getByTestId('display-text')).toHaveTextContent('')

         expect(elementWrapper).toMatchSnapshot()
      })
   })
})
