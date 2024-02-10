/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import Spinner from "./Spinner";
import Modal from "./Modal";
import { MdMarkEmailRead, MdOutlineError } from "react-icons/md";
import * as yup from "yup";
interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    // e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      emailjs
        .send(
          // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          "service_wcgmuqb",
          "template_dc6qsys",
          {
            from_name: values.name,
            to_name: "Olabayoji Oladepo",
            from_email: values.email,
            to_email: "olabayojioladepo@gmail.com",
            message: values.message,
          },
          "KcDRgIYJCIbkiI_eD"
        )
        .then(
          () => {
            setShowModal(true);
            resetForm();
          },
          (error) => {
            console.error(error);
            setError(true);
            setShowModal(true);
          }
        );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            onSubmit={handleSubmit}
            validationSchema={validation}
          >
            {({ isSubmitting }) => (
              <Form className="mt-12 flex flex-col gap-8">
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-1">Your Name</span>
                  <Field
                    required
                    type="text"
                    name="name"
                    placeholder=""
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-1">
                    Your email
                  </span>
                  <Field
                    required
                    type="email"
                    name="email"
                    placeholder=""
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-1">
                    Your Message
                  </span>
                  <Field
                    required
                    as="textarea"
                    rows={7}
                    name="message"
                    placeholder=""
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit min-w-12 text-white font-bold shadow-md shadow-primary hover:bg-tertiary/60 hover:text-white/70 transition-all duration-300"
                >
                  {loading ? <Spinner /> : "Send"}
                </button>
              </Form>
            )}
          </Formik>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[100] p-6 rounded-md bg-zinc-700 w-full max-w-md">
          <div className="flex justify-end">
            <button onClick={() => setShowModal(false)} className="text-xl">
              &times;{" "}
            </button>
          </div>
          {error ? (
            <MdOutlineError className=" text-4xl mx-auto mb-4 text-red-700" />
          ) : (
            <MdMarkEmailRead className=" text-4xl mx-auto mb-4" />
          )}
          {!error ? (
            <p className="">
              Thank you for getting in touch. I will get back to you as soon as
              possible.
            </p>
          ) : (
            <p>
              Oops... Something went wrong. Please try again or contact me at{" "}
              <a href="mailto:olabayojioladepo@gmail.com">
                olabayojioladepo@gmail.com
              </a>
            </p>
          )}
        </div>
      </Modal>
    </>
  );
};

export default SectionWrapper(Contact, "contact");

const validation = yup.object().shape({
  name: yup.string().trim().required("Name is required"),
  email: yup
    .string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),
  message: yup.string().trim().required("Message is required"),
});
