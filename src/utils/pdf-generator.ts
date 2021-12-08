import { PDFGenerationConfig } from "../types";

export default async function generatePDF(
  options?: PDFGenerationConfig
): Promise<void> {
  const opts: PDFGenerationConfig = options || {
    initialDocPath: "/build/docs/intro",
    contentSelector: "article",
    excludeSelectors: [".margin-vert--xl a"],
    paginationSelector: ".pagination-nav__item--next > a",
  };
}
