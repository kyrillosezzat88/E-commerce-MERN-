/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from "react";
import Modal, { ModalBody, ModalHead } from ".";
import { FileIcon, UploadIcon } from "../../assets/icons";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { hideAlert, showAlert } from "../../redux/slices/Alert";
interface CategoryModalPropsType {
  setOpenModal: (isOpen: boolean) => void;
}

interface categoryFormTypes {
  name: string;
  image: Blob | null;
}

// init form values
const initCategory: categoryFormTypes = {
  name: "",
  image: null,
};

const CreateCategory = ({ setOpenModal }: CategoryModalPropsType) => {
  const FormikRef = useRef(null);
  const dispatch = useDispatch();
  const [SelectedImage, setSelectedImage] = useState<Blob | null>(null);

  const onClose = () => {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { name } = FormikRef?.current?.values;
    if (name || SelectedImage) {
      dispatch(
        showAlert({
          message: "Are you sure?",
          type: "warning",
          action: () => {
            dispatch(hideAlert());
            setOpenModal(false);
          },
        })
      );
    } else {
      setOpenModal(false);
    }
  };

  return (
    <Modal className="lg:w-1/3" onClose={onClose}>
      <ModalHead onClose={onClose}>
        <h1 className="text-lg md:text-xl font-bold">Create New Category</h1>
      </ModalHead>
      <ModalBody>
        <>
          <h3 className="text-sm text-gray-500 font-bold mb-6">
            Category Details
          </h3>
          <Formik
            innerRef={FormikRef}
            initialValues={initCategory}
            onSubmit={(values: categoryFormTypes) => {
              values.image = SelectedImage;
              console.log(values);
            }}
          >
            <Form className="flex flex-col gap-4">
              <Field
                id="name"
                className="w-full bg-gray-100 p-4 py-2 rounded-md shadow-sm outline-primary outline-1"
                name="name"
                placeholder="Enter Category Name"
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
                      Upload a cover image for your Category.
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
    </Modal>
  );
};

export default CreateCategory;
