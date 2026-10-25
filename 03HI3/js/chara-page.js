/* =====================================================================
   Honkai Impact 3rd: settings of the Characters page (001.html)
   Edit this file to add, remove or rename buttons and filters.
   Nothing else needs to change.
   ===================================================================== */
window.CHARA_PAGE = {
  // Buttons that are always visible above the list. Names in [ ] sit together.
  //   have = Have / Don't,  new = New,  or any filter listed under `filters` below
  quick: [['have', 'new'], 'rarity'],

  // Filters inside the "Filter" button. Use [] to hide the button.
  popup: ['element', 'role'],

  // Part / collab buttons above the list. With none pressed, everything is shown.
  // field = the field on the character (p: 2 or collab: true), value = what it must be.
  // Remove the // from a line to turn that button on. [] hides the whole row.
  parts: [
    { label: 'Part 1', group: 'part', field: 'p', value: '1' },
    { label: 'Part 2', group: 'part', field: 'p', value: '2' },
    { label: 'Collab', field: 'collab', value: true },
  ],

  // true = filters stay selected when you pick another one (also a button on the page)
  keepFilters: false,

  // The choices of each filter. A character's field may hold one value or a list of values.
  filters: {
    element: {
      label: 'Element',
      options: [
        { value: 'BIO', label: 'Biologic', icon: '../assets/others/Element/HI3_BIO.png' },
        { value: 'IMG', label: 'Imaginary', icon: '../assets/others/Element/HI3_IMG.png' },
        { value: 'MECH', label: 'Mecha', icon: '../assets/others/Element/HI3_MECH.png' },
        { value: 'PSY', label: 'Psychic', icon: '../assets/others/Element/HI3_PSY.png' },
        { value: 'QUA', label: 'Quantum', icon: '../assets/others/Element/HI3_QUA.png' },
        { value: 'SD', label: 'Stardust', icon: '../assets/others/Element/HI3_SD.png' },
      ],
    },
    role: {
      label: 'Specialization',
      options: [
        { value: 'WS', label: 'World Star', icon: '../assets/others/Role/HI3_World_Star.png' },
        { value: 'WoD', label: 'Wheel of Destiny', icon: '../assets/others/Role/HI3_Wheel_of_Destiny.png' },
        { value: 'RoO', label: 'Rite of Oblivion', icon: '../assets/others/Role/HI3_Rite_of_Oblivion.png' },
        { value: 'LoA', label: 'Law of Ascension', icon: '../assets/others/Role/HI3_Law_of_Ascension.png' },
        { value: 'GoI', label: 'Grail of Infinitude', icon: '../assets/others/Role/HI3_Grail_of_Infinitude.png' },
      ],
    },
    rarity: {
      label: 'Rarity',
      options: [
        { value: '3', label: 'B', icon: '../assets/others/Rank/HI3_BattleRating_B.png' },
        { value: '4', label: 'A', icon: '../assets/others/Rank/HI3_BattleRating_A.png' },
        { value: '5', label: 'S', icon: '../assets/others/Rank/HI3_BattleRating_S.png' },
      ],
    },
  },
};
