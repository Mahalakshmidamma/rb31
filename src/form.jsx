import React from "react";
import { useFormik } from "formik";
import Yup from 'yup';


function Form(){
    return (

    

    <div className="App">
    <div>
    <h1>ENQUIRY FORM</h1>
    <form>
      <input type="text" placeholder='Name' class="form-control" id="floatingInput"/>  &nbsp;&nbsp;      
      <input type="text" placeholder='PhneNumber' class="form-control"/><br></br>
      <input type="text" placeholder='Email' class="form-control"/>
      
       <br/>
      <h6>COURCES</h6>
      <input type="checkbox" name="frontend" value="Angular" />
      <label>Frontend with Angular</label>
      <br/>
      <input type="checkbox" name="frontend" value="React"/> 
      <label>Frontend with React</label>
      <br/>
      <input type="checkbox" name="full-stack" value="JAVA"/>
      <label>Full stack JAVA</label>
      <br/>
      <input type="checkbox"  name="mean" value="MEAN"/>
      <label>MEAN</label>
      <br/>
      <input type="checkbox"  name="mern" value="MERN"/>
      <label>MERN</label>
      <br/>
      <input type="checkbox" name="devops" value="DevOps"/>
      <label>DevOps</label>
      <br/>

      <div className='div1'>
      <h6 >MODE</h6>
      <input type="radio" name="Online" value="Online"/>
      <label>Online</label>
      <br/>
      <input type="radio" name="Offline" value="Offline"/>
      <label>Offline</label>
      </div>
      </form>
      </div>
      
       
        <div className='fb'>
        <form>
        <h1>FEEDBACK</h1>
        <input type="date" placeholder='Date' class="form-control"/> &nbsp;&nbsp;
         <select class="form-control">
          <option name="Choose an option">Choose an option</option>
          <option name="interested">Interested</option>
          <option name="Not Intst">Not Interested</option>
         </select><br/><br/>
         <textarea type="text" placeholder='Remarks' class="form-control"></textarea><br/>
         <input type="date" class="form-control"/><br/>
         
         </form>
         </div>
          

         <button className='btn'>SAVE</button>
    
    </div>
  );
}
export default Form








// import React from "react";
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// function Form() {
//     const formvalidations=Yup.object({
//         'fname':Yup.string().required('required').min(2,'!Too short').max(30,'*!too long'),
//         'number':Yup.string().required('*required').length(10,'*Enter valid Number'),
//         'email':Yup.string().required('*required').email('*Enter valid email'),
//         "course":Yup.array().required('*required atleast one'),
//         'mode':Yup.string().required('*required'),
//         'date':Yup.string().required('*required'),
//         'interest':Yup.string().required('*required'),
//         'remarks':Yup.string().required('*required'),
//         'calldate':Yup.string().required('*required')
//     })
//     let validateform = useFormik({
//         initialValues: {
//             'fname': '',
//             'number': '',
//             'email': '',
//             'course': '',
//             'mode': '',
//             'date': '',
//             'interest': '',
//             'remarks': '',
//             'calldate': ''
//         },
//         onSubmit: (fv) => { console.log(fv) },
//         validationSchema:formvalidations
//     })
//     return (
//         <form onSubmit={validateform.handleSubmit} >
//             <div className="main-div">
//                 <div className="form-body">
//                     <div className="sub-form" >
//                         <h3>ENQUIRY FORM</h3>
//                         <div className="name-input">
//                             <div className="form-floating mb-3">
//                                 <input name='fname' className=" form-control" type="text" id="floatingInput" placeholder="Enter Name" onChange={validateform.handleChange} onBlur={validateform.handleBlur} />
//                                 <label for="floatingInput">Name</label>
//                                 {validateform.errors.fname&& validateform.touched.fname?<span className="text-danger">{validateform.errors.fname}</span>:null}
//                             </div>
//                             <div className="form-floating">
//                                 <input name='number' type="text" className="form-control" id="floatingText" placeholder="Enter Phone Number" onChange={validateform.handleChange} onBlur={validateform.handleBlur} />
//                                 <label for="floatingText">Phone Number</label>
//                                 {validateform.errors.number&& validateform.touched.number?<span className="text-danger">{validateform.errors.number}</span>:null}
//                             </div>
//                         </div>
//                         <div className="form-floating mb-3">
//                             <input name='email' type="text" className="form-control" id="floatingInput" placeholder="Enter Email" onChange={validateform.handleChange} onBlur={validateform.handleBlur} />
//                             <label for="floatingInput">Email address</label>
//                             {validateform.errors.email&& validateform.touched.email?<span className="text-danger">{validateform.errors.email}</span>:null}
//                         </div>
//                         <div className="d-flex justify-content-between">
//                             <div>
//                                 <h3>Course</h3>
//                                 {validateform.errors.course&& validateform.touched.course?<span className="text-danger">{validateform.errors.course}</span>:null}
//                                 <div className="checkboxes-div">
//                                     <input name='course' value='Front End with Angular' type="checkbox" onChange={validateform.handleChange} onBlur={validateform.handleBlur} />Front End with Angular<br />
//                                     <input name='course' value='Front End with React' type="checkbox" onChange={validateform.handleChange} onBlur={validateform.handleBlur} />Front End with React<br />
//                                     <input name='course' value='Full stack JAVA' type="checkbox" onChange={validateform.handleChange} onBlur={validateform.handleBlur} />Full stack JAVA<br/>
//                                     <input name='course' value='MEAN' type="checkbox" onChange={validateform.handleChange} onBlur={validateform.handleBlur} />MEAN<br />
//                                     <input name='course' value='MERN' type="checkbox" onChange={validateform.handleChange} onBlur={validateform.handleBlur} />MERN<br />
//                                     <input name='course' value='Devops' type="checkbox" onChange={validateform.handleChange} onBlur={validateform.handleBlur} />Devops
//                                 </div>
//                             </div>
//                             <div>
//                                 <h3>Mode</h3>
//                                 {validateform.errors.mode&& validateform.touched.mode?<span className="text-danger">{validateform.errors.mode}</span>:null}
//                                 <input name='mode' value='Offline' type="radio" onChange={validateform.handleChange} onBlur={validateform.handleBlur}/>Offline<br />
//                                 <input name='mode' value='Online' type="radio" onChange={validateform.handleChange} onBlur={validateform.handleBlur}/>Online<br />

