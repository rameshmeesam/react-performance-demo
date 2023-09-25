const Item = (data: [] = []) => {
  //console.log("dsf");
  return (
    <div className="product-item-wrapper">
      {data.length > 0 &&
        data.map((val: any, idx: any) => {
          return (
            <div className="product-item" key={idx}>
              {val.title}
            </div>
          );
        })}
    </div>
  );
};

export default Item;
