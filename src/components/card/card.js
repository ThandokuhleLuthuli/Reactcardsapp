import react from 'react';
import './card.css';


export default class Card extends react.Component {
   
    render() {
        //this profile is refering to the users object
        const profile = this.props;

     return (
        <div className="profile-card">
            <img src={profile.avatar_url} alt="profile-image"/>
            <div className="profile-card__info">
                <div className="profile-card__name">{profile.name}</div>
                <div className="profile-card__company">{profile.company}</div>
            </div>
        </div>
     )
    }
}