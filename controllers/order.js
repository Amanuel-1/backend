import { db } from '../lib/db.js';


export async function createOrder(req, res) {
  const { userId, productId, sellerId, deliveryAddress, quantity, price } = req.body;

  try {
    const order = await db.order.create({
      data: {
        userId,
        productId,
        sellerId,
        deliveryAddress,
        quantity,
        price,
      },
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
}

export async function getOrderById(req, res) {
  const { id } = req.params;

  try {
    const order = await db.order.findUnique({
      where: { id },
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve order' });
  }
}

export async function updateOrder(req, res) {
  const { id } = req.params;
  const { deliveryAddress, quantity, price } = req.body;

  try {
    const order = await db.order.update({
      where: { id },
      data: {
        deliveryAddress,
        quantity,
        price,
      },
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update order' });
  }
}

export async function deleteOrder(req, res) {
  const { id } = req.params;

  try {
    await db.order.delete({
      where: { id },
    });
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete order' });
  }
}
