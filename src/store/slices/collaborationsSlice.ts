import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface Collaboration {
  id: string;
  brandName: string;
  brandLogo: string;
  type: "fashion" | "beauty" | "photography" | "media";
  description: string;
  year: number;
  deliverables: string[];
  testimonial?: string;
  featured: boolean;
  link?: string;
}

interface CollaborationsState {
  items: Collaboration[];
  loading: boolean;
  error: string | null;
  selectedType: string | null;
}

const initialState: CollaborationsState = {
  items: [],
  loading: false,
  error: null,
  selectedType: null,
};

const mockCollaborations: Collaboration[] = [
  {
    id: "1",
    brandName: "Lagos Fashion Week",
    brandLogo: "/images/logos/lfw.png",
    type: "fashion",
    description: "Featured designer showcasing Spring/Summer collection on the main runway.",
    year: 2024,
    deliverables: ["Runway Show", "Press Interviews", "Social Media Coverage"],
    testimonial: "Blessing brings a fresh perspective that perfectly captures the spirit of modern Nigerian fashion.",
    featured: true,
    link: "https://lagosfashionweek.com",
  },
  {
    id: "2",
    brandName: "Glow Beauty Nigeria",
    brandLogo: "/images/logos/glow.png",
    type: "beauty",
    description: "Brand ambassador for their 2024 skincare line campaign.",
    year: 2024,
    deliverables: ["Campaign Shoot", "TV Commercial", "Instagram Takeover"],
    featured: true,
  },
  {
    id: "3",
    brandName: "Vogue Africa",
    brandLogo: "/images/logos/vogue.png",
    type: "media",
    description: "Featured in editorial spread on emerging African designers.",
    year: 2023,
    deliverables: ["Editorial Photoshoot", "Interview", "Digital Feature"],
    testimonial: "A rising star with an unmistakable voice in contemporary African fashion.",
    featured: true,
    link: "https://vogue.com",
  },
  {
    id: "4",
    brandName: "Kelechi Amadi Photography",
    brandLogo: "/images/logos/kelechi.png",
    type: "photography",
    description: "Creative collaboration for portfolio and lookbook shoots.",
    year: 2023,
    deliverables: ["Portfolio Shoot", "Lookbook", "Behind-the-scenes Content"],
    featured: false,
  },
  {
    id: "5",
    brandName: "Nigerian Fashion Designers Association",
    brandLogo: "/images/logos/nfda.png",
    type: "fashion",
    description: "Mentorship program participant and emerging designer showcase.",
    year: 2023,
    deliverables: ["Mentorship", "Showcase Presentation", "Networking Events"],
    featured: false,
  },
];

export const fetchCollaborations = createAsyncThunk(
  "collaborations/fetchAll",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return mockCollaborations;
  }
);

const collaborationsSlice = createSlice({
  name: "collaborations",
  initialState,
  reducers: {
    setSelectedType: (state, action: PayloadAction<string | null>) => {
      state.selectedType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollaborations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCollaborations.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCollaborations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch collaborations";
      });
  },
});

export const { setSelectedType } = collaborationsSlice.actions;
export default collaborationsSlice.reducer;
