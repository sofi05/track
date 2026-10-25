/* =====================================================================
   Honkai: Star Rail: settings of the Characters page (001.html)
   Edit this file to add, remove or rename buttons and filters.
   Nothing else needs to change.
   ===================================================================== */
window.CHARA_PAGE = {
  // Buttons that are always visible above the list. Names in [ ] sit together.
  //   have = Have / Don't,  new = New,  or any filter listed under `filters` below
  quick: [['have', 'new'], 'rarity', 'gender'],

  // Filters inside the "Filter" button. Use [] to hide the button.
  popup: ['element', 'role', 'area'],

  // Part / collab buttons above the list. With none pressed, everything is shown.
  // field = the field on the character (part: '2' or collab: true), value = what it must be.
  // Remove the // from a line to turn that button on. [] hides the whole row.
  parts: [
    { label: 'Collab', field: 'collab', value: true },
    // { label: 'Part 1', field: 'part', value: '1' },   (needs  part: '1'  on the characters)
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
        { value: 'fire', label: 'fire', icon: '../assets/others/Element/HSR_IconAttributeFire.png' },
        { value: 'ice', label: 'ice', icon: '../assets/others/Element/HSR_IconAttributeIce.png' },
        { value: 'imaginary', label: 'imaginary', icon: '../assets/others/Element/HSR_IconAttributeImaginary.png' },
        { value: 'physical', label: 'physical', icon: '../assets/others/Element/HSR_IconAttributePhysical.png' },
        { value: 'quantum', label: 'quantum', icon: '../assets/others/Element/HSR_IconAttributeQuantum.png' },
        { value: 'thunder', label: 'thunder', icon: '../assets/others/Element/HSR_IconAttributeThunder.png' },
        { value: 'wind', label: 'wind', icon: '../assets/others/Element/HSR_IconAttributeWind.png' },
      ],
    },
    role: {
      label: 'Path',
      options: [
        { value: 'abun', label: 'Abundance', icon: '../assets/others/Role/HSR_Path_Abundance.png' },
        { value: 'dest', label: 'Destruction', icon: '../assets/others/Role/HSR_Path_Destruction.png' },
        { value: 'eru', label: 'Erudition', icon: '../assets/others/Role/HSR_Path_Erudition.png' },
        { value: 'harm', label: 'Harmony', icon: '../assets/others/Role/HSR_Path_Harmony.png' },
        { value: 'nihi', label: 'Nihility', icon: '../assets/others/Role/HSR_Path_Nihility.png' },
        { value: 'prese', label: 'Preservation', icon: '../assets/others/Role/HSR_Path_Preservation.png' },
        { value: 'reme', label: 'Remembrance', icon: '../assets/others/Role/HSR_Path_Remembrance.png' },
        { value: 'hunt', label: 'The Hunt', icon: '../assets/others/Role/HSR_Path_The_Hunt.png' },
        { value: 'ela', label: 'Elation', icon: '../assets/others/Role/HSR_Path_Elation.png' },
      ],
    },
    area: {
      label: 'World', white: true,
      options: [
        { value: 'hss', label: 'Herta Space', icon: '../assets/others/Role/HSR_ChapterIconBigPrologue.png' },
        { value: 'ae', label: 'Astral Express', icon: '../assets/others/Role/HSR_ChapterIconBigCommon.png' },
        { value: 'JVI', label: 'Jarilo-VI', icon: '../assets/others/Role/HSR_ChapterIconBigFirstworld.png' },
        { value: 'txl', label: 'Xianzhou Luofu', icon: '../assets/others/Role/HSR_ChapterIconBigSecondworld.png' },
        { value: 'pena', label: 'Penacony', icon: '../assets/others/Role/HSR_ChapterIconBigThirdWorld.png' },
        { value: 'amp', label: 'Amphoreus', icon: '../assets/others/Role/HSR_ChapterIconBigFourthworld.png' },
        { value: 'plana', label: 'Planarcadia', icon: '../assets/others/Role/HSR_ChapterIconBigFifthWorld.png' },
        { value: 'astro', label: 'Astropolis', icon: '../assets/others/Role/HSR_ChapterIconBigFifthWorldDlc.png' },
        { value: 'IPC', label: 'IPC', icon: '../assets/others/Role/HSR_IPC (T).png' },
        { value: 'SH', label: 'Stellaron Hunters', icon: '../assets/others/Role/HSR_SH (T).png' },
        { value: 'ot', label: 'Other', icon: '../assets/others/Role/HSR_Icon_Other.png' },
      ],
    },
  },
};
