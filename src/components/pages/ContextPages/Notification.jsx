import Button from "../../UI/Button";
import { toast } from "react-hot-toast";

function Notification() {
  return (
    <div className="flex space-x-2">
      <Button onClick={() => toast.success("This is notification 1")}>
        Notification 1
      </Button>
      <Button onClick={() => toast.loading("This is notification 2")}>
        Notification 2
      </Button>
      <Button onClick={() => toast.error("This is notification 3")}>
        Notification 3
      </Button>
    </div>
  );
}

export default Notification;
