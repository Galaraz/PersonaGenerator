const connection = require('../Helpers/Connect');
const { ObjectId } = require('mongodb');


const getAllPersonas = () => {
  return connection().then(
    db => db.collection('persona').find().toArray()
  );
};

const findPersonaByName = (productName) => {
  return connection().then(
    db => db.collection('persona').find({ name: productName }).toArray()
  );
};


const findPersonaById = async (id) => {
  if(!ObjectId.isValid(id)) return null;

  return connection().then(
    db => db.collection('persona').findOne(ObjectId(id))
  );
};

const updateById = async (id, name) => {
  return connection().then(
    db => db.collection('persona')
      .updateOne({ _id: ObjectId(id) }, { $set: { name } })
  ).then(() => ({ _id: id, name }));
};

const createPersona = async (name) => {
  return connection().then(
    db => db.collection('persona').insertOne({ name })
  ).then((result) => ({ _id: result.insertedId, name }));
};

const deletePersona = async (id) => {
  return connection().then(
    db => db.collection('persona').deleteOne({ _id: ObjectId(id) })
  ).then((result) => ({ _id: result._id}));
};

module.exports = {
  getAllPersonas,
  findPersonaById,
  createPersona,
  findPersonaByName,
  updateById,
  deletePersona,
};
