import { useSelector, useDispatch } from "react-redux";
import "./Alert.scss";
import { AlertSuccess, Alertwarning, AlertDanger } from "../../assets/icons";
import { hideAlert } from "../../redux/slices/Alert";
const Alert = () => {
  const dispatch = useDispatch();
  const { isOpen, message, type, action } = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state.alert
  );
  const handelCancel = () => {
    dispatch(hideAlert());
  };
  if (!isOpen) return null;
  return (
    <div className="alert">
      <div className={`alert-content type-${type}`}>
        <div className="flex gap-2 items-center">
          {type === "success" && <AlertSuccess />}
          {type === "warning" && <Alertwarning />}
          {type === "danger" && <AlertDanger />}
          <p>{message}</p>
        </div>
        <div className="alert-actions">
          <button className="btn-primary" onClick={action}>
            Confirm
          </button>
          <button className="btn-danger" onClick={handelCancel}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
