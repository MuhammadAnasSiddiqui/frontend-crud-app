import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const CustomInput = ({
  label,
  type = "text",
  placeholder = "",
  readOnly = false,
  name,
  value,
  onChange,
  onBlur,
  error,
  maxLength,
  rows = 4,
  className = "",
  showPasswordToggle = false,
}) => {
  const [inputType, setInputType] = useState(type);

  const handleTogglePassword = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };
  return (
    <div className="mb-4 w-full">
      {label && (
        <label className="text-slate-900 text-sm font-medium mb-2 block">
          {label}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          readOnly={readOnly}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          className={`w-full px-4 py-2 text-body text-sm rounded outline-none resize-none border border-grey/20 ${
            error ? "border-red-500" : "border-body"
          } ${readOnly ? "bg-light-gray" : ""} ${className}`}
        />
      ) : (
        <div className="relative">
          <input
            type={showPasswordToggle ? inputType : type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            readOnly={readOnly}
            placeholder={placeholder}
            maxLength={maxLength}
            className={`w-full px-4 py-2 text-body text-sm rounded outline-none border border-grey/20 ${
              error ? "border-red-500" : "border-body"
            } ${readOnly ? "bg-light-gray" : ""} ${className}`}
          />

          {showPasswordToggle && (
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute right-2 top-3 "
            >
              {inputType === "password" ? (
                <Icon icon="fa6-solid:eye" />
              ) : (
                <Icon icon="fa6-solid:eye-slash" />
              )}
            </button>
          )}
        </div>
      )}

      {error && <div className="text-red-700 text-xs m-1">{error}</div>}
    </div>
  );
};

export default CustomInput;
