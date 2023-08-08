import React from "react";
import ContentHeader from "../../layout/ContentHeader";
import ContentFooter from "../../layout/ContentFooter";
import Card from "../../UI/Card";
import AccountProfileForm from "./AccountProfileForm";

function AccountProfile({ stacks, title }) {
  return (
    <React.Fragment>
      <ContentHeader title={title} stacks={stacks} />
      <Card className="w-[300px] min-w-300px mx-auto">
        <div>
          <div className="card-header mb-4">
            <h1>Account Profile</h1>
            <AccountProfileForm />
          </div>
        </div>
      </Card>
      <ContentFooter />
    </React.Fragment>
  );
}

export default AccountProfile;
