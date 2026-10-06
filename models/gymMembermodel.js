let gymMembers = [
  { id: 1, nama: 'Rizky Maulana', jenisMembership: 'tahunan', aktif: 1 },
  { id: 2, nama: 'Alya Putri', jenjang: 'harian', aktif: 1 },
  { id: 3, nama: 'Fajar Ramadhan', jenjang: 'tahunan', aktif: 0}
];

let nextId = 4;
const getAll = (jenisMembership) => {
  if (jenisMembership) {
    return gymMembers.filter(
      (member) => member.jenisMembership === jenisMembership
    );
  }

  return gymMembers;
};

const getById = (id) => {
  return gymMembers.find((member) => member.id === id);
};

const create = (data) => {
  const baru = {
    id: nextId++,
    ...data
  };

  gymMembers.push(baru);

  return baru;
};

const update = (id, data) => {
  const index = gymMembers.findIndex((member) => member.id === id);

  if (index === -1) {
    return null;
  }

  gymMembers[index] = {
    ...gymMembers[index],
    ...data,
    id
  };

  return gymMembers[index];
};

const remove = (id) => {
  const index = gymMembers.findIndex((member) => member.id === id);

  if (index === -1) {
    return false;
  }

  gymMembers.splice(index, 1);

  return true;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};