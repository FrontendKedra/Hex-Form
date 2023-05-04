import { Field } from "react-final-form";
import { dishTypes } from "./dishTypes";
import { DishFormValues } from "../../../interfaces/interfaces";
import { Error, FieldContainer, Input, Label, Select } from "./styled";

export const FormField = ({
  name,
  label,
  type,
  min,
  max,
  step,
  validate,
  placeholder,
}: DishFormValues) => (
  <Field name={name} validate={validate}>
    {({ input, meta }) => (
      <>
        <FieldContainer>
          <Label>{label}</Label>
          {type !== "select" ? (
            <Input
              {...input}
              type={type}
              placeholder={placeholder}
              min={min}
              max={max}
              step={step}
            />
          ) : (
            <Select {...input} onBlur={(event) => input.onBlur(event)}>
              {dishTypes.map(({ value, tag }) => (
                <option key={value} value={value}>
                  {tag}
                </option>
              ))}
            </Select>
          )}
        </FieldContainer>
        {meta.error && meta.touched && <Error>{meta.error}</Error>}
      </>
    )}
  </Field>
);
