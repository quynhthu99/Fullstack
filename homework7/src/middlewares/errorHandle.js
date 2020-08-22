const errorHandle = (err,req,res,next) => {
    console.log(err);
    res.send(err)

}
const tryCatch = (f) => async (req,res,next)=> {
    try{
        await f(req,res)
    } catch(error){
        next(error)
    }
}

module.exports = {
    errorHandle,
    tryCatch
}