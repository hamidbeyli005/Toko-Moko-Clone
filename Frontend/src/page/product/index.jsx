import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "Loader";

function Product() {
  const { id } = useParams();
  const state = useSelector((state) => state.products.products);

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    state !== null ? setLoader(false) : "";
  }, []);

  if (!state) {
    return <Loader />;
  }

  const product = state.find((product) => product._id === id);
  if (state) {
    return <div>product: {product?.title}</div>;
  }
}

export default Product;
