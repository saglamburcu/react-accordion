import Questions from "./Questions";
import questions from "./data";

function App() {
  return (
    <main className="container">
      <article className="questions-container">
        <section className="title">
          <h1>Questions And Answers About Login</h1>
        </section>
        <section className="questions-list">
          {
            questions.map(question => (
              <Questions key={question.id} {...question} />
            ))
          }
        </section>
      </article>
    </main>
  )
};

export default App;