interface Sizes {
   width: `${number}px`
   height: `${number}px`
}

const enum ButtonSizesEnum {
   small,
   medium,
   large,
}

type ButtonSizes = Record<keyof typeof ButtonSizesEnum, Sizes>

const buttonSizes: ButtonSizes = {
   small: { width: '70px', height: '30px' },
   medium: { width: '90px', height: '37px' },
   large: { width: '93px', height: '43px' },
}

export default buttonSizes
