export interface AuthState {
    isAuthenticated? : Boolean;
    isInitialized? : Boolean;
    user: User | null;
}