import React, { useContext, useRef } from "react";

import { CategoriesContext, CategoryProps } from "../../context/CategoriesContext.tsx";

interface SelectProps {
  isSelectingCategory: boolean;
  setIsSelectingCategory: React.Dispatch<React.SetStateAction<boolean>>;
  category: CategoryProps;
  setCategory: React.Dispatch<React.SetStateAction<CategoryProps>>;
}

//import checkIcon from "@assets/checkIcon.svg";

//import SelectStyles from "./styles";
import { selectStyles } from "./select.css.ts";


function Select({ isSelectingCategory, setIsSelectingCategory, category, setCategory }: SelectProps) {
  const { categories } = useContext(CategoriesContext);

  const wrapperRef = useRef(null);

  return (
    <div className={selectStyles.wrapper} ref={wrapperRef}>
      {isSelectingCategory && (
        <ul>
          {categories.map((item) => (
            <li key={item.slug} onClick={() => setCategory(item)}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="1.25"
                  y="1.25"
                  width="12.5"
                  height="12.5"
                  rx="4.75"
                  stroke={`#${item.color}`}
                  strokeWidth="2.5"
                />
              </svg>
              <h4>{item.title}</h4>
              <p>Image</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
