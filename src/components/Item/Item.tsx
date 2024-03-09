const SIZES = {
  medium: [50, 30],
  small: [40, 20],
};

export const Item = ({ item, size }: { item: string; size: keyof typeof SIZES }) => {
  const imgUrl = new URL("/" + item + ".png", import.meta.url).href;
  return (
    <>
      <img src={imgUrl} width={SIZES[size][0]} height={SIZES[size][1]} className="inline-block" title={item} />
    </>
  );
};
