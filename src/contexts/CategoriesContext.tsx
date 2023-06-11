import React, { createContext, useState, useEffect, useContext } from "react";

export const CategoriesContext = createContext({} as CategoriesContextProps);

export interface CategoryProps {

  title: string;
  slug: string;
}

interface CategoriesContextProps {
  categories: CategoryProps[];
  addCategory: (category: CategoryProps) => void;
  removeCategory: (slug: string) => void;
  changeCategoriesOrder: (result: CategoryProps[]) => void;
}

interface Props {
  children?: React.ReactNode;
}

const defaultCategory = [
  {
    taskAmout: 0,
    title: "Default",
    slug: "/",
  },
];

function CategoriesProvider({ children }: Props) {
  const initialCategories = JSON.parse(
    localStorage.getItem("userCategoriesDenys") || JSON.stringify(defaultCategory),
  );

  const [categories, setCategories] = useState<CategoryProps[]>(initialCategories);

  const addCategory = (category: CategoryProps) => {
    setCategories((prevCategories) => [...prevCategories, category]);
  };

  const removeCategory = (slug: string) => {
    setCategories((prevCategories) => prevCategories.filter((category) => category.slug !== slug));
  };

  const changeCategoriesOrder = (result: CategoryProps[]) => {
    setCategories(result);
  };

  const updateCategories = useEffect(() => {
    localStorage.setItem("userCategoriesDenys", JSON.stringify(categories));
  }, [categories]);

  return (
    <CategoriesContext.Provider
      value={{ categories, addCategory, removeCategory, changeCategoriesOrder }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesProvider;
