export default null;

export const randomString = () => {
  const charsArray =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lengthOtp = 5;
  const captcha = [];
  for (let i = 0; i < lengthOtp; i++) {
    // below code will not allow Repetition of Characters
    const index = Math.floor(Math.random() * charsArray.length + 1); // get the next character from the array
    if (captcha.indexOf(charsArray[index]) === -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  return captcha.join('');
};

export const drawCaptcha = (id, captcha) => {
  const canv = document.getElementById(id);
  const ctx = canv.getContext('2d');
  ctx.font = '25px Georgia';
  ctx.strokeText(captcha, 0, 30);
};

export const deleteCaptcha = id => {
  const canv = document.getElementById(id);
  const ctx = canv.getContext('2d');
  ctx.clearRect(0, 0, canv.width, canv.height);
};
