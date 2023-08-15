import { createContext } from "react";
import ContentFooter from "../../layout/ContentFooter";
import ContentHeader from "../../layout/ContentHeader";
import Card from "../../UI/Card";

const ContentContext = createContext();

function Content({ children }) {
  return <ContentContext.Provider>{children}</ContentContext.Provider>;
}

function Body({ children }) {
  return <Card>{children}</Card>;
}

function Header({ title, stacks }) {
  return <ContentHeader title={title} stacks={stacks} />;
}

function Footer() {
  return <ContentFooter />;
}

Content.Header = Header;
Content.Body = Body;
Content.Footer = Footer;

export default Content;
