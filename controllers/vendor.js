import { PrismaClient } from '@prisma/client';
import { db } from '../lib/db.js';

export async function createVendor(req, res) {
  const { vendorId, email, password, vendorName, userId } = req.body;

  try {
    const vendor = await db.vendor.create({
      data: {
        vendorId,
        email,
        password,
        vendorName,
        user: {
          connect: { id: userId },
        },
      },
    });
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create vendor' });
  }
}

export async function getVendorById(req, res) {
  const { id } = req.params;

  try {
    const vendor = await db.vendor.findUnique({
      where: { id },
    });
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve vendor' });
  }
}

export async function updateVendor(req, res) {
  const { id } = req.params;
  const { email, password, vendorName } = req.body;

  try {
    const vendor = await db.vendor.update({
      where: { id },
      data: {
        email,
        password,
        vendorName,
      },
    });
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update vendor' });
  }
}

export async function deleteVendor(req, res) {
  const { id } = req.params;

  try {
    await db.vendor.delete({
      where: { id },
    });
    res.json({ message: 'Vendor deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete vendor' });
  }
}

export async function getAllVendors(req, res) {
  try {
    const vendors = await db.vendor.findMany({
     include:{
        user:true,
     }
    });
    console.log(res)
    res.json(vendors);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to retrieve vendors' });
  }
}

export async function getVendorByUserId(req, res) {
  const { userId } = req.params;

  try {
    const vendor = await db.vendor.findUnique({
      where: { vendorId: userId },
      include:{
        user:true,

      }
    
    });
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve vendor by user ID' });
  }
}
