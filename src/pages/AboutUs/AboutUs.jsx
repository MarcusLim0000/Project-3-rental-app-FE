import TeamMember from '../../components/TeamMember/TeamMember';
import './AboutUs.css'

const AboutUs = () => {
  const team = [
    {
      name: 'Marcus',
      title: 'Supreme Overlord, AKA Taskmaster Extraordinaire',
      description: 'Wielding the whip of productivity, I ensure our project reaches perfection or else!'
    },
    {
      name: 'Caroline',
      title: 'Code Wizard, AKA Backend Sorceress',
      description: 'Unraveling the mysteries of data and logic, I conjure up seamless backend magic.'
    },
    {
      name: 'Li Rong',
      title: 'Pixel Picasso, AKA Frontend Maestro',
      description: 'Crafting visual delights with code, I blend artistry and functionality seamlessly'
    },
    {
      name: 'Lionel',
      title: 'Leeching Lurker, AKA Team MVP (Mostly Vacant Participant)',
      description: 'i got hard carried by my team mates'
    }
  ];

  return (
    <div className='about'>
      <h1>About Us</h1>
      <p>A Team of Aspiring Software Developers starting our coding journey by renting homes to users</p>
      <p>Disclaimer: Renting an apartment here doesn't give you an actual place to stay 😅</p>
      <div>
        {team.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;