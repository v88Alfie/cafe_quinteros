import React from "react";

/** Components */
import TodoItem from "./_components/TodoItem";
import TodoList from "./_components/TodoList";

const Todo = () => {
  return (
    <section>
      <div className="container pt-[14rem] pb-[4rem]">
        <div>
          <h4 className="text-montserrat_bold_18 md:text-montserrat_bold_22 xl:text-montserrat_bold_32 pb-[2rem]">
            Todos
          </h4>
          <TodoItem />
          <TodoList />
        </div>
      </div>
    </section>
  );
};

export default Todo;
