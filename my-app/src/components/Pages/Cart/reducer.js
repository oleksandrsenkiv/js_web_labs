const defaultState = {
    printerList: [],
  };
  
  const findIndexByName = (arr, title) => {
    return arr.findIndex((item) => item.title === title);
  };
  
  export const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_PRINTER":
        const foundIndex = findIndexByName(state.printerList, action.payLoad.title);
        if (foundIndex === -1) {
          return { ...state, printerList: [...state.printerList, action.payLoad] };
        } else {
          const updatedPrinterList = [...state.printerList];
          updatedPrinterList[foundIndex] = {
            ...updatedPrinterList[foundIndex],
            count: updatedPrinterList[foundIndex].count + 1,
          };
          console.log(updatedPrinterList);
          console.log(state);

          return { ...state, printerList: updatedPrinterList };
        }
      case "INCREMENT_COUNT":
        return {
          ...state,
          printerList: state.printerList.map((printer) => {
            if (printer.title === action.payLoad.title) {
              return { ...printer, count: printer.count + 1 };
            }
            return printer;
          }),
        };
      case "DECREMENT_COUNT":
        return {
          ...state,
          printerList: state.printerList.map((printer) => {
            if (printer.title === action.payLoad.title && printer.count > 0) {
              return { ...printer, count: printer.count - 1 };
            }
            return printer;
          }),
        };

        case "REMOVE_PRINTER":
                return {
                    ...state,
                    printerList: state.printerList.filter((printer) => printer.title !== action.payload.title),
                };
      default:
        return state;
    }
  };