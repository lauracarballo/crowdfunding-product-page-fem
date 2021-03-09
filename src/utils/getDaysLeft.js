export default function getDaysleft(expires) {
  const today = new Date();

  const getTimeOfToday = today.getTime();

  const expireDate = new Date(expires);

  const getTimeOfExpire = expireDate.getTime();

  const getTimeLeft = getTimeOfExpire - getTimeOfToday;

  const dateLeft = new Date(getTimeLeft);
  const daysLeft = dateLeft.getDate();
  return daysLeft;
}
