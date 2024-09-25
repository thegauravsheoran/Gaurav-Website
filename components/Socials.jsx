import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";

const socials = [
    { icons: <MdEmail />, path: "mailto:thegauravsheoran@gmail.com" },
    { icons: <FaGithub />, path: "https://github.com/thegauravsheoran" },
    { icons: <FaLinkedin />, path: "https://www.linkedin.com/in/gaurav-sheoran/" },
    { icons: <FaTwitter />, path: "https://x.com/gauravsheorann" },
]

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link href={social.path} key={index} className={iconStyles} >
                        {social.icons}
                    </Link>
                )
            }
            )}
        </div>
    )
}

export default Socials
