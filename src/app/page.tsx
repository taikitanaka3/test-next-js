import Image from "next/image";
import TableComponent from '../component/table';
import Graph from '../component/graph'
import YoutubeVideo from '../component/youtube';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">      
      <TableComponent />
      <Graph />
      <YoutubeVideo videoId="Fcj0qdNZoT4" />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Fcj0qdNZoT4?si=cwydVsdv0tRoxG8R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </main>
  );
}
