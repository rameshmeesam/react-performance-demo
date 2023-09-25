import NavTabs from "../components/nav";
import TodoApp from "../components/TodoApp";

const Products = () => {
  return (
    <>
      <NavTabs></NavTabs>
      <div className="content-area">
        <TodoApp />
      </div>
    </>
  );
};

export default Products;
