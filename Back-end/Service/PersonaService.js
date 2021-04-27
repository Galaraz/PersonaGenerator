const PersonaModel = require('../Model/PersonaModel');
const {StatusCodes} = require('http-status-codes');
const Utils = require('../Helpers/Utils');


const createPersona = async (name) => {
  if (!await Utils.validName(name)) {
    return {
      isError: true,
      err:{
        code: 'invalid_data',
        message: '"name" length must be at least 5 characters long',
      },
      status: StatusCodes.UNPROCESSABLE_ENTITY,

    };
  };

  const nameResult = await PersonaModel.findPersonaByName(name);

  if (!await Utils.nameExist(nameResult)) {
    return {
      isError: true,
      err:{
        code: 'invalid_data',
        message: 'Persona already exists',
      },
      status: StatusCodes.UNPROCESSABLE_ENTITY,

    };
  }

  const result = await PersonaModel.createPersona(name);

  return  result;
};

const getAllPersonas = async () => {
  const getInput = await PersonaModel.getAllPersonas();
  const result = { personas: [...getInput]};
  return result;
};

const findPersonaById = async (id) => {
  const result = await PersonaModel.findPersonaById(id);
  return result;
};

const getProductByName = async () => {};


const updateById = async (id, name, quantity) => {
  if (!Utils.validName(name)) {
    return {
      err:{
        code: 'invalid_data',
        message: '"name" length must be at least 5 characters long',
      },
      status: status.UNPROCESSABLE_ENTITY,
    };
  };

  const returns = await PersonaModel.updateById(id, name);
  return returns;
};


const deleteProduct = async (id) => {
  const product = await PersonaModel.deleteProduct(id);
  return product;
};

module.exports = { createPersona, getAllPersonas, findPersonaById, getProductByName, updateById, deleteProduct };