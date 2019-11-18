import app from './app';
import config from './config';

app.listen(config.server.port, () => {
  console.log(`Server listening on port ${config.server.port}`);
});
