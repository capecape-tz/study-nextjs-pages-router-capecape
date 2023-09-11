type Item = {
  id: number;
  itemHref: string;
  itemTitle: string;
  itemDescription: string;
};

type Props = {
  items: Item[];
  handleReduce?: () => void;
};

export function Links(props: Props) {
  const { items, handleReduce } = props;
  return (
    <>
      <div>
        {/* <button onClick={handleReduce}>減らす(Linkコンポーネント)</button> */}
        {items.map((item) => {
          return (
            <div key={item.itemHref}>
              <a
                href={item.itemHref}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  ■ {item.itemTitle}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  {item.itemDescription}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
