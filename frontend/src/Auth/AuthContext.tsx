/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch, createContext } from "react";
import { AuthState } from "./Auth";

export enum AuthActionType {
    INITIALIZE = "INITIALIZE",
    SIGN_IN='SIGN_IN',
    SIGN_OUT='SIGN_OUT',
}
export interface PayLoadAction <T>{
    type: AuthActionType;
    payload: T;
}
export interface AuthContextType extends AuthState{
    dispatch : Dispatch<PayLoadAction<AuthState>>;
}
const Initialize: AuthState ={
    isAuthenticated:false,
    isInitialized:false,
    user: null,
};
const AuthContext = createContext<AuthContextType>({
    ...initialState,
    dispatch:()=> null,
});