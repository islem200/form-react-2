// import React, { useRef } from "react";

// const Form = () => {
//   const nameRef = useRef(null);
//   const ageRef = useRef(null);

//   let user = {
//     name: "",
//     age: 0,
//   };

//   return (
//     <form
//     onSubmit={(event) => {
//         event.preventDefault();
//         console.log(user
//         );

//         nameRef.current.value = "";
//         ageRef.current.value = "";
       
//     }}>
//       <div className="mb-3">
//         <label htmlFor="name">Name</label>
//         <input
//           onChange={() => {
//             user.name = nameRef.current.value;
//           }}
//           ref={nameRef}
//           id="name"
//           type="text"
//           className="form-control"
//           placeholder="Enter Name"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age">Age</label>
//         <input
//           onChange={() => {
//             user.age = ageRef.current.value;
//             console.log(user);
//           }}
//           ref={ageRef}
//           type="number"
//           className="form-control"
//           placeholder="Enter age"
//         />
//       </div>

//       <button type="submit" className="btn btn-info">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;
