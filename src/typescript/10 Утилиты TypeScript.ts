export const UtilityTypes = () => {};
// ***************************************************************************
// ************************ Утилиты TypeScript *******************************

// *************************** InstanceType **********************************
// Принимает тип класса и возвращает тип экземпляра этого класса

class Article {
  id: number;
  content: string;
  constructor(id: number, content: string) {
    this.id = id;
    this.content = content;
  }
}

type ArticleType = InstanceType<typeof Article>;
const article: ArticleType = new Article(1, "текст статьи");

console.log("article = ", article);
