const clamp = (input: number, min: number, max: number) => {
  return input < min ? min : input > max ? max : input;
};

export default clamp;