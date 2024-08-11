import axios from "axios";
const BASE_REST_API_URL="http://localhost:9194/payment";
const token= localStorage.getItem("JWT")
// let userid= localStorage.getItem("userid")

// We are hardcoded userid because still we are not setting the userid from login response to local storag.
//Once we are done that change then will uncomment the above line of code and delete the hardcode below line.
const userid=1

class PaymentServices{
    getAllPayments(){
        return axios.get(BASE_REST_API_URL+"/getallpayments"
        ,{
            "headers":{
       
                "Authorization": token
                }
        })
    }
    addPayment(payment){
        
        return (axios.post(BASE_REST_API_URL+"/add/"+userid,payment
        ,{
            "headers":{
       
                "Authorization": token
                }
        }))
     }

     getPaymentById(id){
      return (axios.get(BASE_REST_API_URL+"/getone/"+id
      ,{
        "headers":{
   
            "Authorization": token
            }
    }))
   }

  updatePayment(id,payment){
   return (axios.put(BASE_REST_API_URL+"/update/"+id,payment
   ,{
    "headers":{

        "Authorization": token
        }
}))
  }
 

  deletePayment(id){
   return (axios.delete(BASE_REST_API_URL+"/delete/"+id
   ,{
    "headers":{

        "Authorization": token
        }
}))
  }
  




}

export default new PaymentServices();