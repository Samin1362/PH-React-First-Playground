import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmarks }) => {
  const {
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="flex flex-col gap-8 mb-8">
      <div className="divider"></div>

      <div>
        <img
          className="max-h-[450px] w-full rounded-lg object-cover"
          src={cover}
          alt={title}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[24px]">
            <img
              className="max-w-[60px] rounded-full"
              src={author_img}
              alt={author}
            />
            <div>
              <h3 className="font-bold text-2xl">{author}</h3>
              <p className="text-[16px] text-[rgba(17,17,17,0.6)]">{posted_date}</p>
            </div>
          </div>

          <div className="flex items-center">
            {reading_time} min read
            <button onClick={() => handleAddToBookmarks(blog)} className="ml-2 text-2xl">
              <CiBookmark />
            </button>
          </div>
        </div>

        <h1 className="text-[40px] font-bold max-w-[737px]">{title}</h1>

        <p className="text-[rgba(17,17,17,0.6)]">
          {hashtags.map((hashtag, index) => (
            <span key={index} className="mr-2">
              #{hashtag}
            </span>
          ))}
        </p>

        <div>
          <button className="underline font-semibold text-xl">Mark as read</button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func
};

export default Blog;
