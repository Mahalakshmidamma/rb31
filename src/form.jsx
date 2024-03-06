import React from "react";
import { useFormik, validateYupSchema } from "formik";
import Yup from 'yup';


function Form() {
    let validateform=useFormik({
        initialValues:{
          'name':'',
          'number':'',
          'email':'',
          'cource':'',
          'mode':'',
          'date':'',
          'interest':'',
          'remarks':'',
          'caldate':''
        },
        onSubmit:(fv)=>{console.log(fv)},
        // validationSchema:formvalidations
    })
    return (
        <form onSubmit={validateform.handleSubmit}>
            <div className="App">
                <div className="enquiry-center">
                    <h1>ENQUIRY FORM</h1>

                    <div className="name-num">
                        <div class="form-floating mb-3">
                            <input type="text" name="name" class="form-control" id="floatingInput" placeholder="name" />
                            <label for="floatingInput">Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" name="number" class="form-control" id="floatingPassword" placeholder="Number" />
                            <label for="floatingPassword">Number</label>
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" name="email"class="form-control" id="floatingInput" placeholder="Enter email " />
                        <label for="floatingInput">Email</label>
                    </div>


                    <br />
                    <div className="cource-mode">
                        <div className="cources">
                            <h6>COURCES</h6>
                                    <input name='course' value='Front End with Angular' type="checkbox"  />Front End with Angular<br />
                                    <input name='course' value='Front End with React' type="checkbox"  />Front End with React<br />
                                    <input name='course' value='Full stack JAVA' type="checkbox"  />Full stack JAVA<br/>
                                    <input name='course' value='MEAN' type="checkbox"  />MEAN<br />
                                    <input name='course' value='MERN' type="checkbox"  />MERN<br />
                                    <input name='course' value='Devops' type="checkbox"  />Devops
                        </div>
                        <br />

                        <div>
                            <h6 >MODE</h6>
                            <input type="radio" name="mode" value="online"/>Online
                            <br />
                            <input type="radio" name="mode" value="offline"/>Offline
                        </div>

                    </div>

                </div>
                <div className='fb'>

                    <h1>FEEDBACK</h1>
                    <div className="date-select">
                        <div class="form-floating mb-3">
                            <input type="date" name="date" class="form-control" id="floatingDate" placeholder="date" />
                            <label for="floatingDate" id="c1">Date</label>
                        </div>

                        <div class="form-floating mb-3">
                            <select type="text" class="form-control" id="floatingPassword" placeholder="Number">
                                <option  selected disabled>Choose an option</option>
                                <option name='interest' value="interested">Interested</option>
                                <option name='interest' value="not interested">Not Interested</option>
                            </select>
                            <label for="floatingPassword" id="c2">Interest</label>
                        </div>
                    </div>
                    
                    <textarea type="text"  name="remarks" placeholder='Remarks' class="form-control"></textarea><br />
                   
                    <div name='calldate' class="form-floating mb-3">
                            <input type="date"  class="form-control" id="floatingDate" placeholder="date" />
                            <label for="floatingDate" id="c1">Next cal Date</label>
                    </div>


                </div>


                <button type="submit" className='btn'>SAVE</button>

            </div>

        </form >
    );
}
export default Form




