import { Field } from "react-final-form";
import { ConditionProps } from "../../interfaces/interfaces";

export const Condition = ({ when, is, children }: ConditionProps) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);
