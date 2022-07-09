import Review from "./TechStack";
function Reviews() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h3>MY TECH STACKS</h3>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default Reviews;