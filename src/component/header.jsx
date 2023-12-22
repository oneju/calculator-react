import { styled } from "styled-components";
import { darkMode, defaultMode, lightMode } from "../theme";
// import ThemeToggle from "./themeToggle";

const AppHeader = ({ HandleThemeChange }) => {
  return (
    <HeadContainer>
      <Logo>calc</Logo>
      <ThemeSection>
        <label>THEME</label>
        <ToggleWrapper>
          <ThemeLabelContainer>
            <ThemeLabel>1</ThemeLabel>
            <ThemeLabel>2</ThemeLabel>
            <ThemeLabel>3</ThemeLabel>
          </ThemeLabelContainer>
          <ThemeButtonContainer>
            <ThemeButton
              onClick={() => HandleThemeChange(defaultMode)}
              value="default"
            />
            <ThemeButton
              onClick={() => HandleThemeChange(lightMode)}
              value="light"
            />
            <ThemeButton
              onClick={() => HandleThemeChange(darkMode)}
              value="dark"
            />
          </ThemeButtonContainer>
        </ToggleWrapper>
      </ThemeSection>
    </HeadContainer>
  );
};
export default AppHeader;
const HeadContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 1rem;
`;
const Logo = styled.h1`
  color: ${(props) => props.theme.color.displayText};
  /* text-align: end; */
  /* align-content: end; */
  height: 1rem;
  margin-bottom: 0;
  margin-top: 2rem;
`;
const ThemeSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  label {
    color: ${(props) => props.theme.color.displayText};
    height: 1.3rem;
  }
`;
const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;
const ThemeLabelContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const ThemeLabel = styled.p`
  color: ${(props) => props.theme.color.displayText};
  height: fit-content;
  margin-bottom: 10px;
`;
const ThemeButtonContainer = styled.div`
  display: flex;

  align-items: center;
  background-color: ${(props) => props.theme.color.componentBgColor};
  border-radius: 1rem;
  padding: 0.3rem;
`;
const ThemeButton = styled.div`
  transition: all 0.5s ease-in-out;
  height: 1rem;
  width: 1rem;
  border-radius: 1rem;
  background-color: ${(props) =>
    props.value === props.theme.name
      ? props.theme.color.enterKeyColor
      : "transparent"};
  border: 0;
`;
