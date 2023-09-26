const Sequelize = require("sequelize");
const { Songs, Lyrics, Videos, Albums, Images } = require("../models");

const songsAll = async (req, res, next) => {
  try {
    const songs = await Songs.findAll({ include: { model: Family } });

    res.send(songs);
  } catch (error) {
    console.error(error);
    next();
  }
};

const songOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const song = await Songs.findByPk(id, {
      include: [
        { model: Lyrics },
        { model: Videos },
        { model: Albums, include: { model: Images } },
      ],
    });

    if (song && song.lyrics) {
      song.lyrics.sort((a, b) => a.songOrder - b.songOrder);
    }

    res.send(song);
  } catch (error) {
    console.error(error);
    next();
  }
};

/* const accountCreate = async (req, res, next) => {
  try {
    let { name, amount } = req.body;

    const capitalize = capitalizeWord(name);

    if (!amount) amount = 0;
    if (typeof amount === "string") {
      const regex = /^[0-9]+$/;
      let numbers = regex.test(amount);

      if (!numbers) {
        return res.status(400).send("Debe ingresar solo números");
      }

      amount = Number(amount);
    }

    const account = await Account.create({
      name: capitalize,
      amount,
      familyId: req.user.familyId,
    });
    res.send(account);
  } catch (error) {
    console.error(error);
    next();
  }
};

const accountDelete = async (req, res, next) => {
  try {
    const { id } = req.params;

    const account = await Account.findByPk(id);

    if (!account) {
      return res.status(404).send("Cuenta no encontrada.");
    }

    account.destroy();

    res.status(404).send(account);
  } catch (error) {
    console.error(error);
    next();
  }
}; */

module.exports = {
  songsAll,
  songOne,
};
