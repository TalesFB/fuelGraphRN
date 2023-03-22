import { createContext, useState, useEffect } from "react";
export const AuthCarContext = createContext({});

export function AuthCarProvider({ children }: any) {
  const [plateCar, setPlateCar] = useState(null);
  return (
    <AuthCarContext.Provider value={{ plateCar, setPlateCar }}>{children}</AuthCarContext.Provider>
  );
}
