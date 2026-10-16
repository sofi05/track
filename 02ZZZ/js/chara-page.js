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
  popup: ['element', 'district'],

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
    // Districts have no icons yet. To add one, put it in assets/others/Zenless/Group/ and add
    //   icon: '../assets/others/Zenless/Group/<file>.png'   to the option.
    district: {
      label: 'Districts', grid: true,
      options: [
        { value: 'SS', label: 'Sixth Street' },
        { value: 'TQ', label: 'Throne Quarter' },
        { value: 'OE', label: 'Old Eridu' },
        { value: 'LS', label: 'Lumina Square' },
        { value: 'OR', label: 'Outer Ring' },
        { value: 'BSCS', label: 'Brant Street Construction Site' },
        { value: 'WP', label: 'Waifei Peninsula' },
        { value: 'Ros', label: 'Roscaelifer' },
        { value: 'NEPS', label: 'New Eridu Public Security' },
        { value: 'RP', label: 'Random Play' },
      ],
    },
  },
};
