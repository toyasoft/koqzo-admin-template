import { createFragmentContainer, graphql } from "react-relay";
import { useState } from "react";
// import WebsiteContentListItem from "./WebsiteContentListItem";
import styles from "src/styles/components/organisms/ContentList.module.scss";
import TableWrapper from "src/components/molecules/TableWrapper";
import Link from "next/link";

type Props = {};

// ウェブサイトコンテンツリスト
const ContentList: React.FC<Props> = (props) => {
  const [isLoading, setLoading] = useState(false);
  return (
    <section className={styles.websiteContentList}>
      <header>
        <h3>コンテンツ</h3>
      </header>
      <TableWrapper>
        <table>
          <thead>
            <tr>
              <th style={{ minWidth: "400px" }}>コンテンツ名</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {/* <Link href="/article">
                  <a>記事管理</a>
                </Link> */}
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
    </section>
  );
};

export default ContentList;
