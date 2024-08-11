import axios from "axios";
const BASE_REST_API_URL="http://localhost:9194/admin";
let token= localStorage.getItem("JWT")
 

class AdminServices{
    getAllAdmins(){
        return axios.get(BASE_REST_API_URL+"/getallAdmins"
        ,{
            "headers":{
       
                "Authorization": token
                }
        }
        )
    }

 

    addAdmin(admin){
        return (axios.post(BASE_REST_API_URL,"/add",admin

        ,{
            "headers":{
       
                "Authorization": token
                }
        }
        ))
     }

     getAdminById(id){
        return (axios.get(BASE_REST_API_URL+"/getone/"+id
        ,{
            "headers":{
       
                "Authorization": token
                }
        }
        ))
     }
  
    updateAdmin(id,admin){
     return (axios.put(BASE_REST_API_URL+"/update/"+id,admin
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
export default new AdminServices();