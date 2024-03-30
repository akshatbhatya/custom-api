class apiHAndler extends Error{

    constructor(stausCode,message,error,stack){
        super(message)
        this.stack=stack;
        this.message=message;
        this.stausCode=stausCode;
        this.error=error;
        this.data=null;

        if(stack){
            this.stack=stack
        
        }else{
            this.captureStackTrace(this,this.constructor)
        }
    }
    
}

export {apiHAndler};