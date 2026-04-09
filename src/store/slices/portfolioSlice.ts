import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface PortfolioItem {
  id: string;
  title: string;
  category: "dress" | "accessory" | "couture" | "ready-to-wear";
  season: "spring" | "summer" | "autumn" | "winter";
  year: number;
  description: string;
  materials: string[];
  images: string[];
  featured: boolean;
}

interface PortfolioState {
  items: PortfolioItem[];
  filteredItems: PortfolioItem[];
  selectedItem: PortfolioItem | null;
  filters: {
    category: string | null;
    season: string | null;
    year: number | null;
  };
  loading: boolean;
  error: string | null;
}

const initialState: PortfolioState = {
  items: [],
  filteredItems: [],
  selectedItem: null,
  filters: {
    category: null,
    season: null,
    year: null,
  },
  loading: false,
  error: null,
};

// Mock data - in production, fetch from API/CMS
const mockPortfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Elegant Ivory",
    category: "dress",
    season: "spring",
    year: 2024,
    description: "A sophisticated crochet-style dress showcasing timeless elegance and modern femininity.",
    materials: ["Crochet fabric", "Cotton blend", "Pearl accents"],
    images: ["/images/portfolio/model/model-1.jpg", "/images/portfolio/model/model-3.jpg"],
    featured: true,
  },
  {
    id: "2",
    title: "Monochrome Chic",
    category: "ready-to-wear",
    season: "autumn",
    year: 2024,
    description: "Bold black and white ensemble featuring structured vest and flowing white trousers.",
    materials: ["Tailored vest", "Silk trousers", "Gold accessories"],
    images: ["/images/portfolio/model/model-2.jpg", "/images/portfolio/model/model-5.jpg"],
    featured: true,
  },
  {
    id: "3",
    title: "Studio Portrait",
    category: "couture",
    season: "summer",
    year: 2024,
    description: "Dramatic black and white editorial portrait showcasing confident expression and artistic vision.",
    materials: ["Professional styling", "Studio lighting", "Editorial makeup"],
    images: ["/images/hero/hero-2.jpg"],
    featured: true,
  },
  {
    id: "4",
    title: "Contemporary Grace",
    category: "dress",
    season: "summer",
    year: 2024,
    description: "Modern halter-neck design featuring delicate crochet pattern and elegant silhouette.",
    materials: ["Hand-crocheted fabric", "Halter design", "Neutral palette"],
    images: ["/images/portfolio/model/model-4.jpg", "/images/portfolio/model/model-7.jpg"],
    featured: false,
  },
  {
    id: "5",
    title: "Power Stance",
    category: "ready-to-wear",
    season: "winter",
    year: 2024,
    description: "Confident monochrome look perfect for editorial and professional campaigns.",
    materials: ["Structured tailoring", "Minimalist design", "Statement jewelry"],
    images: ["/images/portfolio/model/model-6.jpg"],
    featured: true,
  },
];

export const fetchPortfolioItems = createAsyncThunk(
  "portfolio/fetchItems",
  async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockPortfolioItems;
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ key: keyof PortfolioState["filters"]; value: string | number | null }>) => {
      state.filters[action.payload.key] = action.payload.value;
      applyFilters(state);
    },
    clearFilters: (state) => {
      state.filters = { category: null, season: null, year: null };
      state.filteredItems = state.items;
    },
    selectItem: (state, action: PayloadAction<string | null>) => {
      state.selectedItem = action.payload
        ? state.items.find((item) => item.id === action.payload) || null
        : null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolioItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPortfolioItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchPortfolioItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch portfolio items";
      });
  },
});

function applyFilters(state: PortfolioState) {
  state.filteredItems = state.items.filter((item) => {
    const categoryMatch = !state.filters.category || item.category === state.filters.category;
    const seasonMatch = !state.filters.season || item.season === state.filters.season;
    const yearMatch = !state.filters.year || item.year === state.filters.year;
    return categoryMatch && seasonMatch && yearMatch;
  });
}

export const { setFilter, clearFilters, selectItem } = portfolioSlice.actions;
export default portfolioSlice.reducer;
