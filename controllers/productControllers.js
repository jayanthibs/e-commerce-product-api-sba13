import Product from "../models/Product.js";

export async function createProduct(req, res) {
  try {
    const newProduct = await Product.create(req.body);
    console.log(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getProduct(req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: `Product with ${id} is not found` });
  }
}

export async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const options = {
      new: true,
    };
    const updateProduct = await Product.findByIdAndUpdate(
      id,
      req.body,
      options,
    );
    console.log(updateProduct);
    res.status(201).json(updateProduct);
  } catch (error) {
    res.status(404).json({ message: `Product with ${id} is not found` });
  }
}

export async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      res.status(404).json({ message: `Product with ${id} is not found` });
    } else {
      console.log(deletedProduct);
      res.status(200).json(deletedProduct);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getProducts(req, res) {
  try {
    const { category, minPrice, maxPrice, sortBy } = req.query;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const products = await Product.find({
      ...(category && { category }),
      ...((minPrice || maxPrice) && {
        price: {
          ...(minPrice && { $gte: Number(minPrice) }),
          ...(maxPrice && { $lte: Number(maxPrice) }),
        },
      }),
    })
      .sort(
        sortBy === "price_asc"
          ? { price: 1 }
          : sortBy === "price_desc"
            ? { price: -1 }
            : {},
      )
      .skip((page - 1) * limit)
      .limit(limit);

      
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
