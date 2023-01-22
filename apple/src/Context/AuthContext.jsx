import { createContext ,useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({children}){
    const [isAuth ,setAuth] = useState(false)
     
     const login = () => {
        setAuth( true)
     }

     const logout = () =>{
        setAuth (false)
     }

    
    return <AuthContext.Provider  value={{isAuth, login ,logout}}>{children}</AuthContext.Provider>
}