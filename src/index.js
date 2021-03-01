function component() {
  const element = document.createElement('div');

  // Lodash, currently incuded via a script, is required for this line to work
  element.innerTHML = _.join(['Hello', 'webpack'], '  ');

  return element;
}

document.body.appendChild(componenet());