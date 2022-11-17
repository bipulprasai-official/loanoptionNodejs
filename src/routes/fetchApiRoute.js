const express = require("express");
const router = express.Router();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

router.get("/category/:category", async (req, res) => {
  try {


    //  category as parameter
    const category = req.params.category;

    // call api
    const url = await fetch(
      `https://api.publicapis.org/entries?category=${category}`
    );

    const apiResponse = await url.json();

    // if category is not found return no data found else return data.
    if (apiResponse.count === 0) {
      console.log("No Result found found");
      return res.status(400).send({ message: "NO result found." });
    } else {
      // console data
      console.log(`${category} has ${apiResponse.count} entries`);
      console.log(apiResponse);

      res.send("server is running...");
    }
    
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
