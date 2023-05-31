var jwt = require('jsonwebtoken');
const jutsecret = "Harryisagoodb$dy";
const fetchuser = (req, res, next) => {
    // console.log(req);
    // get the user from the jwt tockend and append and id to the request
    const tocken = req.header('auth-tocken');
    if (!tocken) {
            res.send({ error: "Acess Denied {Please authenticate using a valid tocken}" })
    }
    try {
        const data = jwt.verify(tocken, jutsecret);
        // console.log(data);
        req.user = data.user;  // This thing is not understood by me
        next();
    }
    catch {
            res.send({ error: "Acess Denied {Please authenticate using a valid tocken}" });
    }
}
module.exports = fetchuser;