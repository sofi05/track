/* =====================================================================
   Zenless Zone Zero: settings of the Characters page (001.html)
   Edit this file to add, remove or rename buttons and filters.
   Nothing else needs to change.
   ===================================================================== */
window.CHARA_PAGE = {
  // Buttons that are always visible above the list. Names in [ ] sit together.
  //   have = Have / Don't,  new = New,  or any filter listed under `filters` below
  quick: [['have', 'new'], 'rarity', 'gender'],

  // Filters inside the "Filter" button. Use [] to hide the button.
  popup: ['element', 'group'],

  // Part / collab buttons above the list. With none pressed, everything is shown.
  // field = the field on the character (part: '2' or collab: true), value = what it must be.
  // Remove the // from a line to turn that button on. [] hides the whole row.
  parts: [
    // { label: 'Part 1', field: 'part', value: '1' },   (needs  part: '1'  on the characters)
    // { label: 'Part 2', field: 'part', value: '2' },
    // { label: 'Collab', field: 'collab', value: true },   (needs  collab: true)
  ],

  // true = filters stay selected when you pick another one (also a button on the page)
  keepFilters: false,

  // The choices of each filter. A character's field may hold one value or a list of values.
  filters: {
    rarity: {
      label: 'Rarity',
      options: [
        { value: '4', label: 'A', icon: '../assets/others/Zenless/Rank/Icon_AgentRank_A.webp' },
        { value: '5', label: 'S', icon: '../assets/others/Zenless/Rank/Icon_AgentRank_S.webp' },
      ],
    },
    gender: {
      label: 'Gender',
      options: [
        { value: 'm', label: 'Male' },
        { value: 'f', label: 'Female' },
      ],
    },
    element: {
      label: 'Element',
      options: [
        { value: 'Electric', label: 'Electric', icon: '../assets/others/Zenless/Element/IconElectric.png' },
        { value: 'Ether', label: 'Ether', icon: '../assets/others/Zenless/Element/IconEther.png' },
        { value: 'Fire', label: 'Fire', icon: '../assets/others/Zenless/Element/IconFire.png' },
        { value: 'Ice', label: 'Ice', icon: '../assets/others/Zenless/Element/IconIce.png' },
        { value: 'Physical', label: 'Physical', icon: '../assets/others/Zenless/Element/IconPhysical.png' },
        { value: 'Wind', label: 'Wind', icon: '../assets/others/Zenless/Element/IconWind.png' },
        { value: 'Lumiflux', label: 'Lumiflux', icon: '../assets/others/Zenless/Element/IconLumiflux.png' },
      ],
    },
    group: {
      label: 'Factions', grid: true,
      options: [
        { value: 'cunhar', label: 'Cunning Hares', icon: '../assets/others/Zenless/Group/IconCampGentleHouse.png' },
        { value: 'belo', label: 'Belobog Industries', icon: '../assets/others/Zenless/Group/IconCampBelobogIndustries.png' },
        { value: 'vic', label: 'Victoria Housekeeping', icon: '../assets/others/Zenless/Group/IconCampVictoriaHousekeepingCo..png' },
        { value: 'sons', label: 'Sons of Calydon', icon: '../assets/others/Zenless/Group/IconCampSonsOfCalydon.png' },
        { value: 'spec', label: 'Special Response Team', icon: '../assets/others/Zenless/Group/IconCampN.E.P.S..png' },
        { value: 'sec6', label: 'Section 6', icon: '../assets/others/Zenless/Group/IconCampH.S.O-S6.png' },
        { value: 'obol', label: 'Obol Squad', icon: '../assets/others/Zenless/Group/IconCampObols.png' },
        { value: 'star', label: 'Stars of Lyra', icon: '../assets/others/Zenless/Group/IconCampStarsOfLyra.png' },
        { value: 'mock', label: 'Mockingbird', icon: '../assets/others/Zenless/Group/IconCampMockingBird.png' },
        { value: 'sum', label: 'Yunkui Summit', icon: '../assets/others/Zenless/Group/IconCampSuibian.png' },
        { value: 'spook', label: 'Spook Shack', icon: '../assets/others/Zenless/Group/IconCampSpookShack.png' },
        { value: 'kramp', label: 'Krampus Compliance', icon: '../assets/others/Zenless/Group/IconCampBlackRoot.png' },
        { value: 'angels', label: 'Angels of Delusion', icon: '../assets/others/Zenless/Group/IconFaction_Angels_of_Delusion_temp.png' },
        { value: 'sq', label: 'Silver Squad', icon: '../assets/others/Zenless/Group/IconFaction_Defense_Force_-_Silver_Squad_temp.png' },
        { value: 'MOD', label: 'Metropolitan Order Division', icon: '../assets/others/Zenless/Group/Faction_Metropolitan_Order_Division_Icon.png' },
      ],
    },
  },
};
