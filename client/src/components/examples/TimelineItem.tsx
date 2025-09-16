import TimelineItem from '../TimelineItem';

export default function TimelineItemExample() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* TODO: Remove mock timeline data when implementing real education history */}
      <div className="relative">
        <TimelineItem
          title="Master of Computer Science"
          organization="University of Technology"
          period="2018 - 2020"
          location="Islamabad, Pakistan"
          description="Specialized in Cybersecurity and Web Development with focus on advanced security protocols, penetration testing, and secure application development."
          type="education"
          status="completed"
        />
        
        <TimelineItem
          title="Google Cloud Professional Cloud Architect"
          organization="Google Cloud"
          period="2023"
          description="Achieved professional certification in designing and implementing Google Cloud solutions with emphasis on security, scalability, and reliability."
          type="certification"
          status="completed"
        />
        
        <TimelineItem
          title="HubSpot Content Marketing Certification"
          organization="HubSpot Academy"
          period="2024"
          description="Completed comprehensive training in content marketing strategies, inbound marketing, and marketing automation best practices."
          type="certification"
          status="current"
          isLast={true}
        />
      </div>
    </div>
  );
}