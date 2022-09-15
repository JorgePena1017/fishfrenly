const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.green[300],
          to_bg: colors.emerald[500],
        },
        titles: colors.blue[600],
        links: {
          txt: colors.blue[400],
          hover_txt: colors.cyan[400],
        },
        loading_spinner: colors.cyan[200],
        popups: {
          bg: colors.teal[300],
          txt: colors.slate[800],
          internal_border: colors.teal[500],
        },
        warning: {
          txt: colors.slate[800],
          bg: colors.teal[500],
          border: colors.teal[800],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.slate[800],
          bg: colors.sky[500],
          border: colors.slate[200],
          hover_txt: colors.slate[800],
          hover_bg: colors.slate[100],
          hover_border: colors.slate[200],
        },
        btn_primary: {
          txt: colors.blue[200],
          bg: colors.blue[500],
          border: colors.blue[800],
          hover_txt: colors.white,
          hover_bg: colors.cyan[400],
          hover_border: colors.cyan[400],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.blue[600],
        txt_input: {
          txt: colors.cyan[300],
          bg: colors.sky[500],
          border: colors.slate[200],
          focus_txt: colors.cyan[300],
          focus_bg: colors.slate[50],
          focus_border: colors.cyan[200],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.slate[800],
          bg: colors.cyan[100],
        },

        // Mint widget
        token_preview: colors.teal[500],
      },
    },
  },
  variants: {},
  plugins: [],
};
