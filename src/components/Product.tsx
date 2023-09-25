//import Tshirt from "../../public/img/Tshirt.jpg";

interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  availability: boolean;
}

const Product = (props: IProduct[]) => {
  return (
    <div className="Product">
      <div></div>
      <div> </div>
    </div>
  );
};

export default Product;
