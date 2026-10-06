const gymMemberModel = require('../models/gymMembermodel');
const { errorHttp } = require('../middlewares/errorHandler');

exports.getAll = (req, res) => {
  const { jenisMembership } = req.query;
  res.json(gymMemberModel.getAll(jenisMembership));
};

exports.getById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = gymMemberModel.getById(id);

  if (!data) return next(errorHttp(404, 'Member tidak ditemukan'));

  res.json(data);
};

exports.create = (req, res, next) => {
  const {
    nama,
    noHp,
    jenisMembership,
    tanggalDaftar,
    aktif
  } = req.body;

  if (!nama || !jenisMembership || !tanggalDaftar) {
    return next(errorHttp(400, 'nama, jenisMembership, dan tanggalDaftar wajib diisi'));
  }

  const baru = gymMemberModel.create({
    nama,
    noHp,
    jenisMembership,
    tanggalDaftar,
    aktif
  });

  res.status(201).json(baru);
};

exports.update = (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = gymMemberModel.update(id, req.body);

  if (!data) return next(errorHttp(404, 'Member tidak ditemukan'));

  res.json(data);
};

exports.remove = (req, res, next) => {
  const id = parseInt(req.params.id);
  const berhasil = gymMemberModel.remove(id);

  if (!berhasil) return next(errorHttp(404, 'Member tidak ditemukan'));

  res.status(204).send();
};