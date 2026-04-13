import "./Profile.css";
import pic from "./assets/pic.jpg";
import { Reveal } from "./Reveal.jsx";

function Profile() {
  return (
    <section>
      <Reveal minStage={1}>
        <h1 className="h1-morph">Meet Your Developer,</h1>
      </Reveal>
      <Reveal minStage={2}>
        <div className="profile-container">
          <img className="profilePic" src={pic} alt="" />
        </div>
      </Reveal>
      <Reveal minStage={3}>
        <h1 className="h1-morph">Quincy Zientek</h1>
      </Reveal>
    </section>
  );
}

export default Profile;
