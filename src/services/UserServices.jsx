import axios from "axios";
const BASE_REST_API_URL="http://localhost:9194/user";
let token= localStorage.getItem("JWT")
 
class UserServices{
    getAllUsers(){
        return axios.get(BASE_REST_API_URL+"/getallusers"
        ,{
            "headers":{
       
                "Authorization": token
                }
        }
        )
    }
    addUser(user){
        return (axios.post(BASE_REST_API_URL,"/add/1",user
        ,{
            "headers":{
       
                "Authorization": token
                }
        }
        ))
     }

     getUserById(id){
        return (axios.get(BASE_REST_API_URL+"/getone/"+id
        ,{
            "headers":{
       
                "Authorization": token
                }
        }
        ))
     }
  
    updateUser(id,user){
     return (axios.put(BASE_REST_API_URL+"/update/"+id,user
     ,{
        "headers":{
   
            "Authorization": token
            }
    }
    ))
    }
   
  
    deleteUser(id){
     return (axios.delete(BASE_REST_API_URL+"/delete/"+id
     ,{
        "headers":{
   
            "Authorization": token
            }
    }
    ))
    }
}
export default new UserServices();