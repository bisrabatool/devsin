import React, { useState } from "react";
import "./profile.css";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    contact: "",
    bio: "",
    skills: [],
    education: [
      { degree: "computer sience", institution: "karachiuni", year: "2024" },
    ],
    experience: [
      { title: "", company: "", duration: "" },
    ],
    profilePicture: "", 
  });

 
  const handleEditToggle = () => setIsEditing(!isEditing);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

 
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile({ ...profile, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

 
  const updateSkills = (e) => {
    setProfile({
      ...profile,
      skills: e.target.value.split(",").map((s) => s.trim()),
    });
  };

 
  const renderEducation = () =>
    profile.education.map((edu, index) => (
      <li key={index}>
        {edu.degree} - {edu.institution} ({edu.year})
      </li>
    ));

  const renderExperience = () =>
    profile.experience.map((exp, index) => (
      <li key={index}>
        {exp.title} - {exp.company} ({exp.duration})
      </li>
    ));

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div>
          <img
            src={profile.profilePicture}
            alt="Profile"
            className="profile-avatar"
          />
          {isEditing && (
            <>
              <label htmlFor="profile-picture-upload" className="upload-label">
                Change Picture
              </label>
              <input
                id="profile-picture-upload"
                type="file"
                accept="image/*"
                className="upload-input"
                onChange={handleProfilePictureChange}
              />
            </>
          )}
        </div>

        <div className="profile-info">
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="profile-input"
              />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="profile-input"
              />
            </>
          ) : (
            <>
              <h1>{profile.name}</h1>
              <p>{profile.email}</p>
              <p>{profile.contact}</p>
            </>
          )}
        </div>
      </div>

      <div className="section">
        <h2>Bio</h2>
        {isEditing ? (
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            rows="4"
            style={{ width: "100%" }}
          />
        ) : (
          <p>{profile.bio}</p>
        )}
      </div>

      <div className="section">
        <h2>Skills</h2>
        {isEditing ? (
          <input
            type="text"
            name="skills"
            value={profile.skills.join(", ")}
            onChange={updateSkills}
            className="profile-input"
          />
        ) : (
          <div className="skills-container">
            {profile.skills.map((skill, index) => (
              <span key={index} className="skill">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="section">
        <h2>Experience</h2>
        {isEditing ? (
          <textarea
            name="experience"
            value={profile.experience.map(
              (exp) => `${exp.title} at ${exp.company} (${exp.duration})`
            )}
            onChange={handleChange}
            rows="4"
            style={{ width: "100%" }}
          />
        ) : (
          <ul>{renderExperience()}</ul>
        )}
      </div>

      <div className="section">
        <h2>Education</h2>
        {isEditing ? (
          <textarea
            name="education"
            value={profile.education.map(
              (edu) => `${edu.degree} from ${edu.institution} (${edu.year})`
            )}
            onChange={handleChange}
            rows="4"
            style={{ width: "100%" }}
          />
        ) : (
          <ul>{renderEducation()}</ul>
        )}
      </div>

      <button onClick={handleEditToggle} className="edit-button">
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default Profile;
