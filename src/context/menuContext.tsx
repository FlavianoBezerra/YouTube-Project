import { ReactNode, createContext, useContext, useState } from "react";

interface MenuContextType {
    menuSize: boolean;
    setMenuSize: (size: boolean) => void;
}

const MenuContext = createContext<MenuContextType>({
    menuSize: true,
    setMenuSize: () => {}
});

export const useMenuContext = () => useContext(MenuContext);

export const MenuProvider: React.FC<{ children: ReactNode }> = ( {children} ) => {
    const [menuSize, setMenuSize] = useState<boolean>(true);

    return (
        <MenuContext.Provider value={{ menuSize, setMenuSize }}>
            {children}
        </MenuContext.Provider>
    );
};
