import {
  getCharacterById,
  getEpisode,
  getEpisodesBySeason,
  getEpisodesByYearOfIssue,
} from "../models/index";

enum Message {
  NOT_FOUND_NUMBER = "Debe ingresar un número válido...",
  ERROR_DATE = "Debe ingresar el año con cuatro caracteres, ej: '1990'...",
  NOT_EXIST = "La información solicitada no existe en nuestra base de datos ...",
}

const getById = (id: number) => {
  if (!id) return `${Message.NOT_FOUND_NUMBER}`;
  const char = getCharacterById(id);
  if (!char) return `${Message.NOT_EXIST}`;
  return char;
};

const getEpisodeByNumber = (episodeNumber: number) => {
  if (!episodeNumber) return `${Message.NOT_FOUND_NUMBER}`;
  const episode = getEpisode(episodeNumber);
  if (!episode) return `${Message.NOT_EXIST}`;
  return episode;
};

const getEpisodesBySeasonNumber = (seasonNumber: number) => {
  if (!seasonNumber) return `${Message.NOT_FOUND_NUMBER}`;
  const season = getEpisodesBySeason(seasonNumber);
  if (!season) return `${Message.NOT_EXIST}`;
  return season;
};

const getEpisodesByYear = (year: string) => {
  if (!year) return `${Message.NOT_FOUND_NUMBER}`;
  if (year.length > 4 || year.length < 4) return `${Message.ERROR_DATE}`;
  const YearOfIssue = getEpisodesByYearOfIssue(year);
  if (YearOfIssue.length === 0) return `${Message.NOT_EXIST}`;
  return YearOfIssue;
};

export {
  getById,
  getEpisodeByNumber,
  getEpisodesBySeasonNumber,
  getEpisodesByYear,
};
