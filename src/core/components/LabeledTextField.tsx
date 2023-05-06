import * as React from "react"
import { useFormContext } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"

import { Input, InputProps } from "@chakra-ui/input"
import { FormControl, FormLabel } from "@chakra-ui/form-control"

export interface LabeledTextFieldProps extends InputProps {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  outerProps?: React.PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: React.ComponentPropsWithoutRef<"label">
}

export const LabeledTextField = ({
  label,
  outerProps,
  labelProps,
  name,
  ...props
}: LabeledTextFieldProps) => {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext()

  return (
    <div {...outerProps}>
      <FormLabel {...labelProps}>
        {label}
        <Input disabled={isSubmitting} {...register(name)} {...props} />
      </FormLabel>
      <ErrorMessage
        render={({ message }) => (
          <div role="alert" style={{ color: "red" }}>
            {message}
          </div>
        )}
        errors={errors}
        name={name}
      />
    </div>
  )
}

export default LabeledTextField
