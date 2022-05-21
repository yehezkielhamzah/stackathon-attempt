const app = require('./app');
const seed = require('../seed')

app.listen(port, ()=> console.log(`listening on port ${port}`));

seed()