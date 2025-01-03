import React from 'react'
import { render, screen } from '@testing-library/react'
import BasicModal from './BasicModal'
import '@testing-library/jest-dom'

describe('BasicModal', () => {
   it('open', () => {
      render(
         <BasicModal
            open
            // eslint-disable-next-line react/no-children-prop
            children={<div>modal</div>}
            onClose={() => {
               console.log('close')
            }}
         />,
      )

      const modal = screen.getByTestId('modal')

      expect(modal).toBeInTheDocument()

      expect(modal).toMatchSnapshot()
   })
   it('close', () => {
      render(<BasicModal open={false} />)

      const modal = screen.queryByTestId('modal')
      expect(modal).not.toBeInTheDocument()
      expect(modal).toMatchSnapshot()
   })
})
