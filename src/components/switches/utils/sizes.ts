interface Sizes {
   width: `${number}px`
   height: `${number}px`
}

const enum SwitchSizesEnum {
   small,
   medium,
   large,
}

type SwitchSizes = Record<keyof typeof SwitchSizesEnum, Sizes>

const switchSizes: SwitchSizes = {
   small: { width: '30px', height: '20px' },
   medium: { width: '35px', height: '20px' },
   large: { width: '40px', height: '20px' },
}

export default switchSizes
