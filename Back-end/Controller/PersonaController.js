const PersonaService = require('../Service/PersonaService');

const {StatusCodes} = require('http-status-codes');

const createPersona = async (req, res ) => {
  console.log('[PERSONA CONTROLLER] : THE METHOD CALLED ADD A PERSONA');
  try {
    const { name } = req.body;
    const result = await PersonaService.createPersona(name);

    if (result.isError) return res.status(result.status).json(result);

    return res.status(StatusCodes.CREATED).json(result);

  } catch (error) {
    console.log(`[PRODUCTS CONTROLLER] : call => ${error}`);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};


module.exports = { createPersona };