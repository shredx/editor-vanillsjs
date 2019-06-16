const buildAnchorTag = function(data) {
  const { url, text = "", target = "" } = data;

  return `<img src='${url}' alt="${text}"></img>`;
};

export default {
  buildAnchorTag
};
