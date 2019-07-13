const buildAnchorTag = function(data) {
  const { url, text = "", target = "" } = data;

  return `<img src='${url}' alt="${text}"></img>`;
};

//@todo write config here
const openUploadFile = function (config) {
  const fileInput = document.createElement('input');
  fileInput.setAttribute('type', 'file');
  
  config.eventListners.forEach((event) => {
    fileInput.addEventListener(event.name, event.cb,false);
  });

  // it clicks on file
  if (config.playClick) {
    fileInput.click();
  }
  
}

export default {
  buildAnchorTag,
  openUploadFile
};
