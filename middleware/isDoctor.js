const isDoctor = async (req, res, next) => {
    try {
    if (req.roleId === 3) {
        next();
    } else {
        return res.status(403).json({
        success: false,
        message: "You do not have permissions",
        });
    }
    } catch (error) {
    return res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.message,
    });
    }
};

module.exports = isDoctor;
