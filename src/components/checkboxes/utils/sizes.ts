interface Sizes {
   width: `${number}px`
   height: `${number}px`
}

const enum CheckboxSizesEnum {
   small,
   medium,
   large,
}

type CheckboxSizes = Record<keyof typeof CheckboxSizesEnum, Sizes>

const checkboxSizes: CheckboxSizes = {
   small: { width: '12px', height: '12px' },
   medium: { width: '15px', height: '15px' },
   large: { width: '17px', height: '17px' },
}

export default checkboxSizes
