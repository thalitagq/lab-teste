import { createContext, useContext, useState } from "react";
import { ReactNode } from 'react';

interface NavbarContextData {
  currentPage: number,
  handleChangePage(page: number): void
}

interface NavbarContextProviderProps {
  children: ReactNode
}

const NavbarContext = createContext<NavbarContextData>({} as NavbarContextData);

export default function NavbarProvider({ children }: NavbarContextProviderProps) {
  const [currentPage, setCurrentPage] = useState(0)
  
  function handleChangePage(page: number) {
    setCurrentPage(page)
  }

  return (
    <NavbarContext.Provider
      value={{ currentPage, handleChangePage }}
    >
      {children}
    </NavbarContext.Provider>
  )
}

export function useNavbarContext() {
  const context = useContext(NavbarContext);

  return context;
}