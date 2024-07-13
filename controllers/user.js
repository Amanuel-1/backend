import { hash, compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import { getSession } from '@auth/express';
import { db } from '../lib/db.js';


const JWT_SECRET = 'your_jwt_secret'; 

export async function verifyUser(req, res) {
 const {session}  = res.locals
const {userEmail}= req.body

if(user === sesison?.user.email){
  return true
}
return false
}


export async function editUser(req, res) {

  const { id } = req.params;
  const { email, password, name } = req.body;

  try {
    const user = await db.user.update({
      where: { id },
      data: {
        email,
        password,
        name,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;

  try {
    const user = await db.user.delete({
      where: { id },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
}


export default { authenticateToken, profile, editUser, deleteUser};
