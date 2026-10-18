// Dedicated service pages (handoff §4–8), rendered by pages/ServiceDetail.jsx at /services/:slug/.
// Copy is verbatim from the stakeholder handoff; developer notes are kept as comments, never shown.
export const SERVICES = {
  'wedding-planning': {
    seo: {
      title: 'South Florida Wedding Planning | Anvaya',
      description: 'Plan a South Florida wedding with venue guidance, culturally thoughtful event design, vendor coordination and a clear planning timeline.',
    },
    banner: '/img/slider/6.jpg',
    image: '/img/slider/3.jpg',
    imageAlt: 'Bride holding a pastel bouquet beside the groom',
    hero: {
      subtitle: 'Wedding Planning',
      title: 'Two Families. One Celebration.',
      text: 'Your wedding is about more than one day. It is the joining of stories, families and traditions. Anvaya helps make space for all of it.',
    },
    sections: [
      {
        tag: 'Getting Started',
        title: 'From the First Decisions Onward',
        text: 'We begin with your preferred date, location, guest count, priorities and budget. From there, we help narrow venue possibilities and define the events that make up your celebration.',
      },
      {
        tag: 'Wedding Weekend',
        title: 'One Wedding, Many Meaningful Moments',
        text: 'From welcome events and Mehndi to Sangeet, Haldi, ceremony and reception, each gathering deserves its own identity while feeling connected to the whole.',
      },
      {
        tag: 'Vendor Coordination',
        title: 'Partners Who Fit Your Vision',
        text: 'Explore photographer, DJ, caterer, décor and entertainment options that fit your style and budget. You choose the people you connect with; we help review options, organize discussions and keep decisions on track.',
      },
      {
        tag: 'Planning & Execution',
        title: 'A Plan You Can Trust',
        text: 'We organize milestones, follow up on pending decisions and coordinate arrival schedules so you can spend more time celebrating and less time chasing details.',
      },
    ],
    cta: 'Plan Your Wedding With Us',
  },
  'pre-wedding-events': {
    seo: {
      title: 'Pre-Wedding & Cultural Event Planning | Anvaya',
      description: 'Celebrate Mehndi, Sangeet, Haldi, Grah Shanti and other traditions with planning that respects your family’s customs and vision.',
    },
    banner: '/img/slider/9.jpg',
    image: '/img/faqs.jpg',
    imageAlt: 'Soft pink and white floral arrangement',
    hero: {
      subtitle: 'Pre-Wedding Events',
      title: 'Honor Every Tradition. Enjoy Every Moment.',
      text: 'The celebrations leading up to a wedding are often the most personal. We help each one feel intentional, welcoming and beautifully organized.',
    },
    sections: [
      {
        tag: 'Your Family',
        title: 'Events Shaped Around Your Traditions',
        text: 'We work with you to understand the rituals, family preferences, timing and atmosphere that matter most. No two traditions—or families—are exactly alike.',
      },
      {
        tag: 'Coordination',
        title: 'Thoughtful Coordination Across Every Event',
        text: 'We align venue requirements, décor, food, music, guest flow and vendor schedules across multiple events, reducing last-minute confusion.',
      },
      // Developer note: confirm the actual availability of each event type before publication.
      {
        tag: 'Celebrations',
        title: 'Pre-Wedding Events Anvaya Can Support',
        text: 'Mehndi, Haldi, Sangeet, Grah Shanti, engagement ceremonies, welcome gatherings and family-specific rituals.',
      },
    ],
    cta: 'Discuss Your Wedding Events',
  },
  'milestone-celebrations': {
    seo: {
      title: 'Milestone Event Planning in South Florida | Anvaya',
      description: 'Celebrate engagements, anniversaries, birthdays and graduations with thoughtful planning and coordinated experiences.',
    },
    banner: '/img/slider/12.jpg',
    image: '/img/services/2.jpg',
    imageAlt: 'Tiered celebration cake decorated with flowers and sparklers',
    hero: {
      subtitle: 'Milestone Celebrations',
      title: 'Every Milestone Deserves to Be Fully Enjoyed',
      text: 'Some moments deserve everyone in the room, fully present. We help turn your vision into a celebration that feels effortless to attend and meaningful to remember.',
      cta: 'Tell Us What You’re Celebrating',
    },
    sections: [
      {
        tag: 'Occasions',
        title: 'Celebrations Built Around the Moment',
        text: 'Engagements, anniversaries, birthdays, graduations and family milestones—tailored to your guests, traditions and preferences.',
      },
      {
        tag: 'Planning',
        title: 'Planning Beyond the Details',
        text: 'From the right venue and menu to atmosphere, entertainment and timing, we keep the full guest experience in view.',
      },
    ],
  },
  'corporate-events': {
    seo: {
      title: 'Corporate Event Planning in South Florida | Anvaya',
      description: 'Plan team celebrations and corporate gatherings with coordinated vendors, timelines, logistics and guest experience.',
    },
    banner: '/img/blog/6.jpg',
    image: '/img/services/4.jpg',
    imageAlt: 'Guests raising glasses for a celebratory toast',
    hero: {
      subtitle: 'Corporate Events',
      title: 'Your Team Shows Up. Everything Else Is Handled.',
      text: 'A great company event should bring people together—not add another project to your team’s workload.',
    },
    sections: [
      {
        tag: 'Purpose & Experience',
        title: 'Professional Planning, Human Moments',
        text: 'Whether you are recognizing achievements, hosting a team gathering or celebrating a milestone, we build an event plan around your objectives and audience.',
      },
      {
        tag: 'Coordination',
        title: 'Execution With Clarity',
        text: 'Venue coordination, food and beverage, vendor scheduling, run-of-show planning and on-site logistics work together to create a polished experience.',
      },
    ],
    cta: 'Plan a Corporate Event',
  },
  'intimate-gatherings': {
    seo: {
      title: 'Intimate Gathering Planning | Anvaya',
      description: 'Personal celebrations and smaller gatherings planned with care, from venue and atmosphere to vendors and timing.',
    },
    banner: '/img/slider/7.jpg',
    image: '/img/services/3.jpg',
    imageAlt: 'Elegant place setting with neutral tableware and flowers',
    hero: {
      subtitle: 'Intimate Gatherings',
      title: 'Small Gathering. Meaningful Moments.',
      text: 'An intimate event can carry just as much meaning as a grand celebration. When the occasion calls for support, we help shape the details around the people who matter most.',
      cta: 'Ask About Availability',
    },
    // Developer note: scope is tailored to the celebration and available planning support;
    // do not promise full-service packages for intimate gatherings until the final offering is approved.
    sections: [
      { tag: 'Flexible Planning', title: 'Support Shaped Around the Celebration' },
    ],
    cta: 'Ask About Availability',
  },
}
