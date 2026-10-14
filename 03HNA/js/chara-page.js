/* =====================================================================
   Honkai: Nexus Anima: settings of the Characters page (001.html)
   Edit this file to add, remove or rename buttons and filters.
   Nothing else needs to change.
   ===================================================================== */
window.CHARA_PAGE = {
  // Buttons that are always visible above the list. Names in [ ] sit together.
  //   have = Have / Don't,  new = New,  or any filter listed under `filters` below
  quick: [['have', 'new'], 'rarity', 'gender'],

  // Filters inside the "Filter" button. Use [] to hide the button.
  popup: ['element', 'group', 'world'],

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
    element: {
      label: 'Element',
      options: [
        { value: 'fire', label: 'fire', icon: '../assets/others/StarRail/Element/fire.png' },
        { value: 'ice', label: 'ice', icon: '../assets/others/StarRail/Element/ice.png' },
        { value: 'imaginary', label: 'imaginary', icon: '../assets/others/StarRail/Element/imaginary.png' },
        { value: 'physical', label: 'physical', icon: '../assets/others/StarRail/Element/physical.png' },
        { value: 'quantum', label: 'quantum', icon: '../assets/others/StarRail/Element/quantum.png' },
        { value: 'thunder', label: 'thunder', icon: '../assets/others/StarRail/Element/thunder.png' },
        { value: 'wind', label: 'wind', icon: '../assets/others/StarRail/Element/wind.png' },
      ],
    },
    group: {
      label: 'Path',
      options: [
        { value: 'abun', label: 'Abundance', icon: '../assets/others/StarRail/Path/Path_Abundance.png' },
        { value: 'dest', label: 'Destruction', icon: '../assets/others/StarRail/Path/Path_Destruction.png' },
        { value: 'eru', label: 'Erudition', icon: '../assets/others/StarRail/Path/Path_Erudition.png' },
        { value: 'harm', label: 'Harmony', icon: '../assets/others/StarRail/Path/Path_Harmony.png' },
        { value: 'nihi', label: 'Nihility', icon: '../assets/others/StarRail/Path/Path_Nihility.png' },
        { value: 'prese', label: 'Preservation', icon: '../assets/others/StarRail/Path/Path_Preservation.png' },
        { value: 'reme', label: 'Remembrance', icon: '../assets/others/StarRail/Path/Path_Remembrance.png' },
        { value: 'hunt', label: 'The Hunt', icon: '../assets/others/StarRail/Path/Path_The_Hunt.png' },
      ],
    },
    world: {
      label: 'World', white: true,
      options: [
        { value: 'hss', label: 'Herta Space', icon: '../assets/others/StarRail/World/Icon_Herta_Space_Station.png' },
        { value: 'ae', label: 'Astral Express', icon: '../assets/others/StarRail/World/Icon_Astral_Express.webp' },
        { value: 'JVI', label: 'Jarilo-VI', icon: '../assets/others/StarRail/World/Icon_Jarilo-VI.png' },
        { value: 'txl', label: 'Xianzhou Luofu', icon: '../assets/others/StarRail/World/Icon_The_Xianzhou_Luofu.png' },
        { value: 'pena', label: 'Penacony', icon: '../assets/others/StarRail/World/Icon_Penacony.png' },
        { value: 'amp', label: 'Amphoreus', icon: '../assets/others/StarRail/World/Icon_Amphoreus.png' },
        { value: 'ot', label: 'Other', icon: '../assets/others/StarRail/World/Icon_Other.png' },
      ],
    },
    rarity: {
      label: 'Rarity',
      options: [
        { value: '4', label: '4★' },
        { value: '5', label: '5★' },
      ],
    },
    gender: {
      label: 'Gender',
      options: [
        { value: 'm', label: 'Male' },
        { value: 'f', label: 'Female' },
      ],
    },
  },
};
