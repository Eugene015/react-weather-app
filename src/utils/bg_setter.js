export const bgSetter = () => {
  const time = new Date();
  if (time.getHours() > 18 && time.getHours() < 21) {
    return "app_evening";
  }
  if (time.getHours() >= 21 && time.getHours() < 3) {
    return "app_night";
  }
  if (time.getHours() >= 3 && time.getHours() < 10) {
    return "app_morning";
  }
  return "app_noon";
};
