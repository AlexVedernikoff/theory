enum EStatus {
  Success = "success",
  Error = "error",
}

interface ISuccess {
  status: EStatus.Success;
  data: string[];
}

interface IFailed {
  status: EStatus.Error;
  errorMessage: string;
}

function isResultSuccess(res: ISuccess | IFailed): res is ISuccess {
  return res.status === EStatus.Success;
}

function logResult(res: ISuccess | IFailed) {
  if (isResultSuccess(res)) {
    return res.data;
  } else {
    return res.errorMessage;
  }
}

const resS: ISuccess = {
  status: EStatus.Success,
  data: ["Данные"],
};

const resF: IFailed = {
  status: EStatus.Error,
  errorMessage: "Ошибка!",
};

console.log("isResultSuccess(resS) = ", isResultSuccess(resS));
console.log("isResultSuccess(resF) = ", isResultSuccess(resF));
console.log("logResult(resS) = ", logResult(resS));
console.log("logResult(resF) = ", logResult(resF));
