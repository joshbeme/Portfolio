import { usePathname } from "next/navigation";

const useCompanyName = () => {
  const currentPath = usePathname() || "";
  const unprocessedCompany = currentPath.split("/")[1] || "";
  const currentCompany = unprocessedCompany.replaceAll("_", " ");
  return currentCompany;
};
export default useCompanyName;
