import Image from "next/image";
import TableComponent from '../component/table';
//import Graph from '../component/graph'

import dynamic from 'next/dynamic';

const DynamicGraph = dynamic(() => import('../component/graph'), {
  ssr: false  // SSRを無効化
});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">      
      <TableComponent />
      <DynamicGraph />
    </main>
  );
}
