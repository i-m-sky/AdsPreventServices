
const Success = (req,res)=>{
    try {
        console.log(req.body);
    } catch (error) {
        return res.status(500).json(error)
    }
}


module.exports = Success;