//                             </div>
//                         </div>
//                     </div>
//                     <div className="sub-form">
//                         <h3>FEEDBACK</h3>
//                         <div className="d-flex justify-content-between date-div mb-3">
//                             <div className="form-floating">
//                                 <input name='date' type="date" className="form-control" id="floatingdate" placeholder="date" onChange={validateform.handleChange} onBlur={validateform.handleBlur} />
//                                 <label for="floatingdate">Date</label>
//                                 {validateform.errors.date&& validateform.touched.date?<span className="text-danger">{validateform.errors.date}</span>:null}
//                             </div>
//                             <div className="form-floating">
//                                 <select className="form-select " id='floatinginterest' aria-label="Default select example">
//                                     <option selected disabled>Choose an option</option>
//                                     <option name='interest' onChange={validateform.handleChange} onBlur={validateform.handleBlur}value="interested">Interested</option>
//                                     <option name='interest' onChange={validateform.handleChange} onBlur={validateform.handleBlur} value="not interested">Not Interested</option>
//                                 </select>
//                                 <label for="floatinginterest">Interest</label>
//                                 {validateform.errors.interest&& validateform.touched.interest?<span className="text-danger">{validateform.errors.interest}</span>:null}
//                             </div>
//                         </div>
//                         <div className="form-floating mb-3">
//                             <textarea onChange={validateform.handleChange} onBlur={validateform.handleBlur} name='remarks' type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
//                             <label for="floatingInput">Remarks</label>
//                             {validateform.errors.remarks&& validateform.touched.remarks?<span className="text-danger">{validateform.errors.remarks}</span>:null}
//                         </div>
//                         <div name='calldate' className="form-floating">
//                             <input onChange={validateform.handleChange} onBlur={validateform.handleBlur} type="date" className="form-control" id="floatingdate" placeholder="date" />
//                             <label for="floatingdate">Next call Date</label>
//                             {validateform.errors.calldate&& validateform.touched.calldate?<span className="text-danger">{validateform.errors.calldate}</span>:null}
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <button type="submit" className="btn btn-primary btn-sm w-25">Save</button>
//                 </div>
//             </div>
//         </form>
//     )
// }
// export default Form;