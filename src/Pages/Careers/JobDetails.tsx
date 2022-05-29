import React from "react";
import { FormattedMessage } from "react-intl";
import "./Careers.scss";
import { Footer, MainHeader as Header } from "../Component";
import { Link, useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const ApplyJob = () => (
    <Link
      className="main-btn wow fadeInUp"
      data-wow-duration="1.3s"
      data-wow-delay="1s"
      to="#"
    >
      Apply to this JOB
    </Link>
  );
  return (
    <>
      <Header
        preTitle="careers, Jobe details"
        title="Senior Software Engineer I"
        subTitle={"Fully Remote - "+id}
        Addon={ApplyJob}
      />
      <div
        id="careers"
        className="container single_features mt-30 features_1  wow fadeInUp"
        data-wow-duration="1.3s"
        data-wow-delay="0.2s"
      >
        <div className="col-md-8">
          <div className="job-preview-details">
            <div className="job-listing-header">Description</div>
            <div>
              <p>
                <u>
                  <strong>OUR TEAM</strong>
                </u>
              </p>
              <p>
                PICKUP’s Senior Software Engineers are talented and smart folks
                who get stuff done. Our engineers are expected to disrupt and
                challenge conventions to deliver value to the business faster,
                better, and safer. A Senior Software Engineer at PICKUP is a
                leader that works across many disciplines—the role of senior
                software engineer is no longer limited to cranking out code in
                your favorite language. We have embraced the devops philosophy,
                which means software engineers also need to understand
                deployment, operations, infrastructure, quality assurance,
                networking…and the list goes on and on!
              </p>
              <p>
                Don’t worry—as a Senior Software Engineer I, we won’t expect you
                to be a master of all those disciplines, but we do expect you to
                be exceptional in a couple of them. Heck, finding someone who
                has deep knowledge of all those disciplines is a real rarity—we
                are all learning and should continue to learn—not only because
                working in technology demands it, but because it’s who we are.
              </p>
              <p>
                We work together, apart—our team is 100% remote. Go take a walk
                when you’d otherwise be commuting. OUR
              </p>
              <p>
                <br />
              </p>
              <p>
                <u>
                  <strong>WORK</strong>
                </u>
              </p>
              <p>
                The applications we build and maintain range from dotnet/SQL
                Server hosted on servers to microservices deployed to kubernetes
                to AWS Lambda functions written in nodejs to an iphone/android
                app that is central to how we provide our service. At PICKUP,
                developers are our architects—we strive to drive architectural
                decisions as a team and not from specific individuals. Everyone
                on our teams has a voice in design decisions, tooling, and how
                the team operates.
              </p>
              <p>
                We are constantly striving for improvement. Our team practices
                SCRUM on a two-week sprint cycle. At the end of every sprint, we
                discuss how to improve our work. When we encounter a production
                incident, we don’t consider the incident tied up until we’ve had
                our blameless postmortem where we discuss the cause of the
                problem and make a plan to keep it from ever happening again. We
                agree with Gene Kim that “Improving daily work is even more
                important than doing daily work."
              </p>
              <p>
                We carry the pager on our team. We don’t have a separate
                organization to clean up our messes in production. We deploy
                what we build and support what we deploy. We share
                responsibility for two different on duty schedules—a weekly
                schedule where you are the point person that the robots call
                when bad things happen, and a daily schedule where you are the
                point person that handles issues from our users.
              </p>
              <p>
                <br />
              </p>
              <p>
                <u>
                  <strong>THE ROLE</strong>
                </u>
              </p>
              <p>
                The Senior Software Engineer not only performs technical duties
                to a very high standard, but also acts as a mentor to more
                junior engineers. Leading by example as well as through hands-on
                mentoring, the Senior takes on the responsibility to make more
                Seniors.
              </p>
              <p>
                As a Senior Software Engineer, you’ll have demonstrated the
                ability to design and build a moderately complex application
                from the ground up. This doesn’t mean you had to do all the work
                yourself, but you should understand and have dealt with all of
                the intricacies of building, deploying and running an
                application, including security and operations concerns.
              </p>
              <p>
                As you advance to the Senior level, you will be expected to
                produce solution and application architectures that not only
                cover their business requirements, but the non-functional ones
                as well (the -ilities: reliability, extensibility,
                maintainability, etc.). Architecture is a team sport at PICKUP,
                but top teams need top players, so we need our Seniors to be
                skilled at architecture.
              </p>
              <p>
                Here’s a list of some of the more important responsibilities a
                person in the role of Senior Software Engineer I would take on.
              </p>
              <ul>
                <li>Teach other engineers new skills or practices</li>
                <li>Write and deploy high quality, tested code</li>
                <li>Review your teammates' code</li>
                <li>
                  Work with our users to resolve problems (which come to us as
                  tickets)
                </li>
                <li>
                  Promote and adhere to best practices while delivering
                  efficient and effective solutions
                </li>
                <li>
                  Present bi-weekly demos of your work at the end of each sprint
                </li>
                <li>
                  Play nice with others. Build relationships with individuals on
                  and outside of your team to elevate your ability to execute
                </li>
                <li>
                  Work in an Agile methodology (iterate, iterate, iterate)
                </li>
                <li>Lead design sessions</li>
              </ul>
              <p>
                <br />
              </p>
            </div>
            <div className="job-listing-header">Requirements</div>
            <div data-bind="html: Job.Requirements">
              <p>
                This role requires the attitude and confidence to work on
                difficult solutions and collaborate with teammates to do what is
                best for our customers and partners, our platform and our team.
                Individuals that are looking to become PICKUP engineers are
                flexible, logical, tenacious, curious, knowledge seekers that
                are also willing to challenge each other and the organization.
                While every iteration brings unique challenges and
                opportunities, the value our engineers bring to the organization
                is recognized and rewarding.
              </p>
              <p>
                <u>
                  <strong>
                    BASIC AND PREFERRED QUALIFICATIONS (EDUCATION and/or
                    EXPERIENCE)
                  </strong>
                </u>
              </p>
              <p>
                Here are some long lists of specific technologies and
                disciplines that we work with. The more of these you are
                comfortable with, the better fit you are for this role, though
                the ability to learn is paramount.
              </p>
              <ul>
                <li>
                  Bachelor’s degree from an accredited program in Information
                  Systems, Computer Science, or related experience (preferred
                  but not required)
                </li>
                <li>Some of the following technologies</li>
                <li>C#/ASP.NET/MVC</li>
                <li>node.js</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>bash</li>
                <li>git</li>
                <li>ReST Service Development</li>
                <li>HTML/Angular/React</li>
                <li>XUnit, mocha or similar unit testing frameworks</li>
                <li>Kafka, Redis, Elasticsearch experience would be great</li>
                <li>Experience with most of the following disciplines:</li>
                <li>Quality Engineering (testing methodologies, automation)</li>
                <li>User Experience (front-end design)</li>
                <li>OOP and Design Patterns</li>
                <li>Database Development (database design, report writing)</li>
                <li>
                  Business Analysis (writing user stories, collecting
                  requirements)
                </li>
                <li>CI/CD (value chain automation)</li>
                <li>Software Development (multiple languages)</li>
                <li>Cloud Technologies (we’re on AWS)</li>
                <li>
                  The desire and willingness to do what it takes to create an
                  awesome team
                </li>
              </ul>
              <p>
                <u>
                  <strong>MINIMUM QUALIFICATIONS, JOB SKILLS, ABILITIES</strong>
                </u>
              </p>
              <ul>
                <li>
                  Ability to communicate well—in both verbal and written forms.
                  Know your audience.
                </li>
                <li>
                  Ability to manage your time to get the right things done
                </li>
                <li>Ability to solve problems</li>
                <li>
                  Comfortable with Software Development Life Cycle—specifically
                  SCRUM
                </li>
                <li>
                  Aware of non-functional software requirements including
                  security, scalability, and usability
                </li>
                <li>Aware of design patterns, principles, and practices</li>
                <li>
                  Keen attention to detail, craftsmanship, pride in your work
                </li>
              </ul>
              <p>
                <br />
              </p>
              <div className="vertical-padding">
                <div className="job-listing-header">Job Type</div>
                <div>Full-time</div>
              </div>
              <div className="mobile-apply-btn">
                <ApplyJob />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobDetails;
