class apiResponse{
    constructor(status,message,data,success){
        this.status=status;
        this.message=message;
        this.data=data;
        this.success=status<400;

    }

}


export {apiResponse};