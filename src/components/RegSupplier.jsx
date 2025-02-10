// 

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import uservalidation from "../uservalidation";

function RegSupplier() {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [user, setUser] = useState({
        name: "",
        city: "",
        userid: "",
        pwd: "",
        cpwd: "",
        phone: ""
    });

    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = uservalidation(user);
        setErrors(validationErrors);
        setSubmitted(true);
    };

    useEffect(() => {
        if (submitted && Object.keys(errors).length === 0) {
            axios.post("http://localhost:9090/api/guide", user)
                .then(resp => {
                    alert("Guide registered successfully");
                    navigate("/slogin"); // Corrected navigation
                })
                .catch(error => {
                    console.error("Registration Error:", error);
                    alert("Guide registration failed");
                });
        }
    }, [errors, submitted]); // Added `submitted` as a dependency

    return (
        <div style={{ backgroundImage: `url("https://img.freepik.com/free-photo/friends-exploring-foreign-city_329181-8513.jpg")`, backgroundSize: "cover" }}>
            <div className="col-sm-6 mx-auto" style={{ height: "563px" }}>
                <h4 className="text-center p-2" style={{ color: "black" }}>Guide Registration Form</h4>
                <form onSubmit={handleSubmit} className="needs-validation">
                    {["name", "city", "userid", "phone", "pwd", "cpwd"].map((field, index) => (
                        <div className="form-group form-row" key={index}>
                            <label className="col-sm-4 form-control-label font-weight-bold">{field === "userid" ? "Email ID" : field.charAt(0).toUpperCase() + field.slice(1)}</label>
                            <div className="col-sm-8">
                                <input 
                                    type={field.includes("pwd") ? "password" : field === "phone" ? "tel" : "text"} 
                                    name={field} 
                                    value={user[field]} 
                                    onChange={handleInput} 
                                    className="form-control"
                                    placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`} 
                                    required 
                                />
                                {errors[field] && <small className="text-danger float-right">{errors[field]}</small>}
                            </div>
                        </div>
                    ))}
                    <button className="btn btn-primary float-right">Register Now</button>
                </form>
            </div>
        </div>
    );
}

export default RegSupplier;
