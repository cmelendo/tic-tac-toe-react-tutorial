import { createContext, ReactNode, useState } from "react";

type MenuProps = {
  children: ReactNode;
};

type MenuContext = {
  active: null | string;
  setActive: (value: string | null) => void;
};

export const MenuContext = createContext<MenuContext>({
  active: null,
  setActive: () => {},
});

export default function Menu({ children }: MenuProps) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <MenuContext.Provider value={{ active, setActive }}>
      {children}
    </MenuContext.Provider>
  );
}
