export interface DishFormValues {
  name: string;
  label: string;
  min?: string;
  max?: string;
  step?: string;
  validate: (value: string | undefined) => string | undefined;
  type: string;
  placeholder?: string;
}

export interface ErrorData {
  message: string;
}

export interface Remove {
  remove: boolean;
}

export interface ConditionProps {
  when: string;
  is: string;
  children?: React.ReactNode;
}
