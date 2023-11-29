"use client";
import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
} from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface State {
  currentColor: string;
  currentMode: string;
  activeMenu: boolean;
  screenSize: any; // Replace with the appropriate type for screenSize
  themeSettings: boolean;
  isClicked: Record<string, boolean>;
}

const StateContext = createContext<Partial<State>>({}); // You can replace `Partial<State>` with a more specific type if needed

const initialState: State = {
  currentColor: "black",
  currentMode: "Light",
  activeMenu: true,
  screenSize: undefined, // Replace with the appropriate type for screenSize
  themeSettings: false,
  isClicked: {
    chat: false,
    menu: false,
    profile: false,
    notification: false,
  },
};

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [screenSize, setScreenSize] = useState<any>(undefined); // Replace with the appropriate type for screenSize
  const [currentColor, setCurrentColor] = useState<string>("black");
  const [currentMode, setCurrentMode] = useState<string>("Light");
  const [themeSettings, setThemeSettings] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<Record<string, boolean>>(
    initialState.isClicked
  );

  const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  const handleClick = (clicked: string) =>
    setIsClicked({ ...initialState.isClicked, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
