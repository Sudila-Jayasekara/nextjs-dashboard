import DashboardSkeleton from "../../ui/skeletons";

//if all dynamic compoenents in page wrapped with suspense, this loading compoenent will not show,
//comment one suspense in page.tsx to see this loading component
export default function Loading() {
  return <p>Loading....</p>;
}
