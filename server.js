const express = require("express");
const app = express();
const formidable = require("express-formidable");
const request = require("request");

app.use(express.static("public"));

app.use(formidable());

app.post("/search", function (req, res) {
  request(
    {
      url: "https://api.foursquare.com/v2/venues/explore",
      method: "GET",
      qs: {
        client_id: "E330AXN1QBTHHCASWTD2QRPAAY0EKYYCTBWMSCYM4GQ105I5",
        client_secret: "FX1I3T4SZSQ3PSHEUDKMKXBCYIUXABW2SQSRHZNE2X2AHDEE",
        near: req.fields.place,
        radius: 250,
        v: "20180323"
      }
    },
    function (err, result, body) {
      if (err) {
        console.error(err);
      } else {
        const allPopularVenues = JSON.parse(body).response.groups[0].items;
        const popularVenuesNames = allPopularVenues.map(venue => {
          return venue.venue.name;
        });
        res.send(popularVenuesNames);
      }
    }
  );
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
