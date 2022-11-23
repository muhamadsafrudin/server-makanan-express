
module.exports.apiKey = function(req, res, next) {

    const apiKey = req.headers['api-key'];

    if(typeof apiKey !== 'undefined') {

        if(apiKey == "masak_apa"){

            next()

        }else {

            res.send({
                "message" : "Your apikey is wrong"
            }, 403)

        }
        

    } else {

        res.send({
            "message" : "Access need to use apikey"
        }, 403)

    }

}