
import Posts from "./posts";
import Config from "../../_config";

const CustomPages = {
    "home": {
        "title": "Home",
        "component": Posts,
        "description": Config.description
    },
    "posts": {
        "title": "Posts",
        "component": Posts,
        "description": Config.description
    }
}

export default CustomPages;
