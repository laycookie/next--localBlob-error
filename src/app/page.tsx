import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center">test</h1>
      {(() => {
        const imageBuffer: Uint8Array = new Uint8Array(100);
        const imageBlob: Blob = new Blob([imageBuffer], { type: "image/png" });
        const imageUrl: string = URL.createObjectURL(imageBlob);
        return <img alt={"test"} src={imageUrl} />;
      })()}
    </main>
  );
}
