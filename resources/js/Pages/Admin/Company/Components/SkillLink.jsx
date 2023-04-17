import React from 'react'
import { Badge, Card } from 'react-bootstrap'



export default function SkillLink(company, skills, skillsCompany) {


    return (
        <>
            <Card>
                <Card.Header>
                    <h1>{company.name}</h1>
                </Card.Header>
                <Card.Body>
                    <p>{company.description}</p>
                    <div>
                        <h3>Skill</h3>
                        <hr />
                        <p>Select a skill</p>
                        {skills.map((skill) => {
                            return <Badge pill>{skill.name}</Badge>
                        })}
                        <hr />

                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
