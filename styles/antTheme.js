// Ant Design v5 theme tokens, mapped to the site's design tokens (see styles/variables.css).
// Kept in sync manually since CSS custom properties aren't readable at the antd token layer.
const antTheme = {
  token: {
    colorPrimary: '#ff5f38',
    colorPrimaryHover: '#e8502b',
    colorPrimaryActive: '#c2431f',
    colorLink: '#ff5f38',
    colorLinkHover: '#e8502b',
    colorText: '#1d1812',
    colorTextSecondary: '#655a4e',
    colorTextTertiary: '#877a6c',
    colorBorder: '#e8e0d2',
    colorBgContainer: '#ffffff',
    colorBgLayout: '#faf7f1',
    fontFamily: "var(--font-lexend-deca), 'Lexend Deca', sans-serif",
    borderRadius: 12,
    borderRadiusLG: 18,
    borderRadiusSM: 8,
  },
  components: {
    Button: {
      borderRadius: 999,
      controlHeight: 46,
      fontWeight: 600,
      paddingInline: 26,
    },
    Drawer: {
      colorBgElevated: '#faf7f1',
    },
    Collapse: {
      headerPadding: '14px 16px',
      contentPadding: '0 16px 14px',
    },
  },
};

export default antTheme;
