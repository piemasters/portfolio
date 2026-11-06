export const site = {
  name: "David Norton",
  role: "Senior Software Engineer",
  location: "London",
  url: "https://davidnorton.app",
  shareImage: "/og.png",
  portrait: "/images/profile.jpeg",
  description:
    "Portfolio of David Norton, a senior software engineer focused on frontend development who designs and builds interfaces for complex web applications.",
  intro:
    "Over 10 years of experience designing and developing map-based web applications across a range of sectors.",
  about: [
    "My main focus is keeping both code and UX simple and maintainable. I like to balance delivering new features with continuous improvement of the overall application.",
    "I also spend time creating dashboards and monitoring usage to understand how users are interacting with the application to better improve their experience.",
    "My free time is mostly consumed by my labrador and garden, but I manage to fit a bit of painting in occasionally and recently even won a couple of awards!",
  ],
  details: [
    { label: "Based", value: "London" },
    { label: "Focus", value: "UI/UX" },
    { label: "Sectors", value: "Property, Space, Security, Justice" },
  ],
  skills: [
    {
      label: "Technologies",
      tone: "technology",
      items: [
        "TypeScript",
        "React",
        "Deck.GL",
        "Tailwind CSS",
        "Cypress",
        "Storybook",
        "Vue",
        "Gatsby",
        "Angular",
        "CREODIAS",
        "OpenLayers",
        "Leaflet",
        "Three.js",
      ],
    },
    {
      label: "Concepts",
      tone: "concept",
      items: [
        "User Experience",
        "Design Systems",
        "Accessibility",
        "Performance",
        "Security",
        "Testing",
        "Product Analytics",
      ],
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/piemasters" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/davidnorton29" },
  ],
  training: {
    label: "Master.dev",
    href: "https://master.dev/u/piemasters/",
    summary: "Record of courses watched, hours invested, and learning-path progress on Master.dev.",
  },
  work: [
    {
      slug: "landinsight",
      title: "LandInsight",
      year: "2019 - 2026",
      summary:
        "Consolidates ownership, planning, and property data into one platform, letting developers assess opportunities, reduce risk, and act with confidence.",
      tags: ["TypeScript", "React", "Vue", "Deck.GL", "Product Analytics"],
      thumbnail: "/images/landinsight.jpg",
      banner: "/images/banners/landinsight.jpg",
      links: [{ label: "Website", href: "https://land.tech/products/landinsight" }],
      body: [
        {
          type: "paragraph",
          text: "LandInsight is Trusted by over 5,000 UK developers, bringing every stage of site sourcing, assessment, and appraisal into one smart platform. The aim is to help developers find, assess, and win deals before the competition even knows they exist. As one of the longest serving and highest contributing engineers on the team, I helped to build the platform from the ground up and have been involved in all aspects of the product.",
        },
        { type: "header", text: "Product Overview" },
        {
          type: "paragraph",
          text: "LandInsight is a property development platform that consolidates ownership, planning, and property data into one place. It allows developers to assess opportunities, reduce risk, and act with confidence.",
        },
        {
          type: "bullet",
          text: "Enables over 50 map layers to be viewed on a map, allowing users to visualise ownership, planning, sales, policy, strategic, environmental, demographic, traffic, connectivity and power data on a map.",
        },
        {
          type: "bullet",
          text: "Site sourcing allows users to find sites based on their own criteria, set up alerts and send automated direct mail letters to landowners.",
        },
        {
          type: "bullet",
          text: "A wealth of detail is easily accessible to assess a site, including ownership information, planning history, sales history, environmental constraints such as flooding, relevant policies such as nearby listed buildings and greenbelt, and financial viability. Quick insights allow potential blockers to be identified in seconds before time is wasted.",
        },
        {
          type: "bullet",
          text: "Reports can be generated to share with colleagues and clients, and the platform allows for collaboration between teams and external partners. Specialised tools with partners such as RenKap, AtkinsRealis, BNGAI and Brickflow allow users to assess sites in more detail and apply for funding. Addons from other partners like Zoopla HomeTrack gives access to more recent sales data, as well as rental data not offered elsewhere",
        },
        {
          type: "bullet",
          text: "New tools are constantly being added to the platform, including a generative AI assistant that can generate site appraisals and reports, drawing and labelling tools, a scheme designer for quickly estimating the potential of a site, and a financial viability tool for assessing the potential return on investment.",
        },
        // { type: "header", text: "Lead Front-End Engineering at LandTech" },
        // {
        //   type: "paragraph",
        //   text: "Led the front-end development of LandInsight, an intelligent platform enabling property developers to streamline site sourcing, assessment, and appraisal decisions.",
        // },
        // {
        //   type: "bullet",
        //   text: "Visualised land ownership, planning, sales, policy, strategic, and environmental data using interactive map layers.",
        // },
        // {
        //   type: "bullet",
        //   text: "Built features to quickly source sites using AI, define custom criteria, setup alerts, and send automated direct mail letters.",
        // },
        // {
        //   type: "bullet",
        //   text: "Developed tools to efficiently evaluate site constraints, risks, and financial viability.",
        // },
        // {
        //   type: "bullet",
        //   text: "Enabled cross-functional project collaboration and management within teams and external partners.",
        // },
        // {
        //   type: "bullet",
        //   text: "Leveraged a modern core stack consisting of TypeScript, React, Vite, Tailwind CSS, React Router, Axios, and SWR.",
        // },

        // to track feature usage, success metrics, and user trends.
        { type: "header", text: "Product Innovation & Generative AI Integration" },
        {
          type: "paragraph",
          text: "Spearheaded the front-end architecture, migrating from Vue.js to React and from Mapbox to Deck.gl leading to massive performance improvements, multi-layer rendering, and enhanced geospatial visualisation capabilities. This migration enabled the integration of generative AI features into the platform, allowing users to source sites with ease.",
        },
        {
          type: "bullet",
          text: "Designed and built an AI assistant that streams tailored site appraisals using Streamdown into a block-based rich text editor powered by BlockNote. Integrated interactive citations, live map syncs, and inline AI-assisted editing directly into the editor workflow.",
        },
        {
          type: "bullet",
          text: "Implemented real-time visualisations and data dashboards with Nivo and D3 to better present data to users, such as slope and aspect, market value and traffic data.",
        },
        {
          type: "bullet",
          text: "Introduced state management using Valtio and used Apollo Client to handle complex data flows and caching, enabling a more responsive and interactive user experience.",
        },
        { type: "header", text: "Geospatial Engineering & Mapping Data" },
        {
          type: "paragraph",
          text: "Engineered a high-performance mapping ecosystem capable of processing massive spatial datasets seamlessly inside the browser.",
        },
        {
          type: "bullet",
          text: "Rendered complex geospatial datasets with unparalleled accuracy using GPU-accelerated computing via Deck.gl and Luma.gl.",
        },
        {
          type: "bullet",
          text: "Integrated advanced geospatial layers directly over Google Maps, utilising Turf.js for client-side spatial analysis and geospatial calculations.",
        },
        {
          type: "bullet",
          text: "Implemented custom map geometry drawing tools and interactions using Terra-Draw.",
        },
        { type: "header", text: "Strategic Migration & Global Infrastructure Scaling" },
        {
          type: "paragraph",
          text: "Directed the critical front-end research, code migration, and engineering scalability required to support international business growth.",
        },
        {
          type: "bullet",
          text: "Spearheaded the engineering and internationalisation tasks needed to scale LandInsight from a UK-exclusive platform to the US market.",
        },
        {
          type: "bullet",
          text: "Owned and executed the successful migration of 60,000 lines of legacy Vue.js code to React.",
        },
        {
          type: "bullet",
          text: "Optimised application loading and rendering performance across the entire platform during the migration framework change.",
        },
        {
          type: "bullet",
          text: "Standardised development workflows to lower engineering onboarding friction and accelerate team recruitment.",
        },
        { type: "header", text: "Architecture Optimization & Business Growth" },
        {
          type: "paragraph",
          text: "Re-engineered platform delivery systems to reduce massive infrastructure overheads and support significant capital investments.",
        },
        {
          type: "bullet",
          text: "Championed and delivered the transition from a high-overhead third-party native application into a feature-complete Progressive Web App (PWA).",
        },
        {
          type: "bullet",
          text: "Slashed annual operational costs by £100k and freed substantial engineering bandwidth by eliminating native app upkeep.",
        },
        {
          type: "bullet",
          text: "Integrated payment workflows using Stripe, monitored application health and errors using Datadog and Sentry, and tracked feature usage, success metrics, and user trends with MixPanel.",
        },
        {
          type: "bullet",
          text: "Supported product scaling initiatives that helped secure a £42 million Series A in 2021 followed by an additional £10 million expansion round.",
        },
        { type: "header", text: "Testing, UI Standards & Design Systems" },
        {
          type: "paragraph",
          text: "Established software quality baselines, UI component libraries, and testing practices to maintain stability across rapid product releases.",
        },
        {
          type: "bullet",
          text: "Designed and documented modular UI components using Storybook to act as a single source of truth for design.",
        },
        {
          type: "bullet",
          text: "Implemented visual regression testing and component review flows using Chromatic and end-to-end testing with Cypress.",
        },
        {
          type: "bullet",
          text: "Authored comprehensive unit and integration tests using Jest and React Testing Library to prevent code regressions, and used SonarQube for code quality analysis.",
        },
        {
          type: "bullet",
          text: "Leveraged Framer Motion to create smooth, accessible layout animations and component transitions, along with Tailwind CSS for consistent styling.",
        },
      ],
    },
    {
      slug: "ftep",
      title: "Forestry TEP",
      year: "2015 - 2019",
      summary:
        "Serves commercial, governmental and research users in the forestry sector. It enables easy access to satellite data from any global location.",
      tags: ["Angular", "CREODIAS", "OpenLayers", "Design Systems"],
      thumbnail: "/images/ftep.jpg",
      banner: "/images/banners/ftep.jpg",
      links: [{ label: "Website", href: "https://f-tep.com/" }],
      body: [
        { type: "header", text: "Project Overview" },
        {
          type: "paragraph",
          text: "Led the front-end architecture and engineering for the Forest Thematic Exploitation Platform (F-TEP) and its Food Security extension (FS-TEP). Developed for the European Space Agency (ESA), this cloud-based development environment empowers researchers and commercial operators to run advanced processing pipelines on Copernicus and third-party satellite data.",
        },
        {
          type: "paragraph",
          text: "The platform supports massive global workflows, including deployment pipelines for mapping harmful and invasive plant species in Finland, managing regional forest cover and carbon monitoring in Mexico, and analyzing international agricultural productivity.",
        },

        { type: "header", text: "The Challenge" },
        {
          type: "paragraph",
          text: "Earth observation platforms process immense, complex geospatial datasets that are traditionally difficult for non-technical users to access, visualize, and manipulate. Processing is also very demanding due to large datasets and complex calculations, so local machines are often extremely slow or insufficient for the task.",
        },
        {
          type: "paragraph",
          text: "The challenge was to create a cloud-based platform with a highly intuitive front-end, allowing users to easy find and select satellite data, develop their processing scripts or build more complex projects, then deploy and execute them in the cloud to return to later once completed to download the results. The UI needed to handle real-time geospatial layer rendering, dynamic analytical charting, and multi-step pipeline configurations smoothly across desktop devices.",
        },
        { type: "header", text: "Technical Implementation & Front-End Architecture" },
        {
          type: "paragraph",
          text: "Designed and implemented a modular front-end architecture using AngularJS, OpenLayers, and custom UI components to provide a seamless user experience for complex geospatial data processing tasks. The architecture was built to be scalable, maintainable, and performant, ensuring that users could interact with large datasets without experiencing lag or delays.",
        },
        {
          type: "bullet",
          text: "AngularJS Application Architecture: Built a scalable single-page application (SPA) using AngularJS, implementing custom directives, controllers, and services to handle intricate component state management and seamless bidirectional data binding.",
        },
        {
          type: "bullet",
          text: "Advanced OpenLayers Mapping: Integrated OpenLayers to render, stack, and manipulate heavy raster and vector layers, enabling smooth client-side interaction with complex geospatial datasets, Tile Map Services (TMS), and Web Map Services (WMS).",
        },
        {
          type: "bullet",
          text: "Extension Architecture (FS-TEP): Architected modular, reusable AngularJS UI components for the food security sector, creating dedicated interfaces for tracking crop productivity metrics, optimizing agricultural irrigation routing, and monitoring coastal aquaculture environments.",
        },
        {
          type: "bullet",
          text: "Dynamic Data Visualization: Coupled AngularJS event-handling with interactive data charting elements to display complex environmental forecasts, carbon monitoring timelines, and climate change predictive models derived from backend cloud computations.",
        },

        { type: "header", text: "Key Deliverables" },
        {
          type: "paragraph",
          text: "The platform has been instrumental in enabling researchers and commercial operators to access and analyze satellite data for environmental monitoring and management. It has facilitated the detection of invasive species, the assessment of forest cover, and the monitoring of agricultural productivity, contributing to more informed decision-making and sustainable practices.",
        },
        {
          type: "bullet",
          text: "Empowering Ecological Action: Created the user interfaces that directly enabled active environmental monitoring deployments, such as invasive bio-threat detection in Finland and carbon credit verification models in Mexico.",
        },
        {
          type: "bullet",
          text: "Streamlined Cloud UX: Reduced the technical barrier to entry for foresters, marine researchers, and agricultural planners by turning complex script-based backend triggers into intuitive, interactive user flows.",
        },
        {
          type: "bullet",
          text: "High-Performance Data Delivery: Fine-tuned OpenLayers map rendering, layer caching, and AngularJS digest cycles to maintain stable browser performance when handling large-scale spatial vectors and multi-spectral imagery overlays.",
        },
        { type: "header", text: "Technical Stack & Core Focus" },
        {
          type: "paragraph",
          text: "The front-end architecture was built using a combination of modern web technologies and geospatial libraries to ensure a robust, scalable, and user-friendly experience for complex data processing tasks.",
        },
        {
          type: "bullet",
          text: "Front-End Framework: AngularJS (ngMaterial, ngAnimate, ngAria, ngMessages, ngResource, ngRoute, ngSanitize)",
        },
        {
          type: "bullet",
          text: "Geospatial Web Tooling: OpenLayers, angular-openlayers-directive",
        },
        {
          type: "bullet",
          text: "Development Utilities: CodeMirror, Traverson,  ng-file-upload, angular-drag-and-drop-lists, x2js",
        },
      ],
    },
    {
      slug: "passport-application-forms",
      title: "Passport Application Forms",
      year: "2015",
      summary: "Smart passport application forms for the Crown Dependencies & Gibraltar.",
      tags: ["Accessibility", "Design Systems", "User Experience"],
      thumbnail: "/images/passport-application-forms.jpg",
      banner: "/images/banners/passport-application-forms.jpg",
      links: [],
      body: [
        { type: "header", text: "Project Overview" },
        {
          type: "paragraph",
          text: "Led the development and optimization of interactive, smart PDF passport application forms for the British Crown Dependencies (Jersey, Guernsey, and the Isle of Man) and the Government of Gibraltar. This project modernized legacy paper application methods by replacing them with intelligent, machine-readable PDF forms.",
        },
        {
          type: "paragraph",
          text: "The core innovation relies on dynamically embedding a high-density 2D PDF417 barcode that encodes user input in real-time, drastically reducing data entry bottlenecks and errors at central immigration and passport processing offices.",
        },
        { type: "header", text: "The Challenge" },
        {
          type: "paragraph",
          text: "Passport processing for Crown Dependencies and Gibraltar requires meticulous data validation while handling highly secure personal credentials. Legacy paper applications relied entirely on manual transcription or basic Optical Character Recognition (OCR), resulting in operational delays, high error rates, and friction for citizens.",
        },
        {
          type: "paragraph",
          text: "The objective was to design a smart, user-friendly digital-to-print solution that could bridge the gap between offline paper submissions and secure digital processing systems without requiring full-scale cloud migrations for localized authorities.",
        },
        {
          type: "bullet",
          text: "Dynamic 2D Barcode Generation: Implemented a client-side JavaScript architecture within Adobe LiveCycle XFA templates form structures to compile, validate, and encode complex data models directly into a PDF417 stacked linear barcode.",
        },
        {
          type: "bullet",
          text: "High-Capacity Data Encoding: Configured the PDF417 barcode parameters (including custom error correction levels, module width, and aspect ratios) to store up to 1.8 KB of encrypted ASCII and binary data, encapsulating the applicant's complete biographical profile.",
        },
        {
          type: "bullet",
          text: "Localized Variant Routing: Tailored the conditional rendering engine to accommodate unique administrative fields and specific submission guidelines for individual jurisdictions, including Jersey, Guernsey, the Isle of Man, and Gibraltar's Civil Status and Registration Office.",
        },
        {
          type: "bullet",
          text: "Advanced Form Validation: Integrated real-time input masking, strict field-level regex rules (for British passport numbers, birth dates, and postcodes), and dynamic visibility states to prevent users from submitting incomplete or invalid data.",
        },
        { type: "header", text: "Key Deliverables & Results" },
        {
          type: "paragraph",
          text: "Successfully launched in 2016, the system provided 10 years of stable service, acting as the critical data intake gateway for thousands of variant British passport applications annually. As of 2026 the application process has now moved fully online.",
        },
        {
          type: "bullet",
          text: "Zero-Error Data Capture: Designed the end-to-end workflow where scanning the printed PDF417 barcode instantly populates central immigration databases, eliminating manual data entry errors.",
        },
        {
          type: "bullet",
          text: "Cross-Platform Compatibility: Fine-tuned the barcode rendering output to maintain a highly reliable 100% scan rate across consumer laser printers, varying paper stocks, and high-speed industrial document scanners.",
        },
        {
          type: "bullet",
          text: "Streamlined Administration: Successfully reduced form processing and intake queues at localized passport desks, offering an accessible, secure alternate route for applicants ineligible for standard UK online digital services.",
        },
        { type: "header", text: "Technical Stack & Standards" },
        {
          type: "paragraph",
          text: "The system was built using a combination of industry-standard technologies and compliance frameworks to ensure robust performance and data security.",
        },
        {
          type: "bullet",
          text: "• Technologies: Adobe Acrobat, XFA / LiveCycle, JavaScript (AcroForms), PDF417 Symbology Engine.",
        },
        {
          type: "bullet",
          text: "Compliance & Standards: ISO/IEC 15438:2015 (PDF417 Barcode Standard), ICAO Doc 9303 (Machine Readable Travel Documents guidelines), Data Protection (Bailiwick of Guernsey / Jersey Law, Gibraltar GDPR).",
        },
      ],
    },
  ],
  projects: [
    {
      slug: "garden",
      title: "Garden",
      year: "2026",
      summary: "Helps gardeners choose the right plants for their garden and keep on top of jobs.",
      tags: ["React", "Leaflet", "Three.js"],
      thumbnail: "/images/garden.jpg",
      banner: "/images/banners/garden.jpg",
      links: [{ label: "Website", href: "https://garden.davidnorton.app/" }],
      body: [
        { type: "header", text: "Project Overview" },
        {
          type: "paragraph",
          text: "As a gardening enthusiast, I wanted to create a tool that would help me plan and manage my garden more effectively. Existing tools focus on the general design aspects of of garden, but not on the plants themselves. What plants will thrive in my garden? What plants do I need to have something flowering all year round? What jobs need to be done when? ",
        },
        {
          type: "paragraph",
          text: "This app allows users to design their garden, get recommendations on plants based on their based on environmental conditions, receive tailored care instructions and even visualise their garden space in 3D and see the month to month changes.",
        },
        { type: "header", text: "Key Features" },
        {
          type: "bullet",
          text: "Users can find their plot on the map and it will automatically fetch the property boundaries and environmental data including soil type, sunlight exposure and slope for that location.",
        },
        {
          type: "bullet",
          text: "Shade objects like houses, sheds, fences and trees can be drawn on the map to simulate the shadows they will cast on the garden at different times of the day and year. This can be visualised via both the 2D plan and the 3D view of the garden.",
        },
        {
          type: "bullet",
          text: "Plant beds can be added where plants can be added individually or in bulk. Beds can be moved, resized and rotated to fit the garden space. The app will automatically calculate the optimal planting density based on the size of the bed and the size of the plants.",
        },
        {
          type: "bullet",
          text: "Beds can be named and set to be a raised bed, reflected in the 3D view. Their colour, material, light level and soil type can all be overridden and the app will take this into account when recommending plants.",
        },
        {
          type: "bullet",
          text: "Based on the environmental conditions and bed settings, the app will recommend plants that will thrive in that location. If a plant is selected that will not thrive, the app will explain why.",
        },
        {
          type: "bullet",
          text: "Plants are catergorised by type; flowers, vegetables and fruits. They can be filtered by kind (e.g. perennials, bulbs, seeds), sun level, hardiness, flower colour and flowering period. Each plant has a profile page with information on its care requirements, flowering period and other useful information.",
        },
        {
          type: "bullet",
          text: "Selected plants will render on the both 2D and 3D views of the garden, showing their size, colour and position in the bed. The month to month changes are also visualised, showing the correct colour when flowering in the selected months, or just a brown marker when dormant for bulbs and deciduous plants.",
        },
        {
          type: "bullet",
          text: "A list of jobs is generated based on the selected plants and their care requirements. This includes sowing, planting, deadheading and harvesting tasks. The list is broken down by month so you can quickly see what needs to be done and when.",
        },
        {
          type: "bullet",
          text: "A full list of selected plants, broken down by bed and by plant is generated to give a quick overview of what has been selected and can be used for creating a shopping list. A timeline is also generated showing the flowering period and flower colour of each plant, and when fruit and vegetables will be ready to harvest. This is really useful for planning a garden to have something flowering all year round and to plan for a continuous supply of fruit and vegetables.",
        },
        { type: "header", text: "Technical Architecture & Stack" },
        {
          type: "paragraph",
          text: "The application is built to be a highly performant single page application with a simple architecture optimized for type safety, efficient client-side rendering, and intensive calculations.",
        },
        {
          type: "bullet",
          text: "Framework & Core: Built using React 19 and TypeScript, managed with pnpm and vite plus.",
        },
        {
          type: "bullet",
          text: "Routing & Server Architecture: Powered by TanStack Start, TanStack Router and TanStack Query to handle asynchronous state synchronisation and server caching.",
        },
        {
          type: "bullet",
          text: "Graphics & Spatial Simulation: Built around Three.js using @react-three/fiber and @react-three/drei to manage the 3D graphics, object transformations, dynamic lighting, and matrix calculations.",
        },
        {
          type: "bullet",
          text: "Geospatial Mapping: Employs Leaflet for interactive 2D parcel mapping, coordinates parsing, and geographic vector drawing.",
        },
        {
          type: "bullet",
          text: "Styling & Forms: Designed using Tailwind CSS, with form validation enforced via TanStack Form and Zod.",
        },

        { type: "header", text: "Geospatial & API Integration" },
        {
          type: "paragraph",
          text: "To construct an accurate baseline of a user's property, the backend orchestrates a multi-source GIS data pipeline that aggregates geospatial and environmental attributes asynchronously:",
        },
        {
          type: "bullet",
          text: "Geocoding & Address Resolution: Utilises OpenStreetMap Nominatim and the Photon Komoot API to handle reverse geocoding, resolving localized address search strings into exact latitude and longitude geometries.",
        },
        {
          type: "bullet",
          text: "Cadastral & Boundary Mapping: Interfaces with the HM Land Registry API to programmatically ingest property boundary arrays and local council administrative data.",
        },
        {
          type: "bullet",
          text: "Geological Subsurface Mapping: Streams Web Map Service (WMS) layers directly from the British Geological Survey (BGS) UK Soil Observatory (UKSO) server to fetch regional soil composition profiles, parent materials, and native pH baselines.",
        },
        {
          type: "bullet",
          text: "Topography & Elevation Modeling: Queries OpenTopoData (EUDEM 25m dataset) and the Open-Meteo Elevation API to compute precise slope angles and directional layout aspect.",
        },

        { type: "header", text: "Microclimate Simulation Engines" },
        {
          type: "paragraph",
          text: "The application allows the user to set the month and time of day to simulate the sun's position and the resulting shadows cast by obstructions on the property. This can be used to determine the amount of sunlight a plant bed will receive in a given location, which is a key factor in determining which plants will thrive in that location.",
        },
        {
          type: "bullet",
          text: "Hourly Shadow Engine: The application implements a localized solar-positioning matrix by coupling spatial calculations with SunCalc. By interpreting latitude, longitude, and a user-selected timestamp, the engine calculates real-time azimuth and altitude vectors. This data updates the Three.js shadow maps dynamically, casting dimensionally accurate shadows from user-sketched obstructions—including houses, sheds, fences, hedges, and mature trees—across nearby planting zones.",
        },
        {
          type: "bullet",
          text: "Algorithmic Recommendation Engine: A specialized validation pipeline compares the calculated solar exposure indices and fetched soil profiles against the core botanical catalog. If a plant choice breaks environmental parameters, the engine yields an explicit breakdown explaining the precise environmental mismatch. Users are able to override parameters such as raised beds containing different soil types, immediately triggering a query invalidation and rendering update.",
        },

        { type: "header", text: "Horticultural Management" },
        {
          type: "paragraph",
          text: "Plants can be added individually or in bulk to each plant bed. The application then aggregates all of the plant data and generates a month-by-month care schedule for the user, including sowing, planting, deadheading, and harvesting tasks.",
        },
        {
          type: "bullet",
          text: "Spatial Capacity Calculators: Automatically determines optimal planting density using bounding box coordinates calculated from the 2D canvas and structural plant maturity dimensions.",
        },
        {
          type: "bullet",
          text: "Phenological & Colour Matrix: Aggregates total property selections into a multi-series tracking grid. This maps month-by-month flower bloom durations, visual blossom colour palettes, and crop harvesting windows.",
        },
        {
          type: "bullet",
          text: "Lifecycle Visualizer: Modulates object attributes inside the 3D viewport based on temporal states. Plants shift colour, display seasonal blossoms, or transition into stark winter dormancy states according to the calendar selection slider.",
        },
        {
          type: "bullet",
          text: "Chronological Task Assembler: Synthesizes a structured, date-ordered workflow engine that generates localized plant care, sowing, and deadheading actions for the user's specific garden profile.",
        },
      ],
    },
    {
      slug: "minitothemax",
      title: "MiniToTheMax",
      year: "2012 - Present",
      summary: "A miniature painting and tabletop hobby platform.",
      tags: ["Gatsby", "Performance", "Miniature painting"],
      thumbnail: "/images/minitothemax.jpg",
      banner: "/images/banners/minitothemax.jpg",
      links: [{ label: "Website", href: "https://minitothemax.app/" }],
      body: [
        { type: "header", text: "Project Overview" },
        {
          type: "paragraph",
          text: "Designed and developed a high-performance, content-driven web platform dedicated to the tabletop miniature painting community. The platform features high-resolution hobby showcases, painting tutorials, product reviews, and tabletop battle reports.",
        },
        {
          type: "paragraph",
          text: "Built to document the paints and techniques used for each project, along with a page dedicated to finding and filtering paints from different brands. The application combines a modern front-end architecture with efficient asset delivery to showcase miniature painting without compromising mobile performance or page speed.",
        },

        { type: "header", text: "The Challenge" },
        {
          type: "paragraph",
          text: "Miniature painting portfolios depend heavily on macro photography, which typically requires massive image files to preserve fine detail (such as blend transitions, edge highlights, and textured weathering). Standard content platforms often suffer from slow loading times, poor image compression, or layout shifts when rendering asset-heavy galleries.",
        },
        { type: "header", text: "Technical Stack & Standards" },
        {
          type: "paragraph",
          text: "The objective was to build a bespoke, lightning-fast web application that offers high resolution showcases with a highly responsive, distraction-free reading layout for hobbyists. As the platform has been online for over a decade, it has been important to keep the technology stack up to date and maintainable.",
        },
        {
          type: "bullet",
          text: "Technologies: Gatsby, React, Tailwind CSS, TypeScript, GraphQL, Storybook, Cypress, Jest. I am currently reviewing a migration from Gatsby to Astro, but keeping an eye out for emerging alternatives like TanStack, Enhance and Qwik.",
        },
        {
          type: "bullet",
          text: "Deployment & Hosting: Secure edge network hosting via Netlify with Cloudflare CDN and automated build pipelines for continuous integration and delivery.",
        },
        {
          type: "bullet",
          text: "Focus Areas: Responsive Web Design (RWD), Performance Optimization, Digital Asset Management, Core Web Vitals compliance.",
        },
        { type: "header", text: "Technical Implementation & Solution Architecture" },
        {
          type: "paragraph",
          text: "The aim has always been to maintain near-perfect performance, accessibility, and SEO scores through semantic HTML markup, minimal client-side runtime dependency, and aggressive static optimization.",
        },
        {
          type: "bullet",
          text: "Optimized Media Pipeline: Implemented an automated asset delivery pipeline that dynamically compresses, resizes, and converts high-resolution miniature photography into the modern WebP format to drastically reduce initial page payload.",
        },
        {
          type: "bullet",
          text: "Structured Content Taxonomy: Architected a clean relational data schema to dynamically filter and cross-reference content across custom nodes, including Showcase Galleries, Step-by-Step Tutorials, Product Reviews, and Project Backlogs.",
        },
        {
          type: "bullet",
          text: "Modern Layout & Performance Tuning: Built a responsive grid system featuring lazy loading, content-visibility styling, and explicit image aspect ratios to completely eliminate Cumulative Layout Shift (CLS) during image hydration.",
        },
        {
          type: "bullet",
          text: "Integrated Video & Blog Synergy: Developed modular components to embed multi-media channels smoothly, allowing side-by-side rendering of the latest video logs and written battle reports within a unified design system.",
        },
      ],
    },
  ],
} as const;

type PortfolioEntry = (typeof site.work)[number] | (typeof site.projects)[number];

export type Project = PortfolioEntry & {
  image?: string;
};

export function getWork(slug: string): Project | undefined {
  return site.work.find((project) => project.slug === slug);
}

export function getProject(slug: string): Project | undefined {
  return site.projects.find((project) => project.slug === slug);
}

export function projectPath(slug: string) {
  if (site.work.some((project) => project.slug === slug)) return `/work/${slug}`;
  return `/projects/${slug}`;
}

export type SkillTone = (typeof site.skills)[number]["tone"];

/** Named technologies keep the rust edge. Every other label uses the concept blue. */
export function skillTone(label: string): SkillTone {
  for (const group of site.skills) {
    for (const item of group.items) {
      if (item === label) return group.tone;
    }
  }
  return "concept";
}
