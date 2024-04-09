"use client";

export default function Button({
  id,
  revalidate,
}: {
  id: string;
  revalidate: any;
}) {
  const onclick = () => {
    revalidate();
  };
  return <button onClick={onclick}>revalidate</button>;
}
