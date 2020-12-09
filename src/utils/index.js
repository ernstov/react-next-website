export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getUrlParam = (paramName) => {
  const urlString = window.location;
  const url = new URL(urlString);

  return url.searchParams.get(paramName);
}

export const isWrap = () => {
  const wrap = getUrlParam("wrap");

  if (wrap) {
    return JSON.parse(wrap);
  } else {
    return true;
  }
}

export const cutOffString = (text) => {
  if (text.length <= 100) return text
  return text.slice(0, 100) + "..."
}

export const diffTimeString = (text) => {
  let newText = text.replace(' hours', 'h').replace(' minutes', 'm').replace(' days', 'd')
  return newText
}

export const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
