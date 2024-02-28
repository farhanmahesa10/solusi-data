import React, { useMemo } from "react";

const FormInput = (props) => {
  const { formik, label, name, control, ...rest } = props;
  const getError = useMemo(() => {
    const meta = formik.getFieldMeta(name);

    if (meta?.touched && meta?.error) {
      return { message: meta.error };
    }
    return false;
  }, [formik, name]);

  return (
    <>
      <div className="w-full">
        <label className="text-[12px] leading-[16px]">{label}</label>
        {control === "textarea" ? (
          <textarea
            onChange={formik.handleChange}
            type="text"
            name={name}
            {...rest}
            className={`border ${
              getError
                ? "border-[#fa2a2a] focus:outline-none"
                : "border-[#FAFAFA] focus:outline-[#47B2E4]"
            }
                 bg-[#FAFAFA] py-4 px-3 text-[14px] leading-[19px] w-full 
                focus:outline  rounded-[4px] focus:bg-[#F5FEFF]`}
          >
            {formik.values[name]}
          </textarea>
        ) : (
          <input
            value={formik.values[name]}
            onChange={formik.handleChange}
            type="text"
            name={name}
            {...rest}
            className={`border ${
              getError
                ? "border-[#fa2a2a] focus:outline-none"
                : "border-[#F3F3F3] focus:outline-[#47B2E4]"
            }
          bg-[#FAFAFA] py-4 px-3 text-[14px] leading-[19px] w-full 
         focus:outline  rounded-[4px] focus:bg-[#F5FEFF]`}
          />
        )}

        {getError && (
          <span className="text-[#fa2a2a] text-xs">{getError.message}</span>
        )}
      </div>
    </>
  );
};

export default FormInput;
