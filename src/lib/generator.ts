import problems, { langList } from "@/lib/problems";

export function generator(
  problemType: LangSettingType,
  previous?: PopulatedProblem
) {
  let flatProblems: PopulatedProblem[] = [];
  let langKeys: LangType[] = langList.map(e => e);

  if (problemType != "all") {
    langKeys = [problemType];
  }

  langKeys.forEach(lang => {
    problems[lang!].forEach((problem, id) => {
      flatProblems.push({
        id,
        // @ts-ignore
        lang,
        ...problem
      });
    });
  });

  if (previous && flatProblems.includes(previous)) {
    const i = flatProblems.indexOf(previous);
    flatProblems.splice(i + 1);
  }

  const index = Math.floor(Math.random() * flatProblems.length);

  return flatProblems[index];
}
