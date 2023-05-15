const router = require("express").Router();
const CryptoJS = require("crypto-js");

const osID_DB = [123456789, 223456789, 213124354, 567564411]

router.post("/", async (req, res) => {
    const osID = req.body.osID

    if (osID_DB.indexOf(osID) !== -1) {

        const parsed_osID = process.env.VERIFICATION_SECRET + ":" + `${osID}`

        const credentials = {
            "consumerKey": CryptoJS.AES.encrypt(
                parsed_osID,
                process.env.CONSUMERKEY_PASS_SEC
            ).toString(),
            "consumerSecret": CryptoJS.AES.encrypt(
                parsed_osID,
                process.env.CONSUMERSECRET_PASS_SEC
            ).toString()
            }
        res.status(200).json(credentials)
    } else {
        res.status(403).json("Forbidden request")
    }
})

module.exports = router;