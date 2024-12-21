import { client } from "@/sanity/lib/client";
import Image from "next/image";
import {urlFor} from "@/sanity/lib/image"
export default async function Home() {
  const query =`*[_type == "homepage"][0]{
    heading,
    paragraph,
    buttonText,
    buttonLink,
    "imageUrl": image.asset->url
  }`
  const sanityData = await client.fetch(query);
  console.log("sanityData",sanityData)
  //const { heading, paragraph, buttonText, buttonLink, imageUrl } = sanityData[0] || {};
  return (
    <div>
      <h1 className="font-bold">sanity</h1>
      <Image src={urlFor(sanityData.imageUrl).url()}alt="sanity" width={200} height={200}/>
      <h2 className="font-bold text-xl">{sanityData.heading}</h2>
      <h2 className="font-bold text-xl">{sanityData.paragraph}</h2>
      <h2 className="font-bold text-xl">{sanityData.buttonText}</h2>
    </div>
  );
} 
//template litterl clear from yt cdn= content delivery network nextjs machinasime cacheing/cashing ctrl+f5 forhard refresh