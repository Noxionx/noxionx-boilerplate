/**
 * Entry point
 */

// Express lib -> Web Server
import express from 'express';

// Path util lib
import path from 'path';

// App port
const PORT = 3000;

// App instanciation
const app = express();

// Static files injection (client-side app)
app.use(express.static(path.join(__dirname, '../../frontend/public')));

// Start server
app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server started on port ${PORT}`);
  }
});
