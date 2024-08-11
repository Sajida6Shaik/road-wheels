 import React,{useState} from 'react'
 import {useEffect}from 'react'
import PaymentServices from '../../services/PaymentServices'
import{Link,useNavigate}from 'react-router-dom'
 
 export const ListPayment = () => {
//const [state variable,function that can chnage the state variable]
const[PaymentArray,setPaymentArray]=useState([])
const navigate=useNavigate();
const deletePayment=(id)=>{
  console.log("Delete payment handler fired.Id value received=",id)

  PaymentServices.deletePayment(id).
  then((response)=>
  {console.log("Response received from delete api..."
  + JSON.stringify(response.data))
  fetchAllPayments()
   }).
  catch(error=>{
    console.log("error received from delete api..",error)
   });
}



const fetchAllPayments=()=>{
  console.log("fetchAllPayments fired..")

  
      PaymentServices.getAllPayments().then((response)=>{
        console.log("Response received from API",response.data)
  
       setPaymentArray(response.data);
       console.log("State variable  assigned with response.data")
  
      })
    }















//arrow function and dependency array
 

    useEffect(()=>{
      console.log("UseEffect Hook Fired..........")
      fetchAllPayments()
  
  
      PaymentServices.getAllPayments().then((response)=>{
        console.log("Response received from API",response.data)
  
       setPaymentArray(response.data);
       console.log("State variable  assigned with response.data")
  
       
  
  
  
      })
  
  
    },[])


   return (
     <div className='container'>
        {console.log("Application Rendered")}
     <h3 className='text-center'>List of PaymentDetails</h3>
     {/* <Link to ="/addpayment" className='btn btn-primary float-end mb-2'>Add Payment</Link> */}
     {/* Admin access is not there for add payment only customer has */}

       <table className="table table-dark table-striped">
           <thead>
               <tr className='table-danger' >
                   {/* <th>PaymentId</th> */}
                   <th>Payment Type</th>
                   <th>Payment Price</th>
                   <th>Customer Name</th>
                   <th>Payment Date</th>
                   <th>Customer EmailID</th>
                   <th>Customer Area</th>
                   <th>Customer City </th>
                   <th>Actions</th>
                   <th>Delete </th>
               </tr>
           </thead>
           
           <tbody>
           {

            PaymentArray.map((payment,key)=>
               // returntype
               <tr key={key}> 
                  
                   {/* <td>{payment.paymentId}</td> */}
                   <td>{payment.paymentType}</td>
                   <td>{payment.paymentPrice}</td> 
                   <td>{payment.customer.user.username}</td>
                   <td>{payment.customer.date}</td>
                   <td>{payment.customer.emailId}</td>
                   <td>{payment.customer.area}</td>
                   <td>{payment.customer.city}</td>

                 

                   <td><Link to={`/payment/update/${payment.paymentId}`} className='btn btn-success'>Update</Link></td>
                    <td>
                    <button className='btn btn-danger' onClick={()=>deletePayment(payment.paymentId)}>Delete</button>
                    </td>

                   </tr>)
                   }


           </tbody>
       </table>
        
       </div>
   )
 }
 export default ListPayment
 
 

 
