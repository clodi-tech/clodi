interface MyTitleProps {
  first: string;
  second: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

export default function MyTitle({
  first,
  second,
  as: Heading = "h2",
}: MyTitleProps) {
  return (
    <Heading className="uppercase font-semibold">
      <span className="text-mid">{first}</span>
      <span className="text-white">{second}</span>
    </Heading>
  );
}
