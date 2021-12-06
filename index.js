const app = require('./src/app');
const checkConection = require('./src/config/dbConection');
const port = process.env.PORT || 8000;

app.listen(port, async () => {
  console.log('---------------------------------------------------------------------------------\n\n');
  console.log(`🏁  Server on ${process.env.PORT} 🏁`);
  // Check your mongoDB first, then: await checkConection();
});
