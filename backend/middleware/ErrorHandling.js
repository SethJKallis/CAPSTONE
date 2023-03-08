function errorHandling(err,res){
    if(err){
        const status = err.status || 500;
        res.status(status).json({
            status:status,
            err: "An error has occurred"
        })
    }
}

module.exports = {errorHandling};