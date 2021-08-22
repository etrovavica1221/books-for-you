export type Book = {
  title: String;
  authors: string[];
  averageRating?: number;
  canonicalVolumeLink?: string;
  categories?: string[];
  description?: string;
  imageLinks?: { smallThumbnail: string; thumbnail: string };
  ratingsCount?: number;
};

export type ResponseItem = {
  volumeInfo: Book;
};

export type DataResponse = {
  items: ResponseItem[];
};
