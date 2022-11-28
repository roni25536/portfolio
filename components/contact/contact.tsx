import styles from "./contact.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import cn from "classnames";

const ontact = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}></div>
      <div className={styles.footer}>
        <div className={styles.title}>Let's Talk :) </div>
        <div className={styles.linkWrapper}>
          <Link href="https://wa.me/972504485666">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className={cn(styles.link, styles.whatsapp)}
            />
          </Link>
          <Link href="mailto:roni2556@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className={cn(styles.link, styles.envelope)}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/roni-berlin-b43116186/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className={cn(styles.link, styles.linkedin)}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
