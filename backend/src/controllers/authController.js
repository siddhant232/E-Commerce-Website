const pool = require("../config/db");
const bcrypt = require('bcrypt');
const generateToken = require("../utils/generateToken");

// Register Controller
const register = async (req,res)=>{

    try {
        const {username,password} = req.body;
        const saltrounds = 10;
        
        const isUserExist = await pool.query("SELECT * FROM users WHERE username = $1",[username]);
        if(isUserExist.rows.length > 0){
            return res.status(409).json({
                message : "User already exists"
            })
        }

        const hashpassword = await bcrypt.hash(password,saltrounds);
        

        const user = await pool.query("INSERT INTO users(username,password) VALUES ($1,$2) RETURNING id", [username,hashpassword]);

        const token = generateToken(user.rows[0]);
        console.log("token",token);
        
        
        res.cookie('Token',token,{
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000
        })

        
        res.status(201).json({
            message : "Registration successfull"
        })

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Registration failed"
        });
        
    }
    
}

// Login Controller
const login =  async (req,res) => {
    try {
        const {username,password} = req.body;
        
        const isuservalid = await pool.query("SELECT *FROM users WHERE username = $1 ", [username]);

        if(isuservalid.rows.length === 0){
            return res.status(404).json({
                message: "User Not Found"
            })
        }

        const isPasswordValid = await bcrypt.compare(password,isuservalid.rows[0].password);

        if (!isPasswordValid){
            return res.status(401).json({
                message: "invalid credentials"
            });
        }

       const token = generateToken(isuservalid);
        
        res.cookie('Token',token,{
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            message: "Login successfull"
        })
        
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            message: "Login failed"
        });
    }
}


module.exports = {register,login};