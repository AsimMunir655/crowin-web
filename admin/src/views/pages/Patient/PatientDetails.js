import { CButton, CCol, CForm, CFormText, CInput } from "@coreui/react";
import React from "react";
import { useQuery } from "react-query";
import LoadingComponent from "../../../containers/LoadingComponent";

export default function PatientDetails({ match }) {
  const { data, isLoading } = useQuery("Patients");

  const item = data?.data?.patients.find((obj) => {
    return obj._id === match.params.id;
  });

  return (
    <>
      {isLoading && <LoadingComponent />}
      {isLoading || (
        <div className="bg-white textBlack p-3 ">
          <div className="textBlack">
            <h2 className="text-center py-3">Patient Details</h2>
            <CForm className="row g-3">
              <CCol md={6}>
                <CFormText>First Name</CFormText>
                <CInput disabled type="text" value={item?.firstName} />
              </CCol>
              <CCol md={6}>
                <CFormText>Last Name</CFormText>
                <CInput disabled type="text" value={item?.lastName} />
              </CCol>
              <CCol md={6}>
                <CFormText>Date of birth</CFormText>
                <CInput
                  disabled
                  type="text"
                  value={new Date(item?.patient?.personalDetails?.dateOfBirth).toLocaleDateString()}
                />
              </CCol>
              <CCol md={6}>
                <CFormText>gender</CFormText>
                <CInput disabled type="text" value={item?.gender} />
              </CCol>

              <CCol md={6}>
                <CFormText>State</CFormText>
                <CInput disabled type="text" value={item?.state} />
              </CCol>
              <CCol md={6}>
                <CFormText>City</CFormText>
                <CInput disabled type="text" value={item?.city} />
              </CCol>
              <CCol md={6}>
                <CFormText>Date of consultation</CFormText>
                <CInput
                  disabled
                  type="text"
                  value={new Date(item?.timeSlot?.startTime).toDateString()}
                />
              </CCol>
              <CCol md={6}>
                <CFormText>Consultation Type</CFormText>
                <CInput disabled type="text" value={item?.consultationType} />
              </CCol>
              <CCol md={6}>
                <CFormText>Status</CFormText>
                <CInput disabled type="text" value={item?.status} />
              </CCol>
              <CCol md={6}>
                <CFormText>Age in Years</CFormText>
                <CInput disabled type="text" value={item?.ageInYear} />
              </CCol>

              <CCol md={6}>
                <CFormText>Start Time</CFormText>
                <CInput
                  disabled
                  type="text"
                  value={new Date(item?.timeSlot?.startTime).toTimeString()}
                />
              </CCol>
              <CCol md={6}>
                <CFormText>End Time</CFormText>
                <CInput
                  disabled
                  type="text"
                  value={new Date(item?.timeSlot?.endTime).toTimeString()}
                />
              </CCol>
              <CCol md={2}>
                <CButton
                  className="mt-3"
                  color="primary"
                  variant="outline"
                  shape="pill"
                  type="button"
                >
                  View Attachment
                </CButton>
              </CCol>
              <CCol md={2}>
                <CButton
                  className="mt-3"
                  color="primary"
                  variant="outline"
                  shape="pill"
                  type="button"
                >
                  Message Patient
                </CButton>
              </CCol>
            </CForm>
          </div>
        </div>
      )}
    </>
  );
}
