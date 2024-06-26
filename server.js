// sk_test_51PVUibRwY6FbkTKpXPPVdQ326Iu3Mrsq0PziGGXG4zy2JJsLRUDDKuxg7P4Ubs6FzPPN8SfBZHMvNojY35aGWa0500Onz9lnXK
// Coffee Price : price_1PVUp4RwY6FbkTKpO46w3uEV
// Sunglassess : price_1PVUrNRwY6FbkTKpx4x8RfuB
// Camera : price_1PVUriRwY6FbkTKpckkNf1Ws

const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51PVUibRwY6FbkTKpXPPVdQ326Iu3Mrsq0PziGGXG4zy2JJsLRUDDKuxg7P4Ubs6FzPPN8SfBZHMvNojY35aGWa0500Onz9lnXK"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  const items = req.body.items;
  let lineItems = [];

  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3001/success",
    cancel_url: "http://localhost:3001/cancel",
  });
  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("Listening on port 4000"));
