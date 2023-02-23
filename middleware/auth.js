

const authenticationMiddleWare = async (req,res,next) => {
    console.log(req.headers.authorization);
}

module.exports = authenticationMiddleWare;