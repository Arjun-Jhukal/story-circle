import Articles from "@/section/articles";
import Featured from "@/section/featured";
import Highlighted from "@/section/highlighted";
import Latest from "@/section/latest";

export default function Home() {
  return (
    <main>
      <Featured />
      <Articles />
      <Latest />
      <Articles />
      <Highlighted />
    </main>
  );
}
