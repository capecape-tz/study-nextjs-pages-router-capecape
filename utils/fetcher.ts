export const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    return []; //エラーのときは空データにしている。
  }
  const json = await response.json();
  return json;
};
