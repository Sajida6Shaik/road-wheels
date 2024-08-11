import React, { useState,useEffect} from 'react'
 
import { Link,useParams,useNavigate } from 'react-router-dom'
import CustomerCarServices from '../../services/CustomerCarServices'

export const AddCustomerCar = () => {
  
   const[date,setDate]=useState('')
   
   
    
   const navigate=useNavigate()
   const {id}=useParams()
   const changeTitle=()=>{
if(id){

console.log("returned Title update customer.Id value from url: ",{id})
return <h2 className="text-center "> Update CustomerCar</h2>
}
else{
 console.log("returned Title Add customer.Id value from url:",{id})

return <h2 className="text-center "> AddCustomerCar</h2>
}}

 useEffect(()=>{
     console.log("useEffect triggered")
     console.log("Id value obtained from url using useParams()",id)
     // for updation
     if(id){
      
     CustomerCarServices.getCustomerCarById(id).
     then((response)=>{
       console.log("Response received from API",
       JSON.stringify(response.data))
       
       setDate(response.data.date);
                           

       console.log("State variables changed")
       console.log(" changed State variables ")
       console.log(" changed State vars ",{ date }) 
     
     }).catch(error=>{
       console.log("Error received from Api..",error)
     })
   }

   },[])

   const saveOrUpdateCustomerCar=(e)=>
   { e.preventDefault();
      
       const customercar={ date}
       console.log("Host object received form form:",customercar);
if(id){
 //update logic
 CustomerCarServices.updateCustomerCar(id,customercar).
 then((response)=>{console.log("Response received from put api..."
 + JSON.stringify(response.data))
 navigate('/customercar')
}).
 catch(error=>{
   console.log("error received from save api..",error)});
 }

//save logic

else{

 
      
     CustomerCarServices.addCustomerCar(customercar).
     then((response)=>{console.log("Response received from save api..."
     + JSON.stringify(response.data))
      }).
     catch(error=>{
       console.log("error received from save api..",error)
      });
     }
}
   
  
  return (

    <div className='container mt-2 mb-5 '>




       <div className='card col-md-6 offset-md-3'>



           {/* <h2 className="text-center "> AddEmployee</h2> */}
              {changeTitle()}
           <div className='card-body'>
               <form>

 

{/*4. Date text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>Date</label>
                 <input type="text" placeholder="Enter Date " name="date"
                  value={ date} className='form-control'
               onChange={(e) => {setDate(e.target.value)}}
                    /></div>


  
 
<button onClick={(e)=>saveOrUpdateCustomerCar(e)} className='btn btn-success'>Save CustomerCar</button>
&nbsp;&nbsp;
<Link to="/customercar" className='btn btn-danger'>Cancel</Link>&nbsp;&nbsp;

               </form>

           </div>

       </div>

        </div>
  
  )
}
