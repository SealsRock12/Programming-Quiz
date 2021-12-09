import Menu from "@/components/Menu";
import Problem from "@/components/Play/Problem";
import Submit from "@/components/Play/Submit";
import Button from "@/components/Button";
import { generator } from "@/lib/generator";

import styles from "@/styles/Play.module.scss";

import { useState } from "react";

export default function Play() {
  function submit() {
    // submit button handler
    const problemInfo = JSON.parse(localStorage.getItem("problem-info"));
    const problem = problemInfo.problem;
    const options = problemInfo.options;
    const answer = parseInt(problemInfo.answer);
    const solution = problemInfo.solution;

    // determine which checkbox was checked
    const checkboxes = document.querySelectorAll("input[name='option']");

    let nthCheckbox = 1;
    for (const checkbox of checkboxes) {
      if (checkbox.checked) {
        break;
      }
      nthCheckbox++;
    }

    if (nthCheckbox === answer) {
      // correct
      console.log("correct");
    } else {
      // incorrect
      console.log("incorrect");
    }

    console.log(solution);
    console.log(options);

    problemInfo.pageText = solution;
    console.log(problemInfo.pageText);

    setProblemInfo(problemInfo);
  }

  const problemInfoGenerate = generator();

  const [problemInfo, setProblemInfo] = useState(problemInfoGenerate);
  localStorage.setItem("problem-info", JSON.stringify(problemInfoGenerate));

  return (
    <main className={styles.main}>
      <Menu playSelected />

      <article className={styles.problemContainer}>
        <Problem problemInfoGenerate={problemInfo} />

        <div className={styles.controls}>
          <Button className={styles.submit} title="submit" onClick={submit}>
            SUBMIT
          </Button>
          <Button title="submit">GIVE UP</Button>
        </div>
      </article>
    </main>
  );
}
