import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    img: "https://pub.booklistonline.com/Content/Images/userupload/Bolpub/Images/BOL%20Features/Vol%20119/Editors%20Choice%20&%20Awards/Better%20Than%20We%20Found%20It-%20Conversations%20to%20Help%20Save%20the%20World.jpg",
    title: "Book 1",
    author: "Aman Kashyap",
  },
  {
    img: "https://pub.booklistonline.com/Content/Images/userupload/Bolpub/Images/BOL%20Features/Vol%20119/Editors%20Choice%20&%20Awards/Better%20Than%20We%20Found%20It-%20Conversations%20to%20Help%20Save%20the%20World.jpg",
    title: "Book 2",
    author: "Eshan Kashyap",
  },
];

function BookList() {
  return (
    <section>
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article>
      <img src={img} alt="No Image" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
