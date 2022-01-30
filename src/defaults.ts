import { Weight } from "./types";

export const ContextGetter = {
  contextWeight: { from: "weight", default: "regular" },
  contextSize: { from: "size", default: "1em" },
  contextColor: { from: "color", default: "currentColor" },
  contextMirrored: { from: "mirrored", default: false },
};

export const PropValidator = {
  color: String,
  size: [String, Number],
  weight: { type: String as () => Weight },
  mirrored: Boolean,
};
