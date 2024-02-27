// import './App.css';
// import { useFormik } from 'formik';



// function App() {
//   var userForm =useFormik({
//     initialValues:{"fn":"","ln":"","age":""},
//     onSubmit:(fv)=>{console.log(fv)}
//   })
//   console.log(userForm)
//   return (
//     <div className="">
//     <h1>Form Handling</h1>
//     <form onSubmit={userForm.handleSubmit}>
//     <input type="text" name="fn" placeholder="Firstname" onChange={userForm.handleChange}/><br/>
//     <input type="text" name="ln" placeholder="Lastname" onChange={userForm.handleChange}/><br/>
//     <input type="text" name="age" placeholder="Age" onChange={userForm.handleChange}/><br/>
//     <button type="submit">Save</button>
//     </form>
//     </div>
//   );
// }

// export default App;



import './App.css'
import { Formik } from 'formik'
function App(){
  return (
    <>
    <h1>welcome to formik </h1>
    <Formik
        initialValues={{"fn":"","ln":"","age":""}}
        onSubmit={(fv)=>{console.log(fv)}}
        >
        {
         ({handleSubmit,handleChange})=>{
          // console.log(userForm)
          return (
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Firstname" name="fn" onChange={handleChange}/><br/>
              <input type="text" placeholder="Lastname" name="ln" onChange={handleChange}/><br/>
              <input type="text" placeholder="Age" name="age" onChange={handleChange}/><br/>
              <button type="submit">Save</button>
            </form>
          )
         }
        }
    </Formik>
    </>
  )
}
export default App;