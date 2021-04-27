const nameExist = (nameResult) => {
  const ZERO = 0;
  if (nameResult.length > ZERO) return false;

  return true;
};

const validName = (name) => {
  const MIN_CHARACTERS_NAME = 5;

  if (!name || name.length < MIN_CHARACTERS_NAME) return false;

  return true;
};

module.exports = {nameExist,validName};