const TodoItem = ({ item }) => {
  console.log("TodoItem component rendered");
  return <li>{item.title}</li>;
};

export default TodoItem;
