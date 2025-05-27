const EXPERT = "Expert";
const PROFICIENT = "Proficient";
const KNOWLEDGABLE = "Knowledgable";
const RUSTY = "Rusty";

export function getExpertiseLevel(level: number) {
  if (level >= 90) {
    return EXPERT;
  }
  if (level >= 80) {
    return PROFICIENT;
  }
  if (level >= 70) {
    return KNOWLEDGABLE;
  }
  return RUSTY;
}
