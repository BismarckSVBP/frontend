// // import { useEffect, useState, useRef } from "react";
// // import html2canvas from "html2canvas";
// // import jsPDF from "jspdf";
// // import axios from "axios";
// // import { API_BASE_URL } from "../config";

// // const AdminPanel = () => {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");
// //   const ticketRefs = useRef({});
// //   const idCardRefs = useRef({});
// //   const buttonRefs = useRef({});

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const response = await axios.get(`${API_BASE_URL}/student`);
// //         setUsers(response.data);
// //       } catch (err) {
// //         setError("Failed to fetch users");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchUsers();
// //   }, []);

// //   const downloadAsPDF = async (ref, filename, button) => {
// //     if (!ref) return;

// //     try {
// //       if (button) button.style.visibility = "hidden";
// //       await new Promise((res) => setTimeout(res, 100));

// //       const canvas = await html2canvas(ref, {
// //         useCORS: true,
// //         scale: 2,
// //         width: ref.scrollWidth,
// //         height: ref.scrollHeight,
// //       });

// //       const imgData = canvas.toDataURL("image/png");
// //       const pdf = new jsPDF({
// //         orientation: "landscape",
// //         unit: "px",
// //         format: [canvas.width, canvas.height],
// //       });

// //       pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
// //       pdf.save(`${filename}.pdf`);
// //     } catch (err) {
// //       console.error("PDF Generation Error:", err);
// //     } finally {
// //       if (button) button.style.visibility = "visible";
// //     }
// //   };

// //   return (
// //     <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto bg-gradient-to-br from-black via-purple-900 to-black text-white px-4 py-6 md:px-10 md:py-10">
// //       <h1 className="text-4xl font-extrabold text-pink-500 mb-4 text-center">Admin Panel</h1>
// //       <p className="text-center text-lg mb-10 text-purple-300">
// //         Welcome, Admin! Below are the Fresher's Party tickets and ID cards.
// //       </p>

// //       {loading && <p className="text-center text-xl text-white">Loading users...</p>}
// //       {error && <p className="text-center text-red-500">{error}</p>}

// //       <div className="space-y-10">
// //         {users.map((user) => {
// //           const safeName = user.fullName?.replace(/\s+/g, "_") || "User";

// //           return (
// //             <div key={user._id} className="w-full">
// //               {/* 🎟️ Ticket Card */}
// //               <div
// //                 ref={(el) => (ticketRefs.current[user._id] = el)}
// //                 className="mx-auto flex flex-wrap justify-between items-center gap-6 p-6 rounded-xl border-2 border-white/30 shadow-xl relative"
// //                 style={{
// //                   maxWidth: "1000px",
// //                   background: "linear-gradient(135deg, #b300ff25 0%, #000000ee 100%)",
// //                   boxShadow: "0 0 25px #ff00ff33",
// //                   color: "white",
// //                 }}
// //               >
// //                 <div className="w-full sm:w-[48%] min-w-[300px]">
// //                   <h2 className="uppercase font-semibold tracking-widest text-xl">JANUS NOX</h2>
// //                   <div className="italic text-sm text-gray-300 mt-2">The Night Of New Beginnings</div>
// //                   <div className="text-5xl font-extrabold mt-4">
// //                     <span className="text-pink-300">FRESH</span>
// //                     <span className="text-cyan-300">'ER'S</span>
// //                   </div>
// //                   <div className="tracking-widest font-bold text-xl mt-4">PARTY</div>
// //                   <div
// //                     className="absolute text-gray-400 opacity-30"
// //                     style={{
// //                       right: "-10px",
// //                       top: "60%",
// //                       transform: "rotate(-90deg)",
// //                       fontSize: "1.2rem",
// //                     }}
// //                   >
// //                     2023
// //                   </div>
// //                 </div>

