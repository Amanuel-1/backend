
import { db } from '../lib/db.js';


export async function createSeller(req, res) {
  const { SellerId, email, password, SellerName, userId } = req.body;

  try {
    const Seller = await db.Seller.create({
      data: {
        SellerId,
        email,
        password,
        SellerName,
        user: {
          connect: { id: userId },
        },
      },
    });
    res.json(Seller);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create Seller' });
  }
}

export async function getSellerById(req, res) {
  const { id } = req.params;

  try {
    const Seller = await db.Seller.findUnique({
      where: { id },
    });
    res.json(Seller);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve Seller' });
  }
}

export async function updateSeller(req, res) {
  const { id } = req.params;
  const { email, password, SellerName } = req.body;

  try {
    const Seller = await db.Seller.update({
      where: { id },
      data: {
        email,
        password,
        SellerName,
      },
    });
    res.json(Seller);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update Seller' });
  }
}

export async function deleteSeller(req, res) {
  const { id } = req.params;

  try {
    await db.Seller.delete({
      where: { id },
    });
    res.json({ message: 'Seller deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete Seller' });
  }
}

export async function getAllSellers(req, res) {
  try {
    const Sellers = await db.Seller.findMany({
     include:{
        user:true,
     }
    });
    console.log(res)
    res.json(Sellers);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to retrieve Sellers' });
  }
}

export async function getSellerByUserId(req, res) {
  const { userId } = req.params;

  try {
    const Seller = await db.Seller.findUnique({
      where: { SellerId: userId },
      include:{
        user:true,

      }
    
    });
    res.json(Seller);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve Seller by user ID' });
  }
}
