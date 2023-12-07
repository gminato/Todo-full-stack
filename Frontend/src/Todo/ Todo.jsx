const Todo = () => {
  const todoList = [{id: 1, title: "Todo 1", description: "Description 1"}, {id: 2, title: "Todo 2", description: "Description 2"}]
  return (
    <div className="todo-container">
      <h1>Todo List </h1>
      <div className="input-container">
        <div className="title-container">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
        </div>
        <div className="description-container">
        <label htmlFor="description">Description</label>
        <input type="text" id="description" />
        </div>
        <div className="button-container">
        <button>Add Todo</button>
        </div>
      </div>
      <div className="todo-list">
        {todoList.map((todo) => (
          <div className="todo-item" key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        ))}</div>
    </div>
  );
}

export default Todo;