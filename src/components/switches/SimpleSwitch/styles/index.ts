import sharedStyles from './shared.module.scss'
import defaultStyles from './default.module.scss'
import iOSStyles from './iOS.module.scss'

interface Variants {
   iOS: typeof iOSStyles
   default: typeof defaultStyles
}

const data: Variants = {
   iOS: iOSStyles,
   default: defaultStyles,
}

export default (variant: keyof Variants): Variants[typeof variant] => {
   const pickedStyle = data[variant]
   const preparedStyle = (Object.keys(sharedStyles) as Array<keyof typeof sharedStyles>).map(item => [
      item,
      [sharedStyles[item], pickedStyle[item] ?? ''].join(' '),
   ])
   return Object.fromEntries(preparedStyle)
}
