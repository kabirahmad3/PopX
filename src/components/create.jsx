import appstyle from "./create.module.css";
import { useNavigate } from "react-router";
function Create() {
    const navigate = useNavigate();

    const created=()=>{
        alert("Account Created");
        navigate("/login");
    }
  return (
    <>
      <div className={appstyle['signup-container']}>
        <h1 className={appstyle.heading}>Create your PopX account</h1>

        <form id="signup-form" onSubmit={created}>
          <div className={appstyle['form-group']}>
            <label for="fullName" className={[appstyle['form-label'], appstyle.required].join(" ") }>
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="name"
              className={appstyle['form-input']}
              placeholder="Enter fullname"
              required
            />
          </div>

          <div className={appstyle['form-group']}>
            <label for="phoneNumber" className={[appstyle['form-label'], appstyle.required].join(" ")}>
              Phone number
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              className={appstyle['form-input']}
              placeholder="Enter phone number"
              required
            />
          </div>

          <div className={appstyle['form-group']}>
            <label for="email" className={[appstyle['form-label'], appstyle.required].join(" ")}>
              Email ddress
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={appstyle['form-input']}
              placeholder="Enter email address"
              required
            />
          </div>

          <div className={appstyle['form-group']}>
            <label for="password" className={[appstyle['form-label'], appstyle.required].join(" ")}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={appstyle['form-input']}
              placeholder="Create password"
              required
            />
          </div>

          <div className={appstyle['form-group']}>
            <label for="companyName" className={appstyle['form-label']}>
              Company name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className={appstyle['form-input']}
              placeholder="Enter company name"
            />
          </div>

          <div className={appstyle['radio-group']}>
            <p className={appstyle['radio-group-label']}>
              Are you an Agency?<span className={appstyle.required}></span>
            </p>
            <div className={appstyle['radio-options']}>
              <div className={appstyle['radio-option']}>
                <input
                  type="radio"
                  id="agency-yes"
                  name="isAgency"
                  value="yes"
                  className={appstyle['radio-input']}
                  checked
                />
                <label for="agency-yes" className={appstyle['radio-label']}>
                  Yes
                </label>
              </div>
              <div className={appstyle['radio-option']}>
                <input
                  type="radio"
                  id="agency-no"
                  name="isAgency"
                  value="no"
                  className={appstyle['radio-input']}
                />
                <label for="agency-no" className={appstyle['radio-label']}>
                  No
                </label>
              </div>
            </div>
          </div>
        {/* <Link to={"/login"}> */}
          <button type="submit" className={appstyle.btn}>
            Create Account
          </button>
        {/* </Link> */}
        </form>
      </div>
    </>
  );
}

export default Create;
