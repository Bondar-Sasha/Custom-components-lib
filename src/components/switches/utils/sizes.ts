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
   small: { width: '28px', height: '15px' },
   medium: { width: '37px', height: '20px' },
   large: { width: '47px', height: '25px' },
}

export default switchSizes
