export const computeElementHeight = ({ min, max, value }) => {
  // minimum will be 1
  const absoluteValue = value - min + 1;
  const absoluteMax = max - min + 1;
  const answer = (absoluteValue * 100) / absoluteMax;

  return answer;
};
