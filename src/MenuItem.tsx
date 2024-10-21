import { ReactNode, useContext } from "react";
import { MenuContext } from "./Menu";

type MenuItemProps = {
  title: string;
  component: ReactNode;
};

export default function MenuItem({ title, component }: MenuItemProps) {
  const { active, setActive } = useContext(MenuContext);

  function handleClick() {
    setActive(title);
  }

  const titleComponent = <div onClick={handleClick}>{title}</div>;

  return (
    <li>
      {titleComponent}
      <div
        style={{
          display: active === title ? "block" : "none",
        }}
      >
        {component}
      </div>
    </li>
  );
}
