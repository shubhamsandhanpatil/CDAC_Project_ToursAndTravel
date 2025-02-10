// import { Fragment } from "react";
// import { Link } from "react-router-dom";

// function LoginRegisterMenu(){
//     return(
//         <div className="" style={{ backgroundImage: `url("https://ukbungee.co.uk/files/image/1555/1651134350_bungee142.png")`,backgroundSize:"cover"}}> 

//         <ul className="navbar-nav ml-auto mr-3">
//             <li className="nav-item dropdown"style={{ marginLeft:"700px" }}>
//                 <Link className="nav-link dropdown-toggle text-dark  mr-3" to="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
//                 Login
//                 </Link>
//                 <div className="dropdown-menu text-dark " aria-labelledby="navbarDropdownMenuLink" >
//                 <Link className="dropdown-item " to="/alogin">Admin</Link>
//                 <Link className="dropdown-item " to="/slogin">Guide</Link>                        
//                 <Link className="dropdown-item " to="/clogin">Customer</Link>                        
//                 </div>
//             </li>
//             <li className="nav-item dropdown">
//                 <Link className="nav-link dropdown-toggle text-dark 
//                  mr-3" to="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
//                 Register
//                 </Link>
//                 <div className="dropdown-menu text-dark " aria-labelledby="navbarDropdownMenuLink" >

//                 <Link className="dropdown-item pr-0" to="/regsupplier">Guide</Link>
//                 <Link className="dropdown-item pr-0" to="/register">Customer</Link>                        
//                 </div>
//             </li>
//         </ul>
//         </div>
//     )
// }

// export default LoginRegisterMenu;


// import { useState } from "react";
// import { Link } from "react-router-dom";

// function LoginRegisterMenu() {
//     const [isLoginOpen, setIsLoginOpen] = useState(false);
//     const [isRegisterOpen, setIsRegisterOpen] = useState(false);

//     return (
//         <div style={{ backgroundImage: `url("https://ukbungee.co.uk/files/image/1555/1651134350_bungee142.png")`, backgroundSize: "cover" }}>
//             <ul className="navbar-nav ml-auto mr-3 text-center">
//                 {/* Login Dropdown */}
//                 <li className="nav-item dropdown">
//                     <Link className="nav-link dropdown-toggle text-dark mr-3"
//                         to="#" role="button"
//                         onClick={() => setIsLoginOpen(!isLoginOpen)}
//                     >
//                         Login
//                     </Link>
//                     {isLoginOpen && (
//                         <div className="dropdown-menu text-dark">
//                             <Link className="dropdown-item" to="/alogin">Admin</Link>
//                             <Link className="dropdown-item" to="/slogin">Guide</Link>
//                             <Link className="dropdown-item" to="/clogin">Customer</Link>
//                         </div>
//                     )}
//                 </li>

//                 {/* Register Dropdown */}
//                 <li className="nav-item dropdown">
//                     <Link className="nav-link dropdown-toggle text-dark mr-3"
//                         to="#" role="button"
//                         onClick={() => setIsRegisterOpen(!isRegisterOpen)}
//                     >
//                         Register
//                     </Link>
//                     {isRegisterOpen && (
//                         <div className="dropdown-menu text-dark">
//                             <Link className="dropdown-item" to="/regsupplier">Guide</Link>
//                             <Link className="dropdown-item" to="/register">Customer</Link>
//                         </div>
//                     )}
//                 </li>
//             </ul>
//         </div>
//     );
// }

// export default LoginRegisterMenu;

import { Link } from "react-router-dom";

function LoginRegisterMenu() {
    return (
        <div
            className="container-fluid p-3"
            style={{
                backgroundImage: `url("https://ukbungee.co.uk/files/image/1555/1651134350_bungee142.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "80px", // Ensures visibility
            }}
        >
            <nav className="navbar navbar-expand-lg">
                {/* Add this class to align buttons to the right */}
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        {/* Login Dropdown */}
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle text-dark mr-3"
                                to="#"
                                id="loginDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Login
                            </Link>
                            <div
                                className="dropdown-menu text-dark"
                                aria-labelledby="loginDropdown"
                            >
                                <Link className="dropdown-item" to="/alogin">
                                    Admin
                                </Link>
                                <Link className="dropdown-item" to="/slogin">
                                    Guide
                                </Link>
                                <Link className="dropdown-item" to="/clogin">
                                    Customer
                                </Link>
                            </div>
                        </li>

                        {/* Register Dropdown */}
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle text-dark mr-3"
                                to="#"
                                id="registerDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Register
                            </Link>
                            <div
                                className="dropdown-menu text-dark"
                                aria-labelledby="registerDropdown"
                            >
                                <Link className="dropdown-item" to="/regsupplier">
                                    Guide
                                </Link>
                                <Link className="dropdown-item" to="/register">
                                    Customer
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default LoginRegisterMenu;
