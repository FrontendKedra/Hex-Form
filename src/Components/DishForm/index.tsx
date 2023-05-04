import { Form } from "react-final-form";
import { FormField } from "./FormField";
import {
  Button,
  ButtonContainer,
  Container,
  FormContainer,
  Title,
} from "./styled";
import { Condition } from "../Condition";
import { sendDish } from "./sendDish";

export const DishForm = () => {
  const required = (fieldName: string) => (value: string | undefined) =>
    value ? undefined : `Required ${fieldName}`;

  return (
    <Container>
      <Form
        onSubmit={sendDish}
        render={({ handleSubmit, form, submitting, dirty }) => (
          <FormContainer onSubmit={handleSubmit}>
            <Title>Add Dish</Title>
            <FormField
              name="name"
              label="Dish Name:"
              type="text"
              placeholder="Dish Name"
              validate={required("dish name")}
            />
            <FormField
              name="preparation_time"
              label="Preparation Time:"
              type="time"
              step="1"
              placeholder="00:00:00"
              validate={required("time in a 00:00:00 format")}
            />
            <FormField
              name="type"
              label="Dish Type:"
              type="select"
              validate={required("dish type")}
            />
            <Condition when="type" is="pizza">
              <>
                <FormField
                  name="no_of_slices"
                  label="Number of slices:"
                  type="number"
                  min="1"
                  max="100"
                  placeholder="1-100"
                  validate={required("number")}
                />
                <FormField
                  name="diameter"
                  label="Diameter:"
                  type="number"
                  step="0.1"
                  min="1"
                  max="60"
                  placeholder="1-60"
                  validate={required("number")}
                />
              </>
            </Condition>
            <Condition when="type" is="soup">
              <FormField
                name="spiciness_scale"
                label="Spiciness Scale:"
                type="number"
                min="1"
                max="10"
                placeholder="1-10"
                validate={required("number between 1-10")}
              />
            </Condition>
            <Condition when="type" is="sandwich">
              <FormField
                name="slices_of_bread"
                label="Slices of Bread:"
                type="number"
                min="1"
                max="100"
                placeholder="1-100"
                validate={required("number")}
              />
            </Condition>
            <ButtonContainer>
              <Button type="submit" disabled={submitting} remove={false}>
                Submit Form
              </Button>
              <Button
                type="button"
                onClick={form.reset}
                disabled={submitting || !dirty}
                remove
              >
                Reset Form
              </Button>
            </ButtonContainer>
          </FormContainer>
        )}
      />
    </Container>
  );
};
