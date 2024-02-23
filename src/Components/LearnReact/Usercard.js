
const userDate = [
  {
    name: "james",
    city: "apk",
    description: "I am a developer.",
    skills: ["java,python", "HTML", "css", "javascript", "react", "node"],
    online: true,
    profile: "../../Assets/Ellipse 208 (1).png"
  },
  {
    name: "sree",
    city: "new york",
    description: "I am a developer.",
    skills: ["java,python", "HTML", "css", "javascript", "react", "node"],
    online: true,
    profile: "../../Assets/Ellipse 208 (1).png"
  },
  {
    name: "arun",
    city: "madurai",
    description: "I am a developer.",
    skills: ["java,python", "HTML", "css", "javascript", "react", "node"],
    online: false,
    profile: "../../Assets/Ellipse 208 (1).png"
  },
  {
    name: "babu",
    city: "chennai",
    description: "I am a developer.",
    skills: ["java,python", "HTML", "css", "javascript", "react", "node"],
    online: true,
    profile: "../../Assets/Ellipse 208 (1).png"
  }
]

function User(props) {
  return (
    <div className='card-container'>
      <span className={props.online ? " online " : "offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src={props.profile} alt='user' className="img" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="Skills">
        <h6>skills</h6>
        <ul>
          {props.skills.map((skills, index) => (
            <li key={index}>{skills}</li>
          ))}
        </ul>
      </div>
    </div>

  );
}
export const UserCard = () => {
  return (
    // <div>
    //   <User name="sri" city="New york" description="Front-end-developer" skills={["UI/UX", "HTML", "CSS", "Javascript", "Front  End Development"]}
    //     online={true} profile="../../Assets/downloaded_file_twach.png.png" />
    // </div>
    <>
    {
      userDate.map((user,index) =>(
        <User
        key={index}
        name={user.name}
        city={user.city}
        description={user.description}
        online={user.online}
        profile={user.profile}
        skills={user.skills}/>
      ))
    }
    </>
  )
}
