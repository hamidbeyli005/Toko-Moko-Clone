import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Loader from "Loader";
import toast from "react-hot-toast";

function NewProduct(value) {
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState();

  const getProducts = async () => {
    const res = await axios.get(`/api/products`);
    setProducts(res.data.products);
    setLoader(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    discount: "",
    sizeMore: "",
    product_id: "",
    category: "male",
  });
  const [images, setImages] = useState();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProd = async () => {
      const sizeLength = products.map((el) => el.size);
      const sizeElement = products.find(
        (el) => el.sizeMore === product.sizeMore
      );
      const size =
        sizeElement == undefined
          ? Math.max(...sizeLength) + 1
          : sizeElement.size;


      const boxLength = products.map((el) => el.box);
      const boxElemenet = products.find((el) => el.title === product.title);
      const box =
        boxElemenet == undefined ? Math.max(...boxLength) + 1 : boxElemenet.box;

      const gender = { male: "m", famale: "f", other: "o" }[product.category];

      if (!images)
        return toast.error("Resim yuklendıkten sonra yenıden deneyın...");

      axios
        .post("/api/products", {
          ...product,
          images,
          size,
          box,
          gender,
        })
        .then(() => {
          setProduct({
            title: "",
            description: "",
            price: "",
            discount: "",
            sizeMore: "",
            product_id: "",
            category: "male",
          });
          setImages();
          e.target.file_up.value = null;
        })
        .catch((err) => {
          console.log(err.request.responseText);
        });
    };
    newProd();
    getProducts();
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) return alert("File not exist.");

      let formData = new FormData();

      formData.append("image", file);

      const res = await axios.post("/api/upload", formData, {
        headers: { "content-type": "multipart/form-data" },
      });
      setImages(res.data);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  if (loader) {
    return <Loader />;
  }
  if (!loader) {
    return (
      <Container fluid="md">
        <Row>
          <Col className="pb-5 pt-4">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Row>
                  <Col md={7}>
                    <Input
                      className="mb-2"
                      id="title"
                      name="title"
                      type="text"
                      placeholder="Product Title"
                      value={product.title}
                      onChange={handleChangeInput}
                    ></Input>
                  </Col>
                  <Col md={3}>
                    <Input
                      id="title"
                      name="title"
                      type="select"
                      value={product.title}
                      onChange={handleChangeInput}
                    >
                      {products
                        .filter(
                          (a, i) =>
                            products.findIndex((s) => a.title === s.title) === i
                        )
                        .map((product, index) => (
                          <option key={index} defaultValue={product.title}>
                            {product.title}
                          </option>
                        ))}
                    </Input>
                  </Col>
                  <Col md={2}>
                    <div className="upload">
                      <input
                        style={{ maxWidth: "210px" }}
                        type="file"
                        name="image"
                        id="file_up"
                        onChange={handleUpload}
                      />
                    </div>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  type="textarea"
                  placeholder="Product Description"
                  value={product.description}
                  onChange={handleChangeInput}
                />
              </FormGroup>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="price">Price</Label>
                    <Input
                      id="price"
                      name="price"
                      placeholder="Product Price"
                      type="number"
                      value={product.price}
                      onChange={handleChangeInput}
                    />
                  </FormGroup>
                </Col>

                <Col>
                  <FormGroup>
                    <Label for="discount">Discount</Label>
                    <Input
                      id="discount"
                      name="discount"
                      placeholder="Product Discount"
                      type="number"
                      value={product.discount}
                      onChange={handleChangeInput}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="sizeMore">Size</Label>
                <Row>
                  <Col md={8}>
                    <Input
                      id="sizeMore"
                      name="sizeMore"
                      type="text"
                      placeholder="Product Size"
                      value={product.sizeMore}
                      onChange={handleChangeInput}
                    ></Input>
                  </Col>

                  <Col md={4}>
                    <Input
                      id="sizeMore"
                      name="sizeMore"
                      type="select"
                      value={product.sizeMore}
                      onChange={handleChangeInput}
                    >
                      {products
                        .filter(
                          (a, i) =>
                            products.findIndex(
                              (s) => a.sizeMore === s.sizeMore
                            ) === i
                        )
                        .map((product, index) => (
                          <option key={index} defaultValue={product.size}>
                            {product.sizeMore}
                          </option>
                        ))}
                    </Input>
                  </Col>
                </Row>
              </FormGroup>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="category">Category</Label>
                    <Input
                      id="category"
                      name="category"
                      type="select"
                      value={product.category}
                      onChange={handleChangeInput}
                    >
                      <option value="male">Male</option>
                      <option value="famale">Famale</option>
                      <option value="other">Other</option>
                    </Input>
                  </FormGroup>
                </Col>

                <Col>
                  <FormGroup>
                    <Label for="product_id">Product id</Label>
                    <Input
                      id="product_id"
                      name="product_id"
                      placeholder="Produc Id"
                      type="text"
                      value={product.product_id}
                      onChange={handleChangeInput}
                    />
                  </FormGroup>
                </Col>
              </Row>

              {/* <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input id="exampleFile" name="file" type="file" />
            </FormGroup> */}

              <Button color="success" style={{ width: "100%" }}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewProduct;
