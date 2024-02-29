import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import FormInput from "../Forms/FormInput";
import toast from "react-hot-toast";
import axios from "axios";
const GIC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string()
      .email("Email not valid!")
      .required("Email is required!"),
    subject: Yup.string().required("Subject is required!"),
    message: Yup.string().required("Message is required!"),
  });

  const handleSubmit = async (values, resetForm) => {
    try {
      await axios.post("https://app.soldat.ai/api/solusidata/message", values, {
        headers: { secret: "J>v`E5[)4eYtsfxB3#VQ{z" },
      });
      toast.success("Message has been sended!");
      resetForm();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const formik = useFormik({
    validationSchema,
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values, resetForm);
    },
  });

  return (
    <div className=" relative ">
      <div className="absolute w-full h-full -z-20 bg-black"></div>
      <div
        className="wrapper pt-[163px]  bg-gradient-to-t from-black to-white relative -top-[100px] z-[5]"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(255,255,255,0)), url('/images/gic-bg.png')`,
        }}
      >
        <div className="container">
          <div className="flex gap-[43px] lg:gap-[90px] items-end flex-col lg:flex-row">
            <div className="lg:max-w-[602px] w-full">
              <h2 className="text-h2 text-white">Get in touch</h2>
              <p className="text-[23px] leading-[32px] text-white">
                If you have any questions or would like to learn more about our
                services, please don’t hesitate to contact us.
              </p>
              <div className="mt-6 bg-white rounded-[5px] gap-2 lg:gap-0 p-6 flex  justify-between flex-wrap">
                <div className="flex gap-2 items-start">
                  <img
                    src="/images/svg/map.svg"
                    alt="icon"
                    className="flex-shrink-0 flex-grow-0"
                  />
                  <div>
                    <p className="font-bold text-[14px] leading-[19px] text-primary">
                      Address:
                    </p>
                    <p className="text-[14px] leading-[19px] text-primary whitespace-nowrap">
                      Jalan Joglo Raya no 52B
                    </p>
                  </div>
                </div>
                <div className="h-[38px] w-[1px] bg-[#C4CFE2] mx-2 hidden lg:block"></div>
                <div className="flex gap-2 items-start">
                  <img
                    src="/images/svg/mail.svg"
                    alt="icon"
                    className="flex-shrink-0 flex-grow-0"
                  />
                  <div>
                    <p className="font-bold text-[14px] leading-[19px] text-primary">
                      Email:
                    </p>
                    <p className="text-[14px] leading-[19px] text-primary">
                      akbar@solusidata.co.id
                    </p>
                  </div>
                </div>
                <div className="h-[38px] w-[1px] bg-[#C4CFE2] mx-2 hidden lg:block"></div>
                <div className="flex gap-2 items-start">
                  <img
                    src="/images/svg/phonecall.svg"
                    alt="icon"
                    className="flex-shrink-0 flex-grow-0"
                  />
                  <div>
                    <p className="font-bold text-[14px] leading-[19px] text-primary">
                      Phone:
                    </p>
                    <p className="text-[14px] leading-[19px] text-primary whitespace-nowrap">
                      +62 8119898286
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" border border-action bg-white p-[24px] w-full  lg:max-w-[548px] "
              style={{ boxShadow: "8px 8px 0px 0px #01B3BF" }}
            >
              <h2 className="text-[24px] lg:text-[32px] leading-[32px] lg:leading-[43px] font-bold">
                Drop us email for further
              </h2>

              <form onSubmit={formik.handleSubmit}>
                <div className="mt-[24px] relative z-30">
                  <FormInput
                    formik={formik}
                    name="name"
                    label="Your name"
                    placeholder="Name"
                  />
                  <div className="mt-4">
                    <FormInput
                      formik={formik}
                      name="email"
                      label="Email Address"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mt-4">
                    <FormInput
                      formik={formik}
                      name="subject"
                      label="Subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mt-4">
                    <FormInput
                      formik={formik}
                      name="message"
                      label="Message"
                      rows={4}
                      control="textarea"
                      placeholder="Your message"
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type={isLoading ? "button" : "submit"}
                      className="bg-[#01B3BF] text-center clickable py-[14px] rounded-[2px] w-full text-white text-[16px]"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GIC;
