import Swal from "sweetalert2";
import AxiosBase, { setAuthToken } from "../../api/AxiosBase";
import history from "../../config/history";
import {
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_SUCCESS,
} from "../constants/userConstant";
import { adminLogin, myProfile } from "../../api/APIFunctions";

// Login action
export const LogIn = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const response = await adminLogin(formData);
    // Set token to localStorage
    const { user, token } = response.data;
    localStorage.setItem("adminToken", token);
    // Set token to Auth header
    setAuthToken(token);

    if (user?.role === "admin") {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
      });
      history.push("/admin/dashboard");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Authentication Successfull !",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: "Not Authorized",
      });
      history.push("/admin/login");
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Authentication Failed !",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response?.data,
    });
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Authentication Failed !",
      text: error?.response?.data?.message,
      showConfirmButton: false,
      timer: 2000,
    });
  }
};

// Load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const response = await myProfile();
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: response.data,
    });

    if (response.data.user.role === "admin") {
      history.push("/admin/dashboard");
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOAD_USER_FAIL,
      // payload: error.response.data.message,
    });
  }
};

// Logout user
export const logout = () => async (dispatch) => {
  const token = localStorage.getItem("adminToken");

  try {
    if (token) {
      localStorage.removeItem("adminToken");
    }
    dispatch({
      type: LOGOUT_USER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_USER_FAIL,
    });
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Logout Failed",
      showConfirmButton: false,
      timer: 2000,
    });
  }
};
