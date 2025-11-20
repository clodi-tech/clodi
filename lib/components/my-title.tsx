interface MyTitleProps {
  first: string;
  second: string;
}

export default function MyTitle({ first, second }: MyTitleProps) {
  return (
    <span className="uppercase font-semibold">
      <span className="text-mid">{first}</span>
      <span className="text-white">{second}</span>
    </span>
  );
}
