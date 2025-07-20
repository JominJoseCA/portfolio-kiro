'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { 
          name: "React.js", 
          level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        { 
          name: "Angular", 
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
        },
        { 
          name: "JavaScript/ES6+", 
          level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        { 
          name: "HTML5/CSS3", 
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        { 
          name: "Tailwind CSS", 
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        },
        { 
          name: "TypeScript", 
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        }
      ]
    },
    {
      title: "Backend",
      skills: [
        { 
          name: "Node.js", 
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        },
        { 
          name: "Express.js", 
          level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        },
        { 
          name: "Java", 
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        },
        { 
          name: "RESTful APIs", 
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
        },
        { 
          name: "GraphQL", 
          level: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
        },
        { 
          name: "Microservices", 
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
        }
      ]
    },
    {
      title: "Database",
      skills: [
        { 
          name: "MongoDB", 
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        },
        { 
          name: "PostgreSQL", 
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        },
        { 
          name: "MySQL", 
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        },
        { 
          name: "Redis", 
          level: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
        },
        { 
          name: "Database Design", 
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
        }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { 
          name: "Adobe AEM", 
          level: 80,
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/512px-Adobe_Systems_logo_and_wordmark.svg.png"
        },
        { 
          name: "Git/GitHub", 
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        },
        { 
          name: "Docker", 
          level: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        },
        { 
          name: "AWS", 
          level: 70,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
        },
        { 
          name: "Agile/Scrum", 
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
        },
        { 
          name: "CI/CD", 
          level: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
        }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-dark-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-5 h-5"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}