/* =====================================================================
   phase.js — everything about game versions and banner phases.

   The dates themselves live in vs.js (window.GAME_VERSIONS). This file only
   reads them. Each game entry in vs.js can describe up to three versions:

       version  (current)    phases:  p1, p2, p3 ...    next version starts: date1
       date1vs  (next)       phases:  date1p2, date1p3  next-next starts:    date2
       date2vs  (after that) phases:  date2p2, date2p3
   ===================================================================== */
(function () {
  const Dex = (window.Dex = window.Dex || {});
  const Phase = (Dex.phase = {});

  // Only the game of the current page counts: version 3.2 of one game says nothing about another.
  const allGames = () => {
    const all = window.GAME_VERSIONS || {};
    const gameId = window.CHARA_CONFIG && window.CHARA_CONFIG.gameId;
    return gameId && all[gameId] ? [all[gameId]] : Object.values(all);
  };

  // The three version "slots" an entry in vs.js can describe.
  // `phaseKey(n)` gives the property name of phase n's start date in that slot.
  const SLOTS = [
    { versionKey: 'version', phaseKey: (n) => `p${n}`, fallbackDates: (g) => [g.date1, g.date2] },
    { versionKey: 'date1vs', phaseKey: (n) => `date1p${n}`, fallbackDates: (g) => [g.date2] },
    { versionKey: 'date2vs', phaseKey: (n) => `date2p${n}`, fallbackDates: (g) => [g.date2] },
  ];

  function parseDate(text) {
    if (!text) return null;
    const date = new Date(text);
    return isNaN(date.getTime()) ? null : date;
  }

  function firstValidDate(...texts) {
    for (const text of texts) {
      const date = parseDate(text);
      if (date) return date;
    }
    return null;
  }

  /** True when `version` is the game's current live version. */
  Phase.isCurrentVersion = (version) => allGames().some((g) => g.version === version);

  /** { start, end } of a phase. Dates are null when vs.js does not know them yet. */
  Phase.findWindow = function (version, phaseNumber) {
    for (const game of allGames()) {
      for (const slot of SLOTS) {
        if (game[slot.versionKey] !== version) continue;

        const start = parseDate(game[slot.phaseKey(phaseNumber)]);
        // A phase ends when the next phase starts, or when the next version starts.
        const end =
          parseDate(game[slot.phaseKey(phaseNumber + 1)]) || firstValidDate(...slot.fallbackDates(game));
        return { start, end };
      }
    }
    return { start: null, end: null };
  };

  /** 'countdown' (not started) | 'active' | 'ended' | '' (character has no phase) */
  Phase.statusOf = function (char) {
    if (!char.p) return '';
    const { start, end } = Phase.findWindow(char.version, char.p);
    const now = new Date();
    if (!end || now < start) return 'countdown';
    if (now >= end) return 'ended';
    return 'active';
  };

  /** Date when a future version (or one of its phases) goes live, or null. */
  Phase.releaseDate = function (version, phaseNumber = 1) {
    for (const game of allGames()) {
      for (const n of [1, 2]) {
        if (game[`date${n}vs`] !== version) continue;
        const phaseDate = phaseNumber > 1 ? game[`date${n}p${phaseNumber}`] : null;
        if (phaseDate) return new Date(phaseDate);
        return game[`date${n}`] ? new Date(game[`date${n}`]) : null;
      }
    }
    return null;
  };

  /** 90061000 -> '1d', 7200000 -> '2h', 90000 -> '1m', 5000 -> '5s'. Pass {approx:true} for '~5s'. */
  Phase.shortDuration = function (ms, { approx = false } = {}) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d`;
    if (hours > 0) return `${hours % 24}h`;
    if (minutes > 0) return `${minutes % 60}m`;
    return `${approx ? '~' : ''}${seconds % 60}s`;
  };
})();
