import express from 'express';
import cors from 'cors';

// Import routes
// import userRoutes from './routes/user.js';
import vendorRouter from './routes/vendor.js';
// import myMiddleware from './middleware/middleware.js';
import { authSession } from './midleware/session.js';
import productRouter from './routes/product.js';
import sellerRouter from './routes/seller.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Add CORS if your frontend will be hosted on a different domain
// app.use(authSession)
// app.use(myMiddleware);

// Use routes
// app.use('/users', userRoutes);

app.use('/products', productRouter);
app.use('/vendors', vendorRouter);
app.use('/sellers', sellerRouter);


// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;
