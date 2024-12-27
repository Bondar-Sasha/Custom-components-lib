const ButtonVariantsEnum = {
   text: 'text',
   contained: 'contained',
   outlined: 'outlined',
}
const buttonVariants = Object.keys(ButtonVariantsEnum) as Array<keyof typeof ButtonVariantsEnum>

export default buttonVariants
