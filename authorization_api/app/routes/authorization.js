const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/generateToken", async (req, res) => {
    try {
        console.log("Incoming request...")

        const consumerKey = req.body.consumerKey
        const consumerSecret = req.body.consumerSecret

        // DECRYPT CONSUMER KEY AND SECRET
        const decryptedKey = CryptoJS.AES.decrypt(
            consumerKey,
            process.env.CONSUMERKEY_PASS_SEC
        ).toString(CryptoJS.enc.Utf8);
        const decryptedSecret = CryptoJS.AES.decrypt(
            consumerSecret,
            process.env.CONSUMERSECRET_PASS_SEC
        ).toString(CryptoJS.enc.Utf8);


        if (decryptedKey.split(":")[0] === process.env.VERIFICATION_SEC && decryptedSecret.split(":")[0] === process.env.VERIFICATION_SEC) {
            const accessToken = jwt.sign(
                {
                  consumerKey: consumerKey,
                  consumerSecret: consumerSecret,
                },
                process.env.JWT_SEC,
                { expiresIn: "5m" }
              );
              res.status(200).json(accessToken)
        } else {
            res.status(403).json("Invalid credentials!")
        }

    } catch (err) {
        res.status(500).json("Internal Server Error")
    }
})

module.exports = router;