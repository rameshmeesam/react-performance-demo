import NavTabs from "../components/nav";
import { ContactData } from "../data/content";

const Contacts = () => {
  return (
    <>
      <NavTabs></NavTabs>
      <div className="content-area">
        <div>
          <h4>Contact</h4>
        </div>
        <div>
          <ContactData />
        </div>
      </div>
    </>
  );
};

export default Contacts;
