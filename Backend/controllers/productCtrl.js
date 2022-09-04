const Products = require("../models/productModel");

// Filter, sorting and paginating

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryObj = { ...this.queryString }; //queryString = req.query

    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
    this.query.find(JSON.parse(queryStr));

    return this;
  }

  minAndMax() {
    if (this.queryString.min) {
      var min = this.queryString.min.split(",").toString();
    } else {
      console.log(" min yoxdu");
    }
    if (this.queryString.max) {
      const max = this.queryString.max.split(",").toString();
    } else {
      console.log(" max yoxdu");
    }

    return { ...this, min };
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }

  // paginating() {
  //     const page = this.queryString.page * 1 || 1;
  //     const limit = this.queryString.limit * 1 || 9;
  //     const skip = (page - 1) * limit;
  //     this.query = this.query.skip(skip).limit(limit);
  //     return this;
  // }
}

const productCtrl = {
  getProducts: async (req, res) => {
    try {
      const features = new APIfeatures(Products.find(), req.query)
        .filtering()
        .sorting();
      // .paginating()
      // .minAndMax()

      let products = await features.query;

      // let min = features.queryString.min || 0;
      // let max = features.queryString.max || Infinity;
      // products = products.filter((el) => el.price >= min && el.price <= max)

      res.json({
        status: "success",
        result: products.length,
        products: products,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createProduct: async (req, res) => {
    try {
      const {
        product_id,
        title,
        price,
        discount,
        description,
        sizeMore,
        category,
        size,
        box,gender,images
      } = req.body;
      if(!images) return res.status(400).json({msg: "No image upload"})


      const product = await Products.findOne({ product_id });
      if (product)
        return res.status(400).json({ msg: "This product already exists." });

      const newProduct = new Products({
        product_id,
        title,
        price,
        discount,
        description,
        size,
        sizeMore,
        category,
        box,gender,images
      });

      await newProduct.save();
      res.json({ msg: "Created a product" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Products.findByIdAndDelete(req.params.id);
      res.json({ msg: "Deleted a Product" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const {
        title,
        price,
        discount,
        description,
        size,
        sizeMore,
        category,
        box,images
      } = req.body;

      await Products.findOneAndUpdate(
        { _id: req.params.id },
        {
          title,
          price,
          discount,
          description,
          size,
          sizeMore,
          category,
          box,images
        }
      );

      res.json({ msg: "Updated a Product" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = productCtrl;
