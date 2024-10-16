import { createContext, useContext, useState } from "react";

interface CategoryType {
  categoryId: string;
  setCategoryId: (id: string) => void;
}

interface CategoryContextProps {
  children: React.ReactNode;
}

const CategoryContext = createContext<CategoryType>({} as CategoryType);
export const useCategoryContext = () => useContext(CategoryContext);

export const CategoryProvider: React.FC<CategoryContextProps> = ({ children }) => {
  const [categoryId, setCategoryId] = useState('0');

  return (
    <CategoryContext.Provider value={{ categoryId, setCategoryId }}>
      {children}
    </CategoryContext.Provider>
  );
};