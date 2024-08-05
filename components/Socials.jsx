import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const socials = [
    { icons: <FaGithub />, path: "www.google.com" },
    { icons: <FaLinkedin />, path: "" },
    { icons: <FaTwitter />, path: "" },
]

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link href={social.path} key={index} className={iconStyles}>
                        {social.icons}
                    </Link>
                )
            }
            )}
        </div>
    )
}

export default Socials
