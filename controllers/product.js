import { db } from '../lib/db.js';

export async function createProduct(req, res) {
  const { name, price, description, photos, vendorId, sellerId } = req.body;

  try {
    const product = await db.product.create({
      data: {
        name,
        price,
        description,
        photos,
        vendor: {
          connect: { id: vendorId },
        },
        Seller: sellerId ? { connect: { id: sellerId } } : undefined,
      },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
}

export async function getProductById(req, res) {
  const { id } = req.params;

  try {
    const product = await db.product.findUnique({
      where: { id },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve product' });
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, price, description, photos, vendorId, sellerId } = req.body;

  try {
    const product = await db.product.update({
      where: { id },
      data: {
        name,
        price,
        description,
        photos,
        vendor: vendorId ? { connect: { id: vendorId } } : undefined,
        Seller: sellerId ? { connect: { id: sellerId } } : undefined,
      },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;

  try {
    await db.product.delete({
      where: { id },
    });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
}

export async function getAllProducts(req, res) {
  try {
    const products = await db.product.findMany({
      include:{
        vendor:true,
        orders:true,
        Seller:true
        
      }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
}

export async function getProductsByVendorId(req, res) {
  const { vendorId } = req.params;

  try {
    const products = await db.product.findMany({
      where: { vendorId },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products by vendor ID' });
  }
}

export async function getProductsBySellerId(req, res) {
  const { sellerId } = req.params;

  try {
    const products = await db.product.findMany({
      where: { sellerId },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products by seller ID' });
  }
}
