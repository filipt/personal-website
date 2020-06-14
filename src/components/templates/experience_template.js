import React  from 'react'
import './experience_template.css'
import { TimelineItem }  from 'vertical-timeline-component-for-react';

{/* Template */}
// experiences will be composed of:
// <ul>
//   <li>Title</li>
//   <li>Subtitle</li>
//   <li>Date range </li>
//   <li>Location</li>
//   <li>Company etc involved</li>
//   <li>what did i actually do?</li>
//   <li>ideally an image?</li>
//   <li>Link to github or paper or whatever that may have </li>
//   <li>Tags (e.g. personal project, work, school, award (star?)</li>
//   <li>skills learned?</li>
//   <li>blogs associated?</li>
//   <li></li>
// </ul>

const labels = {
  "work": "#000000",
  "education": "#DC143C",
  "sports": "#0000A0",
  "service": "#008000",
  "arts": "#00FF00",
  "personal": "#7851A9",
  "awards": "#FFD700",
}

    
const Experience_Template = ( { data }  ) => (
  

  <TimelineItem
    dateText={data.date_range}
    
    style = {{ color: labels[data.label]}}
    // style={{ color: data.color }}
    // style={{ color: labels[data["label"]]["color"] }}

    dateInnerStyle={{ 
      background: '#61b8ff', 
      color: '#000' 
    }}

    bodyContainerStyle={{
      background: '#f8f9fa',
      padding: '20px',
      borderRadius: '8px',
    }}

  >
    <h3>{data.job_title}, {data.company_name}</h3>
    <h4>{data.location}</h4>
    <div dangerouslySetInnerHTML={{__html:data.description}}></div>
  </TimelineItem>
);

export default Experience_Template;


