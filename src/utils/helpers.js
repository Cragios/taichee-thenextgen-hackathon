export function shortenAccount(account) {
  if (!account) {
    return "";
  }
  return `${account.slice(0, 5)} . . . ${account.slice(-4)}`;
}
