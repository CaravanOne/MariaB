const express = require('express');
const router = express.Router();
const {index, form, formCompleted} = require("../controllers/indexController")

/* GET home page. */
router.get('/',index)
      .get("/entradas", form)
      .post("/entradas", formCompleted)


module.exports = router;
