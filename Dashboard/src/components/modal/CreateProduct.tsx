import Modal, { ModalBody, ModalHead } from ".";
import { CloseIcon } from "../../assets/icons";

interface productModalPropsType {
  isOpen: boolean;
  setOpenModal: (isOpen: boolean) => void;
}
const CreateProduct = ({ isOpen, setOpenModal }: productModalPropsType) => {
  return (
    <Modal isOpen={isOpen} setOpenModal={setOpenModal}>
      <ModalHead>
        <div className="flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-bold">Create New Product</h1>
          <CloseIcon onClick={() => setOpenModal(false)} />
        </div>
      </ModalHead>
      <ModalBody>
        <div className="flex gap-3">
          <div className="w-full md:w-1/2">
            <h3 className="text-base text-gray-500 font-semibold">
              product Details
            </h3>
            {/* <Formik initialValues={}></Formik> */}
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default CreateProduct;
