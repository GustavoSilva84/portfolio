import './style.scss';

interface interfaceinterfaceCardProjects {
  title: string;
  tags: Array<string>;
  description: string;
}

export function CardProjects({ title, tags, description }: interfaceinterfaceCardProjects) {

  const tagsLi = tags.map((data, key) => {
    return (
      <li key={key}> { data } </li>
    )
  });

  return (

    <div className="card-projects">

      <img alt="img" src="https://firebasestorage.googleapis.com/v0/b/portfolio-8a10e.appspot.com/o/photo-1593720219276-0b1eacd0aef4.jpg?alt=media&token=092d29cd-cfb4-45a8-b76e-0186c3853737"/>
      <div id="contents">
        <h3> { title } </h3>
        <ul id="tags"> { tagsLi } </ul>
        <p> { description } </p>
      </div>

    </div>

  )

}