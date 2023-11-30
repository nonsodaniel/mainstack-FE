const URL = `https://fe-task-api.mainstack.io/`;
export const userURL = URL + "user";
export const walletURL = URL + "wallet";
export const transactionURL = URL + "transactions";

export const formatCurrency = (amount: number) =>
  amount?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

export const getNameInitials = (firstName: string, lastName: string) => {
  return `${firstName.split("")[0]} ${lastName.split("")[0]}`;
};
