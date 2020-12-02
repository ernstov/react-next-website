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
  }else {
    return true;
  }
}

export const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
