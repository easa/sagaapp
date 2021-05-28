export const getMaxHeight = function calculateMaxHeight({
  parentHeight,
  countOfElements = 12, // 1 - 12,
}: {
  parentHeight: number,
  countOfElements: number,
}) {
  const windowHeight = parentHeight; // window.innerHeight;
  const height = windowHeight - 36;
  const eachHeight = height / (countOfElements / 3);
  return eachHeight;
};

export const getMaxWidth = function calculateMaxWidth({
  parentWidth,
  countOfElements = 12, // 1 - 12
}: {
  parentWidth: number,
  countOfElements: number,
}) {
  const windowHeight = parentWidth; // window.innerWidth;
  const height = windowHeight - 36;
  const eachHeight = height / (countOfElements / 3);
  return eachHeight;
};

export const getRatio = function calculateRatio({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return width / height;
};
