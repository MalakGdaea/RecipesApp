import Author from "./Author";
import Tag from "./Tag";

type Recipe = {
    id: string,
    name: string,
    thumbnail_url: string,
    cook_time_minutes: string,
    user_ratings: { score: number }
    credits: Author[],
    tags: Tag[],
}

export default Recipe;