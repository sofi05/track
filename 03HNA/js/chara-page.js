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
  popup: ['element'],

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
    // Elements of Nexus Anima (no icons yet). Capital letters do not matter when filtering.
    element: {
      label: 'Element',
      options: [
        { value: 'reality', label: 'Reality' },
        { value: 'beauty', label: 'Beauty' },
        { value: 'competition', label: 'Competition' },
        { value: 'strength', label: 'Strength' },
        { value: 'joy', label: 'Joy' },
        { value: 'dark', label: 'Dark' },
        { value: 'memory', label: 'Memory' },
        { value: 'insatiability', label: 'Insatiability' },
        { value: 'satiation', label: 'Satiation' },
        { value: 'light', label: 'Light' },
        { value: 'love', label: 'Love' },
        { value: 'hate', label: 'Hate' },
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
