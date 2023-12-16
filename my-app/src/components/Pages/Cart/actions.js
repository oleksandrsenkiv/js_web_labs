export const action = { type: "", payLoad: {} };

export const incrementCount = (printer) => {
    return {
        type: "INCREMENT_COUNT",
        payLoad: { title: printer },
    };
};

export const decrementCount = (printer) => {
    return {
        type: "DECREMENT_COUNT",
        payLoad: { title: printer },
    };
};

export const removePrinter = (printer) => {
    return {
      type: "REMOVE_PRINTER",
      payload: { title: printer },
    };
  };