// //                 <div className="w-full sm:w-[48%] min-w-[300px] z-10">
// //                   <h1 className="text-xl font-semibold">17 JANUARY 2023</h1>
// //                   <p className="text-sm text-gray-300 mt-1">UNLIMITED FOOD | FUN | MASTI</p>
// //                   <p className="text-sm text-gray-400 mt-1">@janusnox_</p>
// //                   <p className="text-sm text-gray-400 mt-1">5:00 to 9:00 pm</p>
// //                   <p className="text-sm text-gray-400 mt-1">
// //                     VENUE: Level 04, Lorem - Let's Celebrate,<br />
// //                     abc Park Mall, Ipsum Road
// //                   </p>
// //                   <p className="text-xs text-gray-500 mt-1">x909070xx1 | 8xx2093x3 | 79xx8x3783</p>
// //                 </div>

// //                 {/* Neon Sidebar */}
// //                 <div
// //                   className="hidden md:flex flex-col items-center justify-center fixed right-[-45px] top-0 h-full w-[120px] text-center font-bold text-[#ff00ff] border-l-2 border-[#ff00ff66]"
// //                   style={{
// //                     background: "black",
// //                     writingMode: "vertical-rl",
// //                     textShadow: "0 0 10px #ff00ff, 0 0 20px #ff00ff",
// //                     letterSpacing: "3px",
// //                   }}
// //                 >
// //                   NEON THEME
// //                 </div>

// //                 {/* Profile Strip (bottom horizontal layout) */}
// //                 <div className="mt-6 w-full flex items-center gap-4 bg-black/60 p-4 rounded-xl shadow-inner border border-white/10">
// //                   <img
// //                     crossOrigin="anonymous"
// //                     src={user.passportPhotoUrl || "https://via.placeholder.com/100"}
// //                     alt={user.fullName || "User"}
// //                     className="w-20 h-20 rounded-full border-2 border-cyan-400 object-cover shadow"
// //                   />
// //                   <div className="flex flex-col text-left text-white">
// //                     <div className="text-lg font-semibold">{user.fullName}</div>
// //                     <div className="text-sm text-gray-300">
// //                       {user.course} {user.branch} - {user.year} Year
// //                     </div>
// //                     <div className="text-xs text-gray-400 italic">{user.email}</div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* 📄 ID Card */}
// //               <div
// //                 ref={(el) => (idCardRefs.current[user._id] = el)}
// //                 className="mt-6 w-80 mx-auto p-4 rounded-lg bg-white text-black shadow-lg"
// //               >
// //                 <div className="text-center font-bold text-lg mb-2">Student ID Card</div>
// //                 <img
// //                   crossOrigin="anonymous"
// //                   src={user.passportPhotoUrl || "https://via.placeholder.com/100"}
// //                   alt="ID"
// //                   className="w-24 h-24 rounded-full mx-auto border-2 border-black object-cover"
// //                 />
// //                 <p className="mt-2 font-semibold">{user.fullName}</p>
// //                 <p className="text-sm">{user.course} {user.branch}</p>
// //                 <p className="text-sm">Year: {user.year}</p>
// //                 <p className="text-xs mt-1">Email: {user.email}</p>
// //               </div>

// //               {/* 🎯 Buttons */}
// //               <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
// //                 <button
// //                   ref={(el) => (buttonRefs.current[user._id] = el)}
// //                   onClick={() =>
// //                     downloadAsPDF(
// //                       ticketRefs.current[user._id],
// //                       `Fresher_Ticket_${safeName}`,
// //                       buttonRefs.current[user._id]
// //                     )
// //                   }
// //                   className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold"
// //                 >
// //                   Download Ticket
// //                 </button>

// //                 <button
// //                   onClick={() =>
// //                     downloadAsPDF(
// //                       idCardRefs.current[user._id],
// //                       `ID_Card_${safeName}`
// //                     )
// //                   }
// //                   className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold"
// //                 >
// //                   Download ID Card
// //                 </button>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminPanel;




// import { useEffect, useState, useRef } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import axios from "axios";
// import { API_BASE_URL } from "../config";

// const AdminPanel = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const ticketRefs = useRef({});
//   const idCardRefs = useRef({});
//   const buttonRefs = useRef({});

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(`${API_BASE_URL}/student`);
//         setUsers(response.data);
//       } catch (err) {
//         setError("Failed to fetch users");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const downloadAsPDF = async (ref, filename, button) => {
//     if (!ref) return;

