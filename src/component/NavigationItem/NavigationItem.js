import s from "./NavigationItem.module.css";

export default function NavigationItem({ text, icon }) {
  return (
    <li className={s.item}>
      {icon} {text}
    </li>
  );
}
