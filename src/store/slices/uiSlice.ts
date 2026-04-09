import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  theme: "light" | "dark";
  isMenuOpen: boolean;
  isLightboxOpen: boolean;
  lightboxImageIndex: number;
  scrollY: number;
  activeSection: string;
  pageTransitionDirection: "forward" | "backward";
}

const initialState: UIState = {
  theme: "light",
  isMenuOpen: false,
  isLightboxOpen: false,
  lightboxImageIndex: 0,
  scrollY: 0,
  activeSection: "home",
  pageTransitionDirection: "forward",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    openLightbox: (state, action: PayloadAction<number>) => {
      state.isLightboxOpen = true;
      state.lightboxImageIndex = action.payload;
    },
    closeLightbox: (state) => {
      state.isLightboxOpen = false;
    },
    setLightboxIndex: (state, action: PayloadAction<number>) => {
      state.lightboxImageIndex = action.payload;
    },
    setScrollY: (state, action: PayloadAction<number>) => {
      state.scrollY = action.payload;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
    setPageTransitionDirection: (state, action: PayloadAction<"forward" | "backward">) => {
      state.pageTransitionDirection = action.payload;
    },
  },
});

export const {
  toggleTheme,
  setTheme,
  toggleMenu,
  setMenuOpen,
  openLightbox,
  closeLightbox,
  setLightboxIndex,
  setScrollY,
  setActiveSection,
  setPageTransitionDirection,
} = uiSlice.actions;

export default uiSlice.reducer;
