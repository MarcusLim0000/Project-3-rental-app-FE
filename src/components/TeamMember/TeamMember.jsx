import { useState } from "react";
import './TeamMember.css'

const TeamMember = ({ name, title, description }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div tabIndex={0} onClick={() => setIsOpen(!isOpen)} onBlur={() => setIsOpen(false)} className='team-member'>
        <h2 className='name'>{name}</h2>
        {isOpen && (
          <>
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>
          </>
        )}
      </div>
    );
  };

  export default TeamMember