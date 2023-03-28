import React from 'react'
import layeredWaves from '/src/assets/layered-waves-haikei.svg'
import './Register.css'


export default function Register({handleSignIn}){

  const [email, setEmail] = React.useState("");
  const [fName, setFName] = React.useState("");
  const [sName, setSName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confPassword, setConfPassword] = React.useState("");


    const myStyles = {
        background: `url(${layeredWaves})`
    }

    const date = new Date();
    const dateYear = date.getFullYear();

    const handleSubmit = (event) => {
      event.preventDefault();
      if(!email || !password){
       alert("Email and Password must be filled Out")
        return
      }
      if(password != confPassword){
        alert("Password does not match")
        return
      }
      handleSignIn('Login')
    }
    return(
      <main id="main">
          <section className="navAuth" style={myStyles}>
            <div className="nav-title">
              <img  src="/icons8-bee-80.png" alt="logo" className='nav-icon'/>
              <h1>{"{< Coding Bee />}"}</h1>
            </div>
            <div className="nav-footer">
              <h6>openEdu-GH 2023</h6>
            </div>
          </section>
          <section className="form-page">
            <div className="form-plate">
              <form action="#" method="post" onSubmit={handleSubmit}>
                <div className="form-name">
                  <label htmlFor="firstname">FIRST NAME</label>
                  <input type="text" id="firstname" name="firstname" value={fName} onChange={(e) => setFName(e.target.value)} required/>
                  <label htmlFor="lastname">LAST NAME</label>
                  <input type="text" id="lastname" name="lastname" value={sName} onChange={(e) => setSName(e.target.value)} required/>
                </div>
                <div className="form-creds">
                  <label htmlFor="email">EMAIL</label>
                  <input type="email" id="email" name="email" value={email} onChange ={ (e) =>setEmail(e.target.value)} required/>
                  <label htmlFor="phone">PHONE</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="form-auth">
                  <label htmlFor="user_password">PASSWORD</label>
                  <input type="password" id="user_password" name="password" value={password} onChange= { (e) =>setPassword(e.target.value)} required/>
                  <label htmlFor="confirm_user_password">CONFIRM PASSWORD</label>
                  <input
                    type="password"
                    id="confirm_user_password"
                    name="confirm_password"
                    value={confPassword}
                    onChange = {(e) => setConfPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="hero-btn">
                  <button type="submit">REGISTER</button>
                  <button type="submit" onClick={(e) => handleSignIn('Login')}>LOGIN</button>
                </div>
              </form>
            </div>
          </section>
         <footer className="regis-footer">OpenEdu <em>{dateYear}</em></footer>
      </main>   
    )
}

// export default SignIn;