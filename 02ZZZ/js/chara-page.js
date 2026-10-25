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
  popup: ['element', 'area'],

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
        { value: '4', label: 'A', icon: '../assets/others/Rank/ZZZ_Icon_AgentRank_A.webp' },
        { value: '5', label: 'S', icon: '../assets/others/Rank/ZZZ_Icon_AgentRank_S.webp' },
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
        { value: 'Electric', label: 'Electric', icon: '../assets/others/Element/ZZZ_IconElectric.png' },
        { value: 'Ether', label: 'Ether', icon: '../assets/others/Element/ZZZ_IconEther.png' },
        { value: 'Fire', label: 'Fire', icon: '../assets/others/Element/ZZZ_IconFire.png' },
        { value: 'Ice', label: 'Ice', icon: '../assets/others/Element/ZZZ_IconIce.png' },
        { value: 'Physical', label: 'Physical', icon: '../assets/others/Element/ZZZ_IconPhysical.png' },
        { value: 'Wind', label: 'Wind', icon: '../assets/others/Element/ZZZ_IconWind.png' },
        { value: 'Lumiflux', label: 'Lumiflux', icon: '../assets/others/Element/ZZZ_IconLumiflux.png' },
      ],
    },
    // Districts have no icons: the button shows the short text (`short`) and the full name shows when you hover / hold it.
    // When you find an icon, put it in assets/others/Area/ with the name ZZZ_<name>.png and add
    //   icon: '../assets/others/Area/ZZZ_<name>.png'   to the option (the icon wins over `short`).
    area: {
      label: 'Districts', grid: true,
      options: [
        { value: 'RP', label: 'Random Play' },
        { value: 'SS', label: 'Sixth Street' },
        { value: 'BSCS', label: 'Brant Street Construction Site', short: 'Construction Site' },
        { value: 'LS', label: 'Lumina Square' },
        { value: 'OR', label: 'Outer Ring'},
        { value: 'WP', label: 'Waifei Peninsula', short: 'Waifei' },
        { value: 'Ros', label: 'Roscaelifer' },
        { value: 'NEPS', label: 'New Eridu Public Security', short: 'NEPS' },
        { value: 'TQ', label: 'Throne Quarter', short: 'TQ' },
        { value: 'OE', label: 'Old Eridu' },
      ],
    },
  },
};
