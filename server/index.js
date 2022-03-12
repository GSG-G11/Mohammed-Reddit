const app = require('./app');

app.listen(app.get('port'), () => console.log(`SERVER RUNNING SUCCESSFULLY on http://localhost:${app.get('port')}`));
