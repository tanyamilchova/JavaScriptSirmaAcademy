import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Header(){
const {email}=useContext(AuthContext);  // закача се Header към Context

  return (
    <header>
        <span>Home &nbsp; </span>
        <span>Pricing &nbsp; </span>
        <span>Contacts  &nbsp; </span>
        {/* <strong>{email} - logout &nbsp; </strong> */}
        <strong>{email} - logout &nbsp; </strong>
    </header>
  );
}