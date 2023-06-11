import React, { useContext, useRef } from "react";

import { listItem, listItemUl, select } from "./select.css";
import useOnClickOutside from "../../hooks/useOnClickOutside"

import { CategoriesContext, CategoryProps } from "../../contexts/CategoriesContext";

interface SelectProps {
  isSelectingCategory: boolean;
  setIsSelectingCategory: React.Dispatch<React.SetStateAction<boolean>>;
  category: CategoryProps;
  setCategory: React.Dispatch<React.SetStateAction<CategoryProps>>;
}

import { typographyStyle } from "../../assets/styles/headding.css";

function Select({ isSelectingCategory, setIsSelectingCategory, category, setCategory }: SelectProps) {
  const { categories } = useContext(CategoriesContext);
  const selectRef = useRef(null);
  useOnClickOutside(selectRef, () => setIsSelectingCategory(false));


  return (
    <div
      className={select({
        visibility: isSelectingCategory ? "visible" : "hidden",
        animation: isSelectingCategory ? "isSelect" : "isNot",
      })}
      ref={selectRef}
      
    >
      {isSelectingCategory && (
        <ul className={listItemUl}>
          {categories.map((item) => (
            <li
              className={listItem({
  
                background: category.slug === item.slug? "active" : "default",
              })}
              key={item.slug}
              onClick={() => setCategory(item)}
              >
              <span className={typographyStyle({
                role: "lable",
              })}>{item.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
