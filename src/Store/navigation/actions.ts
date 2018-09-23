import { action } from 'typesafe-actions'
import { NavigationActionTypes } from './types'

export const toggleRequest = () => action(NavigationActionTypes.TOGGLE_ACTION)

