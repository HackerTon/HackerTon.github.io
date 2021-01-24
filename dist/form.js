import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';

// import "firebase/analytics";
// import firebase from "firebase/app";
// import "firebase/firestore";
import React, { useState } from '../_snowpack/pkg/react.js'; // const firebaseConfig = {
//   apiKey: __SNOWPACK_ENV__.REACT_APP_apiKey,
//   authDomain: __SNOWPACK_ENV__.REACT_APP_authDomain,
//   databaseURL: __SNOWPACK_ENV__.REACT_APP_databaseURL,
//   projectId: __SNOWPACK_ENV__.REACT_APP_projectId,
//   storageBucket: __SNOWPACK_ENV__.REACT_APP_storageBucket,
//   messagingSenderId: __SNOWPACK_ENV__.REACT_APP_messagingSenderId,
//   appId: __SNOWPACK_ENV__.REACT_APP_appId,
//   measurementId: __SNOWPACK_ENV__.REACT_APP_measurementId,
// };
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const analytic = firebase.analytics();
// function Form(props: any) {
//   const [email, setEmail] = useState();
//   const [name, setName] = useState();
//   const [feedback, setFeedback] = useState();
//   function send(event) {
//     event.preventDefault();
//     db.collection('inquiry')
//       .add({
//         email: email,
//         name: name,
//         feedback: feedback,
//       })
//       .then(() => {
//         analytic.logEvent('goal_completion', { name: 'formsent' });
//         alert('Successful');
//       })
//       .catch((reason) => {
//         alert('Failed' + reason);
//       });
//   }
//   return (
//     <div className="container">
//       <div className="row my-5">
//         <div className="col">
//           <form
//             onSubmit={(event) => {
//               send(event);
//             }}
//           >
//             <div className="form-group">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Enter email"
//                 required={true}
//                 onChange={(event) => setEmail(event.target.value)}
//               />
//               <small className="form-text text-muted">
//                 We'll never share email with anyone else.
//               </small>
//             </div>
//             <div className="form-group">
//               <label>Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 required={true}
//                 onChange={(event) => {
//                   setName(event.target.value);
//                 }}
//                 placeholder="Enter name"
//               />
//             </div>
//             <div className="form-group">
//               <label>Enquiry</label>
//               <textarea
//                 type="text"
//                 className="form-control"
//                 placeholder="Your request"
//                 required={true}
//                 onChange={(event) => {
//                   setFeedback(event.target.value);
//                 }}
//               ></textarea>
//               <small className="form-text text-muted">
//                 Feel free to let us know your amazing idea
//                 <span role="img" aria-label="smile">
//                   😁
//                 </span>
//                 .
//               </small>
//             </div>
//             <button type="" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Form;