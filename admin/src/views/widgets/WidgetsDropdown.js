import { CCol, CRow, CWidgetDropdown } from "@coreui/react";
import React from "react";
import ChartLineSimple from "../charts/ChartLineSimple";
import { random } from "../charts/MainChartExample";

const WidgetsDropdown = ({ data }) => {
  let elements = 10;
  const data1 = [];
  const data2 = [];
  const data3 = [];
  for (let i = 0; i <= elements; i++) {
    data1.push(random(0, data?.totalDoctors));
    data2.push(random(0, data?.totalDoctors));
    data3.push(random(0, data?.totalConsultations));
  }
  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header={data?.totalDoctors || "0"}
          text="Total Doctors"
          footerSlot={
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{ height: "70px" }}
              dataPoints={data1}
              pointHoverBackgroundColor="primary"
              label="Doctors"
              labels="months"
            />
          }
        ></CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header={data?.totalPatients || "0"}
          text="Total Patients"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{ height: "70px" }}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={data2}
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              pointHoverBackgroundColor="warning"
              label="Patients"
              labels="months"
            />
          }
        ></CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header={data?.totalConsultations || "0"}
          text="All Consultations "
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{ height: "70px" }}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={data3}
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              pointHoverBackgroundColor="warning"
              label="Consultations"
              labels="months"
            />
          }
        ></CWidgetDropdown>
      </CCol>
    </CRow>
  );
};

export default WidgetsDropdown;
