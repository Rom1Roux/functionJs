const createPassword = () => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz!?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 8;
  let password = "";

  for (let i = 0; i <= passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  console.log("Create PASSWORD : ", password);
  return password;
}
