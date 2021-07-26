import { bindRoutineToReduxForm, createRoutine } from 'redux-saga-routines';
import { SIGNUP_USER, LOGIN, VERIFY_USER } from './types';

export const signupUser = createRoutine(SIGNUP_USER);
export const login = createRoutine(LOGIN);
export const verifyUser = createRoutine(VERIFY_USER);

export const bindedSignupUser = bindRoutineToReduxForm(signupUser);
export const bindedLoginUser = bindRoutineToReduxForm(login);
