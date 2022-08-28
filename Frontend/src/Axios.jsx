import axios from "axios";
import { useEffect, useState } from "react";

function Axios() {
  const [products, setProducts] = useState([]);

  const sizeMore = "48 sm x 45 sm";
  const title = "Surprise Big Box";

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`http://localhost:5000/api/products`);
      setProducts(res.data.products);
    };

    getProducts();
  }, []);


  const click = async () => {
    const sizeLength = products.map((el) => el.size);
    const sizeElemenet = products.find((el) => el.sizeMore === sizeMore);
    const size =
      sizeElemenet == undefined
        ? Math.max(...sizeLength) + 1
        : sizeElemenet.size;

    const boxLength = products.map((el) => el.box);
    const boxElemenet = products.find((el) => el.title === title);
    const box =
    boxElemenet == undefined
        ? Math.max(...boxLength) + 1
        : boxElemenet.box;


    await axios
      .post("http://localhost:5000/api/products",{
        product_id: "prod9",
        title: title,
        price: 75,
        discount: 15,
        size,
        box,
        description:
          "Electronics Box hədiyyə qutuları oğlan və qız uşaqları üçün nəzərdə tutulmuşdur. Yaş qrupu: 3-12 Daxildir: məktəb ləvazimatları, elektronika",
        sizeMore,
        category: "male",
        
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.request.responseText);
      });
  };

  return (
    <div>
      Axios
      <button onClick={click}>dscsdc</button>
    </div>
  );
}

export default Axios;
