import CategoriesContext from "./CategoriesContext";
import TasksContext from "./TasksContext";
import PathContext from "./PathContext";

interface Props {
  children?: React.ReactNode;
}

function ContextProvider({ children }: Props) {
  return (
    <CategoriesContext>
      <TasksContext>
        <PathContext>
          {children}
        </PathContext>
      </TasksContext>
    </CategoriesContext>
  );
}

export default ContextProvider;
