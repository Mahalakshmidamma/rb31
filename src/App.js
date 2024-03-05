import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <button>All Enquiries</button>

    <div className="App">
    <div>
    <h1>ENQUIRY FORM</h1>
    <form>
      <input type="text" placeholder='Name' id="n1" class="form-control"/>  &nbsp;&nbsp;      
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

     
      <h6 >MODE</h6>
      <input type="radio" name="Online" value="Online"/>
      <label>Online</label>
      <br/>
      <input type="radio" name="Offline" value="Offline"/>
      <label>Offline</label>
      </form>
      </div>
      
       
        <div className='fb'>
        <form>
        <h1>FEEDBACK</h1>
        <input type="date" placeholder='Date'/> &nbsp;&nbsp;
         <select>
          <option name="Choose an option">Choose an option</option>
          <option name="interested">Interested</option>
          <option name="Not Intst">Not Interested</option>
         </select><br/>
         <input type="text" placeholder='Remarks'/><br/>
         <input type="date" /><br/>
         
         </form>
         </div>
          

         <button className='btn'>SAVE</button>
    
    </div>
    </div>
  );
}

export default App;
