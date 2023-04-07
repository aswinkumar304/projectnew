import './App.css';
import profile from "./image/a.png"
import email from "./image/email.png"
import pass from "./image/pass.png"

function App() {
  return (
   <div className='main'>
    <div  className='sub-main'>
     <div>
      <div className='imgs'>
        <div className='container-image'>
            <img src={profile} alt='profile' className='profile'/>
        </div>
      </div>
      <div>
        <h1>Login page</h1>
        <div>
          <img src={email} alt='email' className='email'></img>
          <input type='text' placeholder='Username' className='input'></input>
        </div>
        <div className='second-input'> 
          <img src={pass} alt='password' className='email'></img>
          <input type='text' placeholder='password' className='input'></input>
        </div>
        <button >Login</button>
      </div>
      </div>
    </div>
    
   </div>
  );
}

export default App;
