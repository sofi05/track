/* =====================================================================
   Arknights: Endfield: settings of the Characters page (001.html)
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
        { value: '4', label: '4★' },
        { value: '5', label: '5★' },
        { value: '6', label: '6★' },
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
        { value: 'Heat', label: 'Heat', icon: '../assets/others/Element/AE_Heat.png' },
        { value: 'Cryo', label: 'Cryo', icon: '../assets/others/Element/AE_Cryo.png' },
        { value: 'Nature', label: 'Nature', icon: '../assets/others/Element/AE_Nature.png' },
        { value: 'Physical', label: 'Physical', icon: '../assets/others/Element/AE_Physical.png' },
        { value: 'Electric', label: 'Electric', icon: '../assets/others/Element/AE_Electric.png' },
      ],
    },
    area: {
      label: 'Path',
      options: [
        { value: 'Hongshan', label: 'Hongshan Academy of Sciences', icon: '../assets/others/Area/AE_Hongshan_Academy_Of_Sciences.png' },
        { value: 'EndIndustries', label: 'Endfield Industries', icon: '../assets/others/Area/AE_Endfield_Industries.webp' },
        { value: 'Rhodes', label: 'Rhodes Island', icon: '../assets/others/Area/AE_Rhodes_Island.webp' },
        { value: 'UWST', label: 'UWST', icon: '../assets/others/Area/AE_UWST.webp' },
        { value: 'TGCC', label: 'TGCC', icon: '../assets/others/UI_Icon_LunaRite_Unknown.png' },
        { value: 'OrderSO', label: 'Order of Steel Oath', icon: '../assets/others/UI_Icon_LunaRite_Unknown.png' },
        { value: 'Cabal', label: 'Cabal of Tranquility', icon: '../assets/others/UI_Icon_LunaRite_Unknown.png' },
        { value: 'Hannabit', label: 'Hannabit Circuit', icon: '../assets/others/UI_Icon_LunaRite_Unknown.png' },
        { value: 'Sesqa', label: 'Seš\'qa', icon: '../assets/others/UI_Icon_LunaRite_Unknown.png' },
      ],
    },
  },
};
