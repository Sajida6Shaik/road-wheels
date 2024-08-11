import axios from "axios";
const BASE_REST_API_URL="http://localhost:9194/customercar";
 
let token= localStorage.getItem( "JWT")
class CustomerCarServices{
    getAllCustomerCar(){
        return axios.get(BASE_REST_API_URL+"/getallcustomercar"
        ,{
            "headers":{
       
        "Authorization": token
            }
        }
        )
    }


    addCustomerCar(customercar){
        return (axios.post(BASE_REST_API_URL+"/add/1",customercar
        ,{
            "headers":{
       
        "Authorization": token
            }
        }
        ))
     }

     getCustomerCarById(id){
      return (axios.get(BASE_REST_API_URL+"/getone/"+id
      ,{
        "headers":{
   
    "Authorization": token
        }
    }
    ))
   }

  updateCustomerCar(id,customercar){
   return (axios.put(BASE_REST_API_URL+"/update/"+id,customercar
   ,{
    "headers":{

"Authorization": token
    }
}
))
  }
 

  deleteCustomerCar(id){
   return (axios.delete(BASE_REST_API_URL+"/delete/"+id
   ,{
    "headers":{

"Authorization": token
    }
}
))
  }
  




}
 


export default new CustomerCarServices();