import { getSession } from "@auth/express"
 
export async function authSession(req, res, next) {
  res.locals.session = await getSession(req)
  next()
}
 