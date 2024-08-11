import axios from "axios";
const BASE_REST_API_URL="http://localhost:9194/routes";
let token= localStorage.getItem("JWT")

class  RoutesServices{
    getAllRoutes(){
        return axios.get(BASE_REST_API_URL+"/getallRoutes"
        ,{
            "headers":{
       
                "Authorization": token
                }
        })
    }
    addRoutes(routes){
        return (axios.post(BASE_REST_API_URL+"/add/1",routes
        ,{
            "headers":{
       
                "Authorization": token
                }
        }
        ))
     }

     getRoutesById(id){
        return (axios.get(BASE_REST_API_URL+"/getone/"+id
        ,{
            "headers":{
       
                "Authorization": token
                }
        }
        ))
     }
  
    updateRoutes(id,routes){
     return (axios.put(BASE_REST_API_URL+"/update/"+id,routes
     ,{
        "headers":{
   
            "Authorization": token
            }
    }
    ))
    }
   
  
    deleteRoutes(id){
     return (axios.delete(BASE_REST_API_URL+"/delete/"+id
     ,{
        "headers":{
   
            "Authorization": token
            }
    }
    ))
    }


}
export default new RoutesServices(); 