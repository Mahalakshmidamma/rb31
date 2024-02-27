import './App.css';
import { useFormik } from 'formik';


function App() {
  var userForm=useFormik({
    initialValues:{"fn":""},
    onSubmit:()=>{}
  })
  return (
    <div className="App">
    <h1>Form Handling</h1>
    </div>
  );
}

export default App;
