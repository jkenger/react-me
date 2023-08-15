import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import AccountInformationForm from "./AccountInformationForm";

function AccountInformationAddModal() {
  return (
    <Modal>
      <Modal.Body>
        <Modal.Header>➕ Add Account Information</Modal.Header>
        <Modal.Form>
          <AccountInformationForm />
        </Modal.Form>
        <Modal.Footer>
          <Button className=" border-gray-300 hover:bg-gray-200">Cancel</Button>
          <Button className="btn-primary">Save</Button>
        </Modal.Footer>
      </Modal.Body>

      <Modal.Button>
        <Button className="btn-primary"> Add new account</Button>
      </Modal.Button>
    </Modal>
  );
}

export default AccountInformationAddModal;
