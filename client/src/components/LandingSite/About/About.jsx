// import { TeamCard } from "./TeamMember";
// function About() {

//   const ahad = {
//     name: "Abdul Ahad",
//     designation: "Front-end Engineer",
//     image:
//       "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
//   };
//   const danish = {
//     name: "Muhammad Danish",
//     designation: "Backend-end Engineer",
//     image:
//       "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
//   };
//   const abubakar = {
//     name: "Muhammad Abubakar",
//     designation: "Front End Developer",
//     image:
//       "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
//   };
//   const muneeb = {
//     name: "Muneeb Ahmed",
//     designation: "Front End Developer",
//     image:
//       "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
//   };
//   const arsal = {
//     name: "Syed Arsal",
//     designation: "Database",
//     image:
//       "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
//   };

//   return (
//     <>
//       <h1 className="font-bold text-white text-center text-5xl">
//         Meet Our Team!
//       </h1>
//       <div className="py-20 sm:py-25 flex gap-10 flex-wrap justify-center align-center">
//         <TeamCard member={ahad} />
//         <TeamCard member={danish} />
//         <TeamCard member={abubakar} />
//         <TeamCard member={arsal} />
//         <TeamCard member={muneeb} />
//       </div>
//     </>
//   );
// }
// export { About };

import { TeamCard } from "./TeamMember";
import Raushan from "/src/assets/RaushanImage.jpg";
import Utkarsh from "/src/assets/utkarsh.png";
import Ankush from "/src/assets/ankush.jpg";
function About() {
  const utkarsh = {
    name: "Utkarsh",
    designation: "Team Leader",
    image:Utkarsh,
    linkedin: "https://www.linkedin.com/in/utkarsh-kumar-a3806b2b8/",
  };
  const raushan = {
    name: "Raushan",
    designation: "Backend Developer",
    image:Raushan,
    linkedin: "https://www.linkedin.com/in/raushan-kumar-964a75255/",
  };
  const jay = {
    name: "Jay",
    designation: "Frontend Developer",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
    linkedin: "https://www.linkedin.com/in/jay-kumar-b9b29125b/",
  };
  const ankush = {
    name: "Ankush",
    designation: "Database Manager",
    image:Ankush,
    linkedin: "https://www.linkedin.com/in/ankushsingh374/",
  };

  return (
    // <>
    //   <h1 className="font-bold text-white text-center text-5xl">
    //     Meet Our Team!
    //   </h1>
    //   <div className="py-20 sm:py-25 flex gap-10 flex-wrap justify-center items-center">
    //     <TeamCard member={utkarsh} />
    //     <TeamCard member={raushan} />
    //     <TeamCard member={jay} />
    //     <TeamCard member={ankush} />
    //   </div>
    // </>
    <div style={{ backgroundColor: "#f3e8ff" }}>
      <h1 className="font-bold text-black text-center text-5xl">
        Meet Our Team!
      </h1>
      <div className="py-20 sm:py-25 flex gap-10 flex-wrap justify-center items-center">
        <TeamCard member={utkarsh} />
        <TeamCard member={raushan} />
        <TeamCard member={jay} />
        <TeamCard member={ankush} />
      </div>
    </div>
  );
}

export { About };
