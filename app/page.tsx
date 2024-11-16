import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  // javaScriptの定数や式などを書くことができる
  const name = "世界";

  // HTMLのようなマークアップを書くことができる
  // JavaScriptを書いたり参照する際には{}で囲む
  return (
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
        <p className={styles.description}>
          私たちは市場をリードしているグローバルテックカンパにーです。
        </p>
      </div>
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
      />
    </section>
  );
}
