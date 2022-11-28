import styles from "./skills.module.css";
import Image from "next/image";

const Skills = () => {
  const skills = [
    { name: "HTML-1", displayName: "HTML" },
    { name: "css-3", displayName: "CSS" },
    { name: "javascript-1", displayName: "JavaScript" },
    { name: "TypeScript", displayName: "TypeScript" },
    { name: "nodejs-1", displayName: "NodeJS" },
    { name: "python-5", displayName: "Python" },
    { name: "java", displayName: "Java" },
    { name: "c-1", displayName: "C++" },
    { name: "c", displayName: "C" },
    { name: "Dart", displayName: "Dart" },
    { name: "React-2", displayName: "React" },
    { name: "react-native-1", displayName: "React Native" },
    { name: "vue-9", displayName: "Vue" },
    { name: "Flutter", displayName: "Flutter" },
    { name: "Spring-3", displayName: "Spring Boot" },
    { name: "PostgreSQL", displayName: "PostgreSQL" },
    { name: "mongodb-icon-1", displayName: "MongoDB" },
    { name: "mysql-6", displayName: "MySQL" },
    { name: "Kubernets", displayName: "Kubernetes" },
    { name: "OpenShift", displayName: "OpenShift" },
    { name: "jenkins-1", displayName: "Jenkins" },
    { name: "linux-tux", displayName: "Linux" },
    { name: "git-icon", displayName: "Git" },
    { name: "gitlab", displayName: "Gitlab" },
    { name: "github-icon-1", displayName: "Github" },
    { name: "git-bash", displayName: "Git BASH" },
    { name: "jira-1", displayName: "Jira" },
    { name: "confluence-1", displayName: "Confluence" },
  ];
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>My Skills</h1>
      <div className={styles.skillsWrapper}>
        {skills.map(({ name, displayName }, skillIndex) => (
          <div className={styles.card} key={skillIndex}>
            <Image
              height={35}
              width={35}
              src={`https://cdn.worldvectorlogo.com/logos/${name.toLocaleLowerCase()}.svg`}
              alt={displayName}
            />
            <div className={styles.skillTitle}>{displayName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
