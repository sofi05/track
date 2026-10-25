/* =====================================================================
   Genshin Impact: settings of the Characters page (001.html)
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
        { value: 'Anemo', label: 'Anemo', icon: '../assets/others/Element/GI_Anemo.png' },
        { value: 'Geo', label: 'Geo', icon: '../assets/others/Element/GI_Geo.png' },
        { value: 'Electro', label: 'Electro', icon: '../assets/others/Element/GI_Electro.png' },
        { value: 'Dendro', label: 'Dendro', icon: '../assets/others/Element/GI_Dendro.png' },
        { value: 'Hydro', label: 'Hydro', icon: '../assets/others/Element/GI_Hydro.png' },
        { value: 'Pyro', label: 'Pyro', icon: '../assets/others/Element/GI_Pyro.png' },
        { value: 'Cryo', label: 'Cryo', icon: '../assets/others/Element/GI_Cryo.png' },
      ],
    },
    area: {
      label: 'Region', grid: true, style: 'region',
      options: [
        { value: 'mond', label: 'Mondstadt', icon: '../assets/others/Area/GI_UI_ChapterIcon_Mengde.png' },
        { value: 'liy', label: 'Liyue', icon: '../assets/others/Area/GI_UI_ChapterIcon_Liyue.png' },
        { value: 'ina', label: 'Inazuma', icon: '../assets/others/Area/GI_UI_ChapterIcon_Inazuma.png' },
        { value: 'sum', label: 'Sumeru', icon: '../assets/others/Area/GI_UI_ChapterIcon_Sumeru.png' },
        { value: 'font', label: 'Fontaine', icon: '../assets/others/Area/GI_UI_ChapterIcon_Fontaine.png' },
        { value: 'nat', label: 'Natlan', icon: '../assets/others/Area/GI_UI_ChapterIcon_Natlan.png' },
        { value: 'nod', label: 'Nod-Krai', icon: '../assets/others/Area/GI_UI_ChapterIcon_NodKrai.png' },
        { value: 'snez', label: 'Snezhnaya', icon: '../assets/others/Area/GI_UI_ChapterIcon_Snezhnaya.png' },
        { value: 'bey', label: 'Beyond', icon: '../assets/others/Area/GI_UI_LoadingPic_Beyond.png' },
        { value: 'khae', label: 'Khaeri\'ah' },
        { value: 'cel', label: 'Celestia' },
      ],
    },
  },
};
