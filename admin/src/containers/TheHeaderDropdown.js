import React from "react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { logout } from "../redux/actions/authActions";
import { defaultPicture } from "../assets/images";
import history from "../config/history";
import { connect } from "react-redux";
import { useQuery } from "react-query";
import { myProfile } from "../api/APIFunctions";
import { Avatar } from "@material-ui/core";

const TheHeaderDropdown = (props) => {
  const { data, isLoading } = useQuery("myProfile", myProfile);

  const item = data?.data?.user;
  const onLogout = () => {
    props.logout();
    history.push("/login");
  };
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <Avatar
            src={`https://crowin-backend.herokuapp.com/${item?.profilePicture}`}
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Account</strong>
        </CDropdownItem>

        <CDropdownItem onClick={() => history.push("/admin/setting")}>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem onClick={onLogout}>
          <CIcon name="cil-logout" className="mfe-2" />
          Log out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default connect(null, { logout })(TheHeaderDropdown);
