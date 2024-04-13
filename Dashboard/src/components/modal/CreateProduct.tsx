import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { hideAlert, showAlert } from "../../redux/slices/Alert";
import { FileIcon, UploadIcon } from "../../assets/icons";
import Modal, { ModalBody, ModalHead } from ".";
import { Field, Form, Formik } from "formik";

interface productModalPropsType {
  setOpenModal: (isOpen: boolean) => void;
}

interface productFormTypes {
  name: string;
  image: Blob | null;
}

// init form values
const initProduct: productFormTypes = {
  name: "",
  image: null,
};
const CreateProduct = ({setOpenModal}:productModalPropsType) => {
  const FormikRef = useRef<any>(null);
  const dispatch = useDispatch();
  const [SelectedImage, setSelectedImage] = useState<Blob | null>(null);

  const onClose = () => {
    console.log('close modal');
    dispatch(showAlert({message:"Are you sure?", type:"warning" , action: () => {
      dispatch(hideAlert());
      setOpenModal(false);
    },}))
  }

  return    <Modal className="lg:w-1/3" onClose={onClose}>
  <ModalHead onClose={onClose}>
    <h1 className="text-lg md:text-xl font-bold">Create New Product</h1>
  </ModalHead>
  <ModalBody>
    <>
      <h3 className="text-sm text-gray-500 font-bold mb-6">
        Product Details
      </h3>
      <Formik
        innerRef={FormikRef}
        initialValues={initProduct}
        onSubmit={(values: productFormTypes) => {
          values.image = SelectedImage;
          console.log(values);
        }}
      >
        <Form className="flex flex-col gap-4">
          <Field
            id="name"
            className="w-full bg-gray-100 p-4 py-2 rounded-md shadow-sm outline-primary outline-1"
            name="name"
            placeholder="Enter product Name"
            required
          />
          <input
            type="file"
            hidden
            required
            id="upload-image"
            onChange={(e: any) => {
              setSelectedImage(e.currentTarget.files[0]);
            }}
          />
          <label
            htmlFor="upload-image"
            className="upload-image cursor-pointer text-center flex items-center justify-center gap-3 bg-gray-100 flex-col min-h-60 p-5 rounded-md"
          >
            {SelectedImage != null ? (
              <img
                src={URL.createObjectURL(SelectedImage)}
                alt="Uploaded Image"
                className="h-60"
              />
            ) : (
              <>
                <FileIcon />
                <h4 className="flex gap-2 items-center">
                  <UploadIcon /> <span>Upload Image</span>
                </h4>
                <p className="text-gray-500 text-sm">
                  Upload a cover image for your product.
                  <br />
                  File Format jpeg, png Recommened Size 600x600 (1:1)
                </p>
              </>
            )}
          </label>
          <button type="submit" className="btn-primary">
            Create
          </button>
        </Form>
      </Formik>
    </>
  </ModalBody>
</Modal>;
};

export default CreateProduct;
