const ProductModel = require('../Model/ProductModel');
const {StatusCodes} = require('http-status-codes');
const Ultils = require('../Helpers/Ultils');


const createPersona = async (name) => {
  if (!await Ultils.validName(name)) {
    return {
      isError: true,
      err:{
        code: 'invalid_data',
        message: '"name" length must be at least 5 characters long',
      },
      status: StatusCodes.UNPROCESSABLE_ENTITY,

    };
  };

  const nameResult = await ProductModel.findProductByName(name);

  if (!await Ultils.nameExist(nameResult)) {
    return {
      isError: true,
      err:{
        code: 'invalid_data',
        message: 'Product already exists',
      },
      status: StatusCodes.UNPROCESSABLE_ENTITY,

    };
  }

  const result = await PersonaModel.createProduct(name);

  return  result;
};

const getAllPersonas = async () => {
  const getInput = await PersonaModel.getAllPersonas();
  const result = { products: [...getInput]};
  return result;
};

const findPersonaById = async (id) => {
  const result = await PersonaModel.findPersonaById(id);
  return result;
};

const getProductByName = async () => {};


const updateById = async (id, name, quantity) => {
  if (!Ultils.validName(name)) {
    return {
      isError: true,
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