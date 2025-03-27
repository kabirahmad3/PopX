import { Link } from "react-router"
import appstyle from "./home.module.css"





function Home() {
  

    return (
      <>
        <div class={appstyle.container}>
    <main class={appstyle.main}>
      <div class={appstyle.content}>
        <h1 class={appstyle.heading}>Welcome to PopX</h1>
        <p class={appstyle.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
        <div class={appstyle.buttons}>
          <Link to="/signup">
            <button class={[appstyle.btn, appstyle['btn-primary']].join(' ')}>Create Account</button>
          </Link>
          <Link to="/login">
            <button class={[appstyle.btn, appstyle['btn-secondary']].join(' ')}>Already Registered? Login</button>
          </Link>
        </div>
      </div>
    </main>
  </div>
      </>
    )
  }
  
  export default Home


