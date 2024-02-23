import { Field } from "formik"
import React, { InputHTMLAttributes } from "react"

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder?: string
}

const TextInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (props, ref) => (
    <>
      {props.label !== undefined ? (
        <label className="label-text" htmlFor={props.id}>
          {props.label}
        </label>
      ) : (
        <></>
      )}
      <Field name={props.name}>
        {({ field, form, meta }) => (
          <div>
            <input
              {...field}
              ref={ref}
              type="text"
              placeholder={props.placeholder}
              className="input"
            />
            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
          </div>
        )}
      </Field>
    </>
  ),
)

export default TextInput
