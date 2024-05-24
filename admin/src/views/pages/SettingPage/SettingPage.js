import CIcon from "@coreui/icons-react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CImg,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { buildFormData } from "../../../config/buildFormData";
import { myProfile, updateProfile } from "../../../api/APIFunctions";
import Swal from "sweetalert2";

const SettingPage = () => {
  const { isLoading, isFetching, data, isError } = useQuery(
    ["patientProfile"],
    myProfile,
    {
      retry: 1,
      retryDelay: 500,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setFirstName(data?.data?.user?.firstName);
        setLastName(data?.data?.user?.lastName);
        setPhoneNumber(data?.data?.user?.phoneNumber);
        setImage(data?.data?.user?.profilePicture);
      },
    }
  );

  const item = data?.data?.user;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();

  const queryClient = useQueryClient();
  const { mutate } = useMutation(updateProfile, {
    onSuccess: (data) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Profile Updated Successfully!!!",
        showConfirmButton: true,
        timer: 2000,
      });
      queryClient.invalidateQueries("patientProfile");
    },
    onError: (error) => {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Profile Updated Failed!!!",
        text: error?.response?.data?.message,
        showConfirmButton: true,
        timer: 2000,
      });
    },
  });

  const UpdateProfile = async (e) => {
    e.preventDefault();
    var formdata = new FormData();

    const updateDataObj = {
      firstName,
      lastName,
      phoneNumber,
      password,
      confirmPassword,
    };

    buildFormData(formdata, updateDataObj);
    formdata.append("image", image);

    try {
      mutate(formdata);
    } catch (e) {
      console.log(e);
    }
  };

  const onFileChange = (e) => {
    setImage(e.target.files[0]);
    e.target.files.length > 0 &&
      setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  //  for validations
  useEffect(() => {
    submit && validate();
    return () => {};
  }, [submit]);

  const validate = () => {
    let errors = {};

    if (password !== confirmPassword)
      errors.rePassword = "confirm password is not matched";

    setErrors(errors);
    return Object.keys(errors).length;
  };

  // main return

  return (
    <div className="c-app c-default-layout flex-row ">
      <CContainer>
        <CRow>
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Update Profile</h1>

                  <CInputGroup className="mt-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      autoComplete="first-name"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e?.target.value);
                      }}
                    />
                    <CInput
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      autoComplete="last-name"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e?.target.value);
                      }}
                    />
                  </CInputGroup>

                  <CInputGroup className="mt-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-phone" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      autoComplete="phone-number"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e?.target.value);
                      }}
                    />
                  </CInputGroup>

                  <CInputGroup className="mt-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      name="password"
                      type="password"
                      placeholder="New Password"
                      value={password}
                      autoComplete="new-password"
                      onChange={(e) => {
                        setPassword(e?.target.value);
                      }}
                    />
                  </CInputGroup>
                  <CInputGroup className="mt-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      autoComplete="confirm-password"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e?.target.value);
                      }}
                    />
                  </CInputGroup>

                  {errors.rePassword && (
                    <div className="errorText">{errors.rePassword}</div>
                  )}

                  <br />
                  <div className="mb-3">
                    <CInputGroupText htmlFor="formFile">
                      Profile Picture
                    </CInputGroupText>
                    <CInput
                      accept="images/*"
                      type="file"
                      id="formFile"
                      onChange={onFileChange}
                    />
                  </div>
                  <CCol style={{ marginTop: "10px" }} md={12}>
                    <CImg
                      rounded
                      thumbnail
                      src={
                        imagePreview
                          ? imagePreview
                          : `http://localhost:3000/${item?.profilePicture}`
                      }
                      width={200}
                      height={200}
                    />
                  </CCol>
                  <CButton
                    className="mt-3"
                    onClick={UpdateProfile}
                    color="success"
                    block
                    type="button"
                  >
                    Update Profile
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default SettingPage;
