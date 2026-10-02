
const profile = async (req, res) => {
    try {

        return res.status(200).json({
            user: req.user
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

module.exports = { profile };
