import { CButton, CDataTable } from "@coreui/react";
import { format as formatDate, parseISO } from "date-fns";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import LoadingComponent from "../../../containers/LoadingComponent";
import { getPatients } from "../../../api/APIFunctions";

export default function PatientPages() {
  const { data, isLoading, error } = useQuery("Patients", getPatients);

  const fields = [
    { key: "firstName", label: "First Name", _style: { width: "25%" } },
    { key: "lastName", label: "Last Name", _style: { width: "25%" } },
    { key: "email", label: "Email", style: { width: "40%" } },
    { key: "createdAt", label: "registered" },

    {
      key: "show_details",
      label: "Actions",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const queryClient = useQueryClient();
  // const deleteParentFun = useMutation(deactiveUser);

  return (
    <>
      {isLoading && <LoadingComponent />}
      {isLoading || (
        <div className="bg-white p-3 ">
          <div
            className="flexCenter my-3"
            style={{ justifyContent: "flex-end" }}
          >
            <Link to="/admin/patient/new-patient">
              <CButton color="primary" size="sm">
                + Add Patient
              </CButton>
            </Link>
          </div>

          <CDataTable
            responsive
            items={data?.data?.patients}
            fields={fields}
            columnFilter
            tableFilter
            footer
            itemsPerPageSelect
            itemsPerPage={5}
            hover
            sorter
            pagination
            scopedSlots={{
              email: (item) => {
                return <td>{item.email}</td>;
              },
              show_details: (item, index) => {
                return (
                  <td className="py-2">
                    <Link to={`/admin/patient/${item._id}`}>
                      <CButton
                        color="primary"
                        variant="outline"
                        shape="pill"
                        size="sm"
                        onClick={() => console.log("Hello")}
                      >
                        View
                      </CButton>
                    </Link>
                  </td>
                );
              },
              createdAt: (item) => {
                return <td>{formatDate(parseISO(item.createdAt), "PPp")}</td>;
              },
            }}
          />
        </div>
      )}
    </>
  );
}
