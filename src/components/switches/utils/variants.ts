const SwitchVariantsEnum = {
   default: 'default',
   iOS: 'iOS',
}

const switchVariants = Object.keys(SwitchVariantsEnum) as Array<keyof typeof SwitchVariantsEnum>

export default switchVariants
