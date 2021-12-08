export interface PDFGenerationConfig {
  initialDocPath: string;
  contentSelector: string;
  excludeSelectors: string[];
  paginationSelector: string;
  outputFile?: string;
  title?: string;
  subtitle?: string;
  coverImage?: string;
  margin?: [number, number, number, number];
}
