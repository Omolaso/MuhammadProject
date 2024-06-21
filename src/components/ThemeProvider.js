import { ThemeProvider, createTheme } from "@mui/material/styles";

const MuiThemeProvider = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
    components: {
      MuiTableContainer: {
        styleOverrides: {
          root: {
            fontFamily: "inherit",
          },
        },
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const AppThemeProvider = ({ children }) => {
  return (
    <main className="w-full font-sans">
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </main>
  );
};

export default AppThemeProvider;
