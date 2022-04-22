import styles from "../../styles/Home.module.css";
import Link from "next/link";

// https://www.youtube.com/watch?v=eEP7CLqnRr0&t=1480s

export default function ProductsList() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>商品一覧</h2>

        <ul>
          <li>
            <Link href="/products/smartphone">
              <a>スマートフォン</a>
            </Link>
          </li>
          <li>
            <Link href="/products/pc">
              <a>パソコン</a>
            </Link>
          </li>
          <li>
            <Link href="/products/headphone">
              <a>ヘッドホン</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
