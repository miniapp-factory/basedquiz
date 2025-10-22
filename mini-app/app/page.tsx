import { Metadata } from "next";
import { title, description, url } from "@/lib/metadata";
import { Quiz } from "@/components/quiz/Quiz";

export async function generateMetadata(): Promise<Metadata> {
  return {
    other: {
      "fc:miniapp": JSON.stringify({
        version: "next",
        imageUrl: `${url}/icon.png`,
        ogTitle: title,
        ogDescription: description,
        ogImageUrl: `${url}/icon.png`,
        button: {
          label: "Open",
          url: `${url}/`,
        },
      }),
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col gap-3 place-items-center px-4">
      <Quiz />
    </main>
  );
}
