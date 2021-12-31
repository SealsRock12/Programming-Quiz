import styles from "@/styles/components/Toggle.module.scss";

import { isJSON, defaultSettings } from "@/lib/site";

function onChange(e, name) {
  console.log(e.target.checked);

  const currentSettings =
    isJSON(localStorage.getItem("settings")) && localStorage.getItem("settings")
      ? JSON.parse(localStorage.getItem("settings")!)
      : defaultSettings;

  currentSettings[name] = e.target.checked;
  console.log(currentSettings);

  localStorage.setItem("settings", JSON.stringify(currentSettings));

  // Dark mode
  if (name === "lightMode") {
    if (e.target.checked) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }
}

export default function Toggle({ name, checked = true }) {
  return (
    <div className={styles.toggle}>
      <label className={styles.toggleWrapper}>
        <input
          type="checkbox"
          className={styles.toggleCheckbox}
          onChange={e => {
            onChange(e, name);
          }}
          defaultChecked={checked}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}
