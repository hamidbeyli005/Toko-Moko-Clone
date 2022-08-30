import axios from "axios";
import { useEffect, useState } from "react";

function Api() {
  const [products, setProducts] = useState([]);

  const sizeMore = "48 sm x 45 sm";
  const title = "Surprise Big Box";
  const category = "male";

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`/api/products`);
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
      boxElemenet == undefined ? Math.max(...boxLength) + 1 : boxElemenet.box;

    const gender = { male: "m", famale: "f", other: "o" }[category];

    await axios
      .post("/api/products", {
        product_id: "prod17",
        title: title,
        price: 75,
        discount: 15,
        size,
        box,
        gender,
        description:
          "Electronics Box hədiyyə qutuları oğlan və qız uşaqları üçün nəzərdə tutulmuşdur. Yaş qrupu: 3-12 Daxildir: məktəb ləvazimatları, elektronika",
        sizeMore,
        category,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.request.responseText);
      });
  };
  const handle = async (e) => {
    e.preventDefault();

    let query = `${e.target[0].name}=${e.target[0].value}&${e.target[1].name}=${e.target[1].value}`;

    const res = await axios.get(`http://localhost:5000/api/products/?${query}`);
    console.log(res);
  };

  return (
    <div>
      <form onSubmit={handle}>
        <input type="checkbox" name="box" id="box" value="14" />
        <input type="checkbox" name="gender" id="gender" value="m" />
        <button type="submit">submıt</button>
      </form>
      <button onClick={click}>dscsdc</button>
    </div>
  );
}

export default Api;
