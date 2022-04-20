interface Imock {
  name: string;
  surname: string;
  detail: Idetail;
}

interface Idetail {
  hobby1: string;
  hobby2?: string;
}

const mockObject: Imock = {
  name: "John",
  surname: "Travo",
  detail: {
    hobby1: "F1",
  },
};

console.log(mockObject.detail.hobby2);

function isHobby(params: Imock): boolean {
  return mockObject.detail.hobby2 == undefined ? true : false;
}


console.log(isHobby(mockObject));