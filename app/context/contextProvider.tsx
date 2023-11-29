"use client";
import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface State {
  currentColor: string;
  currentMode: string;
  activeMenu: boolean;
  screenSize: string;
  themeSettings: boolean;
  isClicked?: Record<string, boolean>;
  handleClick?: (clicked: string) => void;
  setScreenSize?: Dispatch<SetStateAction<any>>;
  setCurrentColor?: Dispatch<SetStateAction<any>>;
  setCurrentMode?: Dispatch<SetStateAction<any>>;
  setMode?: Dispatch<SetStateAction<any>>;
  setColor?: Dispatch<SetStateAction<any>>;
  setThemeSettings?: Dispatch<SetStateAction<any>>;
  setIsClicked?: Dispatch<SetStateAction<any>>;
}
const initialState: State = {
  currentColor: "black",
  currentMode: "Light",
  activeMenu: true,
  screenSize: "undefined",
  themeSettings: false,
  isClicked: {},
};

const StateContext = createContext<Partial<State>>(initialState);

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [screenSize, setScreenSize] = useState<any>(undefined); // Replace with the appropriate type for screenSize
  const [currentColor, setCurrentColor] = useState<string>("black");
  const [currentMode, setCurrentMode] = useState<string>("Light");
  const [themeSettings, setThemeSettings] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<Record<string, boolean>>({
    chat: false,
    menu: false,
    profile: false,
    notification: false,
  });

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
    setIsClicked({
      chat: false,
      menu: false,
      profile: false,
      notification: false,
      [clicked]: true,
    });

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        setIsClicked,
        isClicked,
        //@ts-ignore
        initialState,
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
