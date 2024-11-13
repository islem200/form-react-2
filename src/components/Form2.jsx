// import { useState } from "react";

// const Form2 = () => {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);

//   return (
//     <div>
//       <form
//         onSubmit={(event) => {
//           event.preventDefault(); //ta3lch refresh automatique
//           console.log({
//             name,
//             age,
//           });

//           setName((name) => "");
//           setAge((age) => "");
//         }}
//       >
//         <div className="mb-3">
//           <label htmlFor="name">Name</label>
//           <input
//             onChange={(event) => {
//               setName(event.target.value);
//             }}
//             value={name}
//             id="name"
//             type="text"
//             className="form-control"
//             placeholder="Enter Name..."
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="age">Age</label>
//           <input
//             onChange={(event) => {
//               setAge(event.target.value);
//             }}
//             value={age}
//             type="number"
//             className="form-control"
//             placeholder="Enter age..."
//           />
//         </div>

//         <button type="submit" className="btn btn-info">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form2;
