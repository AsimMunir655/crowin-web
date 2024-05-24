import CIcon from "@coreui/icons-react";
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CProgress,
  CRow,
} from "@coreui/react";
import { format as formatDate } from "date-fns";
import React, { lazy } from "react";
import MainChartExample from "../charts/MainChartExample.js";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
// const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand.js"));

const Dashboard = () => {
  // const { data: countsData } = useQuery("Counts", getDashboardCounts);
  const countsData = {};
  const data = countsData?.data;
  const currentDate = new Date();
  return (
    <>
      <WidgetsDropdown data={data} />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">
                Statistic
              </h4>
              <div className="small text-muted">
                {formatDate(currentDate, "MMMM y")}
              </div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download" />
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {["Month"].map((value) => {
                  return (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === "Month"}
                    >
                      {value}
                    </CButton>
                  );
                })}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample
            data={data}
            style={{ height: "300px", marginTop: "40px" }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <strong> Doctors {data?.totalDoctors}</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={data?.totalDoctors}
              />
            </CCol>

            <CCol md sm="12" className="mb-sm-2 mb-0">
              <strong>Total Patients {data?.totalPatients} </strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={data?.totalPatients}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <strong>
                Total Consultations Forms {data?.totalConsultations}{" "}
              </strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={data?.doctorForms}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  );
};

export default Dashboard;