//     try {
//       if (button) button.style.visibility = "hidden";
//       await new Promise((res) => setTimeout(res, 100));

//       const canvas = await html2canvas(ref, {
//         useCORS: true,
//         scale: 2,
//         width: ref.scrollWidth,
//         height: ref.scrollHeight,
//       });

//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF({
//         orientation: "landscape",
//         unit: "px",
//         format: [canvas.width, canvas.height],
//       });

//       pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
//       pdf.save(`${filename}.pdf`);
//     } catch (err) {
//       console.error("PDF Generation Error:", err);
//     } finally {
//       if (button) button.style.visibility = "visible";
//     }
//   };

//   return (
//     <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto bg-gradient-to-br from-black via-purple-900 to-black text-white px-4 py-6 md:px-10 md:py-10">
//       <h1 className="text-4xl font-extrabold text-pink-500 mb-4 text-center">Admin Panel</h1>
//       <p className="text-center text-lg mb-10 text-purple-300">
//         Welcome, Admin! Below are the Fresher's Party tickets and ID cards.
//       </p>

//       {loading && <p className="text-center text-xl text-white">Loading users...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       <div className="space-y-10">
//         {users.map((user) => {
//           const safeName = user.fullName?.replace(/\s+/g, "_") || "User";

//           return (
//             <div key={user._id} className="w-full">
//               {/* 🎟️ Ticket Card */}
//               <div
//                 ref={(el) => (ticketRefs.current[user._id] = el)}
//                 className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-xl border-2 border-white/30 shadow-xl relative"
//                 style={{
//                   maxWidth: "1000px",
//                   background: "linear-gradient(135deg, #b300ff25 0%, #000000ee 100%)",
//                   boxShadow: "0 0 25px #ff00ff33",
//                   color: "white",
//                 }}
//               >
//                 {/* Left Section */}
//                 <div className="sm:w-1/3 w-full text-center sm:text-left">
//                   <h2 className="uppercase font-semibold tracking-widest text-xl">JANUS NOX</h2>
//                   <div className="italic text-sm text-gray-300 mt-2">The Night Of New Beginnings</div>
//                   <div className="text-5xl font-extrabold mt-4">
//                     <span className="text-pink-300">FRESH</span>
//                     <span className="text-cyan-300">'ER'S</span>
//                   </div>
//                   <div className="tracking-widest font-bold text-xl mt-4">PARTY</div>
//                   <div
//                     className="absolute text-gray-400 opacity-30"
//                     style={{
//                       right: "-10px",
//                       top: "60%",
//                       transform: "rotate(-90deg)",
//                       fontSize: "1.2rem",
//                     }}
//                   >
//                     2023
//                   </div>
//                 </div>

//                 {/* Center Profile */}
//                 <div className="w-full sm:w-1/3 flex justify-center">
//                   <div className="flex flex-col items-center gap-2  p-4 rounded-xl shadow-inner border border-white/10 w-fit">
//                     <img
//                       crossOrigin="anonymous"
//                       src={user.passportPhotoUrl || "https://via.placeholder.com/100"}
//                       alt={user.fullName || "User"}
//                       className="w-24 h-24 rounded-full border-2 border-cyan-400 object-cover shadow"
//                     />
//                     <div className="text-center">
//                       <div className="text-lg font-semibold">{user.fullName}</div>
//                       <div className="text-sm text-gray-300">
//                         {user.course} {user.branch} - {user.year} Year
//                       </div>
//                       <div className="text-xs text-gray-400 italic">{user.email}</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right Section */}
//                 <div className="sm:w-1/3 w-full text-center sm:text-right">
//                   <h1 className="text-xl font-semibold">17 JANUARY 2023</h1>
//                   <p className="text-sm text-gray-300 mt-1">UNLIMITED FOOD | FUN | MASTI</p>
//                   <p className="text-sm text-gray-400 mt-1">@janusnox_</p>
//                   <p className="text-sm text-gray-400 mt-1">5:00 to 9:00 pm</p>
//                   <p className="text-sm text-gray-400 mt-1">
//                     VENUE: Level 04, Lorem - Let's Celebrate,<br />
//                     abc Park Mall, Ipsum Road
//                   </p>
//                   <p className="text-xs text-gray-500 mt-1">x909070xx1 | 8xx2093x3 | 79xx8x3783</p>
//                 </div>

