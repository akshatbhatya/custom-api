const requestHandler=async(promiseHandlerAsync)=>{
    return ()=>{
        Promise.resolve(promiseHandlerAsync(res,req,next))
        .catch((err)=>{
        Promise.reject("promise not resolved")
        next(err);
    })}
}



const asyncHandler=(fn)=>async(req,res,next)=>{

        try{

            await fn(req,res,next)
             
        }
        catch(err){
            res.status(err.code||400).json({
                success:false,
                message:err.message
            })

        }
    
}

export {asyncHandler};