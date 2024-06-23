import './Profile.css'
import pic from './assets/pic.jpg';

function Profile() {
  return (
    <section>
        <h1 className='h1-morph'>Meet Your Developer,</h1>
        <div className='profile-container'>
        <img className='profilePic' src={pic} alt="" />
        </div>
        <h1 className='h1-morph'>Quincy Zientek</h1>
    </section>
  );
}

export default Profile;