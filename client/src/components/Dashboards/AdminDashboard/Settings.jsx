// import { useState } from "react";
// import { Input } from "./Input";
// import { useNavigate } from "react-router-dom";

// function Settings() {
//   const navigate = useNavigate();
//   const changePassword = async (e) => {
//     e.preventDefault();
//     const user = JSON.parse(localStorage.getItem("admin"));
    
//     const data = {
//       email: user.email,
//       password: oldPass,
//       newPassword: pass,
//     };
    
//     let result = await fetch("https://hostellerhomesbackend.onrender.com/api/auth/change-password", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     result = await result.json();

//     if (result.success) {
//       alert("Password Changed Successfully");
//       navigate("/admin-dashboard");
//     } else {
//       alert(result.errors[0].msg);
//     }
//   };


//   const [pass, setPass] = useState("");
//   const [oldPass, setOldPass] = useState('');
//   const chngPassField = {
//     name: "New Password",
//     type: "password",
//     placeholder: "New Password",
//     req: true,
//     onChange: chngPass,
//     value: pass,
//   };
//   const chngOldPassField = {
//     name: "Old Password",
//     type: "password",
//     placeholder: "Old Password",
//     req: true,
//     onChange: chngOldPass,
//     value: oldPass,
//   };

//   function chngPass(e) {
//     setPass(e.target.value);
//   }

//   function chngOldPass(e) {
//     setOldPass(e.target.value);
//   }

//   return (
//     <div className="w-full h-screen pt-20 flex flex-col items-center justify-center">
//       <h1 className="text-white font-bold text-5xl mb-10 text-center">Settings</h1>
//       <form method="POST" onSubmit={changePassword} >
//         <div className="w-96 flex flex-col justify-between gap-5 bg-neutral-950 p-5 rounded">
//           <h2 className="text-3xl text-white font-bold mb-5">
//             Change Password
//           </h2>
//           <Input field={chngOldPassField} />
//           <Input field={chngPassField} />
//           <button
//             type="submit"
//             className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-5 text-center"
//           >
//             Change Password
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Settings;


import { useState } from "react";
import { Input } from "./Input";
import { useNavigate } from "react-router-dom";

function Settings() {
  const mainUri = import.meta.env.VITE_MAIN_URI;
  const navigate = useNavigate();
  const [pass, setPass] = useState("");
  const [oldPass, setOldPass] = useState("");

  const chngPassField = {
    name: "New Password",
    type: "password",
    placeholder: "New Password",
    req: true,
    onChange: chngPass,
    value: pass,
  };
  const chngOldPassField = {
    name: "Old Password",
    type: "password",
    placeholder: "Old Password",
    req: true,
    onChange: chngOldPass,
    value: oldPass,
  };

  function chngPass(e) {
    setPass(e.target.value);
  }

  function chngOldPass(e) {
    setOldPass(e.target.value);
  }

  const changePassword = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("admin"));

    const data = {
      email: user.email,
      password: oldPass,
      newPassword: pass,
    };

    let result = await fetch(`${mainUri}/api/auth/change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    result = await result.json();

    if (result.success) {
      alert("Password Changed Successfully");
      navigate("/admin-dashboard");
    } else {
      alert(result.errors[0].msg);
    }
  };

  return (
    <div className="w-full min-h-screen pt-20 flex flex-col items-center justify-center bg-[#f3e8ff]">
      <h1 className="text-black font-bold text-5xl mb-10 text-center">Settings</h1>

      <form method="POST" onSubmit={changePassword} className="w-full flex justify-center">
        <div className="w-96 flex flex-col justify-between gap-5 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl text-[#4f46e5] font-bold mb-5 text-center">
            Change Password
          </h2>
          <Input field={chngOldPassField} />
          <Input field={chngPassField} />
          <button
            type="submit"
            className="w-full text-white bg-[#4f46e5] hover:bg-[#4338ca] focus:ring-4 focus:outline-none focus:ring-[#c4b5fd] font-medium rounded-lg text-lg px-5 py-2.5 mt-5 text-center transition duration-200"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
