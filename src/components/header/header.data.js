export default [
  {
    path: 'home',
    label: 'Home',
  },
  {
    path: 'feature',
    label: 'Features',
  },
  {
    path: 'pricing',
    label: 'Pricing',
  },
  {
    path: '',
    label: 'Release Notes',
    onClick: () => {
      window.open("https://www.notion.so/Release-Notes-fa9a5589597c4adfbbc469ae3c6fbe8a");
    },
  },
];
