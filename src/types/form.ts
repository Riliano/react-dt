export interface FormData {
  name: string;
  price: number;
  type: string;
  image: File | null; // optional image file
  selected: boolean;
}

export interface OutfitData {
  date: string;
  composition: string;
  cost: number;
}
