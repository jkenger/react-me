import React from "react";
import ContentHeader from "../../layout/ContentHeader";

function AccountProfile({ initialStacks, title }) {
  return (
    <React.Fragment>
      <ContentHeader title={title} stacks={initialStacks} />
    </React.Fragment>
  );
}

export default AccountProfile;
