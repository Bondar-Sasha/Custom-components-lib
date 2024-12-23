interface Sizes {
   width: string
   height: string
}

export enum CheckboxPossibleSizes {
   small,
   medium,
   large,
}

export type CheckboxSizes = Record<keyof typeof CheckboxPossibleSizes, Sizes>

const data: CheckboxSizes = {
   small: { width: '12px', height: '12px' },
   medium: { width: '15px', height: '15px' },
   large: { width: '17px', height: '17px' },
}

export default data
