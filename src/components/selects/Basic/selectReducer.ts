interface SelectState {
   visibilityState: boolean
   promptState: boolean
   currentValueState: string
   arrowState: boolean
   blurState: boolean
}

type SelectAction =
   | { type: 'visibility'; payload: boolean }
   | { type: 'prompt'; payload: boolean }
   | { type: 'currentValue'; payload: string }
   | { type: 'arrow'; payload: boolean }
   | { type: 'blur'; payload: boolean }

const initSelectState: SelectState = {
   visibilityState: false,
   arrowState: false,
   promptState: false,
   currentValueState: '',
   blurState: false,
}

export function selectReducer(state: SelectState, action: SelectAction): SelectState {
   switch (action.type) {
      case 'visibility':
         return { ...state, visibilityState: action.payload }
      case 'prompt':
         return { ...state, promptState: action.payload }
      case 'currentValue':
         return { ...state, currentValueState: action.payload }
      case 'arrow':
         return { ...state, arrowState: action.payload }
      case 'blur':
         return { ...state, blurState: action.payload }

      default:
         throw new Error('Unknown action')
   }
}

export default initSelectState
