import { CButton, CCol, CForm, CFormText, CInput, CImg } from "@coreui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingComponent from "../../../containers/LoadingComponent";
import { useQuery, useMutation } from "react-query";
import { buildFormData } from "../../../config/buildFormData";
import Swal from "sweetalert2";
import { updateProfile } from "../../../api/APIFunctions";
import history from "../../../config/history";

export default function ViewConsultation({ match }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();

  const { data, isLoading } = useQuery("myProfile", {
    retry: 1,
    retryDelay: 500,
    refetchOnWindowFocus: false,
    // onSuccess: (data) => {

    // },
  });

  const item = data?.data?.user;

  const onFileChange = (e) => {
    setImage(e.target.files[0]);
    e.target.files.length > 0 &&
      setImagePreview(URL.createObjectURL(e.target.files[0]));
  };
  let formdata = new FormData();
  buildFormData(formdata, formData);
  formdata.append("image", image);

  const updateProfileFun = useMutation(updateProfile, {
    onSuccess: (data, val, context) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Profile Updated",
        showConfirmButton: false,
        timer: 2000,
      });
      setFormData({});
      setSubmit(false);
      setErrors({});
      history.push("/admin/profile");
    },
  });
  useEffect(() => {
    setFormData({
      ...formData,
      firstName: data?.data?.user?.firstName,
      lastName: data?.data?.user?.lastName,
      phoneNumber: data?.data?.user?.phoneNumber,
    });
    submit && validate();
    return () => {};
  }, [submit]);

  const validate = () => {
    let errors = {};
    const { password, confirmPassword } = formData;
    if (password !== confirmPassword)
      errors.rePassword = "confirm password is not matched";

    setErrors(errors);
    return Object.keys(errors).length;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    const valid = validate();
    if (valid > 0) return;
    updateProfileFun.mutate(formData);
  };

  return (
    <>
      {isLoading && <LoadingComponent />}
      {isLoading || (
        <div className="bg-white textBlack p-3 ">
          <div className="textBlack">
            <h2 className="text-center py-3">My Profile</h2>
            <CForm
              className="row g-3"
              onChange={({ target: { name, value } }) => {
                setFormData({ ...formData, [name]: value });
              }}
            >
              <CCol md={6}>
                <CFormText>First Name</CFormText>
                <CInput
                  name={"firstName"}
                  type="text"
                  value={formData?.firstName}
                />
              </CCol>
              <CCol md={6}>
                <CFormText>Last Name</CFormText>
                <CInput
                  name={"lastName"}
                  type="text"
                  value={formData?.lastName}
                />
              </CCol>
              <CCol md={6}>
                <CFormText>Email</CFormText>
                <CInput disabled type="text" value={item?.email} />
              </CCol>
              <br />
              <CCol md={6}>
                <CFormText>Phone Number</CFormText>
                <CInput
                  name={"phoneNumber"}
                  type="text"
                  value={formData?.phoneNumber}
                />
              </CCol>
              <CCol md={6}>
                <CFormText>Password</CFormText>
                <CInput name={"password"} type="password" />
              </CCol>
              <CCol md={6}>
                <CFormText>Confirm Password</CFormText>
                <CInput name={"confirmPassword"} type="password" />
              </CCol>
              <CCol style={{ marginTop: "10px" }} md={12}>
                <div className="mb-3">
                  <CInput
                    accept="images/*"
                    type="file"
                    id="formFile"
                    onChange={onFileChange}
                  />
                </div>
              </CCol>
              <CCol style={{ marginTop: "10px" }} md={12}>
                <CImg
                  rounded
                  thumbnail
                  src={
                    imagePreview
                      ? imagePreview
                      : `https://crowin-backend.herokuapp.com/${item?.profilePicture}`
                  }
                  width={200}
                  height={200}
                />
              </CCol>

              <CCol md={2}>
                <CButton
                  className="mt-3"
                  color="primary"
                  variant="outline"
                  shape="pill"
                  type="button"
                  onClick={onSubmit}
                >
                  Update Profile
                </CButton>
              </CCol>
            </CForm>
          </div>
        </div>
      )}
    </>
  );
}
