const arraySizeElement = document.querySelector("#array_length");
const numbersElement = document.querySelector("#array");
const countResultElement = document.querySelector(".count_result");
const countButtonElement = document.querySelector(".count_button");
const resetButtonElement = document.querySelector(".reset_button");
const errorSizeElement = document.querySelector(".error_size");
const errorArrayElement = document.querySelector(".error_array");

const getArraySize = size => {
  let sizeOfArray = parseFloat(Math.floor(size.value));
  if (isNaN(sizeOfArray) || size.value === "") {
    return false;
  } else {
    return parseFloat(Math.floor(size.value));
  }
};

const normalizeNumbersArray = array => {
  const newArray = array.value
    .trim()
    .replace(/\s{2,}/g, " ")
    .split(" ")
    .map(item => {
      if (isNaN(parseFloat(item))) {
        return;
      }
      return parseFloat(item);
    });

  const isUndefind = newArray.some(item => {
    return item === undefined;
  });

  if (isUndefind) {
    return false;
  } else {
    return newArray;
  }
};

const reset = {
  resetError() {
    errorSizeElement.style.display = "none";
    errorArrayElement.style.display = "none";
  },
  resetData() {
    arraySizeElement.value = "";
    numbersElement.value = "";
    countResultElement.innerHTML = "0";
  }
};

const countNumbersArray = () => {
  const size = getArraySize(arraySizeElement);
  const numbersArray = normalizeNumbersArray(numbersElement);
  const arrayLength = normalizeNumbersArray(numbersElement).length;

  if (!numbersArray && !size) {
    errorSizeElement.style.display = "block";
    errorArrayElement.style.display = "block";
    return false;
  }

  if (!numbersArray) {
    errorArrayElement.style.display = "block";
    errorSizeElement.style.display = "none";
    return false;
  }

  if (!size) {
    errorSizeElement.style.display = "block";
    errorArrayElement.style.display = "none";
    return false;
  }

  if (size < 0 || (size === 0 && arrayLength > 0)) {
    errorSizeElement.style.display = "block";
    return false;
  }

  if (size > 1 && arrayLength === 1) {
    errorArrayElement.style.display = "block";
    return false;
  }

  if (size === 1 && arrayLength === 1) {
    reset.resetError();
    countResultElement.textContent = `${numbersArray}`;
    return true;
  }

  if (size === arrayLength) {
    errorArrayElement.style.display = "none";
    const resultArray = numbersArray.join(" + ");
    let arraySum = numbersArray.reduce((acc, next) => {
      return acc + next;
    });
    countResultElement.textContent = `${resultArray} = ${arraySum}`;
  }
};

resetButtonElement.addEventListener("click", () => {
  reset.resetData();
  reset.resetError();
  countButtonElement.removeEventListener("click", () => {
    reset.resetData();
    reset.resetError();
  });
});

countButtonElement.addEventListener("click", () => {
  countNumbersArray();
  countButtonElement.removeEventListener("click", countNumbersArray);
});
