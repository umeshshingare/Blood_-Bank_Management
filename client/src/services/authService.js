import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";
import { toast } from "react-toastify";

// Handle Login
export const handleLogin = (e, email, password, role) => {
  e.preventDefault();

  try {
    if (!email || !password || !role) {
      return toast.error("Please provide all fields");
    }

    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log("Error in login: ", error);
    toast.error("Login failed");
  }
};

// Handle Register
export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  organisationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();

  try {
    if (!name || !role || !email || !password) {
      return toast.error("Please provide all required fields");
    }

    store.dispatch(
      userRegister({
        name,
        role,
        email,
        password,
        organisationName,
        hospitalName,
        website,
        address,
        phone,
      })
    );
  } catch (error) {
    console.log("Error in Register: ", error);
    toast.error("Register failed");
  }
};
