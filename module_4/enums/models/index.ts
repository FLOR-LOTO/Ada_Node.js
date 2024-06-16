import db from "../database/db.json";

interface EpisodesInfo {
  episodeNumber: number;
  seasonNumber: number;
  dateOfIssue: string;
}

interface Characters {
  id: number;
  name: string;
  age: number;
  numberOfChildren: number;
}

interface Database {
  personajes: Characters[];
  info: EpisodesInfo[];
}

const getAll = (): Database => {
  return db;
};

const getCharacterById = (id: number): Characters | undefined => {
  const characters = getAll().personajes;

  const matchCharId = characters.find((character) => character.id === id);

  return matchCharId;
};

const getChaptersInfo = (chapterNumber: number): EpisodesInfo => {
  const episodes = getAll().info;

  const matchChapter = episodes.find(
    (chapter) => chapter.episodeNumber == chapterNumber
  );

  return matchChapter;
};

const getEpisode = (episodeNumber: number): EpisodesInfo => {
  const episodes = getAll().info;

  const matchEpisode = episodes.find(
    (episode) => episode.episodeNumber == episodeNumber
  );

  return matchEpisode;
};

const getEpisodesBySeason = (seasonNumber: number): EpisodesInfo[] => {
  const episodes = getAll().info;

  const matchsSeason = episodes.filter(
    (season) => season.seasonNumber == seasonNumber
  );

  return matchsSeason;
};

const getEpisodesByYearOfIssue = (year: string): EpisodesInfo[] => {
  const episodes = getAll().info;

  const matchsYear = episodes.filter((yearOfIssue) =>
    yearOfIssue.dateOfIssue.includes(year)
  );
  return matchsYear;
};

export {
  getCharacterById,
  getEpisode,
  getEpisodesBySeason,
  getEpisodesByYearOfIssue,
};
