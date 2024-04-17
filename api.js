const URL_API = "https://apiconsola1-1.onrender.com/api/tickets/"


//////////////////////////////////////////////////////////////////////////////// Get
export const getProducts=async()=>{
    const products=await fetch(URL_API + "getAll");
    return await products.json();
}

////////////////////////////////////////////////////////// Delete
export const deleteProduct=async(barcode)=>{
    const res=await fetch(URL_API+ "deleteTicket/" + barcode,{
        method:"DELETE",
        headers:{
            Accept:'application/json',
            "Content-Type":'application/json',
        }
        
    })
    return await res.json();
}

///////////////////////////////////////////////////////// Insert

export const insertTicket=async(product)=>{
    const res=await fetch(URL_API + "insertTicket",{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type":'application/json',
           
        },
        body:JSON.stringify(product)
    });
    return await res.json();
}


/////////////////////////////////////////////////////////////////// UPDATE

export const updateTicket = async (product, barcode) =>{
    const res= await fetch(URL_API + "updateTicket/" + barcode, {
        method: "PUT",
        headers:{
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify(product)
    });
    return await res.json();
}
