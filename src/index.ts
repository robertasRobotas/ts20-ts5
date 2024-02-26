// const nameInput: HTMLElement = document.getElementById("user-name")!;

// const nameInput2: HTMLElement = document.getElementById("user-name")!;

// const nameInput3: HTMLElement = document.getElementById(
//   "user-name"
// ) as HTMLElement;

// console.log(nameInput);

// //==================================================

// const nameInput4: HTMLInputElement = document.getElementById(
//   "user-name"
// ) as HTMLInputElement;

// const nameInput5: HTMLInputElement = document.querySelector(
//   "input[id='user-name']"
// )!;

// //==================================================

// const button: HTMLButtonElement = document.getElementById(
//   "main-btn"
// ) as HTMLButtonElement;

// const button2: HTMLButtonElement = document.querySelector(
//   "button[id='main-btn']"
// )!;

//=================================================

type UserLoginType = {
  email: string;
  password: string;
};

const emailInput: HTMLInputElement = document.getElementById(
  "user-email"
) as HTMLInputElement;

const passwordInput: HTMLInputElement = document.getElementById(
  "user-password"
) as HTMLInputElement;

const mainButton: HTMLButtonElement = document.getElementById(
  "main-btn"
) as HTMLButtonElement;

mainButton.addEventListener("click", () => {
  const userLoginData: UserLoginType = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(userLoginData.email)) {
    console.log("User email has bad structure");
    return;
  }

  if (userLoginData.password.length <= 8) {
    console.log("Password should contain at least 9 characters");
    return;
  }

  console.log("All good");
});
