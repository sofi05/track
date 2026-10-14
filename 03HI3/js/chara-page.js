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
  popup: ['element', 'spec'],

  // Part / collab buttons above the list. With none pressed, everything is shown.
  // field = the field on the character (part: '2' or collab: true), value = what it must be.
  // Remove the // from a line to turn that button on. [] hides the whole row.
  parts: [
    { label: 'Part 1', group: 'part', field: 'part', value: '1' },
    { label: 'Part 2', group: 'part', field: 'part', value: '2' },
    { label: 'Collab', field: 'collab', value: true },
  ],

  // true = filters stay selected when you pick another one (also a button on the page)
  keepFilters: false,

  // The choices of each filter. A character's field may hold one value or a list of values.
  filters: {
    element: {
      label: 'Element',
      options: [
        { value: 'BIO', label: 'BIO', icon: '../assets/others/HI3/Element/BIO.png' },
        { value: 'IMG', label: 'IMG', icon: '../assets/others/HI3/Element/IMG.png' },
        { value: 'MECH', label: 'MECH', icon: '../assets/others/HI3/Element/MECH.png' },
        { value: 'PSY', label: 'PSY', icon: '../assets/others/HI3/Element/PSY.png' },
        { value: 'QUA', label: 'QUA', icon: '../assets/others/HI3/Element/QUA.png' },
        { value: 'SD', label: 'SD', icon: '../assets/others/HI3/Element/SD.png' },
      ],
    },
    spec: {
      label: 'Specialization',
      options: [
        { value: 'WS', label: 'WS', icon: '../assets/others/HI3/Spec/World_Star.png' },
        { value: 'WoD', label: 'WoD', icon: '../assets/others/HI3/Spec/Wheel_of_Destiny.png' },
        { value: 'RoO', label: 'RoO', icon: '../assets/others/HI3/Spec/Rite_of_Oblivion.png' },
        { value: 'LoA', label: 'LoA', icon: '../assets/others/HI3/Spec/Law_of_Ascension.png' },
        { value: 'GoI', label: 'GoI', icon: '../assets/others/HI3/Spec/Grail_of_Infinitude.png' },
      ],
    },
    rarity: {
      label: 'Rarity',
      options: [
        { value: '3', label: 'B', icon: '../assets/others/HI3/Rank/B.png' },
        { value: '4', label: 'A', icon: '../assets/others/HI3/Rank/A.png' },
        { value: '5', label: 'S', icon: '../assets/others/HI3/Rank/S.png' },
      ],
    },
  },
};
