const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

const config = {
  title: "Muhammad Waleed | Full-Stack Web Engineer",
  description: {
    long: "I am Muhammad Waleed, a Computer Science graduate and Full-Stack Web Engineer based in Lahore, Pakistan. I specialize in building modern, responsive websites and web applications. Alongside my professional web development experience, I have a strong interest in Artificial Intelligence, Machine Learning, and Computer Vision. My goal is to combine software engineering with intelligent technologies to develop practical and innovative applications.",
    short:
      "Muhammad Waleed is a Full-Stack Web Engineer based in Lahore, Pakistan, with interests in AI, Machine Learning, and Computer Vision.",
  },
  keywords: [
    "Muhammad Waleed",
    "Full-Stack Web Engineer",
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Web Development",
    "Lahore, Pakistan",
    "BS Computer Science",
  ],
  author: "Muhammad Waleed",
  headline: "Full-Stack Web Engineer | AI & Computer Vision Enthusiast",
  location: "Lahore, Pakistan",
  education: "BS Computer Science",
  email: "m.waleed7956@gmail.com",
  // Set the deployment URL when the portfolio has its own domain.
  site: siteUrl,

  // The profile URL is known; the portfolio repository is not.
  githubUsername: "M-Waleed03",
  githubRepo: "",
  social: {
    twitter: undefined as string | undefined,
    linkedin: "https://www.linkedin.com/in/muhammad-waleed040804",
    instagram: undefined as string | undefined,
    github: "https://github.com/M-Waleed03",
  },

  get ogImg() {
    return this.site ? `${this.site}/assets/seo/og-image.png` : undefined;
  },
};

export { config };
