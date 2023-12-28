const authKey = async (req, res, next) => {
    const params = req.query;
    const key = params.key;

    if (key == process.env.API_KEY) {
        next()
    } else {
        res.status(401).json({massage : "You Dont Have Access!"})
    }
}

export default {
authKey
}