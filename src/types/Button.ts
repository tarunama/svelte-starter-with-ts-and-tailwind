/* eslint-disable indent */
type ButtonSize = "small" | "medium" | "large";

type ButtonClasses = "w-8 h-2" | "w-12 h-4" | "w-20 h-6";

type Sizes = {
  [K in ButtonSize]: ButtonClasses;
};

const sizes: Sizes = {
  small: "w-8 h-2",
  medium: "w-12 h-4",
  large: "w-20 h-6",
};

function convertToClass(size: ButtonSize): ButtonClasses {
  switch (size) {
    case "small":
      return sizes[size];
    case "medium":
      return sizes[size];
    case "large":
      return sizes[size];
    default:
      return sizes["medium"];
  }
}

export { type ButtonSize, convertToClass };
