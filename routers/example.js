const express = require("express");

const router = express.Router({ mergeParams: true });

router

  //  -- ENDPOINT DESCRIPTION --

  .get("/", /* [middleware here], */ async (req, res, next) => {
    try {
      return res.status(200).json({
        success: true,
        message: "Success message",
      });
    } catch (error) {
      console.log("💥 Error at ...", error);
      next("An error ocurred");
    }
  });

module.exports = router;
