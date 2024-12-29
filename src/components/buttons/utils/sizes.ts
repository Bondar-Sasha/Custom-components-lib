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
   medium: { width: '80px', height: '35px' },
   large: { width: '90px', height: '40px' },
}

export default buttonSizes
