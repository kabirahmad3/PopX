import appstyle from "./settings.module.css";
import image1 from "./image.webp";
import { useSearchParams } from "react-router";


function Setting() {
  const [searchParams, setSearchParams] = useSearchParams();

  const email = searchParams.get('email')
  const name = searchParams.get('name')

  return (
    <>
      <div class={appstyle.container}>
    
    <div class={appstyle.header}>
      <h1>Account Settings</h1>
    </div>
    
    
    <div class={appstyle['profile-section']}>
      <div class={appstyle['profile-header']}>
        <div class={appstyle['profile-image-container']}>
          <img src={image1} alt="Image" class={appstyle['profile-image']} />
          <div class={appstyle['camera-icon']}>
            <span>📷</span>
          </div>
        </div>
        
        <div class={appstyle['profile-info']}>
          <div class={appstyle['profile-name']}>{name}</div>
          <div class={appstyle['profile-email']}>{email}</div>
        </div>
      </div>
      
      <div class={appstyle['profile-bio']}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>
    </div>
  </div>
    </>
  )
}

export default Setting

