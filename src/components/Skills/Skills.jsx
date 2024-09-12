import React, { useState } from 'react'
import SkillCard from './SkillCard/SkillCard'
import { SKILLS } from "../../utils/data"
import "./Skills.scss"
import SkillsInfoCard from './SkillsInfoCard.jsx/SkillsInfoCard'

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data)
    }

    return (
        <section className='skills-container' id='skills'>
            <h5>Skills</h5>

            <div className="skills-content">
                <div className="skills item-1">
                    {SKILLS.map((item) => (
                        <SkillCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => {
                                handleSelectSkill(item);
                            }}
                        />
                    ))}
                </div>
                <div className="skills-info item-2">
                    <SkillsInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div>
            </div>

        </section>
    )
}

export default Skills










