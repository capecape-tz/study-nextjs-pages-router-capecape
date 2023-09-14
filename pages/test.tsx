import { GetServerSideProps } from "next";

// propsの型を定義する
type Props = {
  title?: string;
  num?: number;
};

// ページコンポーネントを定義する
const TestPage = (props: Props) => {
  return (
    <>
      <h1>Test Page</h1>
      <h2>
        {props.title}:{props.num}
      </h2>
    </>
  );
};

export default TestPage;

// サーバサイドで実行する処理(getServerSideProps)を定義する
export const getServerSideProps: GetServerSideProps = async (context) => {
  // APIやDBからのデータ取得処理などを記載

  const props: Props = {
    title: "testtitle",
    num: 123,
  };

  return {
    props: props,
  };
};
