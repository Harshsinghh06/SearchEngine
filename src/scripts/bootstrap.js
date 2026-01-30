const axios = require("axios");

async function bootstrap() {
  for (let i = 1; i <= 1000; i++) {
    await axios.post("http://localhost:5000/api/v1/product", {
      title: `iPhone ${10 + (i % 8)}`,
      description: `iphone ${10 + (i % 8)} ${128 + (i % 3) * 128}gb black colour`,
      rating: (Math.random() * 1 + 4).toFixed(1),
      stock: Math.floor(Math.random() * 100),
      price: 30000 + Math.floor(Math.random() * 50000),
      mrp: 90000,
      currency: "Rupee"
    });
  }
}

bootstrap();
