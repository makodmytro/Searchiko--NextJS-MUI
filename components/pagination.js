import { Box } from "../src/app/lib/mui";

const current = {
  color: "red"
};

const normal = {
  color: "blue"
};

export default function Pagination({
  items,
  pageSize,
  currentPage,
  onPageChange
}) {
  const pagesCount = Math.ceil(items / pageSize); // 22/4

  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log(pages);
  return (
    <div>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <Box
              component="a"
              sx={page === currentPage ? current : normal}
              onClick={() => onPageChange(page)}
            >
              {page}
            </Box>
          </li>
        ))}
      </ul>
    </div>
  );
}
