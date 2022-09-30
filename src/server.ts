import dotenv from 'dotenv';

import app from './app';

dotenv.config();

const PORT: number = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});