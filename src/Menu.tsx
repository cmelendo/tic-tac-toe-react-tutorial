import { createContext, ReactNode, useState } from "react";

type MenuProps = {
  defaultActive?: string | null;
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

export default function Menu({ children, defaultActive = null }: MenuProps) {
  const [active, setActive] = useState<string | null>(defaultActive);
  return (
    <MenuContext.Provider value={{ active, setActive }}>
      <ol
        style={{
          listStyleType: "none",
          padding: 0,
        }}
      >
        {children}
      </ol>
    </MenuContext.Provider>
  );
}