//                 {/* Neon Sidebar */}
//                 <div
//                   className="hidden md:flex flex-col items-center justify-center fixed right-[-45px] top-0 h-full w-[120px] text-center font-bold text-[#ff00ff] border-l-2 border-[#ff00ff66]"
//                   style={{
//                     background: "black",
//                     writingMode: "vertical-rl",
//                     textShadow: "0 0 10px #ff00ff, 0 0 20px #ff00ff",
//                     letterSpacing: "3px",
//                   }}
//                 >
//                   NEON THEME
//                 </div>
//               </div>

//               {/* 📄 ID Card */}
//               <div
//                 ref={(el) => (idCardRefs.current[user._id] = el)}
//                 className="mt-6 w-80 mx-auto p-4 rounded-lg bg-white text-black shadow-lg"
//               >
//                 <div className="text-center font-bold text-lg mb-2">Student ID Card</div>
//                 <img
//                   crossOrigin="anonymous"
//                   src={user.passportPhotoUrl || "https://via.placeholder.com/100"}
//                   alt="ID"
//                   className="w-24 h-24 rounded-full mx-auto border-2 border-black object-cover"
//                 />
//                 <p className="mt-2 font-semibold">{user.fullName}</p>
//                 <p className="text-sm">{user.course} {user.branch}</p>
//                 <p className="text-sm">Year: {user.year}</p>
//                 <p className="text-xs mt-1">Email: {user.email}</p>
//               </div>

//               {/* 🎯 Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
//                 <button
//                   ref={(el) => (buttonRefs.current[user._id] = el)}
//                   onClick={() =>
//                     downloadAsPDF(
//                       ticketRefs.current[user._id],
//                       `Fresher_Ticket_${safeName}`,
//                       buttonRefs.current[user._id]
//                     )
//                   }
//                   className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold"
//                 >
//                   Download Ticket
//                 </button>

