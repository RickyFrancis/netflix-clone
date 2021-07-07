import React from 'react';
import Nav from '../components/Nav';
import '../styles/ProfileScreen.css';
import netflixAvatar from '../images/Netflix-avatar.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div class="profileScreen__info">
          <img src={netflixAvatar} alt="" />
          <div class="profileScreen__details">
            <h2>{user.email}</h2>
            <div class="profileScreen__plans">
              <h3>Plans</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                laboriosam magnam iste laudantium animi illo alias repellat esse
                est consequatur.
              </p>
              <button
                onClick={() => {
                  auth.signOut();
                }}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
