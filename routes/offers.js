var express = require("express");
var router = express.Router();
const Mongolib = require("../db/Mongolib");

/* GET home page. */
router.get("/", function (req, res, next) {
	Mongolib.getDatabase((db) => {
		Mongolib.findDocuments(db, (docs) => {
			res.send(docs);
		});
	});
});

router.post("/", function (req, res, next) {
	Mongolib.getDatabase((db) => {
		Mongolib.createOffer(db, req.body)
			.then((result) => {
				console.log("Created Job " + result.insertedId);
				res.send(req.body);
			})
			.catch((error) => {
				console.error("Error:", error);
				res.status(400).send(error);
			});
	});
});

module.exports = router;
