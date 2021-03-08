const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 5000;

let projects = [
  {
    id: 1,
    title: "Mastercraft Bamboo Monitor Riser",
    subtitle:
      "A beautiful & handcrafted monitor stand to reduce neck and eye strain.",
    description:
      "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand. Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",
    products: [
      {
        id: 0,
        name: "Bamboo Stand",
        price: "Pledge $25 or more",
        minPledge: 25,
        description:
          "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        units: 101,
      },
      {
        id: 1,
        name: "Black Edition Stand",
        price: "Pledge $75 or more",
        minPledge: 75,
        description:
          "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        units: 64,
      },
      {
        id: 2,
        name: "Mahogany Special Edition ",
        price: "Pledge $200 or more",
        minPledge: 200,
        description:
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        units: 0,
      },
    ],
    backersCount: 5007,
    targetPledge: 100000,
    currentPledge: 89914,
    expires: "2021-03-29T00:00:00.000Z",
  },
];

const app = express();

app.use(bodyParser.json());

// middleware to allow any website to request data (CORS)
app.use(cors());
app.options("*", cors());

app.get("/projects", (req, res) => {
  res.send(projects[0]);
});

app.post("/projects", (req, res) => {
  console.log(req.body);
  if (req.body.pledge > 0) {
    ++projects[0].backersCount;
    projects[0].currentPledge = projects[0].currentPledge + req.body.pledge;
    const product = projects[0].products.find(
      (product) => +product.id === +req.body.product
    );
    console.log(product.units);
    projects[0].units = product.units - 1;
    console.log(projects[0].units);

    res.send({ created: true });
  } else {
    res.status(400).send({ created: false });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
