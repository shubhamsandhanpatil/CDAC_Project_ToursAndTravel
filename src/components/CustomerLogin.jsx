// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // import { useDispatch } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import loginvalidation from "../loginvalidation"


// // function CustomerLogin(){

// //     const dispatch=useDispatch()

// //     const [user,setUser]=useState({
// //         "userid":"",
// //         "pwd":""
// //     })
// //     const [errors,setErrors]=useState({})
// //     const [submitted,setSubmitted]=useState(false)
// //     const [Verifed,setVerifed]=useState(false);
// //     const navigate=useNavigate()

// //     const handleInput=(e)=>{
// //         setUser({...user,[e.target.name]:e.target.value})
// //     }

// //     const handleSubmit=e=>{
// //         e.preventDefault()
// //         setErrors(loginvalidation(user))   
// //         setSubmitted(true) 
// //     }

// //     useEffect(()=>{
// //         console.log(errors)
// //         if(Object.keys(errors).length===0 && submitted){
// //             console.log(user)
// //             axios.post("http://localhost:9090/api/customers/validate",user)
// //             .then(resp=>{
// //                 let result=resp.data.data;
// //                 console.log(resp.data.data)
// //                 sessionStorage.setItem("userid",result.id)
// //                 sessionStorage.setItem("uname",result.name)
// //                 sessionStorage.setItem("role","Customer")
// //                 sessionStorage.setItem("id",result.id)  
// //                 dispatch({type:'IsLoggedIn'})
// //                 navigate.push("/")
// //             })
// //             .catch(error=>{
// //                 console.log("Error",error);
// //                 alert("Invalid username or password")
// //             })            
// //         }
// //     },[errors])

// //     return (
  

// //         <div className="" style={{ backgroundImage: `url("https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,backgroundSize:"cover"}}> 
       
// //                 <div className="col-sm-6 mx-auto" style={{ height:"563px" }}>
// //                     <h4 className="text-center p-4" style={{ color:"black" }}>

// //                         Customer Login 
// //                     </h4>
// //                     <form onSubmit={handleSubmit}>                 
// //                     <div className="form-group form-row">
// //                         <label className="col-sm-8 form-control-label font-weight-bold">Email Id</label>
// //                         <div className="col-sm-10">
// //                             <input type="text float-right" name="userid" placeholder="name@example.com" value={user.userid} onChange={handleInput} className="form-control" />
// //                             {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
// //                         </div>
                        
// //                     </div>                    
// //                     <div className="form-group form-row">
// //                         <label className="col-sm-8 form-control-label font-weight-bold">Password</label>
// //                         <div className="col-sm-10">
// //                             <input type="password" name="pwd"  placeholder= "Password" value={user.pwd} onChange={handleInput} className="form-control" />
// //                             {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
// //                         </div>

// //                     </div>  

                                     
// //                     <button className="btn btn-primary float-left" style={{marginLeft:"470px"}}  >Login Now</button>
// //                     {/*//disabled not working */}

// //                     </form>
// //                 </div>
// //             </div>
       
 
// //     );
// // }

// // export default CustomerLogin;



// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import loginvalidation from "../loginvalidation";

// function CustomerLogin() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [user, setUser] = useState({
//         userid: "",
//         pwd: ""
//     });
//     const [errors, setErrors] = useState({});
//     const [submitted, setSubmitted] = useState(false);

//     const handleInput = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const validationErrors = loginvalidation(user);
//         setErrors(validationErrors);
//         setSubmitted(true);
//     };

//     useEffect(() => {
//         if (Object.keys(errors).length === 0 && submitted) {
//             console.log("Sending user data:", user);

//             axios.post("http://localhost:9090/api/customers/validate", user)
//                 .then(resp => {
//                     if (resp.data && resp.data.data) {
//                         let result = resp.data.data;
//                         console.log("Login Success:", result);

//                         // Store user details in sessionStorage
//                         sessionStorage.setItem("userid", result.id);
//                         sessionStorage.setItem("uname", result.name);
//                         sessionStorage.setItem("role", "Customer");
//                         sessionStorage.setItem("id", result.id);

//                         // Dispatch login action
//                         dispatch({ type: "IsLoggedIn", payload: result });

//                         // Navigate to home page
//                         navigate("/");
//                     } else {
//                         console.log("Invalid response format:", resp.data);
//                         alert("Invalid username or password");
//                     }
//                 })
//                 .catch(error => {
//                     console.error("Login Error:", error);
//                     alert("Invalid username or password");
//                 });
//         }
//     }, [errors, submitted]); // Ensure `submitted` is part of the dependency array

//     return (
//         <div style={{ backgroundImage: `url("https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, backgroundSize: "cover" }}>
//             <div className="col-sm-6 mx-auto" style={{ height: "563px" }}>
//                 <h4 className="text-center p-4" style={{ color: "black" }}>Customer Login</h4>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group form-row">
//                         <label className="col-sm-8 form-control-label font-weight-bold">Email Id</label>
//                         <div className="col-sm-10">
//                             <input type="text" name="userid" placeholder="name@example.com" value={user.userid} onChange={handleInput} className="form-control" />
//                             {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
//                         </div>
//                     </div>
//                     <div className="form-group form-row">
//                         <label className="col-sm-8 form-control-label font-weight-bold">Password</label>
//                         <div className="col-sm-10">
//                             <input type="password" name="pwd" placeholder="Password" value={user.pwd} onChange={handleInput} className="form-control" />
//                             {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
//                         </div>
//                     </div>
//                     <button className="btn btn-primary float-left" style={{ marginLeft: "470px" }}>Login Now</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default CustomerLogin;
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginvalidation from "../loginvalidation";

function CustomerLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({ userid: "", pwd: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = loginvalidation(user);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
        }
    };

    useEffect(() => {
        if (submitted && Object.keys(errors).length === 0) {
            setSubmitted(false); // Prevent multiple executions
            
            axios.post("http://localhost:9090/api/customers/validate", user)
                .then(resp => {
                    if (resp.data && resp.data.data) {
                        let result = resp.data.data;
                        sessionStorage.setItem("userid", result.id);
                        sessionStorage.setItem("uname", result.name);
                        sessionStorage.setItem("role", "Customer");
                        sessionStorage.setItem("id", result.id);

                        dispatch({ type: "IsLoggedIn", payload: result });
                        navigate("/");  // ✅ Fixed navigation issue
                    } else {
                        alert("Invalid username or password");
                    }
                })
                .catch(error => {
                    console.error("Login Error:", error);
                    alert("Invalid username or password");
                });
        }
    }, [submitted]);  // ✅ Prevent re-running unless `submitted` changes

    return (
        <div style={{ backgroundImage: `url("https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg")`, backgroundSize: "cover" }}>
            <div className="col-sm-6 mx-auto" style={{ height: "563px" }}>
                <h4 className="text-center p-4" style={{ color: "black" }}>Customer Login</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group form-row">
                        <label className="col-sm-8 form-control-label font-weight-bold">Email Id</label>
                        <div className="col-sm-10">
                            <input type="text" name="userid" placeholder="name@example.com" value={user.userid} onChange={handleInput} className="form-control" />
                            {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-8 form-control-label font-weight-bold">Password</label>
                        <div className="col-sm-10">
                            <input type="password" name="pwd" placeholder="Password" value={user.pwd} onChange={handleInput} className="form-control" />
                            {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                        </div>
                    </div>
                    <button className="btn btn-primary float-left" style={{ marginLeft: "470px" }}>Login Now</button>
                </form>
            </div>
        </div>
    );
}

export default CustomerLogin;
