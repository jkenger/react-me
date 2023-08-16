import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import AccountInformationForm from "./AccountInformationForm";

function AccountInformationAddModal() {
  return (
    <Modal>
      <Modal.Body>
        <Modal.Header>➕ Add Account Information</Modal.Header>
        <Modal.Form>
          <AccountInformationForm>
            <Modal.Footer>
              <Button className=" border-gray-300 hover:bg-gray-200">
                Cancel
              </Button>
              <Button className="btn-primary" submitOption="add">
                Save
              </Button>
            </Modal.Footer>
          </AccountInformationForm>
        </Modal.Form>
      </Modal.Body>
      <Modal.Button>
        <Button className="btn-primary"> Add new account</Button>
      </Modal.Button>
    </Modal>
  );
}

export default AccountInformationAddModal;
