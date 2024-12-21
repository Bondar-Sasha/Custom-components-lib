interface Sizes {
   width: string
   height: string
}

export enum ButtonPossibleSizes {
   small,
   medium,
   large,
}

export type ButtonSizes = Record<keyof typeof ButtonPossibleSizes, Sizes>

const data: ButtonSizes = {
   small: { width: '70px', height: '30px' },
   medium: { width: '90px', height: '37px' },
   large: { width: '93px', height: '43px' },
}

export default data
