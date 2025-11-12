import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
const ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000';

app.use(cors({ origin: ORIGIN }));
app.use(express.json());

app.get('/health', (_req: express.Request, res: express.Response) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
