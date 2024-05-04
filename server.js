const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json'); // Your database file
const middlewares = jsonServer.defaults();


server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers['origin'] || req.get('Origin')); // Allow any origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

server.use(router);
server.listen(8089, () => {
  console.log('JSON Server is running');
});
