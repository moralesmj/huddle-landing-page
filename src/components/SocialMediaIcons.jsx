import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMediaIcons() {

    return (
        <div className="flex gap-x-2 pt-6">
            <button className="border-2 hover:border-soft-magenta rounded-full w-7 h-7 icon-color" type="button">
                <FontAwesomeIcon icon={faFacebookF} size="sm" />
            </button>
            <button className="border-2 hover:border-soft-magenta rounded-full w-7 h-7 icon-color" type="button">
                <FontAwesomeIcon icon={faTwitter} size="xs" />
            </button>
            <button className="border-2 hover:border-soft-magenta rounded-full w-7 h-7 icon-color" type="button">
                <FontAwesomeIcon icon={faInstagram} size="sm" />
            </button>
        </div>
    )
}