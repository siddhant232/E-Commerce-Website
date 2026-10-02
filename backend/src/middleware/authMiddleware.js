const pool = require("../config/db");
const jwt = require('jsonwebtoken');

const authmiddleware = async (req,res,next) => {
    try {
        const token = req.cookies.Token;
        if(!token){
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const decodedToken = jwt.verify(token,process.env.JWT_SECRET_KEY);

        const result = await pool.query("SELECT * FROM users WHERE id = $1", [decodedToken.id]);
        if(result.rows.length === 0){
            return res.status(404).json({
                message: "User Not Found"
            });
        }
        req.user = result.rows[0];

        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

module.exports = authmiddleware;