import { Link } from "react-router-dom";
import ContentList from "../UI/ContentList";

function Content() {
  return (
    <div id="content" className="px-6 py-4">
      <div
        className="container max-w-full min-w-[400px]  grid gap-4 grid-cols-1 
        
        sm:grid-cols-1 md:grid-cols-1 
      lg:grid-cols-2 xl:grid-cols-3"
      >
        <ContentList />
        <ContentList />
        <ContentList />
        <ContentList />
        <ContentList />
      </div>
    </div>
  );
}

export default Content;
