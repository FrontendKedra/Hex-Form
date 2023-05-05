import { DishFormValues } from "../../interfaces/interfaces";

export const sendDish = async (values: DishFormValues) => {
  try {
    const response = await fetch(
      "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const jsonResponse = await response.json();

    console.log(jsonResponse);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    alert(`An error has occurred: ${errorMessage}`);
  }
};
