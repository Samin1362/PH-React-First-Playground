import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
    <div className="flex flex-col gap-8">
      <div className="divider"></div>
      <div>
        <img
          className="max-h-[450px] w-full rounded-lg bg-cover"
          src={cover}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[24px]">
            <img
              className="max-w-[60px] rounded-full"
              src={author_img}
              alt=""
            />
            <div>
              <h3>{author}</h3>
              <h3>{posted_date}</h3>
            </div>
          </div>
          <div>{reading_time} min read </div>
        </div>
        <h1 className="text-[40px] font-bold max-w-[737px]">{title}</h1>
        <p>
          {hashtags.map((hashtag) => (
            <span className="font-[rgba(17, 17, 17, 0.6)]">{hashtag} </span>
          ))}
        </p>
        <div>
          <button className="underline font-semibold">Mark as read</button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
