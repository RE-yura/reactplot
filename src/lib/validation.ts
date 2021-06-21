const emailValidation = (email: string): string => {
  if (!email) return "メールアドレスを入力してください";

  const regex = /^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!regex.test(email)) return "正しい形式でメールアドレスを入力してください";

  return "";
};

const yearValidation = (year: string): string => {
  if (!year) return "年を入力してください";
  return "";
};

const monthValidation = (month: string): string => {
  if (!month) return "月を入力してください";

  if (+month < 1 || +month > 12) return "正しい月を入力してください";

  return "";
};

const passwordValidation = (password: string): string => {
  if (!password) return "パスワードを入力してください";
  if (password.length < 8) return "パスワードは8文字以上で入力してください";

  return "";
};
class Validation {
  static formValidate = (type: string, value: string) => {
    switch (type) {
      case "email":
        return emailValidation(value);
      case "year":
        return yearValidation(value);
      case "month":
        return monthValidation(value);
      case "password":
        return passwordValidation(value);
    }
  };
}

export default Validation;