//                 <button
//                   onClick={() =>
//                     downloadAsPDF(
//                       idCardRefs.current[user._id],
//                       `ID_Card_${safeName}`
//                     )
//                   }
//                   className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold"
//                 >
//                   Download ID Card
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import { API_BASE_URL } from "../config";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const ticketRefs = useRef({});
  const idCardRefs = useRef({});
  const buttonRefs = useRef({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/student`);
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const downloadAsPDF = async (ref, filename, button) => {
    if (!ref) return;

    try {
      if (button) button.style.visibility = "hidden";
      await new Promise((res) => setTimeout(res, 100));

      const canvas = await html2canvas(ref, {
        useCORS: true,
        scale: 2,
        width: ref.scrollWidth,
        height: ref.scrollHeight,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`${filename}.pdf`);
    } catch (err) {
      console.error("PDF Generation Error:", err);
    } finally {
      if (button) button.style.visibility = "visible";
    }
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto bg-gradient-to-br from-[#0d0d2b] via-[#251447] to-[#1a1a2e] text-white px-4 py-6 md:px-10 md:py-10">
      <h1 className="text-4xl font-extrabold text-indigo-400 mb-4 text-center">Admin Panel</h1>
      <p className="text-center text-lg mb-10 text-gray-300">
        Welcome, Admin! Below are the Fresher's Party tickets and ID cards.
      </p>

      {loading && <p className="text-center text-xl text-white">Loading users...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="space-y-10">
        {users.map((user) => {
          const safeName = user.fullName?.replace(/\s+/g, "_") || "User";

          return (
            <div key={user._id} className="w-full">
              {/* 🎟️ Ticket Card */}
              <div
                ref={(el) => (ticketRefs.current[user._id] = el)}
                className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-xl border border-white/10 shadow-xl relative"
                style={{
                  maxWidth: "1000px",
                  background: "linear-gradient(135deg, #292860 0%, #1c1b33 100%)",
                  boxShadow: "0 0 20px #4b008250",
                  color: "white",
                }}
              >
                {/* Left Section */}
                <div className="sm:w-1/3 w-full text-center sm:text-left">
                 
                  <div className="italic text-sm text-gray-400 mt-2">NEW ENTERIES ADDED TO THE ARRAY HELLO FRESHER</div>
                  <div className="text-5xl font-extrabold mt-4">
                    <span className="text-pink-400">FRESHER</span>
                    <span className="text-cyan-300">'S</span>
                  </div>
                  <div className="tracking-widest font-bold text-xl mt-4 text-purple-300">PARTY 2K25</div>
                  <div
                    className="absolute text-gray-500 opacity-30"
                    style={{
                      right: "-10px",
                      top: "60%",
                      transform: "rotate(-90deg)",
                      fontSize: "1.2rem",
                    }}
                  >
                    
                  </div>
                </div>

                {/* Center Profile */}
                <div className="w-full sm:w-1/3 flex justify-center">
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl  ">
                    <img
                      crossOrigin="anonymous"
                      src={user.passportPhotoUrl || "https://via.placeholder.com/100"}
                      alt={user.fullName || "User"}
                      className="w-24 h-24 rounded-full border-2 border-cyan-300 object-cover shadow"
                    />
                    <div className="text-center">
                      <div className="text-lg font-semibold text-white">{user.fullName}</div>
                      <div className="text-sm text-gray-300">
                        {user.course} {user.branch} - {user.year}
                      </div>
                      <div className="text-xs text-gray-400 italic">{user.email}</div>
                    </div>
                  </div>
                </div>

                {/* Right Section */}
                <div className="sm:w-1/3 w-full text-center sm:text-right">
                  <h1 className="text-xl font-semibold text-indigo-300">12 April 2025</h1>
                  <p className="text-sm text-gray-300 mt-1">UNLIMITED FOOD | FUN | MASTI</p>
                  
                  <p className="text-sm text-gray-400 mt-1">11:00 am to 5:00 pm</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Venue: Pradeep Star Inn, GKP
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Contact-Us : 9369320836</p>
                </div>

                {/* Neon Sidebar */}
                <div
                  className="hidden md:flex flex-col items-center justify-center fixed right-[-45px] top-0 h-full w-[120px] text-center font-bold text-purple-400 border-l border-purple-600/20"
                  style={{
                    background: "#0f0f1f",
                    writingMode: "vertical-rl",
                    textShadow: "0 0 8px #8000ff55",
                    letterSpacing: "3px",
                  }}
                >
                  NEON THEME
                </div>
              </div>

              {/* 📄 ID Card */}
              <div
                ref={(el) => (idCardRefs.current[user._id] = el)}
                className="mt-6 w-80 mx-auto p-4 rounded-lg bg-white text-black shadow-md"
              >
                <div className="text-center font-bold text-lg mb-2">Student ID Card</div>
                <img
                  crossOrigin="anonymous"
                  src={user.passportPhotoUrl || "https://via.placeholder.com/100"}
                  alt="ID"
                  className="w-24 h-24 rounded-full mx-auto border-2 border-black object-cover"
                />
                <p className="mt-2 font-semibold">{user.fullName}</p>
                <p className="text-sm">{user.course} {user.branch}</p>
                <p className="text-sm">Year: {user.year}</p>
               
              </div>

              {/* 🎯 Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                <button
                  ref={(el) => (buttonRefs.current[user._id] = el)}
                  onClick={() =>
                    downloadAsPDF(
                      ticketRefs.current[user._id],
                      `Fresher_Ticket_${safeName}`,
                      buttonRefs.current[user._id]
                    )
                  }
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-semibold transition duration-300"
                >
                  Download Ticket
                </button>

                <button
                  onClick={() =>
                    downloadAsPDF(
                      idCardRefs.current[user._id],
                      `ID_Card_${safeName}`
                    )
                  }
                  className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition duration-300"
                >
                  Download ID Card
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminPanel;
