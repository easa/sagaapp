// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isVertical = function calculateRatio({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (width / height) < 1;
};

const getWidthStatus = function calculateWidthStatus(count: number) {
  if (count > 9) return 5;
  if (count > 5) return 4;
  if (count > 2) return 3;
  return 2;
};

export const getSize = function calculateMaxHeight({
  parentSize,
  itemCount = 12,
}: {
  parentSize: { width: number; height: number },
  itemCount: number,
}) {
  const widthStatus = getWidthStatus(itemCount);
  return {
    height: parentSize.height / widthStatus,
    width: parentSize.width / widthStatus,
  };
};
