// import React from "react";
// import "./header.css";
// import SearchIcon from "@mui/icons-material/Search";
// import { Avatar } from "@mui/material";
// // import Avatar from "@mui/material/Avatar";
// import InboxIcon from "@mui/icons-material/Inbox";
// // import HelpIcon from "@mui/icons-material/Help";
// import { Link, useNavigate } from "react-router-dom";
// // import { auth } from "../../firebase";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../feature/userSlice";
// import logo from "../../assets/logo 1.svg"
// // import { signOut } from "../../firebase/auth";



// function Header() {

//     const handleLogout = () => {
//         window.localStorage.clear();
//         // window.location.reload(false);
//         window.location.replace('/login');
//     };

//     const user = useSelector(selectUser);
//     const navigate = useNavigate()
//     // console.log(user);
//     function stringToColor(string) {
//         let hash = 0;
//         let i;

//         /* eslint-disable no-bitwise */
//         for (i = 0; i < string.length; i += 1) {
//             hash = string.charCodeAt(i) + ((hash << 5) - hash);
//         }

//         let color = "#";

//         for (i = 0; i < 3; i += 1) {
//             const value = (hash >> (i * 8)) & 0xff;
//             color += `00${value.toString(16)}`.substr(-2);
//         }
//         /* eslint-enable no-bitwise */

//         return color;
//     }

//     function stringAvatar(name) {
//         return {
//             sx: {
//                 bgcolor: name ? stringToColor(name) : "rgba(255,255,255,0.8)",
//             },
//             children: name && `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
//         };
//     }
//     return (
//         <header>
//             <div className="header-container border-top border-warning border-3">
//                 <div className="header-left">

//                     <div>
//                         <img
//                             src={logo} alt="logo" />
//                         Stack <span className='fw-bold'>overflow</span>
//                     </div>


//                     <h3>Home</h3>
//                     <h3>Products</h3>
//                     <h3>ForTeams</h3>
//                 </div>
//                 <div className="header-middle">
//                     <div className="header-search-container">
//                         <SearchIcon />
//                         <input type="text" placeholder="Search..." />
//                     </div>
//                 </div>
//                 <div className="header-right">
//                     <div className="header-right-container">
//                         {window.innerWidth < 768 && <SearchIcon />}

//                         <span >
//                             <Avatar
//                                 style={{
//                                     cursor: "pointer",
//                                 }}
//                                 // {...stringAvatar(user && user.displayName)}
//                                 onClick={() => handleLogout()}
//                             />
//                         </span>

//                         <InboxIcon />
//                         <svg
//                             aria-hidden="true"
//                             class="svg-icon iconStackExchange"
//                             width="24"
//                             height="24"
//                             viewBox="0 0 18 18"
//                             fill="rgba(0,0,0,0.5)"
//                             style={{
//                                 cursor: "pointer",
//                             }}
//                         >
//                             <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
//                         </svg>
//                         {/* <img
//               src="https://symbols-electrical.getvecta.com/stencil_96/73_stack-exchange-icon.bbd1a14a04.svg"
//               alt="stack-exchange"
//             /> */}
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;